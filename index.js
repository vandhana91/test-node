const express = require('express');
const app = express();
const fs= require("fs");
 let d = new Date();
 const folderPath = './assignment/';
  let filename = "" + d.getFullYear() + "-"+ d.getMonth() + "-" + d.getDate() + "-"
  + d.getTime() +'.txt'
  fs.writeFile(filename,d.toString(),(err)=>{
    console.log("completed writing")
    
})
fs.readdirSync(folderPath).forEach(file => {
    console.log(file);
  });
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
