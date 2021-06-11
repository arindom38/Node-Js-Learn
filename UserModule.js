const users = function(arr){
  for(var i = 0 ; i<arr.length ;i++)
    console.log("Usrer #"+i+" : "+arr[i]);
};

const usersCnt = function(arr){
  console.log("Number of Users: "+arr.length);
};

const usersFirstName = function(arr){
  for(var i = 0 ; i<arr.length ;i++)
    console.log("First name Of Usrer #"+i+" : "+arr[i]);
};

//Function need to be exported or other file can't access it
module.exports = {
  users,
  usersCnt,
  usersFirstName
};
