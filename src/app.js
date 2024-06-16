/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  function randomIndexExcuse(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function generateExcuse() {
    return (
      "OMG you won't believe me but... " +
      randomIndexExcuse(who) +
      " " +
      randomIndexExcuse(action) +
      " " +
      randomIndexExcuse(what) +
      " " +
      randomIndexExcuse(when)
    );
  }

  const excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
};
