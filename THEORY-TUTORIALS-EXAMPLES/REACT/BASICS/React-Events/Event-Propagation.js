export default function Toolbar() {
  return (
    <div onClick={() => alert("you  clicked on the toolbar!")}>
      <button onClick={() => alert("playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
//-------------------------------------------------------------------
//stop event propagation
//-------------------------------------------------------------------
function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar(){
    return (
        <div onClick={()=>{alert("You clicked on the Toolbar!")}}>
        <button onClick={()=>alert("playing")}>Play Movie</button>
        <button onClick={()=>alert("uploading")}>Play Movie</button>
        </div>
    )
}