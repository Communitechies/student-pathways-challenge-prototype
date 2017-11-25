const mongoose = require('mongoose');
const User = mongoose.model('User');

const UserService = {};

UserService.getUser = (studentID) => {
  return User.findOne({ studentID })
    .then((user) => {
      if (!user) {
        throw new Error('No student belongs to this ID');
      }

      return user;
    });
};

export default UserService;
