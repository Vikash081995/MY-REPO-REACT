import React, { useState } from "react";

const GetInputTextValue = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(e) {
    setData(e.target.value);
  }

  return (
    <div>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
};

export default GetInputTextValue;
