import React, { useEffect, useState } from "react";

const IntervalClassCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    doSomething()
    const interval = setInterval(tick, 1000);

    return () => {
    clearInterval(interval);
  }
  }, []);

  return <div>{count}</div>;
};

export default IntervalClassCounter;
