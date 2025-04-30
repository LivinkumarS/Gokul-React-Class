import React from "react";
import GrandChild from "./GrandChild";

export default function Child() {
  return (
    <div className="cont">
      <h1>Child</h1>
      <GrandChild />
    </div>
  );
}
