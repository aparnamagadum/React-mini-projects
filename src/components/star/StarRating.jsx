import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import "./StarRating.css"
function StarRating() {
  const [condition ,setCondition]=useState({
    one:false,
    two:false,
    three:false,
    four:false,
    five:false
  })
  // console.log(condition)
  function handleStar(id){
    setCondition({...condition,[id]:!condition[id]})
  }
  return (
    <div>
      <h2>Star Rating</h2>
      <FaRegStar className={condition["one"]?"black":"white"} id="one" onClick={()=>handleStar("one")}/>
      <FaRegStar className={condition["two"]?"black":"white"} id="two" onClick={()=>handleStar("two")}/>
      <FaRegStar className={condition["three"]?"black":"white"} id="three" onClick={()=>handleStar("three")} />
      <FaRegStar  className={condition["four"]?"black":"white"} id="four" onClick={()=>handleStar("four")}/>
      <FaRegStar className={condition["five"]?"black":"white"} id="five" onClick={()=>handleStar("five")}/>
    </div>
  )
}

export default StarRating
