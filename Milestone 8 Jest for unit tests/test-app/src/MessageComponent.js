import React, { useState } from 'react';

const MessageComponent = () => {
  const [message, setMessage] = useState('Hello, Focus bear!');

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage('Button was clicked!')}>
        Click me
      </button>
    </div>
  );
};

export default MessageComponent;
