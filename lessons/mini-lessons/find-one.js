// This array will be provided.
let usersArray = [
  { email: "test1@test.com", password: "test" },
  { email: "test2@test.com", password: "test2" },
  { email: "test3@test.com", password: "test3" },
];
// create a function that takes only one parameter (email) And it will search the array of users array to see if we found a match. If it finds a match you will return the object of email and password. If there is no match then you'll return an empty object

function findOne(email) {
  //
  let foundUser = usersArray.find((user) => {
    return user.email === email;
  });
  return foundUser ? foundUser : {};
}
// ! Example: findOne("test1@test.com") // Expected Output: {email: "test1@test.com", password: "test"}
console.log(findOne("test2@test.com"));
// ! Example: findOne("test5@test.com") // Expected Output: {}
