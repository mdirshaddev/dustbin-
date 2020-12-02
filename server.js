const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();
app.use(express.static(path.resolve(__dirname, 'frontend/build')))
console.log(path.resolve(__dirname, 'frontend/build'));

app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'));
})

app.listen(process.env.PORT, ()=>{
  console.log('Server running at the port.');
});