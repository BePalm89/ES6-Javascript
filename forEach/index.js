const color = ["red", "blue", "green"];

for (var i = 0; i < color.length; i++) {
  console.log(color[i]);
}

color.forEach((el) => console.log(el));

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach((number) => {
  sum += number;
});
//Print the sum variable
console.log(sum);

//The array below contains an array of objects, each of which is a representation of an image.
//Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.
//The area of an image can be calculated as 'image.height * image.width'.

const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

let areas = [];

images.forEach((image) => {
  areas.push(image.height * image.width);
});

console.log(areas);
