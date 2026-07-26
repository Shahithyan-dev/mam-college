const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function extractFolder(folderName, jsonFileName) {
    const folderPath = path.join('D:\\Media Wave\\mam college\\details', folderName);
    if (!fs.existsSync(folderPath)) {
        console.log("Folder not found:", folderPath);
        return;
    }

    const outputData = {};

    // Get all files or folders inside
    const items = fs.readdirSync(folderPath);

    for (const item of items) {
        const itemPath = path.join(folderPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            const files = fs.readdirSync(itemPath).filter(f => f.endsWith('.docx'));
            let content = "";
            for (const file of files) {
                const result = await mammoth.extractRawText({path: path.join(itemPath, file)});
                content += result.value.trim() + "\n\n";
            }
            if (content.trim()) {
                outputData[item] = content.trim();
            }
        } else if (item.endsWith('.docx')) {
            const result = await mammoth.extractRawText({path: itemPath});
            const content = result.value.trim();
            if (content) {
                outputData[item.replace('.docx', '')] = content;
            }
        }
    }

    const outputDir = path.join(__dirname, 'src', 'data');
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(outputDir, jsonFileName), JSON.stringify(outputData, null, 2));
    console.log("Successfully extracted", jsonFileName);
}

async function main() {
    await extractFolder('3 Admission', 'admission.json');
    await extractFolder('4 Approvals', 'approvals.json');
    await extractFolder('5 Accreditation', 'accreditation.json');
    await extractFolder('6 Autonomous', 'autonomous.json');
    await extractFolder('7 COE', 'coe.json');
    await extractFolder('8 E-Learning', 'elearning.json');
    await extractFolder('17 IQAC', 'iqac.json');
    await extractFolder('19 IIC', 'iic.json');
    await extractFolder('22 GRIEVANCE', 'grievance.json');
}

main();
