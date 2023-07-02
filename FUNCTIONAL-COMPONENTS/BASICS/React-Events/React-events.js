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
// To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag.
export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
//--------------------------------------------------
//Reading props in event handlers
//--------------------------------------------------
function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing">Play Movie</AlertButton>
      <AlertButton message="uploading!">Upload Image</AlertButton>
    </div>
  );
}
//--------------------------------------------------
//Passing Event handlers as Props
//--------------------------------------------------
function Button({onClick,children}){
  return <button onClick={onClick}>{children}</button>
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading")}>Upload Image</Button>;
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="kiki's delivery services" />
      <UploadButton />
    </div>
  );
}