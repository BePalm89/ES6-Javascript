const products = [
  {
    name: "cucumber",
    type: "vegetable",
    quantity: 0,
    price: 1,
  },
  {
    name: "banana",
    type: "fruit",
    quantity: 10,
    price: 15,
  },
  {
    name: "celery",
    type: "vegetable",
    quantity: 30,
    price: 9,
  },
  {
    name: "orange",
    type: "fruit",
    quantity: 3,
    price: 5,
  },
];

let filter1Products = [];
let filter2Products = [];
let filter3Products = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filter1Products.push(products[i]);
  }
}

console.log(filter1Products);

filter2Products = products.filter((product) => product.type === "vegetable");

console.log(filter2Products);

filter3Products = products.filter((product) => {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});

console.log(filter3Products);

const post = { id: 4, title: "New Post" };
const comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was ok" },
  { postId: 4, content: "neat" },
];

function commentsForPost(post, comments) {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
}

filteredPost = commentsForPost(post, comments);

console.log(filteredPost);

//Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.
//ssign this new array to a variable called 'filteredNumbers'.
const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

const filteredNumbers = numbers.filter((number) => number > 50);

console.log(filteredNumbers);

//Filter the array of users, only returning users who have admin level access.
//Assign the result to the variable 'filteredUsers'.
const users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

const filteredUsers = users.filter((user) => user.admin);

console.log(filteredUsers);

//Create a function called 'reject'.
//Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.
//Hint: you can reuse filter.

function reject(array, iteratorFunction) {
  return array.filter((el) => {
    return !iteratorFunction(el);
  });
}
