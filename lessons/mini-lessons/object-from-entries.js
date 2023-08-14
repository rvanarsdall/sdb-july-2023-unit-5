let formData = new Map();

formData.set("name", "John");
formData.set("age", 30);
formData.set("job", "developer");

console.log(formData);
// Map(3) { 'name' => 'John', 'age' => 30, 'job' => 'developer' }

let obj = Object.fromEntries(formData);
console.log(obj);
// { name: 'John', age: 30, job: 'developer' }

/* 











*/

let nestedArray = [
  ["name", "John"],
  ["age", 30],
  ["job", "developer"],
];
let obj2 = Object.fromEntries(nestedArray);
console.log(obj2);
// { name: 'John', age: 30, job: 'developer' }

/* 











*/

let jobData = [
  ["dateApplied", "2021-01-01"],
  ["companyName", "Google"],
  ["contact", "John Doe"],
  ["status", "Applied"],
  ["jobTitle", "Software Engineer"],
];

let job = Object.fromEntries(jobData);
console.log(job);
// { dateApplied: '2021-01-01', companyName: 'Google', contact: 'John Doe', status: 'Applied', jobTitle: 'Software Engineer' }
