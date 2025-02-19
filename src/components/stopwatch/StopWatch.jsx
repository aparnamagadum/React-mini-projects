import { useEffect } from 'react';
import { useState } from 'react';
function StopWatch() {
  const [time,setTime]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  useEffect(()=>{
   let Timer;
   if(isRunning){ 
   Timer=setInterval(()=>{
    setTime((prevTime)=> prevTime+10)
   },10);
   }
   else{
    clearInterval(Timer);
   }
   return ()=>clearInterval(Timer);
  },[isRunning]);
  function handleTime(seconds){
      const min=Math.floor(seconds/60000).toString().padStart(2,"0");
      const sec=Math.floor((seconds%60000)/1000).toString().padStart(2,"0");
      const mili=Math.floor(seconds%1000).toString().padStart(3,"0");
      return `${min}-${sec}-${mili}`;
  }
  return (
    <div>
      <h2>stop watch</h2>
      <p>{handleTime(time)}</p>
      <button onClick={()=>setIsRunning(true)}>start</button>
      <button onClick={()=>setIsRunning(false)}>stop</button>
      <button onClick={()=>setTime(0)}>reset</button>
    </div>
  )
}

export default StopWatch
