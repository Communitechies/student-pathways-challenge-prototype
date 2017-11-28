import passport from 'passport';
import mongoose from 'mongoose';
const User = mongoose.model('User');

export default (req, res, next) => {

  return User.findOne({ studentID: 1203 }, (err, user) => {

    if (err) {
      return next(err);
    }

    if (!user) {
      return next();
    }

    req.context = {} || req.context;
    req.context.user = user;

    return next();
  });

  // passport.authenticate('jwt', { session: false }, (err, user) => {
  //
  //   if (err) {
  //     return res.status(401).json(err);
  //   }
  //
  //   if (!user) {
  //     return res.status(401).json({ message: 'Invalid JWT' });
  //   }
  //
  //   req.context = {} || req.context;
  //   req.context.user = user;
  //
  //   return next();
  // })(req, res);
};
