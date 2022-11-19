import React, { useState } from "react";

const TextArea = () => {
  const [textarea, setTextarea] = useState();

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <div>
      <textarea value={textarea} onChange={handleChange} />
    </div>
  );
};

export default TextArea;
