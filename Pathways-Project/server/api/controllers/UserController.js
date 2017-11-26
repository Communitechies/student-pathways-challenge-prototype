import UserService from '../services/UserService';
import UserPresentation from './presentations/UserPresentation';

const UserController = {};

/*
 * The route responsible for getting a specific user
 *
 * Used by route:
 * GET /api/v1/user/:studentID
 *
 * Request Params:
 *   StudentID - The student ID of the user
 */
UserController.getUser = (req, res, next) => {
  const { studentID } = req.params;

  if (!(studentID || isNaN(studentID))) {
    return res.status(400).json({ message: 'Incorrect student ID provided' });
  }

  return UserService.getUser(studentID)
    .then(UserPresentation.presentUser)
    .then(user => res.status(200).json(user))
    .catch((err) => {
      if (err.message === 'No student belongs to this ID') {
        return res.status(400).json({ message: err.message });
      }
      return next(err);
    });
};

/*
 * The route responsible for adding a pathway node to a user
 *
 * Used by route:
 * POST /api/v1/user/:studentID
 *
 * Request Body:
 *   pathway -
 *     {
 *       9: [{course: <>, grade: <>}]
 *       10: []
 *       11: []
 *       12: []
 *     }
 *     each sub object has a grade and course field
 */
UserController.editPathway = (req, res, next) => {
  const { pathway } = req.body;
  const keys = {
    9: true,
    10: true,
    11: true,
    12: true,
  };

  if (!pathway) {
    return res.status(400).json({ message: 'No pathway provided' });
  }

  if (!Object.keys(pathway).every(key => keys[key])) {
    return res.status(400).json({ message: 'Pathway had invalid fields' });
  }

  return UserService.editPathway(req.context.user.studentID, pathway)
    .then(() => res.status(200).json({ message: 'Added node successfully' }))
    .catch(next);

};

UserController.addFavourite = (req, res, next) => {
  const { key } = req.params;

  if (!key) {
    return res.status(400).json({ message: 'No favourite was provided' })
  }

  return UserService.addFavourite(req.context.user.studentID, key)
    .then(() => res.status(200).json({ message: 'Added favourite successfully' }))
    .catch((err) => {
      if (err.message === 'Key is already favourited') {
        return res.status(400).json({ message: err.message });
      }

      return next(err);
    });
};

export default UserController;
