const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema({
  username: String,
  password: String,
  email: String
},{
  timestamps: true,
});

const User = mongoose.model('User',UserModel);

module.exports = User;

