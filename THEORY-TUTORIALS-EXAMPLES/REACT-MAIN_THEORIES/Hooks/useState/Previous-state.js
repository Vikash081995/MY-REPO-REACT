import React, { useState } from "react";

const PreviousState = () => {
  const [count, setCount] = useState(1);

  function updateCounter() {
    let rand = Math.floor(Math.random() * 10);
    setCount((previousState) => {
      console.log(previousState);
      return rand;
    });
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCounter}>Click me to update counter</button>
    </div>
  );
};

export default PreviousState;
