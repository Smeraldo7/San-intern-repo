import React, { useState, useMemo } from "react";
import Button from "./Button";

//heavy calculation-squaring and summing numbers
const expensiveCalculation = (numbers) => {
  console.log("Running expensive calculation...");
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] ** 2;
  }
  return total;
};

function LargeList() {
  const [count, setCount] = useState(0);

  const numbers = useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => i + 1);
  }, []);

  //only re-run when numbers change
  const total = useMemo(() => expensiveCalculation(numbers), [numbers]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Expensive Calculation</h2>
      <p>Total of squares: {total}</p>

      <Button onClick={() => setCount(count + 1)}>
        Re-render component (count = {count})
      </Button>
    </div>
  );
}

export default LargeList;
