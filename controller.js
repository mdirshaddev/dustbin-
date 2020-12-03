const User = require('./model');

function FetchUser(req,res){
  const data = User.find({}, function(err, docs){
    if(err) res.json(err);
    else{
      res.send(docs)
    }
  })
}

function AddUser(req,res){
  const data = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  data.save()
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
}

module.exports = {
  FetchUser,
  AddUser
}