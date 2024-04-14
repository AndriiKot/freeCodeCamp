const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  let count = 0;
  for (const user in allUsers) {
    if (allUsers[user].online) {
      count++;
    }
  }
  return count;
}

console.log(countOnline(users));
