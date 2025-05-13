import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function MenuSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{position: "relative"}}>
      <div
        className="menu-sec"
        style={isOpen ? {} : { width: "0", padding: "0" }}
      >
        <input type="text" placeholder="Add Text" name="" id="" />

        {/* Arrow  */}
      </div>
      <div className="arrow-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaAngleLeft style={isOpen ? {} : { transform: "rotate(180deg)" }} />
      </div>
    </div>
  );
}
