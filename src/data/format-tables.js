const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'departments.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function textToHtmlTable(text) {
  // If it's already HTML, skip
  if (text.trim().startsWith('<table') || text.trim().startsWith('<div class="overflow-x-auto"')) return text;
  
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l !== '');
  
  // 1. Detect if it's a KV list (like Faculty)
  let isKV = false;
  let kvCount = 0;
  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    if (lines[i] === ':') kvCount++;
  }
  if (kvCount >= 3) {
    // Process as KV Faculty style
    let currentItem = {};
    const items = [];
    let i = 0;
    
    // skip generic headings
    while (i < lines.length && (lines[i].toLowerCase() === 'faculty:' || lines[i].toLowerCase() === 'faculty' || lines[i].includes('Department of'))) i++;
    
    while (i < lines.length) {
      if (i + 1 < lines.length && lines[i+1] === ':') {
        const key = lines[i];
        const val = i + 2 < lines.length ? lines[i+2] : '';
        currentItem[key] = val;
        i += 3;
      } else {
        if ((lines[i].toLowerCase() === 'name' || lines[i].toLowerCase() === 'faculty name') && Object.keys(currentItem).length > 0) {
          items.push(currentItem);
          currentItem = {};
          continue; 
        }
        if (currentItem[lines[i]]) {
          items.push(currentItem);
          currentItem = {};
        }
        i++;
      }
    }
    if (Object.keys(currentItem).length > 0) items.push(currentItem);
    
    if (items.length > 0) {
      const columns = [...new Set(items.flatMap(item => Object.keys(item)))];
      if (columns.length > 1) {
        let html = `<div class="overflow-x-auto my-6">\n<table class="w-full text-sm text-left text-gray-600 shadow-sm border border-gray-200 rounded-lg overflow-hidden">\n`;
        html += `<thead class="bg-brand-primary text-white">\n<tr>\n`;
        columns.forEach(col => {
          html += `<th class="px-4 py-3 font-semibold uppercase tracking-wider">${col}</th>\n`;
        });
        html += `</tr>\n</thead>\n<tbody class="divide-y divide-gray-100 bg-white">\n`;
        items.forEach((item, index) => {
          const bgClass = index % 2 === 0 ? '' : 'bg-gray-50';
          html += `<tr class="${bgClass} hover:bg-gray-100 transition-colors">\n`;
          columns.forEach(col => {
            html += `<td class="px-4 py-3">${item[col] || '-'}</td>\n`;
          });
          html += `</tr>\n`;
        });
        html += `</tbody>\n</table>\n</div>`;
        return html;
      }
    }
  }
  
  // 2. Generic Tabular Data (S.no, Name, etc.)
  let headerIndex = -1;
  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    const lower = lines[i].toLowerCase();
    if (lower === 's.no' || lower === 'sno' || lower === 's no' || lower === 'sl no' || lower === 'sl. no.' || lower === 'register no' || lower === 'reg no' || lower === 'name of the student') {
      headerIndex = i;
      break;
    }
  }
  
  if (headerIndex !== -1) {
    const preText = lines.slice(0, headerIndex).join('\n\n');
    
    const headers = [];
    let dataIndex = headerIndex;
    while (dataIndex < lines.length) {
      if (dataIndex > headerIndex + 10) break; // Arbitrary limit
      const val = lines[dataIndex];
      // Detect end of headers
      if (val === '1' || val === '01' || /^[A-Z][a-z]+\.[A-Z]$/.test(val) || /^8121[0-9]{8}$/.test(val) || val.match(/^\d{2}\.\d{2}\.\d{4}$/) || (val.length > 5 && !isNaN(val))) {
        break;
      }
      headers.push(val);
      dataIndex++;
    }
    
    if (headers.length > 1) {
      const numCols = headers.length;
      const rows = [];
      let currentRow = [];
      
      for (let i = dataIndex; i < lines.length; i++) {
        currentRow.push(lines[i]);
        if (currentRow.length === numCols) {
          rows.push(currentRow);
          currentRow = [];
        }
      }
      // If there are leftovers, pad them
      if (currentRow.length > 0) {
        while (currentRow.length < numCols) currentRow.push('');
        rows.push(currentRow);
      }
      
      let html = preText ? `<div class="mb-4">${preText.split('\n\n').map(p => `<p class="text-gray-700 mb-2">${p}</p>`).join('')}</div>` : '';
      html += `<div class="overflow-x-auto my-6">\n<table class="w-full text-sm text-left text-gray-600 shadow-sm border border-gray-200 rounded-lg overflow-hidden">\n`;
      html += `<thead class="bg-brand-primary text-white">\n<tr>\n`;
      headers.forEach(col => {
        html += `<th class="px-4 py-3 font-semibold uppercase tracking-wider">${col}</th>\n`;
      });
      html += `</tr>\n</thead>\n<tbody class="divide-y divide-gray-100 bg-white">\n`;
      
      rows.forEach((row, index) => {
        const bgClass = index % 2 === 0 ? '' : 'bg-gray-50';
        html += `<tr class="${bgClass} hover:bg-gray-100 transition-colors">\n`;
        row.forEach(val => {
          html += `<td class="px-4 py-3">${val}</td>\n`;
        });
        html += `</tr>\n`;
      });
      html += `</tbody>\n</table>\n</div>`;
      return html;
    }
  }
  
  return text;
}

let modified = false;
let processedCount = 0;

['ug', 'pg'].forEach(level => {
  if (!data[level]) return;
  Object.keys(data[level]).forEach(deptId => {
    const dept = data[level][deptId];
    if (dept.sections) {
      Object.keys(dept.sections).forEach(secKey => {
        const text = dept.sections[secKey];
        if (typeof text !== 'string') return;
        
        const newText = textToHtmlTable(text);
        if (newText !== text) {
          dept.sections[secKey] = newText;
          modified = true;
          processedCount++;
          console.log(`Converted tabular data in [${deptId}] - ${secKey}`);
        }
      });
    }
  });
});

if (modified) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 4), 'utf8');
  console.log(`Successfully formatted ${processedCount} tables in departments.json`);
} else {
  console.log('No modifications made.');
}
