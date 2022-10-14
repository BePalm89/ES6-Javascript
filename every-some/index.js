//Some and Every give us a BOOLEAN

const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];
// search for a computer with ram > 16
let allComputerCanRunProgram = true;
let onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
  if (computers[i].ram < 16) {
    allComputerCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputerCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

allComputerCanRunProgram = computers.every((computer) => computer.ram > 16); // && all of them must be TRUE to give me a TRUE
onlySomeComputersCanRunProgram = computers.some(
  (computer) => computer.ram > 16
); // || at least of them must be TRUE to give me a TRUE

console.log(allComputerCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

const names = ["Alexandria", "Matthew", "Joe"];

const allNameLongerThenFourLetters = names.every((name) => name.length > 4);

console.log(allNameLongerThenFourLetters);

const someNameLongerThenFourLetters = names.some((name) => name.length > 4);

console.log(someNameLongerThenFourLetters);

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

const username = new Field("2cools");
const password = new Field("mt_password");
const birthday = new Field("28/03/1989");
const fields = [username, password, birthday];

const allFieldsAreValid = fields.every((field) => field.validate());

console.log(allFieldsAreValid);

// return TRUE is every user has submitted the request form.
const users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

const allUserHaveSubmittedForm = users.every((user) => user.hasSubmitted);

console.log(allUserHaveSubmittedForm);

//return TRUE is any of the network has 'pending' status

const requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

const somePendingStatusRequest = requests.some(
  (request) => request.status === "pending"
);

console.log(somePendingStatusRequest);
