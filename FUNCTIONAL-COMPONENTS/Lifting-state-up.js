export function App() {
  function parentAlert(data) {
    alert(data);
  }
  return (
    <div>
      <h1>Lifting state up</h1>
      <User func={parentAlert} />
    </div>
  );
}

function User(props) {
  const data = "anil";
  return (
    <div>
      <h2>Username:</h2>
      <button onClick={() => props.func(data)}>Click me </button>
    </div>
  );
}
