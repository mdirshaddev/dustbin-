const User = require('./model');

function FetchUser(req,res){
  const data = User.find({email: req.body.email});
  return res.json(data)
}

function AddUser(req,res){
  const {username, email, password} = req.body;

  const data = User.create({
    username: username,
    email: email,
    password: password
  })
  return res.json(data);
}

module.exports = {
  FetchUser,
  AddUser
}