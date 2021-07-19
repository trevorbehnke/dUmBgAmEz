// Query Selectors
let results = document.querySelector("#results");
let roll = document.querySelector("#roll");
let pic = document.querySelector("#dice-pic");

// Dice Class
class Die {
  constructor(sides) {
    this.sides = sides;
  }

  roll() {
    let random_side = Math.floor(Math.random() * this.sides) + 1;
    return random_side;
  }
}

// Dice Roll Function
let create = function (e) {
  let a = [];

  let sides = document.querySelector("#sides").value;
  let quantity = document.querySelector("#quantity").value;

  for (let i = 0; i < quantity; i++) {
    let n = new Die(sides);
    let r = n.roll();
    a.push(r);
  }

  let sum = a.reduce((a, b) => a + b);

  results.textContent = `You rolled ${a} for a total of ${sum}!`;
  e.preventDefault();
};

// Shaker Function
let shakeit = function (e) {
  pic.classList.add("apply-shake");

  setTimeout(function () {
    pic.classList.remove("apply-shake");
  }, 2000);

  e.preventDefault();
};

// Event Listeners
roll.addEventListener("click", create);
roll.addEventListener("click", shakeit);
