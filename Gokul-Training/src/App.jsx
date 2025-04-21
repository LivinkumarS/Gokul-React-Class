import React, { useState } from "react";

export default function App() {
  // function printHi(name) {
  //   console.log("Hi " + name);
  // }

  return (
    <div>
      <button
        onClick={() => {
          printHi("Tharick");
        }}
      >
        Click me!
      </button>
    </div>
  );
}
