import { useState } from "react"

function Glowing() {
  const [condition,setCondition]=useState({
    bags:false,
    watches:false,
    sports:false,
    sunglasses:false
  })
  let arr=[
    {
        name:"Prada",
        category:"bags"
    },
    {
        name:"Gucci",
        category:"bags"
    },
    {
        name:"Guess",
        category:"bags"
    },
    {
        name:"Rolex",
        category:"watches"
    },
    { 
        name:"Timex",
        category:"watches"
    },
    { 
        name:"Nike",
        category:"sports"
    },
    { name:"Adidas",
        category:"sports"
    },
    { 
        name:"Fila",
        category:"sports"
    },
    { 
        name:"Aldo",
        category:"sunglasses"
    },
    { 
        name:"Paralied",
        category:"sunglasses"
    }
]
  const [filterarr,setFilteredArr]=useState(arr);
  function handleData(id){
    setCondition((prev)=>{
      const updateCondition={...prev,[id]:!prev[id]};
      const activeCategory=Object.keys(updateCondition).filter((key)=>updateCondition[key]);
    //   console.log(activeCategory);
    if(activeCategory.length>0){
       setFilteredArr(arr.filter((item)=>activeCategory.includes(item.category)));
    }
    else{
        setFilteredArr(arr)
    }
      return updateCondition
    }
  )  
  }
  console.log(condition);
  return (
    <div>
      <button onClick={()=>handleData("bags")} id="bags">bags</button>
      <button onClick={()=>handleData("watches")} id="watches">watches</button>
      <button onClick={()=>handleData("sports")} id="sports">sports</button>
      <button onClick={()=>handleData("sunglasses")} id="sunglasses">sunglasses</button>
      <div>{
          filterarr.map((data,index)=>(
            <div style={{display:"inline-block",border:"1px solid black",margin:20,padding:10}} key={index}>
                <p>{data.name}</p>
                <p>{data.category}</p>
            </div>
          ))
          }
</div>
    </div>
  )
}

export default Glowing
