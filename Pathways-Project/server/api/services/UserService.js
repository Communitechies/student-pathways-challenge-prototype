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

UserService.editPathway = (studentID, pathway) => {
  return User.findOne({ studentID }, (err, user) => {
    if (err) {
      throw new Error(err);
    }

    const curPathway = user.pathway;

    user.pathway = Object.assign(pathway, curPathway);

    user.save((err) => {
      if (err) {
        throw new Error(err);
      }
    });
  });
};

export default UserService;
