//Module is nothing but a js file which contain different fucntion which can be used in other js file by importing(Require) them
userls = ['Rick','John','Morty','Mahidul','pijush','Sabbir']
let UserModule = require("./UserModule");

UserModule.users(userls);
UserModule.usersCnt(userls);
UserModule.usersFirstName(userls);
console.log(UserModule.userSalary(userls[2],18.65));
console.log(UserModule.company);
