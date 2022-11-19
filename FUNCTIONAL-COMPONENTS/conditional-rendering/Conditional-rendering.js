import React, { useState } from "react";

const ConditionalRendering = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
        {
        loggedIn ? <h1>Welcome anil </h1> : <h1>Welcome Guest </h1>
        }
    </div>
  );
};

export default ConditionalRendering;
