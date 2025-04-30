import React, { useContext } from "react";
import { NumberContext } from "./Parent";

export default function GreatGrandChild() {
  const values = useContext(NumberContext);

  return (
    <div className="cont">
      <h1>Great Grand Child</h1>
      <p>Secret Number: {values.number}</p>
      <button onClick={values.handleChange}>Click</button>
    </div>
  );
}
