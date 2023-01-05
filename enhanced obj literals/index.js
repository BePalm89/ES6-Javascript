function createBookShop(inventory) {
  return {
    //inventory: inventory,
    //ES6
    inventory, // same name for key and value, so with ES6 we can avoid repetition, it is going to work the same
    /*     inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    }, */
    //ES6 we can remove the word function and the :
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent JS", price: 15 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Harry Potter"));

function saveFile(url, data) {
  //$.ajax({ method: "POST", url: url, data: data });
  $.ajax({ url, data, method: "POST" });
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);
