import React, { useRef,forwardRef } from "react";

const UseRef = () => {
    
  const inputRef = useRef(null);

  function updateInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.display = "red";
  }
  return (
    <div>
      <h1>Useref in react</h1>
      <User ref={inputRef} />
      <button onClick={updateInput}>Update Input Box</button>
    </div>
  );
};

function User(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
}

export default forwardRef(User);
