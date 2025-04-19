import React, { useState, useCallback } from "react";
import ChildComponent from "../Components/ChildComponent";

function ParentWithChild() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const showMessage = useCallback(() => {
    console.log("Hello from parent!");
  }, []);

  console.log("ParentWithChild rendered");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">useCallback Demo</h1>
      <h2 className="text-lg">Parent Count: {count}</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>

      <ChildComponent showMessage={showMessage} />
    </div>
  );
}

export default ParentWithChild;
