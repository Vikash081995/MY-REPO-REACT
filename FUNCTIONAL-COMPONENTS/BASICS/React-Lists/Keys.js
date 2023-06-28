import React from "react";

const Keys = (props) => {
  return <li>I am A {props.brand}</li>;
};

function Garbage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: "2", brand: "BMW" },
    { id: "3", brand: "wagonr" }
  ];
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <Keys key={car.id} brand={car.brand} />
        ))}
      </ul>
    </div>
  );
}
