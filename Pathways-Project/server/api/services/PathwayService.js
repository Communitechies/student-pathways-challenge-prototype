import BPromise from 'bluebird';

// Configured Pathways
import pilot from '../../pathways/pilot';
import nurse from '../../pathways/nursing';

const PathwayService = {};

PathwayService.getPathway = (key) => {
  let pathway;

  switch (key) {
    case '0':
      pathway = pilot;
      break;
    case '1':
      pathway = nurse;
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
    {
      pathway: 'Nurse',
      key: 1,
    }
  ];
};

export default PathwayService;
