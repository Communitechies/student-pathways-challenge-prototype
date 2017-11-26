import BPromise from 'bluebird';

// Configured Pathways
import pilot from '../../pathways/pilot';

const PathwayService = {};

PathwayService.getPathway = (key) => {
  let pathway;

  switch (key) {
    case '0':
      pathway = pilot;
      break;
    default:
      return BPromise.reject({ message: 'Invalid key' });
  }

  return BPromise.resolve(pathway);
};

PathwayService.getPathways = () => {
  return [
    {
      pathway: 'Airline Pilot',
      key: 0,
    },
  ];
};

export default PathwayService;
