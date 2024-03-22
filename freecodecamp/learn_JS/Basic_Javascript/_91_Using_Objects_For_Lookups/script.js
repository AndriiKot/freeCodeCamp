// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const obj = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = obj[val];

  // Only change code above this line
  return result;
}

function phoneticLookup_Switch(val) {
  let result = "";

  // Only change code below this line
  switch (val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
phoneticLookup_Switch("charlie");
