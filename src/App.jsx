import { useState } from "react";
import "./App.css";

// let isLoggedIn = false;

// const currentTime = new Date().getHours();

let isDone = false;

const strikeThrough = {
  textDecoration: "line-through",
};

function App() {
  // let [count, setCount] = useState(0);

  // function increase() {
  //   setCount(count + 1);
  // }

  let [isDone, setIsDone] = useState(0);

  function strike() {
    setIsDone(true);
  }
  function unStrike() {
    setIsDone(false);
  }
  return (
    <>
      <p style={isDone ? strikeThrough : null}>Buy Milk</p>

      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>

      {/* <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div> */}
    </>
  );
}

export default App;
