import React from "react";

const PassFunctionAsProps = (props) => {
  return (
    <div>
      <h1>Component </h1>
      <button onClick={props.Data}>Call Data Function</button>
    </div>
  );
};

export function App() {
  function getData() {
    alert("hellow from function ");
  }
  return (
    <div>
      <PassFunctionAsProps data={getData} />
    </div>
  );
}
