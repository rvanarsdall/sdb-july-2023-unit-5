let firstName = "Rob";
let age = 42;
let hasChildren = true;

let person1 = { firstName: firstName, age: age, hasChildren: hasChildren };

console.log(person1);

/* 
If your variables are the same as you would like the keys of your object then you can omit the :  and just stick with the variable name
*/

let person2 = { firstName, age, hasChildren };

console.log(person2);
