import { useState } from "react";
import "./App.css";

// let hook: any[] = [];
// let currentIndex = 0;

// function myUseState<T>(initialValue: T): [T, (newValue: T) => void] {
//   hook[currentIndex] = hook[currentIndex] ?? initialValue;

//   const setStateIndex = currentIndex;

//   const setValue = (newValue: T) => {
//     hook[setStateIndex] = newValue;
//     reRender();
//   };

//   const value = hook[currentIndex];
//   currentIndex++;
//   return [value, setValue];
// }

function App() {
  // eslint-disable-next-line prefer-const
  let [number, setNumber] = useState<number>(18);

  function increaseVal(): void {
    if (number > 19) {
      alert("you cannot go above 20");
    } else {
      number++;
      setNumber(number);
    }
  }

  function decreaseVal(): void {
    if (number < 1) {
      alert("you cannot go below 0");
    } else {
      number--;
      setNumber(number);
    }
  }

  return (
    <>
      <h1>Hello Sujal {number}</h1>
      <h2>Counter Value : {number}</h2>

      <button onClick={increaseVal}>increase value {number}</button>
      <br />
      <br />
      <button onClick={decreaseVal}>decrease value {number}</button>
      <br />
      <br />
      <footer> the footer is {number} </footer>
    </>
  );
}


// // ---- Custom Renderer ----
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root")!);

// function reRender() {
//   currentIndex = 0;
//   root.render(<App />);
// }

// // Start custom render
// reRender()


export default App