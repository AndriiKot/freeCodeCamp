function translatePigLatin(str) {
  let res = '';
  if (/^[aeoiou]/.test(str)) res = `${str}way`
  else res = str.replace(/^([^aeiou]+)?(\w*)/gi, `$2$1ay`) 
  return res;
}

console.log(translatePigLatin("consonant"));


// Pig Latin is a way of altering 
// English Words. The rules are as follows:

// - If a word begins with a consonant, 
// take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, 
// just add way at the end.

// Translate the provided string to Pig Latin. 
// Input strings are guaranteed to be English words in all lowercase.

