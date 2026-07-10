const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace yellow colors
    content = content.replace(/yellow-400/g, 'brand-secondary');
    content = content.replace(/yellow-300/g, 'brand-secondary/90');
    content = content.replace(/\[#B8860B\]/g, 'brand-secondary');

    // Replace dark gray text to brand-text
    content = content.replace(/text-gray-800/g, 'text-brand-text');
    content = content.replace(/text-gray-700/g, 'text-brand-text/90');
    content = content.replace(/text-gray-600/g, 'text-brand-text/80');

    // Make white slightly warmer using base (FAF7F2) if appropriate
    content = content.replace(/bg-gray-50/g, 'bg-brand-base');
    
    // Replace old dark background if any left
    content = content.replace(/bg-\[#030022\]/g, 'bg-brand-primary');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
