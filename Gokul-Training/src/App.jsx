import React, { useState } from "react";

export default function App() {
  const [toDoList, SetToDoList] = useState([
    "Workout",
    "Study",
    "Sleep",
    "Run",
    "Walk",
  ]);

  const delElement = (ind) => {
    SetToDoList((prev) => {
      return prev.filter((ele, index) => {
        return index !== ind;
      });
    });
  };

  return (
    <div>
      <h1>Task List</h1>
      {toDoList.map((ele, ind) => {
        return (
          <h3 key={ind}>
            {ele}{" "}
            <button
              onClick={() => {
                delElement(ind);
              }}
            >
              del
            </button>
          </h3>
        );
      })}
    </div>
  );
}
