import { useEffect,useState } from 'react'
import "./Todo.css"
function Todo() {
  const [text,setText]=useState("");
  const [arr,setArr]=useState([]);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todo");
    if (storedTodos) {
      setArr(JSON.parse(storedTodos)); 
    }
  }, []);

  useEffect(() => {
    if (arr.length > 0) {
      localStorage.setItem("todo", JSON.stringify(arr));
    }
  }, [arr]);
  function handleTodo(){
        setArr([...arr,text]);
        setText("");      
  }
function handleDelete(id){
    setArr(arr.filter((_,index)=> index!=id))
  }
//   console.log(arr);
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.currentTarget.value)} placeholder='enter your todo' />
      <br /><br />
      <button className="blue" onClick={handleTodo}>Submit</button>
      <button className="blue">Cancel</button>
      <div>
        {
            arr.map((item,index)=>(
               <div key={index}>
                <p>{item}</p>
                <button>edit</button>
                <button onClick={()=>handleDelete(index)}>delete</button>
               </div>
            ))
        }
      </div>
    </div>
  )
}
export default Todo;
