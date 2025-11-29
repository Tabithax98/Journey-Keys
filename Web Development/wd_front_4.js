/*
WEB DEVELOPMENT QUIZ 5 — React
TechLabs Aachen | Digital Shaper Program
---------------------------------------------------------
BACKEND DOES NOT NEED TO DO QUIZ 5, BUT QUIZ 4 INSTEAD.

Instructions:
1. Fill in your name or email in the variable below.
2. Complete the coding tasks.
3. Run `node wd_checker.js 5 your_email_here` to verify and get your key.
*/

export const YOUR_EMAIL = "ofunimtabitha@gmail.com";

// === TASK 1 ===
// Create a functional React component called Greeting that takes a 'name' prop
// and returns: <h2>Hello, [name]!</h2>
export function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// === TASK 2 ===
// Create a simple state hook (count, setCount) initialized to the length of your name.
// Return the code string exactly like this (replace n with YOUR_EMAIL.length):
// "const [count, setCount] = useState(n);"
export function useCountSnippet(name) {
return `const [count, setCount] = useState(${name.length});`;
}

// === TASK 3 ===
// Given an array of items ["React", "HTML", "CSS"], return a JSX list as a string:
// "<ul><li>React</li><li>HTML</li><li>CSS</li></ul>"
export function renderList() {
return "<ul><li>React</li><li>HTML</li><li>CSS</li></ul>";
}

// === TASK 4 ===
// Create a Bootstrap-styled button with dynamic label depending on YOUR_EMAIL length.
// If even → "Even Length", else → "Odd Length".
// Return string like: "<button class='btn btn-success'>Even Length</button>"
export function styledButton(name) {
  const label = name.length % 2 === 0 ? "Even Length" : "Odd Length";
  return `<button class='btn btn-success'>${label}</button>`;
}

// === TASK 5 ===
// Combine all previous elements into one React component string (for fun!):
// "<div><h2>Hello, [name]!</h2><ul>...</ul><button>...</button></div>"
export function fullComponent(name) {
  return `<div>${Greeting({ name })}${renderList()}${styledButton(name)}</div>`;
}
