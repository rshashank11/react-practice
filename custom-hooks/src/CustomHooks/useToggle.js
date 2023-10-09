import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((initialValue) => !initialValue);
  }

  return [value, toggle];
}
