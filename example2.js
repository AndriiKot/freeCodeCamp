const basket = [
 { name: 'Laptop', price: 1500 },
 { name: 'Mouse',  price: 25   },
 { name: 'Keyboard', price: 100},
 { name: 'HDMI',   price: 10 }
];

for (const {name,price} of basket) {
  console.log(`Price of ${name} is ${price}`);
}

/*
Price of Laptop is 1500
Price of Mouse is 25
Price of Keyboard is 100
Price of HDMI is 10
*/