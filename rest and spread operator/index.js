function addNumbers(...numbers) {
  // ... REST op. catch a list of arguments
  // unknow number of arguments. Take the input and trasforming in an array
  return numbers.reduce((sum, number) => sum + number, 0);
}

const test = addNumbers(1, 2, 3, 4, 5);
console.log(test);

const defaultColor = ["red", "green"];
const userFavoriteColor = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

//const colors = defaultColor.concat(userFavoriteColor);
//Or with the SPREAD operator
const colors = [...defaultColor, ...userFavoriteColor, ...fallColors, "pink"]; // spread operator
console.log(colors);

function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

const valideShoppingList = validateShoppingList("oranges", "bread");
console.log(valideShoppingList);

const mathLibrary = {
  calculateProduct(...rest) {
    console.log("Please use the multiply method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

//Ex 1:
//Refactor: rest operator

/* function product(a,b,c,d,e) {
  const numbers = [a,b,c,d,e]
  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
} */

function product(...numbers) {
  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}
const testProduct = product(1, 2, 3, 4, 5, 6);
console.log(testProduct);

//Ex 2:
//Refactor: spread operator

/* function join(array1, array2) {
  return array1.concat(array2);
}
 */
function join(array1, array2) {
  return [...array1, ...array2];
}

const joinedArrays = join([1, 2, 3], [4, 5, 6]);
console.log(joinedArrays);

//Ex3:
//Refactor:

/* function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
} */

function unshift(array1, ...array2) {
  return [...array2, ...array1];
}

const unshiftArray = unshift([1, 2, 3, 4], 5, 6, 7, 8, 9);

console.log(unshiftArray);
