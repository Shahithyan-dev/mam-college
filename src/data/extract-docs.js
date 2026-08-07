const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const detailsDir = 'd:\\\\Media Wave\\\\mam college\\\\details';
const dataDir = __dirname;

const files = {
  privacy: path.join(detailsDir, 'privacy policy.docx'),
  terms: path.join(detailsDir, 'Terms of service.docx'),
  refund: path.join(detailsDir, 'CANCELLATION and Refund policy.docx'),
  antiragging: path.join(detailsDir, 'Commitee/Anti-Ragging.docx'),
  grievance: path.join(detailsDir, 'Commitee/Grievance Redressal.docx'),
  icc: path.join(detailsDir, 'Commitee/Internal Complaints Committee.docx'),
  scst: path.join(detailsDir, 'Commitee/SC ST Committee.docx')
};

async function processAll() {
  const legalData = {};
  const committeeData = {};

  for (const [key, filePath] of Object.entries(files)) {
    console.log(`Processing ${key}...`);
    try {
      const result = await mammoth.convertToHtml({path: filePath});
      let html = result.value;
      // Basic formatting for standard elements
      html = html.replace(/<p>/g, '<p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify mb-4">');
      html = html.replace(/<strong>/g, '<strong className="font-semibold text-brand-primary">');
      html = html.replace(/<h1>/g, '<h1 className="text-2xl font-bold text-brand-primary mb-4">');
      html = html.replace(/<h2>/g, '<h2 className="text-xl font-bold text-brand-secondary mb-3">');
      html = html.replace(/<h3>/g, '<h3 className="text-lg font-bold text-brand-primary mb-2">');
      
      if (['privacy', 'terms', 'refund'].includes(key)) {
        legalData[key] = html;
      } else {
        committeeData[key] = [html]; // Array of 1 string
      }
    } catch (e) {
      console.error(`Error processing ${key}:`, e);
    }
  }

  // Generate legal.json
  fs.writeFileSync(path.join(dataDir, 'legal.json'), JSON.stringify(legalData, null, 2));
  
  // Update grievance.json
  const grievancePath = path.join(dataDir, 'grievance.json');
  let grievance = {};
  if (fs.existsSync(grievancePath)) {
    grievance = JSON.parse(fs.readFileSync(grievancePath, 'utf8'));
  }
  
  grievance['Anti-Ragging'] = committeeData.antiragging || grievance['Anti-Ragging'];
  grievance['Grievance Redressal'] = committeeData.grievance || grievance['Grievance Redressal'];
  grievance['POSH Cell'] = committeeData.icc || grievance['POSH Cell'];
  grievance['SC/ST'] = committeeData.scst || grievance['SC/ST'];

  fs.writeFileSync(grievancePath, JSON.stringify(grievance, null, 2));
  console.log('Done!');
}

processAll();
