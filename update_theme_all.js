const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    content = content.replace(/yellow-400/g, 'brand-secondary');
    content = content.replace(/yellow-300/g, 'brand-secondary/90');
    content = content.replace(/\[#B8860B\]/g, 'brand-secondary');
    
    // Replace gray text to brand-text
    content = content.replace(/text-gray-800/g, 'text-brand-text');
    content = content.replace(/text-gray-700/g, 'text-brand-text/90');
    content = content.replace(/text-gray-600/g, 'text-brand-text/80');

    // Make white slightly warmer using base
    content = content.replace(/bg-gray-50/g, 'bg-brand-base');
    
    // Replace old dark background if any left
    content = content.replace(/bg-\[#030022\]/g, 'bg-brand-primary');
    content = content.replace(/text-\[#030022\]/g, 'text-brand-text');

    if (originalContent !== content) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
