import React from "react";

function ChildComponent({ showMessage }) {
  console.log("ChildComponent rendered");

  return (
    <div className="mt-4">
      <h3 className="font-semibold">I'm the Child</h3>
      <button
        onClick={showMessage}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 active:bg-green-800 transition"
      >
        Call Parent Function
      </button>
    </div>
  );
}

export default React.memo(ChildComponent);
// The ChildComponent is wrapped in React.memo to prevent unnecessary re-renders when the parent component re-renders.
