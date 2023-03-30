const basket = {
  Laptop: 1500,
  Mouse : 25,
  Keyboard: 100,
  HDMI: 10
};

for (const [name, price] of Object.entries(basket)) {
  console.log(`Price of ${name} is ${price}`);
}

/*
Price of Laptop is 1500
Price of Mouse is 25
Price of Keyboard is 100
Price of HDMI is 10
*/

