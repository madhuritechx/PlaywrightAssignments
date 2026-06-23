//find character 'a'

let word = "JavaScript";

let count = word.split('a').length - 1;
console.log(`Count of 'a' in "${word}": ${count}`);

// Reverse string "Testleaf"
let str = "Testleaf";

// Method 1: Using split(), reverse(), and join()
let reversed = str.split('').reverse().join('');
console.log(`${reversed}`);