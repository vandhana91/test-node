const express = require('express');
const app = express();
const fs= require("fs");
 let d = new Date();
 const folderPath = './assignment/';
  let filename = "" + d.getFullYear() + "-"+ d.getMonth() + "-" + d.getDate() + "-"
  + d.getTime() +'.txt'
 
app.get('/', (req, res) => {
  res
    .status(200)
    .send(filename)
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
