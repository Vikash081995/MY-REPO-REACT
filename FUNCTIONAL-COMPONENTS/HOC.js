import React, { useRef, useState } from "react";

const HOC = () => {
  return (
    <div>
      <h1>HOC</h1>
      <HOCRed comp={Counter} />
    </div>
  );
};

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      <props.comp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
