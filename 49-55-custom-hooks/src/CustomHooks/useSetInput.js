import { useState } from "react";

export function useSetInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return { value, onChange: (event) => setValue(event.target.value) };
}
