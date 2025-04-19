import React, { useState } from "react";
import Button from "./Button";

const FormWithList = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputText.trim() !== "") {
      setItems([...items, inputText]);
      setInputText("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">Add to List</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
        placeholder="Enter text"
      />
      <Button onClick={handleAdd}>Add</Button>
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="border-b py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormWithList;
