const mongoose = require('mongoose');
const User = mongoose.model('User');

const UserService = {};

UserService.editPathway = (studentID, pathway) => {
  return User.findOne({ studentID }, (err, user) => {
    if (err) {
      throw new Error(err);
    }

    user.pathway = pathway;

    user.save((err) => {
      if (err) {
        throw new Error(err);
      }
    });
  });
};

UserService.addFavourite = (studentID, key) => {
  return User.findOne({ studentID }, (err, user) => {
    if (err) {
      throw new Error(err);
    }

    if (!user) {
      throw new Error('User not found');
    }

    const { favourites } = user;

    if (favourites.indexOf(key) !== -1) {
      const index = favourites.indexOf(key);
      favourites.splice(index, 1);
    } else {
      favourites.push(key);
      favourites.sort((a, b) => a > b);
    }
    user.favourites = favourites;

    user.save((err) => {
      if (err) {
        throw new Error(err);
      }
    });
  });
};

export default UserService;
