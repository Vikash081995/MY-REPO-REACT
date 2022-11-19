import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // short circuit :->
  // if text is true then return text else return 'helloworld'
  const firstValue = text || "hello world";
  // if text is true then return Hello world else do not return anything
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1>
      <h1>{text || "john doe"}</h1>
      {text && <h1>Hello world</h1>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {/* ternary operator */}
      {isError ? (
        <p>There is an Error</p>
      ) : (
        <div>
          <h2>No Error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
