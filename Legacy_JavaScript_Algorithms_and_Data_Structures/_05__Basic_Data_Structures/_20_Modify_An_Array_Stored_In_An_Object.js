let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  const arrayFriends = userObj.data.friends;
  arrayFriends.push(friend);
  return arrayFriends;
}

console.log(user);
console.log(addFriend(user, "Pete"));
console.log(user);
