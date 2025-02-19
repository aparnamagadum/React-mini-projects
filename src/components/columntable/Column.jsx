import { useState } from "react"
import "./Column.css"
function Column() {
  const [row,setRow]=useState(2);
  const [col,setCol]=useState(2);
  return (
    <div>
      <input type="number" value={row} onChange={(e)=>setRow(e.currentTarget.value)}/>
      <input type="number" value={col} onChange={(e)=>setCol(e.currentTarget.value)}/>
      <table>
      {Array.from({ length: row }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: col }).map((_, colIndex) => (
              <td key={colIndex}></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Column
