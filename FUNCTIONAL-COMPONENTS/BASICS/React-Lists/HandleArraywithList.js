import React from "react";

const HandleArraywithList = () => {
  const Students = ["Anil", "Sindhu", "Sam", "Peter"];

  return (
    <div>
      <h1>Handle Array with list </h1>
      {Students.map((data) => (
        <h1>Name is :{data}</h1>
      ))}
    </div>
  );
};

export default HandleArraywithList;
