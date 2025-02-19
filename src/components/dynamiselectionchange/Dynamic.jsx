import { useState } from "react";

function Dynamic() {
  const [category,setCategory]=useState("");
  const [item,setItem]=useState([]);
  const data={
    fruits:["apple","orange","mangoo"],
    vegetables:["raddish","brinjal","bendi","chavli"],
    dairy:["milk","curd","panir"]
  }

  
  function handleCategory(e){
      let value=e.currentTarget.value;
      setCategory(value);
      setItem(data[value] || []);
  }
  return (
    <div>
      <h3>Dynamic Input</h3>
      <select value={category} onChange={handleCategory} >
       {
        Object.keys(data).map((cat,ind)=>(
           <option key={ind} value={cat}>{cat}</option>
        ))
       }
      </select>
      <select>
        {
            item.map((data,index)=>(
             <option key={index} value={data}>{data}</option>
            ))
        }
      </select>
    </div>
  )
}

export default Dynamic
