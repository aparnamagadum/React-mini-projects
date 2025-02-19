import { useEffect, useState } from "react"
import "./Traffic.css"
function Traffic() {
 const [active,setActive]=useState("red");
 useEffect(()=>{
   function cycleLight(){
   setActive((prevLight)=>{
      if(prevLight==="red") return "green";
      else if(prevLight==="green") return "yellow";
      return "red"
   });
  }
  let interval=setInterval(cycleLight,3000);
  return ()=>clearInterval(interval)
},[])
  return (
    <>
    <h2>Traffic Light</h2>
    <div className="main">
      <div className={active==="red"?"red":"gray"} ></div>
      <div className={active==="green"?"green":"gray"}></div>
      <div className={active==="yellow"?"yellow":"gray"}></div>
    </div>
    </>
  )
}

export default Traffic
