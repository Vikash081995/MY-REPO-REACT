import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  function handleInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.display = "red";
  }
  return (
    <div>
      <h1>Useref in react</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
};

export default UseRef;
