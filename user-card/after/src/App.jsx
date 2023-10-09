import user from "./user.json";
import "./App.css";
import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";
import Counter from "./Counter";
import CounterFunction from "./CounterFunction";

function App() {
  return (
    <>
      <Counter />
      <CounterFunction />
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      <UserCardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </>
  );
}

export default App;
