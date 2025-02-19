import axios from "axios";
import { useEffect, useState } from "react"

function Shopping() {
  const [input,setInput]=useState("");
  const [arr,setArr]=useState([]);
  useEffect(()=>{
    async function handleList(){
         let result=await axios.get(`https://api.frontendeval.com/fake/food/${input}`)
         console.log(result.data);
        setArr(result.data)
      }
    handleList();
  },[input])
  
  return (
    <div>
      <h1>My Shopping List</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.currentTarget.value)}/>
      <div>{
        arr.map((data,ind)=>(
            <div key={ind}>{data}</div>
        )) 
        }
      </div>
    </div>
  )
}

export default Shopping
