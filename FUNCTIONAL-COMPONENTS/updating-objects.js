/* eslint-disable no-unused-vars */
import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        it is {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </div>
  );
}
