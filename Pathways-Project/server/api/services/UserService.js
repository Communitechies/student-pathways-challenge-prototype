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

    const curPathway = user.pathway || {
      9: [],
      10: [],
      11: [],
      12: [],
    };

    user.pathway = Object.assign(curPathway, pathway);

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
      throw new Error('Key is already favourited');
    }

    favourites.push(key);
    favourites.sort((a, b) => a > b);
    user.favourites = favourites;

    user.save((err) => {
      if (err) {
        throw new Error(err);
      }
    });
  });
};


UserService.getUserPathways = (studentID, pathways) => {
  return User.findOne({ studentID }, (err, user) => {
    if (err) {
      throw new Error(err);
    }

    if (!user) {
      throw new Error('User not found');
    }

    const { favourites } = user;

    return pathways.map(pathway => ({
      ...pathway,
      favourite: favourites.indexOf(pathway.key) !== -1,
    }));
  });
};

export default UserService;
