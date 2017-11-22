import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: false,
  },
  name: {
    type: String,
    unique: false,
    required: true,
  },
  studentID: {
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
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    id: this._id,
    studentID: this.studentID,
    exp: parseInt(expiry.getTime() / 1000, 10),
  }, 'SECRET');
};

module.exports = mongoose.model('User', userSchema);
