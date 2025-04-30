import React from "react";
import GrandChild from "./GrandChild";

export default function Child(props) {
  return (
    <div className="cont">
      <h1>Child</h1>
      <button onClick={props.SetNumber}>Click</button>
      <GrandChild Number={props.Number} />
    </div>
  );
}
