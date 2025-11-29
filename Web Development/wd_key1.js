

/*
WEB DEVELOPMENT QUIZ 1 — HTML, CSS & DOM BASICS
TechLabs Aachen | Digital Shaper Program
---------------------------------------------------------
Instructions:
1. Fill in your name or email in the variable below.
2. Complete the coding tasks.
3. Run `node wd_checker.js 1 your_email_here` to verify and get your key.
*/

const name = "tabitha"; // <-- change this

// === TASK 1 ===
// Return an HTML string with your name embedded inside an <h1> tag.
// Example: "<h1>Hello Alice!</h1>"
function createHTML(name) {   
    return `<h1>Hello ${name}!</h1>`;

    
   

}

// === TASK 2 ===
// Return a CSS string that changes the background to a color based on name length.
// Example: if name.length % 2 == 0 => "background-color: blue;", else "background-color: green;"
function createCSS(name) {
  if (name.length % 2 === 0) {
    return "background-color: blue;";
} else {
    return "background-color: green;";
}
}

// === TASK 3 ===
// Simulate DOM manipulation: replace "Hello" with your name in "Hello World".
function changeDOM(name) {
    // TODO
 return `Hello ${name}`;
}

// === TASK 4 ===
// Combine HTML and CSS into a single string (HTML first, then <style>CSS</style>)
function combineHTMLCSS(name) {
    // TODO
 return `${createHTML(name)}<style>${createCSS(name)}</style>`;
}

module.exports = { name, createHTML, createCSS, changeDOM, combineHTMLCSS };
