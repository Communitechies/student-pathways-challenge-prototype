export default [
  {
    11: {
      required: [
        'ENG3U',
        '1 of MCV4U or MHF4U',
        'SCH3U',
        '1 of MCR3U or MCT4C or MHF4U',
        'SBI3U'
      ],
    },
    12: {
      required: [
        {
          course: 'ENG4U',
          minimum: 65,
        },
        {
          course: 'SBI4U',
          minimum: 65,
        },
        {
          course: 'SCH4U',
          minimum: 65,
        },
        {
          course: 'MHF4U',
          minimum: 65,
        },
        {
          course: 'MCF3M',
          minimum: 65,
        },
        {
          course: 'MCR3U',
          minimum: 65,
        },
      ],
    },
    SE: [
      {
        label: 'Nursing\nWestern University',
        programName: 'Nursing',
        institution: 'University',
        university: 'University of Western Ontario',
        description: 'Develop clinical skills and confidence in a lab setting in one of our state-of-the-art simulation suites before embarking on your first practical placement.',
        classSize: '101 - 250 people',
        tuition: '$4,033.60/term',
        average: '85%',
        ProgramType: 'Reg/Int/Prac',
      },
      {
        label: 'Nursing\nBrock University',
        programName: 'Nursing',
        institution: 'University',
        university: 'Brock University',
        description: 'Brock University’s nursing program is known for its rigorous curriculum, knowledgeable faculty and demanding standards.',
        classSize: '101 - 250 people',
        tuition: '$6,377.65term',
        average: '87%-89%',
        ProgramType: 'Reg/Int/Prac',
      },
      {
        label: 'Nursing\nUniversity of Windsor',
        programName: 'Nursing',
        institution: 'University',
        university: 'University of Windsor',
        description: 'The Faculty of Nursing provides many opportunities for you to gain valuable, hands-on experience that will ensure you receive a well-rounded education founded both in academic theory and real-world application.',
        classSize: '101 - 250 people',
        tuition: '$3,143.60/term',
        average: '85',
        ProgramType: 'Reg/Int/Prac',
      },
    ],
    J: {
      salaryRange: '$65,000 – $75,000',
      automationRisk: '0.7%',
      description: 'Nurses provide and coordinate patient care, educate patients and the public about various health conditions, and provide advice and emotional support to patients and their family members.',
      otherJobs: [],
    },
  }
];