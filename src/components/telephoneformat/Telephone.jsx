import { useState } from "react";

function Telephone() {
  const [phone, setPhone] = useState("");

  function handlePhone(e) {
    let val = e.currentTarget.value.replace(/\D/g, ""); //added replace function to filterout the unwanted character other then the number 

    if (val.length <= 3) {
      setPhone(`+(${val})`);
    } else if (val.length > 3) {
      setPhone(`+(${val.slice(0, 3)}) - ${val.slice(3)}`);
  }
  }
  return (
    <div style={{textAlign:'center',marginTop:"30px"}}>
      <h2>Telephone Formatter</h2>
      <input type="text" value={phone} onChange={handlePhone} placeholder="Mobile Number" />
      <p>Example: +(123) - 4567890</p>
    </div>
  );
}

export default Telephone;

