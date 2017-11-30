export default [
  { 
    name: 'Accountant',
    11: {
      required: [
        'ENG3U',
        'MCR3U'
      ],
    },
    12: {
      required: [
        {
          course: 'ENG4U',
          minimum: 70,
        },
        {
          course: 'MHF4U',
          minimum: 70,
        },
      ],
    },
    SE: [
      {
        label: 'Accounting\nBrock University',
        programName: 'Accounting',
        institution: 'University',
        university: 'Brock University',
        description: 'Goodman’s BAcc program has been designed specifically for future accountants, and has rigorous academic courses integrated with a professional orientation.',
        classSize: '101 - 250 people',
        tuition: '$3340.64/term',
        average: '84-86',
        ProgramType: 'Reg',
      },
      {
        label: 'Accounting\nUniversity of Guelph',
        programName: 'Accounting',
        institution: 'University',
        university: 'University of Guelph',
        description: 'The program provides a strong foundation of accounting and general business knowledge while allowing significant opportunity to develop breadth and depth of knowledge in related areas of study.',
        classSize: '101 - 250 people',
        tuition: '$3285.29/term',
        average: '76-81',
        ProgramType: 'Reg/Coop',
      },
      {
        programName: 'Accounting\nYork University',
        institution: 'University',
        university: 'York University',
        description: 'Study with one of Canada’s best accounting faculties to master accounting functions and hone the ability to make decisions within legal, financial, regulatory and ethical frameworks.',
        classSize: '101 - 250',
        tuition: '$3,761.51/term',
        average: '74-76',
        ProgramType: 'Reg/Coop/Int',
      },
    ],
    J: {
      name: 'Accountant',
      salaryRange: 'C$37,711 - C$72,496',
      automationRisk: '94%',
      description: 'The primary task of accountants, which extends to all the others, is to prepare and examine financial records. They make sure that records are accurate and that taxes are paid properly and on time. ',
      otherJobs: [
        'Buisness Analyst',
        'Consultant',
        'Stock Broker'
      ],
      companies: [
        'Deloitte',
        'PwC',
        'Ernst & Young'
      ]
    },
  },
];
