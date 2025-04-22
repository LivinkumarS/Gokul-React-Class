import React, { useState } from "react";
import Name from "./Name";

export default function App() {
  // const movieList = ["Theri", "Kaththi", "Sachin", "Ghillie", "Mersal"];

  const nameList = [
    { id: 0, name: "Rahul" },
    { id: 1, name: "Gokul" },
    { id: 2, name: "Tharick" },
    { id: 3, name: "Trisha" },
    { id: 4, name: "Andriya" },
    { id: 5, name: "Thamanna" },
    { id: 6, name: "Nayanthara" },
  ];

  return (
    <div>
      <h2>Name List</h2>

      <ul>
        {nameList.map((ele, ind) => {
          return <Name key={ind} id={ele.id} name={ele.name} />;
        })}
      </ul>
    </div>
  );
}
