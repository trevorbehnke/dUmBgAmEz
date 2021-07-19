response = [
  "As I see it, yes :)",
  "Ask again later...",
  "Better not tell you now ;)",
  "Cannot predict now...",
  "Concentrate and ask again...",
  "Don’t count on it :(",
  "It is certain!",
  "It is decidedly so ;)",
  "Most likely...",
  "My reply is no :(",
  "My sources say no :(",
  "Outlook not so good :(",
  "Outlook good :)",
  "Reply hazy, try again...",
  "Signs point to yes!",
  "Very doubtful :(",
  "Without a doubt!",
  "Yes!",
  "Yes – definitely!",
  "You may rely on it :)",
];

// Query Selectors

let shake = document.querySelector("#shake");
let question = document.querySelector("#question");
let answer = document.querySelector("#answer");
let ball = document.querySelector("#ball");

// Functions

let generate = function (e) {
  let random = Math.floor(Math.random() * response.length);
  answer.textContent = (random, response[random]);
  e.preventDefault();
};

let clear = function (e) {
  answer.textContent = "";
  question.value = "";
  e.preventDefault();
};

let shakeit = function (e) {
  ball.classList.add("apply-shake");

  setTimeout(function () {
    ball.classList.remove("apply-shake");
  }, 2000);

  answer.classList.add("apply-shake");

  setTimeout(function () {
    answer.classList.remove("apply-shake");
  }, 2000);

  answer.classList.add("apply-fadein");

  setTimeout(function () {
    answer.classList.remove("apply-fadein");
  }, 2000);

  e.preventDefault();
};

// Event Listeners

shake.addEventListener("click", generate);
shake.addEventListener("click", shakeit);
question.addEventListener("click", clear);

//Needs input validation to check if text is a question
