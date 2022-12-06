import React, { useState } from "react";
import User from "./Users";
import Users from "./Users";

const App = () => {
  const [userId, setUserId] = useState();

  return (
    <div>
      <Users setUserId={setUserId} />
      <User userId={userId} />
    </div>
  );
};

export default App;
