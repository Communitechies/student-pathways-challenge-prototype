export default [
  { 
    name: 'Computer Scientist',
    11: {
      required: [
        'MCR3U',
        'ENG3U'
      ],
    },
    12: {
      required: [
        {
          course: 'MCV4U',
          minimum: 70,
        },
        {
          course: 'MHF4U',
          minimum: 70,
        },
        {
          course: 'ENG4U',
          minimum: 70,
        },
      ],
    },
    SE: [
      {
        programName: 'Computer Science',
        institution: 'University',
        university: 'University of Waterloo',
        description: 'Study at one of the world’s best schools for computer science, where more than 80 professors are pushing the boundaries of the field.',
        classSize: '101 -250 people',
        tuition: '$14,557/year',
        average: '90% - 93%',
        ProgramType: 'Reg/Coop',
      },
      {
        programName: 'Computer Science',
        institution: 'University',
        university: 'University of Toronto',
        description: 'The Department of Computer Science at the University of Toronto is among the best in the world, consistently ranked top in Canada.',
        classSize: '101 - 250 people',
        tuition: '$6590/year',
        average: '80%-85%',
        ProgramType: 'Reg/Coop',
      },
      {
        programName: 'Computer Science',
        institution: 'University',
        university: 'University of Western Ontario',
        description: 'The Department of Computer Science at Western has developed strong academic and research programs to become one of the leading establishments in its field.',
        classSize: '101 - 250 people',
        tuition: '$8,050/term',
        average: '80-85',
        ProgramType: 'Reg/Int/Prac',
      },
    ],
    J: {
      name: 'Computer Scientist',
      salaryRange: '$53,000/year - $75,000/year',
      automationRisk: '4.8%',
      description: 'Computer scientists often work as part of a research team with computer programmers, information technology professionals, and mechanical or electrical engineers.',
      otherJobs: [
        'Data Scientist',
        'Software Engineer',
        'UI/UX Designer'
      ],
      companies: [
        'Google',
        'Apple',
        'Electronic Arts'
      ]
    },
  },
  { 
    name:'Computer Scientist',

    11: {
      required: [
        'ENG3C',
        'one of MCF3M or MCR3U'
      ],
    },
    12: {
      required: [
        {
          course: 'ENG4C',
          minimum: 50
        },
        {
          course: 'MCT4C',
          minimum: 50
        }
      ],
    },
    SE: [
      {
        programName: 'Computer Science',
        institution: 'College',
        college: 'Conestoga College',
        description: 'Computer Programmer is a two-year diploma program designed for students who wish to learn the latest skills needed by business application developers in industry',
        classSize: '',
        tuition: '$1,460/term',
        average: '65%',
        programType: '',
      },
    ],
    J: {
      name:'Computer Scientist',
      salaryRange: '$53,000 - $75,000',
      automationRisk: '4.8%',
      description: 'Computer scientists often work as part of a research team with computer programmers, information technology professionals, and mechanical or electrical engineers.',
      otherJobs: [
        'Data Scientist',
        'Software Engineer',
        'UI/UX Designer'
      ],
      companies: [
        'Google',
        'Apple',
        'Electronic Arts'
      ]
    },
  }
];
