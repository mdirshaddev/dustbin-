const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();
app.use(express.static(path.resolve(__dirname, 'frontend/build')))
console.log(path.resolve(__dirname, 'frontend/build'));

app.get('/test',(req,res)=>{
  res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'));
})

app.get('/welcome',(req,res)=>{
  console.log('Express is working fine.');
  res.send({
    message: "Welcome to the world of web developer"
  })
})

app.listen(process.env.PORT, ()=>{
  console.log('Server running at the port.');
});