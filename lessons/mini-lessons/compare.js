// Write a function that will take two strings and compare them to see if they are equal.

// In this case we are trying to create a function that if we supply the actual password and compare it with the userInput if they match we will get true otherwise we will get a false

let dbUserInfo = { email: "test1@test.com", password: "password1" };
let userFormInput = { email: "test1@test.com", password: "password1" };
function comparePasswords(suppliedPassword, actualPassword) {}

console.log(comparePasswords("password1", "password1")); // expected output true
console.log(comparePasswords("password2", "password1")); // expected output false

console.log(2 == "2"); // true
