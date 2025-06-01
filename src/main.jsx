import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce(function (accumulater, currentNumber) {
//   return accumulater + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (number) {
//   return number > 10;
// });
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const index = numbers.findIndex(function (number) {
//   return number > 10;
// });
// console.log(index);

const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
];

const newEmojipedia = emojipedia.map((emojiData) =>
  emojiData.meaning.substring(0, 100)
);

console.log(newEmojipedia);
