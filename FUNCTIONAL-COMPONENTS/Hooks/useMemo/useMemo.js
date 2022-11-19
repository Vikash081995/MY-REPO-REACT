import { useState, useMemo } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const MultiCountMemo = useMemo(
    function multiCount() {
      return count * 5;
    },
    [count]
  );

  return (
    <div>
      <h1>useMemo Hook</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <h2>{MultiCountMemo()}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}
