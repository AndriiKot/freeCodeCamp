function spinalCase(str) {
  let new_str = str.replace(/[_\s]+/g, "-");
  new_str = new_str.replace(/([a-z])([A-Z])/g, "$1-$2");
  return new_str.toLowerCase();
}
// console.log(spinalCase("This Is Spinal Tap")); // this--is--spinal--tap
// console.log(spinalCase("The_Andy_Griffith_Show")); //The_Andy_Griffith_Show
// console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));

// Convert a string to spinal
// case. Spinal case is all-lowercase-words-joined-by-dashes.

// Run the Tests (Ctrl + Enter)
// Reset this lesson
// Get Help

// Tests
// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// spinalCase("AllThe-small Things") should return the string all-the-small-things.
