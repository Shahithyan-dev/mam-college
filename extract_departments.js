const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function extractDepartments() {
    const academicsPath = 'D:\\Media Wave\\mam college\\details\\2 Academics';
    const outputData = {
        ug: {},
        pg: {}
    };

    const levels = ['UG Programs', 'PG Programs'];

    for (const level of levels) {
        const levelPath = path.join(academicsPath, level);
        if (!fs.existsSync(levelPath)) continue;

        const departments = fs.readdirSync(levelPath).filter(d => fs.statSync(path.join(levelPath, d)).isDirectory());
        
        for (const dept of departments) {
            console.log(`Processing ${level} - ${dept}`);
            const deptKey = dept.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const deptData = {
                name: dept,
                sections: {}
            };

            const deptPath = path.join(levelPath, dept);
            const folders = fs.readdirSync(deptPath).filter(f => fs.statSync(path.join(deptPath, f)).isDirectory());
            
            for (const folder of folders) {
                // Folder name like "1 Introduction" -> "Introduction"
                const sectionName = folder.replace(/^\d+\s*/, '').trim();
                const sectionKey = sectionName.toLowerCase().replace(/[^a-z0-9]+/g, '_');
                
                const folderPath = path.join(deptPath, folder);
                const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.docx'));
                
                let sectionContent = "";
                for (const file of files) {
                    const filePath = path.join(folderPath, file);
                    try {
                        const result = await mammoth.extractRawText({path: filePath});
                        if (result.value.trim()) {
                            sectionContent += result.value.trim() + "\n\n";
                        }
                    } catch(e) {
                        console.error(`Error reading ${filePath}:`, e.message);
                    }
                }
                
                if (sectionContent) {
                    deptData.sections[sectionName] = sectionContent.trim();
                }
            }

            if (level === 'UG Programs') {
                outputData.ug[deptKey] = deptData;
            } else {
                outputData.pg[deptKey] = deptData;
            }
        }
    }

    const outputDir = path.join(__dirname, 'src', 'data');
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(outputDir, 'departments.json'), JSON.stringify(outputData, null, 2));
    console.log("Successfully extracted departments.json");
}

extractDepartments();
