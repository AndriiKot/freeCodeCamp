function myReplace(str, before, after) {
  return str.split(' ').map((el) => { 
            let res = el;
            if (el === before) {
                if (before[0].toUpperCase() === before[0])  {
                  res = after[0].toUpperCase() + after.slice(1);
                } else if (before[0].toLowerCase() === before[0]) {
                  res = after[0].toLowerCase() + after.slice(1);
                } else res = after;
            }
            return res;
         }).join(' ')
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));


// Search and Replace
// Perform a search and replace on 
// the sentence using the arguments 
// provided and return the new sentence.

// First argument is the sentence 
// to perform the search and replace on.

// Second argument is the word 
// that you will be replacing (before).

// Third argument is what you 
// will be replacing the second argument with (after).

// Note: Preserve the case of the first 
// character in the original word when 
// you are replacing it. 
// For example if you mean to replace 
// the word Book with the word dog, 
// it should be replaced as Dog

// Passed:1. myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
// Passed:2. myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
// Passed:3. myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
// Passed:4. myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
// Passed:5. myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
// Passed:6. myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.
