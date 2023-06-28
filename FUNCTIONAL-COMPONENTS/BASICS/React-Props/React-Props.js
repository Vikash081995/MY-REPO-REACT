function Student(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

export function App1() {
  return (
    <div>
      <Student name={"Anil"} />
      <Student name={"Sunil"} />
    </div>
  );
}
//--------------------------------------------------------
//   To send Variable ,put the variable inside a curly braces
//--------------------------------------------------------
function Car(props) {
  return <h2>I m a {props.brand}</h2>;
}

function Garbage() {
  const carName = "Ford";
  return (
    <div>
      <Car brand={carName} />
    </div>
  );
}
//------------------------------------------------------------
//   To send an Object ,  use a curly braces
//------------------------------------------------------------
function Car(props) {
  return <h2>I m a {props.brand.model}</h2>;
}

function Garbage() {
  const carName = { name: "Ford", model: "mustang" };
  return (
    <div>
      <Car brand={carName} />
    </div>
  );
}
//==================================================================