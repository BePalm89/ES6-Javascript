const users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

let user;

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Alex") user = users[i];
}

console.log(user);

let userWithFind;

userWithFind = users.find((user) => user.name === "Bill");

console.log(userWithFind);

function Car(model) {
  this.model = model;
}

const cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

let findedCar;

findedCar = cars.find((car) => car.model === "Focus");

console.log(findedCar);

const posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
];

const comment = { postId: 1, content: "Great post" };

function postForComment(posts, comment) {
  return posts.find((post) => post.id === comment.postId);
}

let findedPost = postForComment(posts, comment);

console.log(findedPost);

//Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

const users2 = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

let admin = users2.find((user) => user.admin);

console.log(admin);

//Find the account with a balance of 12 and assign it to the variable 'account'.

const accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

let account = accounts.find((account) => account.balance === 12);

console.log(account);

function findWhere(array, criteria) {
  const property = Object.keys(criteria);
  return array.find((el) => el[property] === criteria[property]);
}

const ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

let findedElement = findWhere(ladders, { height: 25 });

console.log(findedElement);
