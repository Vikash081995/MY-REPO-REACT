import React, { useEffect, useState } from "react";

const ExampleUseEffect = () => {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.log("called with data state ");
  }, [data]);

  useEffect(() => {
    console.log("called with data state ");
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Data:{data}</h1>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div>
  );
};

export default ExampleUseEffect;
