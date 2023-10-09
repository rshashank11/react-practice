import { useEffect } from "react";
import { useState } from "react";
import UserComponent from "./UserComponent";

function App() {
  const [users, setUsers] = useState([]); // Set it to an empty array because if you keep it empty it'll be undefined and will get error until the API data is called
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setError(null);
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const CUSTOM_HTML = `<h1>Hello World</h1>`; //Render raw

  return (
    <>
      {/*Render raw*/}
      <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>{" "}
      <h1>User List</h1>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {users.map((user) => {
            return <UserComponent key={user.id} {...user} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
