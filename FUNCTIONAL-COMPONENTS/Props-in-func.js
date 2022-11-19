function Student(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

export function App1(){
    return(
        <div>
            <Student name={"Anil"}/>
            <Student name={"Sunil"}/>
        </div>
    )
}
