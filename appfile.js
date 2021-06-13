//core module for file reading writing
var fs = require('fs');

//mkdir() asynchornous method: this will create a directory
// fs.mkdir('subdir',(err) =>{
//   console.log('directory is created!');
// });

/*
--First run this--
fs.mkdir('subdir',(err) =>{
  if(err) throw err;
  fs.readFile('readMe.txt','utf8',(err,data)=>{
    fs.writeFile('./subdir/writeMe.txt',data,(err)=>{
      if(err) throw err;
      console.log('File is written in sub directory');
    });
  });
});
*/
// to remove a emepty directory
//fs.rmdir('subdir',()=>{});

//to remove a directory that contain files must remove the file fast then remove the directory
//after creating directory using abode code the comment them and run the below code
fs.unlink('./subdir/writeMe.txt',()=>{
  fs.rmdir('subdir',()=>{});
});
