import React from "react";

const HelloWorld = ({ name }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-amber-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-orange-600">Hello,{name}!</h1>
    </div>
  );
};

export default HelloWorld;
