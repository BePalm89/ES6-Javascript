const numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

const sumByReducer = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(sumByReducer);

const primaryColors = [
  { color: "red" },
  { color: "yellow" },
  { color: "blues" },
];

const primaryColorsArray = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(primaryColorsArray);

function balancedParens(string) {
  return !string.split("").reduce((previous, char) => {
    if (previous < 0) return previous;
    if (char === "(") return ++previous;
    if (char === ")") return --previous;

    return previous;
  }, 0);
}

console.log(balancedParens("((()))"));
console.log(balancedParens("(()))"));
console.log(balancedParens(")("));

//Ex 1:
//Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

let totalDistance;

totalDistance = trips.reduce((previous, currentDistance) => {
  return previous + currentDistance.distance;
}, 0);

console.log(totalDistance);

//Ex 2:
//Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
//The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
//Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

const desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

let deskTypes = desks.reduce(
  (total, desk) => {
    total.sitting += desk.type === "sitting";
    total.standing += desk.type === "standing";
    return total;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

//Ex 3:
/*
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  
*/

function unique(array) {
  return array.reduce((prev, curr) => {
    if (
      !prev.find((prevItem) => {
        return prevItem === curr;
      })
    ) {
      prev.push(curr);
    }
    return prev;
  }, []);
}

console.log(unique([1, 1, 2, 3, 4, 4]));
