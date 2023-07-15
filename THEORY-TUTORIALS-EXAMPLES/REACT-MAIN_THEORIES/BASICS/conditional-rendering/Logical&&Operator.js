function Garbage(props) {
  const car = props.cars;
  return (
    <div>
      <h1>Garbage</h1>
      {car.length > 0 && <h2>you have {car.length}</h2>}
    </div>
  );
}
function App() {
  const car = ["Ford", "BMW", "Audi"];
  return <Garbage car={car} />;
}
