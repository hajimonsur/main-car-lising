import { useState, useEffect } from "react";
import Bbutton from "../Bbutton";

const Counter = () => {
  //create state instance
  const [counterValue, setCounterValue] = useState(0);

  // increment logic
  const increment = () => {
    setCounterValue(counterValue + 1);
  };

  // decrement logic
  const decrement = () => {
    if (counterValue === 0) {
      return;
    } else {
      setCounterValue(counterValue - 1);
    }
  };

  // handle reset
  const reset = () => {
    setCounterValue(0);
  };

  //side Effect operation 
  const callAlert = () => {
    console.log("hello from useEffect");
  };

// use effect hook
useEffect(() => {callAlert()}, [callAlert()]);
  return (
    <div>
      <h2>Count: {counterValue}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <Bbutton>Logout</Bbutton>
    </div>
  );
};

export default Counter;
