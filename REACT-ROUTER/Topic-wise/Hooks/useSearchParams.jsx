//used to read and modify the query string in URL for current Location
//returns array of two values : the current location search params and a function to update them

//example
import { useSearchParams } from "react-router-dom";

export function App() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();

    let params = seralizeFormQuery(event.target);
    setSearchParams(params);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
