import React, { useState } from "react";

export default function App() {
  const [doLove, setDoLove] = useState(true);

  return (
    <div>
      {doLove ? <h1>I love to code</h1> : <h1>I hate to code</h1>}
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
