function fearNotLetter(str) {
  for(let i = 0; i < str.length - 1; i++) {
    if (String.fromCharCode(str[i].charCodeAt() + 1) !== str[i + 1]) {
        return String.fromCharCode(str[i].charCodeAt() + 1)
    }
  }
}


console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("abce"));

// Find the missing letter 
// in the passed letter range and return it.

// If all letters are 
// present in the range, return undefined.

// Tests
// Waiting:1. fearNotLetter("abce") should return the string d.
// Waiting:2. fearNotLetter("abcdefghjklmno") should return the string i.
// Waiting:3. fearNotLetter("stvwx") should return the string u.
// Waiting:4. fearNotLetter("bcdf") should return the string e.
// Waiting:5. fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.