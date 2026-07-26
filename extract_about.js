const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function extractAbout() {
    const file = 'D:\\Media Wave\\mam college\\details\\1 About Us\\About us.docx';
    
    try {
        const result = await mammoth.extractRawText({path: file});
        const text = result.value;
        
        // Split by lines to parse sections
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        
        const data = {
            overview: [],
            vision: "",
            mission: [],
            milestones: [],
            correspondentMessage: [],
            principalMessage: [],
            governingBody: []
        };
        
        let currentSection = "";
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.toLowerCase() === 'overview') {
                currentSection = 'overview';
                continue;
            } else if (line.toLowerCase() === 'vision') {
                currentSection = 'vision';
                continue;
            } else if (line.toLowerCase() === 'mission') {
                currentSection = 'mission';
                continue;
            } else if (line.toLowerCase() === 'mamse milestones') {
                currentSection = 'milestones';
                continue;
            } else if (line.toLowerCase() === 'correspondent’s message') {
                currentSection = 'correspondent';
                continue;
            } else if (line.toLowerCase() === 'principal’s message') {
                currentSection = 'principal';
                continue;
            } else if (line.toLowerCase().includes('governing body')) {
                currentSection = 'governing_body';
                continue;
            }
            
            if (currentSection === 'overview') {
                data.overview.push(line);
            } else if (currentSection === 'vision') {
                data.vision += line + " ";
            } else if (currentSection === 'mission') {
                data.mission.push(line);
            } else if (currentSection === 'milestones') {
                data.milestones.push(line);
            } else if (currentSection === 'correspondent') {
                data.correspondentMessage.push(line);
            } else if (currentSection === 'principal') {
                data.principalMessage.push(line);
            } else if (currentSection === 'governing_body') {
                data.governingBody.push(line);
            }
        }
        
        // Clean up data formatting
        data.vision = data.vision.trim();
        
        const outputDir = path.join(__dirname, 'src', 'data');
        if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(outputDir, 'about.json'), JSON.stringify(data, null, 2));
        console.log("Successfully extracted about.json");
    } catch(e) {
        console.error('Error reading', file, e.message);
    }
}

extractAbout();
