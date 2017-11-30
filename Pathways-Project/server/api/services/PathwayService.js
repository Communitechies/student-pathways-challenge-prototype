import BPromise from 'bluebird';

// Configured Pathways
import pilot from '../../pathways/pilot';
import nurse from '../../pathways/nursing';
import math from '../../pathways/mathematics';
import accountant from '../../pathways/accountant';
import engineer from '../../pathways/engineering';
import journalist from '../../pathways/journalist';
import social from '../../pathways/socialworker';
import teacher from '../../pathways/teacher';
import computerScience from '../../pathways/computerScience';

const PathwayService = {};

PathwayService.getPathway = (key) => {
  let pathway;

  switch (key) {
    case '0':
      pathway = pilot;
      break;
    case '1':
      pathway = nurse;
      break;
    case '2':
      pathway = math;
      break;
    case '3':
      pathway = accountant;
      break;
    case '4':
      pathway = engineer;
      break;
    case '5':
      pathway = journalist;
      break;
    case '6':
      pathway = social;
      break;
    case '7':
      pathway = teacher;
      break;
    case '8':
      pathway = computerScience;
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
      career: 'AeroSpace',
      key: 0,
    },
    {
      pathway: 'Nurse',
      career: 'Health',
      key: 1,
    },
    {
      pathway: 'Mathematics',
      career: 'Technology',
      key: 2,
    },
    {
      pathway: 'Accountant',
      career: 'Business',
      key: 3,
    },
    {
      pathway: 'Engineer',
      career: 'Technology',
      key: 4,
    },
    {
      pathway: 'Journalist',
      career: 'Communications',
      key: 5,
    },
    {
      pathway: 'Social Worker',
      career: 'Humanities',
      key: 6,
    },
    {
      pathway: 'Teacher',
      career: 'Humanities',
      key: 7,
    },
    {
      pathway: 'Computer Scientist',
      career: 'Technology',
      key: 8,
    }
  ];
};

export default PathwayService;
