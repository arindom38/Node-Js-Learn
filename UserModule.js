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

//String with value concation can be formatted in another way
const userSalary = function(user,basic){
    return `${user} get monthly: ${basic*20000}`;
};

//Not only function any static value van be passed here
const company_name = 'Google';
//Function need to be exported or other file can't access it
module.exports = {
//Properties: object
  users:users,
  usersCnt: usersCnt,
  usersFirstName:usersFirstName,
  userSalary: userSalary,
  company: company_name //app can access the properties through properties name
};
