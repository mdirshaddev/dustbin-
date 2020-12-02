const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static('frontend/build'))
console.log('frontend/build');

app.get('*',(req,res)=>{
  res.sendFile('frontend/build/index.html');
})

app.listen(process.env.PORT);