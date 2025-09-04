// Install express
const express = require('express');

const app = express();


// Greets Christy
app.get('/greetings/Christy', (req, res) => {
     res.send('<h1>Hello there Christy!</h1>');
 });
app.get('/greetings/:username', (req, res) => {
  // make route parameter using req.params.username.
  const username = req.params.username;
  res.send(`Hello there, ${username}!`);
});


// 2. Rolling the Dice
  app.get('/roll/:number', (require, res) => {
  const numberParam = require.params.number;
  const parsedNumber = parseInt(numberParam);

  if (isNaN(parsedNumber)) {
    return require.send('You must specify a number');
  }
 
  // Number betwen 0 and positve numbers
  const randomNumber = Math.floor(Math.random() * (parsedNumber + 1));

res.send(`You rolled a ${randomNumber}`);
});

// 3. I Want THAT One
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of \a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

 app.get('/collectibles/:index', (require, res) => {
    // Get index and convert to integer
    const index = parseInt(require.params.index);
    // Check to make sure its above 0 to be valid.
    if(isNaN(index) || index < 0 || index >= collectibles.length) {
      res.send('Invalid collectible index provided.');
    } else {
      const collectible = collectibles[index];
      res.send(`You requestd collectible at index ${index}: ${collectible.name}(Value: $${collectible.value})`); 
    }
});

// 4. Filter Shoes by Query Parameters
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  app.get("/shoes", (req, res) => {
  const { minPrice, maxPrice, type } = req.query; // Object Destructing

  let finalOutput = [...shoes];

  if (minPrice) {
    finalOutput = finalOutput.filter((shoe) => {
      return shoe.price >= minPrice;
    });
  }
 //  get the max price
  if (maxPrice) {
   finalOutput = finalOutput.filter((shoe) => {
      return shoe.price <= maxPrice;
   });
 }

  if (type) {
    finalOutput = finalOutput.filter((shoe) => {
      return shoe.type === type;
   });
  }

  res.send(finalOutput);
});

// Este sets up y run server
app.listen(3000, () => {
  console.log("listening on port 3000");
 });
