//Classes for organize the code
/* function Car(options) {
  this.title = options.title;
}
//Es 5 - using prototype - adding method
Car.prototype.drive = function () {
  return "vroom";
};

const car = new Car({ title: "Focus" });

console.log(car);
console.log(car.drive());


function Toyota(options) {
  Car.call(this, options); // to have also the title
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return "beep";
};

const toyota = new Toyota({ color: "red", title: "Daily driver" });

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk()); */

//Refactor this with ES6

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "vroom";
  }
}

const car = new Car({ title: "Focus" });
console.log(car);
console.log(car.drive());

class Toyota extends Car {
  constructor(options) {
    super(options); //Car.constructor
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}

const toyota = new Toyota({ color: "red", title: "Dayli driven" });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

//Ex 1:
/* 
You are a game developer tasked with setting up some basic classes for a new game you are working on.  
Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

Initialize the Monster's health to 100.
The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster
*/

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

const monster = new Monster({ name: "Claudia" });
console.log(monster);

//Ex 2:
/*
Now that you have a monster created, create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10
 */

class Snake extends Monster {
  constructor(options) {
    super(options);
  }

  bite(snake) {
    return (snake.health -= 10);
  }
}

const snake = new Snake({ name: "Federico" });
console.log(snake);
console.log(snake.bite({ health: 100 }));
