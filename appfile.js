//core module for file reading writing
var fs = require('fs');
/*
//synchronous method:  will block the rest of the code after this line untill the file reading /writeing is finished
var readMe = fs.readFileSync('readMe.txt','utf8');
var writeMe = fs.writeFileSync('writeMe.txt',readMe);*/

//asynchornous method: will not block any code while i/0 operation
//asynchornous read/write method take callback funtion for capturing error or data as third paramter, it mandatory
//callback function is called once the i/o operation in completed
fs.readFile('readMe.txt','utf8',(err,data) => {
  fs.writeFile('writeMe.txt',data,(err) => {
    if(err == null)
      console.log('File written complete!');
  });
});
console.log('I am not blocked and I came first!');

/*output
I am not blocked and I came first!
File written complete!
*/
