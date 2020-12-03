const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');

const router = require('./route');

require('dotenv').config();
app.use(express.static(path.resolve(__dirname, 'frontend/build')))
console.log(path.resolve(__dirname, 'frontend/build'));

mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>{
  console.log('MongoDB is connected successfully')
})

app.get('/test',(req,res)=>{
  res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'));
})

app.get('/welcome',(req,res)=>{
  console.log('Express is working fine.');
  res.send({
    message: "Welcome to the world of web developer"
  })
})

app.use(router);

app.listen(process.env.PORT, ()=>{
  console.log('Server running at the port.');
});