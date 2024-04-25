import { useState } from "react";

export function useToggle(initial = true) {
  const [toggle, setToggle] = useState(initial);
  function reverse() {
    setToggle((current) => {
      return !current;
    });
  }
  return [toggle, reverse];
}
