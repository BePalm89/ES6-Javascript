const numbers = [1, 2, 3];

let doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log(doubleNumbers);

const doubled = numbers.map((number) => number * 2);

console.log(doubled); //we are not muteting the array numbers

const cars = [
  {
    model: "Buick",
    price: "Cheap",
  },
  {
    model: "Camaro",
    price: "Expensive",
  },
];

const prices = cars.map((car) => car.price);

console.log(prices);

//Using map, create a new array that contains the 'height' property of each object.
//Assign this new array to the variable 'heights'.

const images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

const heights = images.map((image) => image.height);

console.log(heights);

//Using map, create a new array that contains the distance / time value from each trip.
//In other words, the new array should contain the (distance / time) value.
//Assign the result to the variable 'speeds'.

const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

const speeds = trips.map((trip) => trip.distance / trip.time);

console.log(speeds);

//Implement a 'pluck' function.
//Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.

function plunck(array, property) {
  let propertyArray = array.map((el) => el[property]);
  console.log(propertyArray);
}

plunck([{ color: "red" }, { color: "white" }, { color: "blue" }], "color");
