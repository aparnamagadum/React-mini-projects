import { useState } from "react";
function Form() {
  const arr=["Name","Email","DOB","Password"];
  const [index,setIndex]=useState(0);
  const [inp,setInp]=useState("");
  const [submit,setSubmit]=useState(false);
  const [details,setDetails]=useState({
    Name:"",
    Email:"",
    DOB:"",
    Password:""
  })
  function handlevalue(id){
       setDetails({...details,[id]:inp});
       if(index<arr.length-1){ 
        setIndex(index+1);
        setInp("");
       }
       else if(index>0 & index<arr.length-1){
        setIndex(index-1); 
        setInp("");
       }
       else if(index===arr.length-1){
       setSubmit(true);
       }
  }
console.log(details);
  return (
    <>
    {!submit?(
    <form style={{ width:"25vw" ,display:"flex",flexDirection:"column",gap:20}}>
        <a href="">{index==0?"":"back"}</a>
        <h1>{arr[index]}</h1>
        <input value={inp} onChange={(e)=>setInp(e.currentTarget.value)} type={index==0?"text":index==1?"email":index==2?"date":"password"} placeholder={arr[index]} required/>
        <div><button style={{backgroundColor:"blueviolet",padding:10,color:"white",cursor:"pointer",border:"none",borderRadius:10}} id={arr[index]} onClick={()=>handlevalue(arr[index])}>{index==arr.length-1?"finish":"next"}</button></div>
    </form>):
    (
        <div className="data">
          <h2>Success</h2>
          <p><strong>Name:</strong> {details.Name}</p>
          <p><strong>Email:</strong> {details.Email}</p>
          <p><strong>DOB:</strong> {details.DOB}</p>
          <p><strong>Password:</strong> {details.Password}</p>
        </div>
    )
    }
    </>
  )
}

export default Form
