import React from "react";

function NestedList() {
  const Users = [
    {
      name: "Anil",
      email: "Aniul@13434",
      address: [
        { HouseNumber: "108", city: "Noida", Country: "India" },
        { HouseNumber: "109", city: "Delhi", Country: "India" },
        { HouseNumber: "1110", city: "Durg", Country: "India" }
      ]
    },
    {
      name: "Sunil",
      email: "Sunil@13434",
      address: [
        { HouseNumber: "1080", city: "NSofaa", Country: "India" },
        { HouseNumber: "109", city: "Kolkata", Country: "India" },
        { HouseNumber: "1110", city: "Durg", Country: "India" }
      ]
    }
  ];
}

return (
  <div>
    <h1>List with nested Array</h1>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
        </tr>
      </tbody>
      {Users.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            {item.address.map((data) => {
              <tr>
                <td>{data.HouseNumber}</td>
                <td>{data.City}</td>
                <td>{data.Country}</td>
              </tr>;
            })}
          </td>
        </tr>
      ))}
    </table>
  </div>
);
