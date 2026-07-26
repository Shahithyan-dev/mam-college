const fs = require('fs');
const path = require('path');

function copyFiles(sourceDir, destDir) {
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    const items = fs.readdirSync(sourceDir);

    for (const item of items) {
        const itemPath = path.join(sourceDir, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            copyFiles(itemPath, destDir); // Flatten directory structure for documents
        } else if (item.toLowerCase().endsWith('.pdf')) {
            const destPath = path.join(destDir, item);
            fs.copyFileSync(itemPath, destPath);
            console.log(`Copied ${item}`);
        }
    }
}

const source = 'D:\\Media Wave\\mam college\\details';
const destination = path.join(__dirname, 'public', 'documents');

console.log("Copying PDFs...");
copyFiles(source, destination);
console.log("Done copying PDFs.");
