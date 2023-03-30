const basket = [
  { price: 1000 },
  { price: 23   },
  { price: 500  },
  { price: 12   }
];

for (const item of basket) {
 console.log(`Price: ${item.price}`);
}

/*
Price: 1000
Price: 23
Price: 500
Price: 12
*/