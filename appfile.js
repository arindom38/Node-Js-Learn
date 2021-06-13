//core module for file reading writing
var fs = require('fs');

//mkdir() asynchornous method: this will create a directory
fs.mkdir('subdir',(err) =>{
  console.log('directory is created!');
});


// fs.mkdir('subdir1',(err) =>{
//   console.log('directory is created!');
// });

//removing directory
fs.rmdir('subdir1',(err) => {
    console.log('directory is deleted!');
});
