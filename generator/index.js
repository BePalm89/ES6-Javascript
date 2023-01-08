//FOR OF loops:
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

const numbers = [1, 2, 3, 4];
let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total);

//GENERATOR:
function* shopping() {
  //adding a star we are creating a generator

  //stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash ( transitioning )
  const stuffFromStore = yield "cash";

  const stuffFromLaundry = yield "laundry";
  return [stuffFromStore, stuffFromLaundry];
  // walking back home
}

//stuff in the store
const gen = shopping(); // does not invoke anything in the function

console.log(gen);
console.log(gen.next()); //leaving our house - here we are calling the function
// walked into the store
// walking up and down the aisles..
// purchase our stuff

console.log(gen.next("grocery")); // leaving the store with grogery - we reentered in the generator function

function* colorsGen() {
  yield "red";
  yield "blue";
  yield "green";
}

const genColor = colorsGen();
console.log(genColor);
console.log(genColor.next());
console.log(genColor.next());
console.log(genColor.next());
console.log(genColor.next());

const myColors = [];

for (let color of colorsGen()) {
  myColors.push(color);
}
console.log(myColors);

/*  const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  departmente: "Eng",
  lead: "Jill",
  manager: "Alex",
  engineering: "Dave",
};

 function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineering;
  const testingTeamGen = TestingIterator(team.testingTeam);
  yield* testingTeamGen;
}

function* TestingIterator(team) {
  yield team.lead;
  yield team.tester;
}

const engGen = TeamIterator();
console.log(engGen);
const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names); */

// Symbol iterator:

const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  departmente: "Eng",
  lead: "Jill",
  manager: "Alex",
  engineering: "Dave",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineering;
    yield* this.testingTeam;
  },
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);

// Generators with recursion:

// 1. Create Tree data structure:

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    //map and forEch DO NOT WORK with generator
    // Iterata amoung this tree -> with for of loop
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("good", []),
  new Comment("bad", []),
  new Comment("meh", []),
];

const tree = new Comment("Great Post!", children);
console.log(tree);

const values = [];

for (let value of tree) {
  values.push(value);
}

console.log(values);
