const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/resume.pdf');

let parse = typeof pdf === 'function' ? pdf : pdf.default || pdf.pdfParse;

if (parse) {
    parse(dataBuffer).then(function(data) {
        console.log("PDF TEXT:");
        console.log(data.text);
    }).catch(console.error);
} else {
    console.error("Could not find pdf parse function.");
}
