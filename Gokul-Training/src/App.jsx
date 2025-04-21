import React, { useState } from "react";

export default function App() {
  const [doLove, setDoLove] = useState(true);

  return (
    <div>
      {doLove && <h1>I would love to code</h1>}
      <button
        onClick={() => {
          setDoLove((prev)=>{return !prev});
        }}
      >
        Click me!
      </button>
    </div>
  );
}
