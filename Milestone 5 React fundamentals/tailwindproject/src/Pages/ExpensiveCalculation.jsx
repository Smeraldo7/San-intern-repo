import React from "react";
import { Link } from "react-router-dom";
import LargeList from "../Components/LargeList";

function ExpensiveCalculation() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Expensive Calculation Page</h1>
      <LargeList />
      <Link to="/" className="text-blue-500 underline">
        Go to Home
      </Link>
    </div>
  );
}

export default ExpensiveCalculation;
