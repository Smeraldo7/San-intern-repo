/*Code with errors for testing Eslint and Prettier*/

/*
import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [name, setName] =       useState(user.name); // Inconsistent spacing

  const handleChangeName = (newName) => { 
    setName(newName) // Missing semicolon and inconsistent spacing
    if(newName.length > 3){ 
      console.log('Name is long enough') // Missing trailing comma
    } else {
      console.log('Name is too short')  // Missing semicolon
    }
  }

  const showMessage = function(message){ // Inconsistent function declaration style
    return message;
  }

  const unusedVar = 'This is never used'; // Unused variable

  const userGreeting = user => { // Missing parentheses in arrow function
    return `Hello, ${user.name}`;
  }

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={() => handleChangeName('John')}>Change Name</button>
    </div>
  );
}

export default UserProfile;

*/

/*Fixed code after running Eslint and Prettier*/
/* This code was fixed using eslint and prettier */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  const [name, setName] = useState(user.name); // Inconsistent spacing

  const handleChangeName = (newName) => {
    setName(newName); // Missing semicolon and inconsistent spacing
    if (newName.length > 3) {
      showMessage('Name is long enough');
    } else {
      showMessage('Name is too short');
    }
  };

  const showMessage = function (message) {
    // Inconsistent function declaration style
    return message;
  };

  //const unusedVar = 'This is never used'; // Unused variable

  const userGreeting = (user) => {
    // Missing parentheses in arrow function
    return `Hello, ${user.name}`;
  };

  return (
    <div>
      <h1>{userGreeting(user)}</h1>
      <h2>Welcome {name}</h2>
      <button onClick={() => handleChangeName('John')}>Change Name</button>
    </div>
  );
};

// Add PropTypes for validation
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired, // Validate that 'name' is a string and required
  }).isRequired,
};

export default UserProfile;
