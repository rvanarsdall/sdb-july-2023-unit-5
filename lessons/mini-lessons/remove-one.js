let userInfo = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    sex: "Male",
    id: 1,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 25,
    sex: "Female",
    id: 2,
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    age: 40,
    sex: "Male",
    id: 3,
  },
  {
    firstname: "Emily",
    lastname: "Williams",
    age: 28,
    sex: "Female",
    id: 4,
  },
  {
    firstname: "William",
    lastname: "Brown",
    age: 35,
    sex: "Male",
    id: 5,
  },
];

//   Write a function that will remove the user with the id of 3 from the array
// The function name is removeOne. The function will return the array with the user removed.
// The function will take two parameters. The first parameter will be the array of users and the second parameter will be the id of the user you want to remove.

function removeOne(originalArray, id) {
  const modifiedArray = originalArray.filter((item) => item.id !== id);
  return modifiedArray;
}
