import React from "react";

export default function Card(prop) {
  return (
    <div className="card">
      <img src={prop.Image} alt="" />
      <div className="details">
        <h1>
          <span>Name: </span>
          {prop.Name}
        </h1>
        <h1>
          <span>Age: </span>
          {prop.Age}
        </h1>
        <h1>
          <span>Role: </span>
          {prop.Role}
        </h1>
        <h1>
          <span>No Of Movies: </span>
          {prop.NoOfMovies}
        </h1>
      </div>
    </div>
  );
}
