import React from "react";
import UserForm from "../Components/UserForm";
import { Link } from "react-router-dom";

function FormPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>
      <UserForm />
      <Link to="/" className="text-blue-500 underline mt-4 block">
        Go to Home
      </Link>
    </div>
  );
}

export default FormPage;
