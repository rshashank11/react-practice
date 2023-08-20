import { useMemo, useCallback, useState, useEffect } from "react";

const list = Array(1_000)
  .fill()
  .map((_, i) => i + 1);

export default function Hooks() {
  const [query, setQuery] = useState("");

  const filteredList = useMemo(() => {
    console.log("In Memo");
    return list.filter((n) => n.toString().includes(query));
  }, [query]);

  const printList = useCallback(() => {
    console.log(`Filtered List: ${filteredList}`);
  }, [filteredList]);

  useEffect(() => {
    printList();
  }, [printList]);

  return (
    <>
      <input
        type="number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}
