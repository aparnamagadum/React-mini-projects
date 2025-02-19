import { useState } from "react"

function String() {
  const [text,setText]=useState("hello world");
  const [string ,setString]=useState(text);
  function handleString(flag){
    if(flag=="lower"){
        setString(text.toLowerCase());
    }
    else if(flag=="upper"){
        setString(text.toUpperCase());
    }
    else if(flag=="trim"){
        setString(text.trim());
    }
    else if(flag=="snake"){
       setString(()=>{
        let arr=text.split(" ");
        let ans=arr.join("_");
        return ans
       })
    }
    else if(flag=="kebab"){
        setString(()=>{
         let arr=text.split(" ");
         let ans=arr.join("-");
         return ans
        })
     }
     else if(flag=="camel"){
        setString(()=>{
           let arr=text.toLowerCase().split(" ");
           let map=arr.map((item,index)=> index==0?item:item.charAt(0).toUpperCase()+item.slice(1));
           let ans=map.join("");
           return ans;
        })
     }
     else if(flag=="pascal"){
       setString(()=>{
        let arr=text.toLowerCase().split(" ");
           let map=arr.map((item)=>item.charAt(0).toUpperCase()+item.slice(1));
           let ans=map.join("");
           return ans;
       })
     }
  }
  return (
    <div style={{textAlign:"center"}}>
        <h3>String Transform</h3>
     <textarea  value={text} onChange={(e)=>setText(e.currentTarget.value)} cols="30" rows="10"></textarea>
     <div style={{display:"flex",gap:20,justifyContent:"center"}}>
     <button onClick={()=>handleString("lower")}>Lower Case</button> 
     <button onClick={()=>handleString("upper")}>Upper Case</button>
     <button onClick={()=>handleString("trim")}>Trim</button>
     <button onClick={()=>handleString("snake")}>Snake Case</button>
     <button onClick={()=>handleString("kebab")}>kebab Case</button>
     <button onClick={()=>handleString("camel")}>Camel Case</button>
     <button onClick={()=>handleString("pascal")}>Pascal Case</button>
     </div>
     <p style={{fontSize:"1rem"}}>Transformed String: <h3>{string}</h3></p>
    </div>
  )
}

export default String

