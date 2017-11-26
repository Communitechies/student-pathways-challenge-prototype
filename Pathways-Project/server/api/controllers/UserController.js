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

export default UserController;
