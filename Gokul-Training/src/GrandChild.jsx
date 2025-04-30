import React from "react";
import GreatGrandChild from "./GreatGrandChild";

export default function GrandChild() {
  return (
    <div className="cont">
      <h1>Grand Child</h1>
      <GreatGrandChild />
    </div>
  );
}
