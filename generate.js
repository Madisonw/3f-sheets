const pug = require('pug');
const fs = require('fs');

// Compile the source code
const compiledFunction = pug.compileFile('sheet.pug');

// Render a set of data

const sheetHtml = compiledFunction();

fs.writeFileSync("sheet.html",sheetHtml);

console.log("Sheet generated");