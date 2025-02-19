import { useState } from "react";
import "./TransferList.css";

function TransferList() {
  const data = ["USA", "CANADA", "INDIA", "GERMANY", "FRANCE", "JAPAN"];
  const [left, setLeft] = useState(data);
  const [right, setRight] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  // Move selected items to the right list
  function handleMoveSelectedRight() {
    setRight([...right, ...selectedLeft]);
    setLeft(left.filter((item) => !selectedLeft.includes(item)));
    setSelectedLeft([]); // Clear selected items
  }

  // Move selected items to the left list
  function handleMoveSelectedLeft() {
    setLeft([...left, ...selectedRight]);
    setRight(right.filter((item) => !selectedRight.includes(item)));
    setSelectedRight([]); // Clear selected items
  }

  // Move all items from left to right
  function handleMoveAllRight() {
    setRight([...right, ...left]);
    setLeft([]);
    setSelectedLeft([]);
  }

  // Move all items from right to left
  function handleMoveAllLeft() {
    setLeft([...left, ...right]);
    setRight([]);
    setSelectedRight([]);
  }

  return (
    <div className="main-list">
      {/* Left List */}
      <div className="list-container">
        <h3>Available Countries</h3>
        {left.map((item, index) => (
          <div key={index} className="list-item">
            <input
              type="checkbox"
              checked={selectedLeft.includes(item)}
              onChange={(e) => {
                const checked = e.target.checked;
                setSelectedLeft(
                  checked
                    ? [...selectedLeft, item]
                    : selectedLeft.filter((i) => i !== item)
                );
              }}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>

      {/* Transfer Buttons */}
      <div className="btn-container">
        <button onClick={handleMoveSelectedRight} disabled={selectedLeft.length === 0}>
          →
        </button>
        <button onClick={handleMoveAllRight} disabled={left.length === 0}>
          ⇉
        </button>
        <button onClick={handleMoveAllLeft} disabled={right.length === 0}>
          ⇇
        </button>
        <button onClick={handleMoveSelectedLeft} disabled={selectedRight.length === 0}>
          ←
        </button>
      </div>

      {/* Right List */}
      <div className="list-container">
        <h3>Selected Countries</h3>
        {right.map((item, index) => (
          <div key={index} className="list-item">
            <input
              type="checkbox"
              checked={selectedRight.includes(item)}
              onChange={(e) => {
                const checked = e.target.checked;
                setSelectedRight(
                  checked
                    ? [...selectedRight, item]
                    : selectedRight.filter((i) => i !== item)
                );
              }}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransferList;

