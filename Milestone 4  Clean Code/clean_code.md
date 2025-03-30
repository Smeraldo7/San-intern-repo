# Understanding Clean code Principles

## Example of a messy code

```js
function sumEvenNumbers(numbers) {
  return numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbersArray));
```

## Its difficult to read because of:

- Poor naming: x, y, z don’t describe their purpose.
- No proper spacing or indentation
  -Inefficient structure: Could use reduce().

# Cleaner and more structured

```js
-function sumEvenNumbers(numbers) {
  return numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbersArray));
```

# Code Formatting & Style Guides

## Why is code formatting important?

- Well-formatted code is easier to read and understand, making it simpler to follow logic and debug issues.
- Consistent formatting ensures that all team members write code in a similar style, reducing confusion and increasing collaboration.
- Helps in maintainability.
- Proper indentation and spacing help in identifying syntax errors or logical issues, reducing bugs.

## What issues did the linter detect?

In the code Ive named as 'Eslint_Prettier_Testcode.js', it detected that

- 'unusedVar' is assigned a value but never used
- 'userGreeting' is assigned a value but never used
- 'user.name' is missing in props validation

## Did formatting the code make it easier to read?

Yes it made the code more readable by fixing issues like one line functions.

# Naming Variables & Functions

## What makes a good variable or function name?

- Names which clearly convey the purpose of variable/function
- Using consistent naming conventions
- Concise names but informative
- Contextual relevance
- Using action verbs to indicate operations that functions perform

## What issues can arise from poorly named variables?

- Ambiguity makes it difficult to understand what the code does.
- Difficulty in maintaining or updating code with poorly named variables.
- Poorly named variables can lead to incorrect assumptions, and developers might misuse them, causing bugs that are difficult to track down.
- Mixing naming styles can create confusion for team members and reduce the uniformity of the codebase.

eg of poorly named variables and functions:

```js
def fn1(lst, x):
res = 0
for i in range(len(lst)):
if lst[i] > x:
res += lst[i]
return res

a = [5, 12, 7, 3, 15]
b = 10
c = fn1(a, b)
print(c)
```

Refactored code:

```js
def sum_elements_above_threshold(numbers, threshold):
total = 0
for num in numbers:
if num > threshold:
total += num
return total

values = [5, 12, 7, 3, 15]
limit = 10
result = sum_elements_above_threshold(values, limit)
print(result)

eg 2:
def doStuff(d, e):
f = 0
for g in d:
f += g \* e
return f

x = [2, 4, 6]
y = 3
z = doStuff(x, y)
print(z)
```

Refactored:

```js
def calculate_weighted_sum(numbers, multiplier):
weighted_sum = 0
for number in numbers:
weighted_sum += number \* multiplier
return weighted_sum

values = [2, 4, 6]
multiplier = 3
result = calculate_weighted_sum(values, multiplier)
print(result)
```

## How did refactoring improve code readability?

- It made the codes easier to understand at a glance since the variables and functions now convey their purpose.

# Writing Small, Focused Functions

## Why is breaking down functions beneficial?

- Improves readability.
- Modular functions can be reused in different parts of the code.
- Easier to locate and fix bugs in smaller, isolated functions.
- Updating or modifying a specific functionality is more manageable.
- Unit testing is more effective on small, independent functions.
- Each function handles a specific task, making the code more structured.

Example of a relatively long function:

```Js
function crawl(node, returnArray,depth, maxValue, parentOffset){
    const convertedNode = {
        "name": node.name,
        "width": node.value/maxValue,
        "offset": parentOffset,
        "color": COLORS[Math.floor(node.value/maxValue _ (COLORS.length - 1))]
};

        if (returnArray.length == depth){
            returnArray.push([convertedNode]);
        }else{
            returnArray[depth].push(convertedNode);
        }

        let offset = parentOffset;

        if (Array.isArray(node.children)){
            node.children.forEach(child => {
            const convertedChild = crawl(child, returnArray, depth + 1, maxValue, offset);
            offset += convertedChild.width;
        });
        }
        return convertedNode;

}

```

Refactored:

```Js
function convertNode(node, maxValue, parentOffset) {
    return {
        "name": node.name,
        "width": node.value / maxValue,
        "offset": parentOffset,
        "color": COLORS[Math.floor(node.value / maxValue * (COLORS.length - 1))]
    };
}

function addToReturnArray(node, returnArray, depth) {
    if (returnArray.length === depth) {
        returnArray.push([node]);
    } else {
        returnArray[depth].push(node);
    }
}

function crawl(node, returnArray, depth, maxValue, parentOffset) {
    const convertedNode = convertNode(node, maxValue, parentOffset);
    addToReturnArray(convertedNode, returnArray, depth);

    let currentOffset = parentOffset;

    if (Array.isArray(node.children)) {
        node.children.forEach(child => {
            currentOffset += crawl(child, returnArray, depth + 1, maxValue, currentOffset).width;
        });
    }

    return convertedNode;
}
```

## How did refactoring improve the structure of the code?

- Before, the original crawl function was doing too much: converting nodes, managing the return array, handling depth, and managing recursion. But now The logic is broken into smaller, more manageable functions:
- convertNode: Handles the logic for converting a node's properties.
- addToReturnArray: Manages the logic for adding nodes to the correct depth in the returnArray.
- crawl: Focuses solely on recursion and calling the helper functions for specific tasks.
- It is now easier to read and understand since each helper function has a single responsibility.

# Commenting & Documentation

## When should you add comments?

- When explaining complex logic.
- Describing why, not what(If the reason behind a decision isn't clear)
- Workarounds and hacks (If there's a temporary fix or an unusual approach)
- Public APIs or libraries (Provide usage details in functions, methods, or classes)

## When should you avoid comments and instead improve the code?

- If the code is self-explanatory, there's no need for a comment.
- When the variable names make sense.
- when a function is hard to understand, we should refactor it instead of adding comments.

# Handling Errors & Edge Cases

Eg of a function that doesn’t properly handle errors :

```Js
function getUserAge(user) {
  return user.age.toFixed(2); // No validation, may throw an error
}

const input = prompt("Enter your age: ");
const age = Number(input);
console.log(getUserAge({ age }));
```

Refactored:

```JS
function getUserAge(user) {
  if (!user || typeof user !== "object") throw new Error("Invalid user object"); // Guard clause
  if (typeof user.age !== "number" || isNaN(user.age)) throw new Error("Age must be a valid number");

  return user.age.toFixed(2); // Returns a string
}

try {
  const input = prompt("Enter your age:");
  const age = Number(input);

  if (isNaN(age)) throw new Error("Invalid input. Please enter a valid number.");

  console.log(getUserAge({ age }));
} catch (err) {
  console.error(err.message);
}
```

## How does handling errors improve reliability?

- By stopping unexpected inputs from breaking the app (preventing crashes).
- By helping with debugging (logging errors)
- By improving security by hiding sensitive info.
- Enhancing UX by displaying friendly error messages instead of blank screens.
