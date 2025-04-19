import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Profile Page</h1>
      <Link to="/" className="text-blue-500 underline">
        Go to Home
      </Link>
    </div>
  );
}

export default Profile;
