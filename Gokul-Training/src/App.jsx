import React, { useState } from "react";

export default function App() {
  const [movieList, setMovieList] = useState([
    "Theri",
    "Kaththi",
    "Sachin",
    "Ghillie",
    "Mersal",
  ]);

  return (
    <div>
      {movieList.map((ele, ind) => {
        return <h1 key={ind}>{ele}</h1>;
      })}

      <button
        onClick={() => {
          setMovieList((prev) => {
            let temp = prev;
            temp.pop();

            return [...temp];
          });
        }}
      >
        clear
      </button>
    </div>
  );
}
