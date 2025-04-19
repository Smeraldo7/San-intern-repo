import React, { useState } from "react";
import { makeCancelableRequest } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function TestRequest() {
  const navigate = useNavigate();
  const [cancelRequest, setCancelRequest] = useState(null);

  const handleRequest = async () => {
    const { promise, cancel } = makeCancelableRequest("/posts", {
      title: "Axios Test",
      body: "Testing POST request",
      userId: 99,
    });

    // Save cancel function for manual cancellation
    setCancelRequest(() => cancel);
    try {
      const response = await promise;
      console.log("Success:", response.data);

      // Simulate network delay before redirecting
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Example: Redirect on success
      navigate("/");
    } catch (error) {
      if (error.name === "CanceledError") {
        console.warn("Request was cancelled.");
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  //cancel request manually after delay
  const handleCancel = () => {
    if (cancelRequest) {
      cancelRequest(); // Call cancel
      console.log("Cancel function called.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Axios Test Page</h1>
      <button
        onClick={handleRequest}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Test Request
      </button>
      <button
        onClick={handleCancel}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4"
      >
        Cancel Request
      </button>
    </div>
  );
}

export default TestRequest;
