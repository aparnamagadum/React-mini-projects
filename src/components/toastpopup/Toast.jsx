import { useState } from "react"
import "./Toast.css"
function Toast() {
  const [leftOrRight,setLeftOrRight]=useState("");
  const [topOrBottom,setTopOrBottom]=useState("");
  const [successOrFailure,setSuccessOrFailure]=useState("");
  const [text,setText]=useState("");
  const [toast,setToast]=useState(false);
//   console.log(leftOrRight,topOrBottom,successOrFailure,text);
  return (
    <div className="main-toast">
      <div className="details">
        <select value={leftOrRight} onChange={(e)=>setLeftOrRight(e.currentTarget.value)}>
            <option value="left">left</option>
            <option value="right">right</option>
        </select>
        <select value={topOrBottom} onChange={(e)=>setTopOrBottom(e.currentTarget.value)}>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
        </select>
        <select value={successOrFailure} onChange={(e)=>setSuccessOrFailure(e.currentTarget.value)}>
            <option value="success">success</option>
            <option value="error">error</option>
            <option value="warning">warning</option>
            <option value="info">info</option>
        </select>
        <input type="text" placeholder="text to be display" value={text} onChange={(e)=>setText(e.currentTarget.value)} />
        <button onClick={()=>setToast(!toast)}>Show toast</button>
      </div>
      {toast && (
                <div className={`${successOrFailure === "success" ? "success" : "error"}`} style={{width:100,display:"flex",gap:10,position:"absolute",[leftOrRight]:0,[topOrBottom]:0,zIndex:1}}>
                    <p>{text}</p>
                    <button style={{border:"none",backgroundColor:"white"}} onClick={() => setToast(!toast)}>X</button>
                </div>
            )}
    </div>
  )
}

export default Toast
