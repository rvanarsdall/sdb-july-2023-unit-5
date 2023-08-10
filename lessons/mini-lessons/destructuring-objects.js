let person = { first: "Rob", last: "Vanarsdall" };

console.log(person.first);

let { first, last } = person;

console.log(first, last);

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

let { title } = book;

console.log(title);

// Renaming while destructuring

let point = { x: 5, y: 15 };
//  We want to rename x to xCoord and y to yCoord

let { x: xCoord, y: yCoord } = point;

console.log(xCoord, yCoord);

xCoord = 200;

console.log(point);
console.log(xCoord, yCoord);
