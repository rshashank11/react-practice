import { useEffect, useState } from "react";
import { Child } from "./Child";
import ClassChild from "./ClassChild";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <ClassChild /> : null;

  return (
    <div>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  );
}
