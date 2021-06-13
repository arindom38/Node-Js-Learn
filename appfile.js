//core module for file reading writing
var fs = require('fs');

//synchronous method:  will block the rest of the code after this line untill the file reading /writeing is finished
var readMe = fs.readFileSync('readMe.txt','utf8');
var writeMe = fs.writeFileSync('writeMe.txt',readMe);
