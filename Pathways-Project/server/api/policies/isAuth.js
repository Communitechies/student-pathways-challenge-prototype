import passport from 'passport';

export default (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {

    if (err) {
      return res.status(401).json(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid JWT' });
    }

    req.context = {} || req.context;
    req.context.user = user;

    return next();
  })(req, res);
};
