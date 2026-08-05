const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./departments.json', 'utf8'));

const bme = data.ug['biomedical-engineering'];
console.log("--- BME Internships ---");
console.log(bme.sections['Internships']);

let ee = data.pg['power-electronics-and-drives'];
if (!ee) ee = data.ug['electrical-and-electronics-engineering'];
if (ee) {
  console.log("--- EEE/PED Faculty ---");
  console.log(ee.sections['Faculty']);
}
