let promise = new Promise((resolve, reject) => {
  /*   setTimeout(() => {
    resolve();
  }, 3000); */
  let request = new XMLHttpRequest();
  // make request
  request.onload = () => {
    resolve();
  };
});

console.log(promise);
promise
  .then(() => console.log("Resolved"))
  .then(() => console.log("I was also run"))
  .catch(() => console.log("Rejected"));

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url).then((resp) =>
  resp
    .json()
    .catch((error) => console.log("BAD", error))
    .then((data) => console.log(data))
);
