import { useState } from "react";

function App() {
  const [data, setData] = useState("anil");
  function updateData() {
    setData("Sidhu");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
export default App;
