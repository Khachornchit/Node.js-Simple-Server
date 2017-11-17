var fs = require('fs');
var writeData = '.....\n Write file by node.js \n Pluto Solutions \n www.plutosols.com....... \n';
console.log('Start writing file');
var data = fs.writeFileSync('./TextFile.txt', writeData, 'utf8');
console.log('Complete writte');
console.log('End writing file');