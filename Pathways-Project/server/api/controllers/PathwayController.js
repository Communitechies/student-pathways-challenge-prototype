import PathwayService from '../services/PathwayService';

const PathwayController = {};

/*
 * The route responsible for getting all supported pathways
 *
 * Used by route:
 * GET /api/v1/pathways
 *
 */
PathwayController.getAvailablePathways = (req, res) => {
  const pathways = [
    {
      pathway: 'Airline Pilot',
      key: 0,
    },
  ];

  return res.status(200).json({ pathways });
};

/*
 * The route responsible for getting a specific pathway
 *
 * Used by route:
 * GET /api/v1/pathways/:key
 *
 * Request Params:
 *   key - The key of the returned pathway corresponding to the available pathways
 */
PathwayController.getPathway = (req, res, next) => {
  const { key } = req.params;

  if (!key || isNaN(key)) {
    return res.status(400).json({ message: 'Incorrect key was provided' });
  }

  return PathwayService.getPathway(key)
    .then(pathway => res.status(200).json({ pathway }))
    .catch((err) => {
      console.log(err);
      if (err.message === 'Invalid key') {
        return res.status(400).json({ message: err.message });
      }

      return next(err);
    });
};

export default PathwayController;
