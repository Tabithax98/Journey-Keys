/*
WEB DEVELOPMENT QUIZ 2 — JAVASCRIPT FUNDAMENTALS
TechLabs Aachen | Digital Shaper Program
---------------------------------------------------------
Instructions:
1. Fill in your name or email in the variable below.
2. Complete the coding tasks.
3. Run `node wd_checker.js 2 your_email_here` to verify and get your key.
*/

const name = "your_email_here";

// === TASK 1 ===
// Return the sum of ASCII codes of all letters in your name.
function sumASCII(name) {
   let sum = 0;
for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
}
return sum;
}

// === TASK 2 ===
// Return an array of characters in your name, reversed.
function reverseName(name) {
    // TODO
return name.split("").reverse();
}

// === TASK 3 ===
// Create an object {name: <your_name>, length: <len>, isEven: <bool>}
function createUserObject(name) {
   return {
    name: name,
    length: name.length,
    isEven: name.length % 2 === 0
};
}

// === TASK 4 ===
// Return a sentence "My name has X letters" where X = name.length
function describeName(name) {
    // TODO
   return `My name has ${name.length} letters`;
}

module.exports = { name, sumASCII, reverseName, createUserObject, describeName };
