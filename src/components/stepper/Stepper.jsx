import { useState } from "react"
import "./Stepper.css"
function Stepper() {
  const [currentInd,setCurrentInd]=useState(0);
  const steps=["contact","shipping","payment","Deliver"];
  function next(){
    if(currentInd<steps.length-1) setCurrentInd(currentInd+1);
  }
  function prev(){
    if(currentInd>0) setCurrentInd(currentInd-1);
  }
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        {
            steps.map((item,index)=>(
                <div  className={index==currentInd?"active":"done"} style={{width:50,height:50,borderRadius:"50%",textAlign:"center"}} key={index}>
                    <h2>{index+1}</h2>
                </div>
            ))
        }
      </div>
     <p>Add contact details for further communications.</p>
     <button onClick={prev}>prev</button>
     <button onClick={next}>next</button>
    </div>
  )
}

export default Stepper

