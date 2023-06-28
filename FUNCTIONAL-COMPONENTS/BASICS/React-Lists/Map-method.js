import React from "react";

const Mapmethod = (props) => {
  return <li>I m {props.brand}</li>;
};

function Garbage() {
  const cars = ["Ford", "BMW", "QAudi"];
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <Mapmethod brand={car} />
        ))}
      </ul>
    </div>
  );
}
