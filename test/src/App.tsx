import { useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current? !focus() : focus(); // input DOM node is here
  }, []);

  return <input ref={inputRef} placeholder="Type here..." />;
}
