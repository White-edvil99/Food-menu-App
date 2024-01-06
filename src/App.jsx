import React from "react";
import Fooditems from "./Components/Fooditems";
import Errormsg from "./Components/Errormsg";
import Container from "./Components/Container";
import Inputbox from "./Components/Inputbox";
import { useState } from "react";

function App() {

  const [fooditem, setfooditem] = useState([]);

  

  const onkeydown = (event) => {
    if(event.key === "Enter"){
      let newfooditem = event.target.value;
      event.target.value =""
      let newitems = [...fooditem, newfooditem]
      setfooditem(newitems)
      console.log(`newitem entered is ${newfooditem}`);
     
    }
  };

  return (
    <Container>
      <h1 className="text-center">Helathy food items</h1>
      <Inputbox handleonkeydown={onkeydown}></Inputbox>
  
      <Errormsg food={fooditem}></Errormsg>
      <Fooditems food={fooditem}></Fooditems>
    </Container>
  );
}

export default App;
