import React, { createContext, useState } from "react";
import Child from "./Child";

export const NumberContext = createContext();

export default function Parent() {
  const [number, setNumber] = useState(0); //1

  const handleChange = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="cont">
      <h1>Parent</h1>
      <p>Secret Number:{number}</p>

      <NumberContext.Provider value={{ number, handleChange }}>
        <Child Number={number} SetNumber={handleChange} />
      </NumberContext.Provider>
    </div>
  );
}
