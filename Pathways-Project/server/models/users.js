const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  studentNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
});

userSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  // TODO: Move SECRET to an external file
  return jwt.sign({
    _id: this._id,
    username: this.local.username,
    exp: parseInt(expiry.getTime() / 1000)
  }, "SECRET");
};

module.exports = mongoose.model('User', userSchema);
