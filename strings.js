// Extract the last four characters from the string below;"extravaganza"

let word = 'extravaganza'
let result = word.substring(8,0);
console.log({result});

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const Insertstring = food.slice(0,4) + "eat" + food.slice(4);
console.log({Insertstring});

// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog";
console.log(story.match (/the/g).length)
console.log(story.match (/brown/g).length)



// 
// Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
let result1 = string1.search("are");
let result2 = string2.search("sitting");
console.log({result1});
console.log({result2});


// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

// uppercase : "wonderful"
 let text = "wonderful";
 let string = text.toUpperCase();
 console.log({string});

// lowercase : "amazing" "UndERneath"
let sentence = "amazing"
let changeLower = sentence.toLowerCase()
console.log({changeLower});

let lowercase= "UndERneath"
let lower = lowercase.toLowerCase();
console.log({lower});

// Tittle case : "A wonderful world"


function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("A wonderful world"));

