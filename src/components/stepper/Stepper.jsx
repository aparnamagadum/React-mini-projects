import { useState } from "react"
import "./Stepper.css"
import { FaCheck } from "react-icons/fa6";
function Stepper() {
  const [currentInd,setCurrentInd]=useState(0);
  const steps=["contact","shipping","payment","Deliver"];
  function next(){
    if(currentInd<steps.length) setCurrentInd(currentInd+1);
  }
  function prev(){
    if(currentInd>0) setCurrentInd(currentInd-1);
  }
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        {
            steps.map((item,index)=>(
                <div  className={index < currentInd ? "green" : index === currentInd ? "active" : "done"} style={{width:50,height:50,borderRadius:"50%",textAlign:"center"}} key={index}>
                    <h2>{index<currentInd?<FaCheck />:index+1}</h2>
                </div>
            ))
        }
      </div>
     <p>Add {steps[currentInd]} details for further communications.</p>
     <button onClick={prev}>prev</button>
     <button onClick={next}>next</button>
    </div>
  )
}

export default Stepper

