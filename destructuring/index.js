const expense = {
  type: "Business",
  amount: "$45 USD",
};
//ES 5
//const type = expense.type;
//const amout = expense.amount;

//ES6:
const { type, amount } = expense; // the property name MUST be identical the one we want to copy

console.log(type);
console.log(amount);

const saveFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

//ES5
/* function fileSummary(file) {
  return `The fie ${file.name}.${file.extension} is of sixe ${file.size}`;
} */

//ES6
function fileSummary({ name, extension, size }, { color }) {
  return `${color} The fie ${name}.${extension} is of sixe ${size}`;
}

console.log(fileSummary(saveFile, { color: "red" }));

const companies = ["Google", "Facebook", "Uber"];

const [nameCom, ...rest] = companies;
const { length } = companies; // lenght of the array
console.log(nameCom);
console.log(length);
console.log(rest);

const companiesObj = [
  { name: "Google", loc: "Mountain View" },
  { name: "Facebook", loc: "Menlo Park" },
  { name: "Uber", loc: "San Francisco" },
];

const [{ loc }] = companiesObj; //two level of destructuring: first element of the array, and then the property loc of the 1 element of the array.
console.log(loc);

const Google = {
  locGoogle: ["New York", "Mountain View", "London"],
};

const {
  locGoogle: [locGoogle],
} = Google;
console.log(locGoogle); // the first element of the array of locGoogle

function signup({ username, password, email, dateOfBirth, city }) {
  // destrucuting the obj I do not care about the order in which I am providing the input
  //create a new user
}

const user = {
  username: "Claudia",
  password: "Test123!",
  email: "cla@palm.com",
  dateOfBirth: "1/1/1990",
  city: "New York",
};

signup(user);

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];
//output I want:

/*  [
      { x: 4, y: 5 }, 
      { x: 10, y: 1 }, 
      { x: 0, y: 40 }
    ] 
*/

const output = points.map(([x, y]) => {
  return { x, y };
});
console.log(output);

//Ex 1:
/*
The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  
Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  
Refactor this code to use destructuring.  
Can you get the body of the 'isEngineer' function down to a single line?
*/
const profile = {
  title: "Engineer",
  department: "Engineering",
};

/* function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === "Engineer" && department === "Engineering";
} */
function isEngineer(profile) {
  const { title, department } = profile;
  return title === "Engineer" && department === "Engineering";
}

console.log(isEngineer({ title: "Engineer", department: "Engineering" }));

//Ex 2:

/*
The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  
Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and 
assign the result to 'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher]

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
*/

const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

console.log(classesAsObject);

//Ex 3
/*
Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values 
inside of it multiplied by two.  
Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]

Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  
For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?
 */

const numbers = [1, 2, 3];
const finalResults = [];

function double([firstNum, ...rest]) {
  const restDoubled = rest.length ? double(rest) : [];
  return [firstNum * 2, ...restDoubled];
}
console.log(double(numbers));
