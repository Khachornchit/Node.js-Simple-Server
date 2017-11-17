var fs = require('fs');
console.log('Start reading file');
var data = fs.readFileSync('./TextFile.txt', 'utf8');
console.log(data);
console.log('End reading file');