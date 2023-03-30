const basket = {
 Laptop: 1500,
 Mouse: 23,
 Keyboard: 100,
 HDMI: 10
};

for (const key in basket) {
  const price = basket[key];
  console.log(`Price of ${key} is ${price}`);
}

/*
Price of Laptop is 1500
Price of Mouse is 25
Price of Keyboard is 100
Price of HDMI is 10
*/