import UserService from '../services/UserService';
import PathwayService from '../services/PathwayService';

const UserController = {};

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

/*
 * The route responsible for getting the pathway of a specific user
 *
 * Used by route:
 * GET /api/v1/user/pathway
 *
 */
UserController.getPathway = (req, res) => {
  return res.status(200).json({ pathway: req.context.user.pathway });
};


/*
 * The route responsible for adding a favourite pathway to a user
 *
 * Used by route:
 * POST /api/v1/user/favourite/:key
 *
 * Request Params:
 *   key - The key of the favourite you are adding
 */
UserController.addFavourite = (req, res, next) => {
  const { key } = req.params;

  if (!key) {
    return res.status(400).json({ message: 'No favourite was provided' });
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

/*
 * The route responsible for getting all the pathways and if they've been favourited or not
 *
 * Used by route:
 * GET /api/v1/user/favourite
 *
 */
UserController.getFavourites = (req, res) => {

  const pathways = PathwayService.getPathways();

  const { favourites } = req.context.user;

  return res.status(200).json(pathways.map(pathway => ({
    ...pathway,
    favourite: favourites.indexOf(pathway.key) !== -1,
  })));
};

export default UserController;
