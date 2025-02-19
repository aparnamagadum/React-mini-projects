import { useEffect, useState } from "react"
import axios from "axios";
function LoadMore() {
  const [data,setData]=useState([]);
  const [count,setCount]=useState(5);
  useEffect(()=>{
    async function fetchData(){
        try{
          const result=await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`);
          console.log(result.data);
          setData(result.data);
        }
        catch(err){
         console.log(err);
        }
   }
   fetchData();
  },[count]);
  function handleCount(){
    setCount(count+5);
  }
  return (
    <>
    <h1>Load More</h1>
    <div style={{display:"flex",flexDirection:"column",gap:20,marginBottom:10}}>
     {
        data.map((item,index)=>(
            <div style={{border:"1px solid gray",padding:10}} key={index}>
                <p>{item.body}</p>
            </div>
        ))
     } 
    </div>
    <button onClick={handleCount}>Load More</button>
    </>
  )
}

export default LoadMore
