const fs = require('fs');
const mammoth = require('mammoth');

const files = [
    'D:\\Media Wave\\mam college\\details\\About us.docx',
    'D:\\Media Wave\\mam college\\details\\COE.docx',
    'D:\\Media Wave\\mam college\\details\\8 E-Learning\\E-Learning.docx'
];

async function main() {
    for (const file of files) {
        console.log('--- FILE:', file, '---');
        try {
            const result = await mammoth.extractRawText({path: file});
            console.log(result.value.trim().substring(0, 1000) + '...\n');
        } catch(e) {
            console.error('Error reading', file, e.message);
        }
    }
}
main();
