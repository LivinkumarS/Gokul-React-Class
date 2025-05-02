import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <h3>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </h3>
  );
}
