import { useState } from "react"

function Counter() {
    const [count,setCount]=useState(0);
    const [val,setVal]=useState(1);
    function handleCount(flag){
        if(flag=="inc"){
            setCount(count+Number(val));
        }
        if(flag=="dec"){
            setCount(count-Number(val));
        }
    }
  return (
    <div style={{width:300,margin:"auto",display:"flex",flexDirection:"column",gap:10,alignItems:"center"}}>
      <p>{count}</p>
      <div>
      <button onClick={()=>handleCount("inc")} style={{padding:10,marginRight:10}}>+</button>
      <button  onClick={()=>handleCount("dec")}  style={{padding:10}}>-</button>
      </div>
      <br />
      <div>
      <label htmlFor="number">Increment/Decrement by: </label>
      <input value={val} onChange={(e)=>setVal(e.currentTarget.value)} style={{width:80}} type="number" name="number"/>
      </div>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
