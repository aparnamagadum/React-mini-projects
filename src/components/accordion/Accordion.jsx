import { useState } from "react"
import "./Accordion.css"
function Accordion() {
 const [condition,setCondition]=useState({
    one:false,
    two:false,
    three:false,
    four:false
 })
//  console.log(condition)
 function handleAccordion(id){
    setCondition((prev)=>{
    const updateCondition={...prev,[id]:!prev[id]}
    return updateCondition
    }
    )
 }
  return (
    <>
      <h2 style={{textAlign:"center"}}>open accordion</h2>
      <div className="main">
      <div className="box">
        <div>
        <h3>Do I have to allow the use of cookies?</h3>
        <p id="one" className={condition["one"]?"visible":"hide"}>Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.</p>
        </div>
        <div><button id="one" onClick={()=>handleAccordion("one")}>{condition["one"]?"-":"+"}</button></div>
      </div>
      <div className="box">
      <div>
      <h3>How do I change my My Page password?</h3>
        <p id="two" className={condition["two"]?"visible":"hide"}>Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.</p>
        </div>
        <div><button id="two" onClick={()=>handleAccordion("two")}>{condition["two"]?"-":"+"}</button></div>
        </div>
      <div className="box">
      <div>
      <h3>What is BankID?</h3>
        <p id="three" className={condition["three"]?"visible":"hide"}>Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.</p>
        </div>
        <div><button id="three" onClick={()=>handleAccordion("three")}>{condition["three"]?"-":"+"}</button></div>
      </div>
      <div className="box">
      <div>
      <h3>Whose birth number can I use?</h3>
        <p id="four" className={condition["four"]?"visible":"hide"}>Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.</p>
        </div>
        <div><button id="four" onClick={()=>handleAccordion("four")}>{condition["four"]?"-":"+"}</button></div>
      </div>
      </div>
    </>
  )
}

export default Accordion
