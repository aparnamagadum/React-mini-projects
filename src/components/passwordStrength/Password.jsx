import { useState } from "react";
import "./Password.css";

function Password() {
  const [text, setText] = useState("");
  const source = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "@#$!%^&*()",
  };

  const [strength, setStrength] = useState({
    lower: false,
    upper: false,
    number: false,
    symbol: false,
  });

  function handle(e) {
    const value = e.target.value;
    setText(value);

    // Update strength based on input
    const newStrength = {
      lower: value.split("").some((char) => source.lower.includes(char)),
      upper: value.split("").some((char) => source.upper.includes(char)),
      number: value.split("").some((char) => source.number.includes(char)),
      symbol: value.split("").some((char) => source.symbol.includes(char)),
    };

    setStrength(newStrength);
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handle}
        placeholder="Enter your password"
      />
      <br />
      <span id="lower" className={strength.lower ? "red" : "gray"}>
        Lowercase
      </span>
      <span id="upper" className={strength.upper ? "red" : "gray"}>
        Uppercase
      </span>
      <span id="number" className={strength.number ? "red" : "gray"}>
        Number
      </span>
      <span id="symbol" className={strength.symbol ? "red" : "gray"}>
        Symbol
      </span>
      <p>Password has {text.length} characters</p>
    </div>
  );
}

export default Password;


