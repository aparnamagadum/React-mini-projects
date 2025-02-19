import { useState } from "react"
import "./GuessNumber.css"
function GuessNumber() {
    const [number,setNumber]=useState(1);
    const [text,setText]=useState(null);
    const [condition,setCondition]=useState(false);
    function handleCheck(){
        if(number<50){
            setText("Your guess is Less than the actual number")
        }
        else if(number>50){
            setText("Your guess is Higher than the actual number")
        }
        else if(number==50){
            setText("Your guess is correct")
            setCondition(true);
        }
    }
  return (
    <div>
      <p style={{fontSize:"1.5rem"}}>Guess a Number between 0 and 100</p>
      <input type="number" value={number} onChange={(e)=>setNumber(e.currentTarget.value)}/>
      <button onClick={()=>setText()}>Reset</button>
      <button disabled={condition} className={condition?"disable":"not-disable"}  onClick={handleCheck}>Check</button>
      <p>{text}</p>
    </div>
  )
}

export default GuessNumber
