import React, { useState } from "react";

const ElseIf = () => {
  const [loggedIn, setLoggedIn] = useState(1);

  return (
    <div>
      {loggedIn === 1 ? (
        <h1>Hellow user1</h1>
      ) : loggedIn === 2 ? (
        <h1>Hellow user2</h1>
      ) : loggedIn === 3 ? (
        <h1>Hellow user3</h1>
      ) : (
        <h1>No user found </h1>
      )}
    </div>
  );
};

export default ElseIf;
