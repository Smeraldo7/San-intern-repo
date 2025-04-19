import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <Button onClick={incrementCount}>Increment</Button>
    </div>
  );
};

export default Counter;
