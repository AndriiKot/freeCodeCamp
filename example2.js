const basket = [
 { name: 'Laptop', price: 1500 },
 { name: 'Mouse',  price: 25   },
 { name: 'Keyboard', price: 100},
 { name: 'HDMI',   price: 10 }
];

for (const {name,price} of basket) {
  console.log(`Price of ${name} is ${price}`);
}