const  electronics = {
  Laptop: 1500,
  Mouse:  25,
  Keyboard: 100,
  HDMI:     10
};

 for (const name of Object.keys(electronics)) {
   const price = electronics[name];
   console.log(`Price of ${name} is ${price}`);
 }

/*
Price of Laptop is 1500
Price of Mouse is 25
Price of Keyboard is 100
Price of HDMI is 10
*/

