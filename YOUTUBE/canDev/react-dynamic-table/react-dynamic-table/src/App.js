import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [dataTable, setDataTable] = useState([]);
  console.log(dataTable);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(dataTable);

  const column = [
    {
      heading: "Name",
      value: "name"
    },
    {
      heading: "Email",
      value: "email"
    },
    {
      heading: "Phone",
      value: "email"
    },
    {
      heading: "City",
      value: "address.city"
    }
  ];

  return (
    <div className="App">
      <h1>Dynamic table</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;
