import "./App.css";
import Counter from "./components/Counter";
// import ExponentTwo from "./components/ExponentTwo";
// import ExponentThree from "./components/ExponentThree";
// import ExponentFour from "./components/ExponentFour";
// import ExponentFive from "./components/ExponentFive";
// import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";
import { v4 as uuidv4 } from "uuid";

function App() {
  const cardExponent = [2, 3, 4, 5, 6];
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} increment={increment} decrement={decrement} />
      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        {cardExponent.map((exponent) => {
          return <Exponent key={uuidv4()} num={count} exponent={exponent} />;
        })}
        {/* <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} /> */}
      </div>
    </div>
  );
}

export default App;
