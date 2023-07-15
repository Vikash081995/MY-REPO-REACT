import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState("");
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Handle form in react </h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <select onChange={(e) => setInterest(e.target.checked)}>
          <option>Select options</option>
          <option>Marvel</option>
          <option>Dc</option>
        </select>
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}>
          <span>Accept term and condition </span>
        </input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
