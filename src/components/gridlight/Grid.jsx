// import { useState } from "react"
// import "./Grid.css"
// function Grid() {
//   const [grid,setGrid]=useState({
//     one:false,
//     two:false,
//     three:false,
//     four:false,
//     five:false,
//     six:false,
//     seven:false,
//     eight:false,
//     nine:false
//   })
//   function handleColor(id){
//     setGrid({...grid,[id]:true})
//   }
//   return (
//     <>
//     <h1>Grid Light</h1>
//     <div className="main-grid">
//       <div className={grid["one"]?"green":"white"} id="one" onClick={()=>handleColor("one")}></div>
//       <div className={grid["two"]?"green":"white"} id="two" onClick={()=>handleColor("two")}></div>
//       <div className={grid["three"]?"green":"white"} id="three" onClick={()=>handleColor("three")}></div>
//       <div className={grid["four"]?"green":"white"} id="four" onClick={()=>handleColor("four")}></div>
//       <div className={grid["five"]?"green":"white"} id="five" onClick={()=>handleColor("five")}></div>
//       <div className={grid["six"]?"green":"white"} id="six" onClick={()=>handleColor("six")}></div>
//       <div className={grid["seven"]?"green":"white"} id="seven" onClick={()=>handleColor("seven")}></div>
//       <div className={grid["eight"]?"green":"white"} id="eight" onClick={()=>handleColor("eight")}></div>
//       <div className={grid["nine"]?"green":"white"} id="nine" onClick={()=>handleColor("nine")}></div>
//     </div>
//     </>
//   )
// }

// export default Grid
import { useState, useEffect } from "react";
import "./Grid.css";

function Grid() {
  const cellIds = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  const [grid, setGrid] = useState(
    cellIds.reduce((acc, id) => ({ ...acc, [id]: false }), {})
  );
  
  const [selectedOrder, setSelectedOrder] = useState([]);

  function handleColor(id) {
    if (!grid[id]) {
      // Select cell
      setGrid((prevGrid) => ({ ...prevGrid, [id]: true }));
      setSelectedOrder((prevOrder) => [...prevOrder, id]);
    }
  }

  useEffect(() => {
    if (selectedOrder.length === cellIds.length) {
      // Start reverse deselection
      let index = selectedOrder.length - 1;
      const interval = setInterval(() => {
        setGrid((prevGrid) => ({ ...prevGrid, [selectedOrder[index]]: false }));
        setSelectedOrder((prevOrder) => prevOrder.slice(0, -1));
        index--;

        if (index < 0) {
          clearInterval(interval);
        }
      }, 500); // Adjust speed of deselection
    }
  }, [selectedOrder]);

  return (
    <>
      <h1>Grid Light</h1>
      <div className="main-grid">
        {cellIds.map((key) => (
          <div
            key={key}
            className={grid[key] ? "green" : "white"}
            id={key}
            onClick={() => handleColor(key)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Grid;
