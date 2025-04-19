import React from "react";
import { Link } from "react-router-dom";
import HelloWorld from "../Components/HelloWorld";
import Counter from "../Components/Counter";
import FormWithList from "../Components/FormWithList";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      <HelloWorld name="Focus Bear" />
      <Counter />
      <FormWithList />
      <Link to="/profile" className="text-blue-500 underline">
        Go to Profile
      </Link>
    </div>
  );
}

export default Home;
