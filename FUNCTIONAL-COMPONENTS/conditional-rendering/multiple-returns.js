import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // Loading state
  if (isLoading) {
    return <div>Loading........</div>;
  }

  // when no data is fetched
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }

  // when response is ok
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
