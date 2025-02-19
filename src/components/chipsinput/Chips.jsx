import { useEffect, useState } from "react";
function Chips() {
    const [text,setText]=useState("");
    const [arr,setArr]=useState([]);
    function handleText(e){
        if(e.key==="Enter"){
        setArr([...arr,text]);
        setText("");
        } 
    }
    function handleDelete(ind){
        setArr(arr.filter((_,index)=>index!=ind))
    }
    useEffect(()=>{
        let storage=localStorage.getItem("data");
        if(storage) setArr(JSON.parse(storage));
      },[arr])
    useEffect(()=>{
      if(arr.length>0){
        localStorage.setItem("data",JSON.stringify(arr));
      }
    },[])
  return (
    <div>
      <input type="text" value={text} placeholder="type and hit enter" onChange={(e)=>setText(e.currentTarget.value)} onKeyDown={handleText}/>
      <div>{
        arr.map((item,ind)=>(
           <div key={ind} style={{display:"inline-block",padding:5,border:"1px solid black"}}>
            <spam>{item}</spam>
            <button onClick={()=>handleDelete(ind)}>X</button>
           </div>
        ))
        }
        </div>
    </div>
  )
}

export default Chips
