import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//1- Elemento:

//With JSX
const element1 = "Text";
const element2 = (
  <div>
    <h2>Hello World!</h2>
  </div>
);

//Without JSX
const element3 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "I'm here!")
);

// With className
const element4 = React.createElement(
  "div",
  null,
  React.createElement("h2", { className: "" }, "Good day!")
);

//With class
const element5 = React.createElement(
  "div",
  null,
  React.createElement("h2", { class: "" }, "Happy Day!")
);

function ShowI(props) {
  return <p>{props.i}</p>;
}

//2- Componente:

//Functional component
function App(props) {
  //First Game
  const [i, setI] = useState(0);
  const add = () => {
    setI(i + 1);
  };
  const remove = () => {
    setI(i - 1);
  };

  //Second Game

  //Tips
  const [tip, setTip] = useState(500);
  const [numTip, setNumTip] = useState(1);

  //Values
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  //Start
  const [state, setState] = useState("Enter");
  const start = () => {
    setState("play");
  };
  if (state === "Enter") {
    return <button onClick={start}>Start</button>;
  }

  //Answers
  const smaller = () => {
    setNumTip(numTip + 1);
    setMax(tip);
    const nextTip = parseInt((tip - min) / 2) + min;
    setTip(nextTip);
  };
  const larger = () => {
    setNumTip(numTip + 1);
    setMin(tip);
    const nextTip = parseInt((max - tip) / 2) + tip;
    setTip(nextTip);
  };
  const correct = () => {
    setState("End");
  };

  //Restart
  const restart = () => {
    setState("end");
    setMin(0);
    setMax(1000);
    setNumTip(1);
    setTip(500);
  };
  if (state === "End") {
    return (
      <div>
        <p>
          I got it the number {tip} with {numTip} attempts
        </p>
        <button onClick={restart}>Restart</button>
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <h1>First Game:</h1>
        <h2>Number Counter</h2>
        <h3>Counter: {i} </h3>
        <button onClick={add}>Add</button>
        <button onClick={remove}>remove</button>
        <ShowI i={i} />
      </div>

      <div>
        <h1>Second Game:</h1>
        <h2>Guess Number</h2>
        <p>Your number is {tip}</p>
        <p>
          Min: {min} / Max: {max}
        </p>
        <button onClick={smaller}>Any Less</button>
        <button onClick={correct}>Got it Right</button>
        <button onClick={larger}>Most</button>
      </div>

      <div>
        <h1>My name is {props.name}</h1>
        <h2>Nice to meet you</h2>

        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {element1}
        {element2}
        {element3}
        {element4}
        {element5}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Moisés" />, rootElement);
