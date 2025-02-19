import { useState } from "react";

function Advance() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const [delay, setDelay] = useState(1000); 

  function handleCount(flag) {
    if (flag === "inc") {
      setCount(prevCount => prevCount + Number(number)); 
    } 
    else if (flag === "dec") {
      setCount(prevCount => prevCount - Number(number)); 
    } 
    else if (flag === "asyncInc") {
      setTimeout(() => {
        setCount(prevCount => prevCount + Number(number));
      }, Number(delay)); 
    } 
    else if (flag === "asyncDec") {
      setTimeout(() => {
        setCount(prevCount => prevCount - Number(number));
      }, Number(delay));
    }
  }

  return (
    <div>
      <h1>Advance Calculator</h1>
      <p>{count}</p>
      <button onClick={() => handleCount("inc")}>+</button>
      <button onClick={() => handleCount("dec")}>-</button>
      <button onClick={() => handleCount("asyncInc")}>async +</button>
      <button onClick={() => handleCount("asyncDec")}>async -</button>
      <br />
      <label htmlFor="delay">Delay (ms): </label>
      <input 
        type="number" 
        name="delay" 
        value={delay} 
        onChange={(e) => setDelay(Number(e.target.value))} 
      />
      <br />
      <label htmlFor="number">Increment/Decrement by: </label>
      <input 
        type="number" 
        name="number" 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />
    </div>
  );
}

export default Advance;

