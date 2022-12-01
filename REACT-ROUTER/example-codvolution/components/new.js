import { useSearchParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const UserNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <button onClick={() => setSearchParams({ filter: "button1" })}>
        button1{" "}
      </button>

      <button onClick={() => setSearchParams({ filter: "button2" })}>
        button2{" "}
      </button>

      <button onClick={() => setSearchParams({ filter: "button3" })}>
        button3{" "}
      </button>

      <button onClick={() => setSearchParams({ filter: "button4" })}>
        button4{" "}
      </button>
    </div>
  );
};
