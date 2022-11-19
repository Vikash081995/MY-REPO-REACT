import React, { useState, useEffect } from "react";

const EguseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      <h1>useEffect in React </h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
};

export default EguseEffect;
