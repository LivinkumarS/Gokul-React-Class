import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const changeData = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    //API Transfer

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={formData.name}
          onChange={changeData}
        />
        <input
          type="email"
          placeholder="Email id"
          id="email"
          value={formData.email}
          onChange={changeData}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          id="mobile"
          value={formData.mobile}
          onChange={changeData}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
