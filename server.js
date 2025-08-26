// Imports express
const express = require('express');

// Creats Express
const app = express();

// //Setup a default response to root GET
app.get("/", (req, res) => {
    res.send("Welcome to my first server");
});

// // URL params
// app.get("/:urlParam", (req, res) => {
//     res.send(`urlParam: ${req.params.urlParam}`);
// });

// app.get("/greetings/<username-parameter>", (req, res) => {
//     const name = req.params.name;
//     res.send(`greetings ${Christy}`);
// });


// Este sets up y run server
app.listen(3000, () => {
  console.log("listening on port 3000");
});