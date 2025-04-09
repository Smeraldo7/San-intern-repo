/*function sum(a, b) {
  return a + b;
}
module.exports = sum;
*/

function getUserAge(user) {
  if (user === null || typeof user !== 'object' || Array.isArray(user)) {
    throw new Error('Invalid user object'); // Guard clause
  }
  if (typeof user.age !== 'number' || isNaN(user.age)) {
    throw new Error('Age must be a valid number');
  }

  return user.age.toFixed(2); // Returns a string
}

try {
  const input = prompt('Enter your age:');
  const age = Number(input);

  if (isNaN(age))
    throw new Error('Invalid input. Please enter a valid number.');

  console.log(getUserAge({ age }));
} catch (err) {
  console.error(err.message);
}

module.exports = getUserAge;
