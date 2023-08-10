let userInfo = [
  {
    firstname: "Emily",
    lastname: "Williams",
    age: 28,
    sex: "Female",
    id: 4,
  },
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
    firstname: "William",
    lastname: "Brown",
    age: 35,
    sex: "Male",
    id: 5,
  },
];

//   write a function that will update the user with the id of 3 from the userInfo array.
// The function name is updateOne. The function will return the array with the user updated.
// The function will take three parameters. The first parameter will be the array of users and the second parameter will be the id of the user you want to update. And the third parameter will be an object with the updated information.
// The function will return the array with the user updated.
// function updateOne(originalArray, id, updatedInfo)
// HINT:  how you can find the index of an array.
// Look up spread operator and how you can clone an object,
function updateOne(originalArray, id, updatedInfo) {
  const index = originalArray.findIndex((item) => item.id === id);
  // console.log(index);
  if (index != -1) {
    originalArray[index] = { ...originalArray[index], ...updatedInfo };
  }
  return originalArray;
}

/* 

console.log(updateOne(userInfo, 7, { firstname: "Mike" }));

let person1 = { firstname: "rob", lastname: "vanarsdall" };

let newInfo = { lastname: "smith", age: 34 };

let moreNewInfo = { lastname: "doe" };
// How can I combine two objects
person1 = { ...person1, ...newInfo, ...moreNewInfo };

// console.log(person1);
 */
