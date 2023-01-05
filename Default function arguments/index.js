//ES5
/* function makeAjaxRequest(url, method) {
  if (!method) {
    return (method = "GET");
  }
} */
//ES6: we can give a default value to one of the argument, so we do not need to check if the method arguments was passed
function makeAjaxRequest(url, method = "GET") {
  return method;
  //Logic to make the request
}

makeAjaxRequest("google.com"); // method is GET
makeAjaxRequest("google.com", null); // method is null
makeAjaxRequest("google.com", "GET"); // method is POST

function User(id) {
  this.is = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = createAdminUser();

console.log(user);

//Ex 1: refactor this:
function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
}

function sumRef(a = 0, b = 0) {
  return a + b;
}

//Ex 2: Dumping unused code:
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = "10px";

  return style;
}

function addOffset(style = {}) {
  style.offset = "10px";

  return style;
}
