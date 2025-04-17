import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Hari"); //create

  function changeName(){
    setName((prev)=>{
      return prev+" kumar"
    })
  }

  return (
    <div>
      <h1>The name is {name}</h1>
      <button
        onClick={()=>{changeName()}}
      >
        Clickme
      </button>
    </div>
  );
}
