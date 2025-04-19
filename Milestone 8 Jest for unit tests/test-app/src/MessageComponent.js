const React = require('react');
const { useState } = React;

const MessageComponent = () => {
  const [message, setMessage] = useState('Hello, Focus bear!');

  return React.createElement(
    'div',
    null,
    React.createElement('p', null, message),
    React.createElement(
      'button',
      { onClick: () => setMessage('Button was clicked!') },
      'Click me'
    )
  );
};

module.exports = MessageComponent;
