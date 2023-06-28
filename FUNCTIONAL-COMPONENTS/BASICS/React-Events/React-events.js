//-----------------------------------------------------
//onClick Event
//-----------------------------------------------------
function Football() {
  const shoot = () => {
    console.log("great");
  };
  return <button onClick={shoot}>Clickn to shoot </button>;
}
//--------------------------------------------------
// to pass an argument to an event handler , use arrow function
//--------------------------------------------------
function Football() {
  const shoot = (a) => {
    console.log(a);
  };
  return <button onClick={() => shoot("goal")}>Take a shoot</button>;
}
//--------------------------------------------------
