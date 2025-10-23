// Area page data for all 10 areas
export const areaPageData = {
  1: {
    title: "Vision, Mission, Goals, and Objectives",
    description:
      "The VMGO effectively integrates the university's aspirations to lead in the global knowledge economy, its mission to nurture leaders through innovative education and impactful research, and its core values that shape the character and vision of the institution and its graduates.",
    focalPerson: {
      name: "Dr. Sherry Joy A. Del Mundo",
      email: "sherry.delmundo@g.batstate-u.edu.ph",
    },
    parametersCount: 2,
  },
  2: {
    title: "FACULTY",
    description:
      "The strength of the BSIT program lies in its highly qualified faculty. Our teaching staff comprises professionals with advanced degrees in finance, accounting, and related fields, many of whom bring real-world experience from leading corporations and institutions.",
    focalPerson: {
      name: "Mr. Joshua C. Abella",
      email: "joshua.abella@g.batstate-u.edu.ph",
    },
    parametersCount: 8,
  },
  3: {
    title: "CURRICULUM AND INSTRUCTION",
    description:
      "The BSIT curriculum is structured to offer a balanced mix of theoretical and practical learning experiences. The core subjects include financial accounting, managerial accounting, corporate finance, and investment analysis.",
    focalPerson: {
      name: "Mr. John Robert D. Atienza",
      email: "johnrobert.atienza@g.batstate-u.edu.ph",
    },
    parametersCount: 6,
  },
  4: {
    title: "SUPPORT TO STUDENTS",
    description:
      "The BSIT program is dedicated to providing a comprehensive and supportive learning environment that nurtures academic success, personal growth, and professional development.",
    focalPerson: {
      name: "Dr. Maria Santos",
      email: "maria.santos@g.batstate-u.edu.ph",
    },
    parametersCount: 4,
  },
  5: {
    title: "RESEARCH",
    description:
      "Research is a vital component of the BSIT program, contributing to the academic and professional development of both students and faculty.",
    focalPerson: {
      name: "Dr. James Cruz",
      email: "james.cruz@g.batstate-u.edu.ph",
    },
    parametersCount: 3,
  },
  6: {
    title: "EXTENSION AND COMMUNITY INVOLVEMENT",
    description:
      "The BSIT program is deeply committed to community involvement and extension services. Through financial literacy programs, business consultancy, and community outreach initiatives.",
    focalPerson: {
      name: "Ms. Anna Reyes",
      email: "anna.reyes@g.batstate-u.edu.ph",
    },
    parametersCount: 4,
  },
  7: {
    title: "LIBRARY",
    description:
      "The university library is an indispensable asset to the BSIT program. Its rich collection of print and digital resources, facilities, and comprehensive services support the academic and research needs of students and faculty.",
    focalPerson: {
      name: "Ms. Patricia Garcia",
      email: "patricia.garcia@g.batstate-u.edu.ph",
    },
    parametersCount: 3,
  },
  8: {
    title: "PHYSICAL PLANT AND FACILITIES",
    description:
      "The physical plant and facilities of the BSIT program are well-equipped to support the academic and professional development of students. With modern classrooms, study areas, and recreational spaces.",
    focalPerson: {
      name: "Engr. Roberto Martinez",
      email: "roberto.martinez@g.batstate-u.edu.ph",
    },
    parametersCount: 4,
  },
  9: {
    title: "LABORATORIES",
    description:
      "The laboratories supporting the BSIT program play a critical role in enhancing students' technical skills, practical knowledge, and analytical capabilities through hands-on learning experiences.",
    focalPerson: {
      name: "Engr. Carlos Ramos",
      email: "carlos.ramos@g.batstate-u.edu.ph",
    },
    parametersCount: 5,
  },
  10: {
    title: "ADMINISTRATION",
    description:
      "The administration plays a pivotal role in ensuring the program's success, quality, and continuous improvement. Through effective leadership, strategic planning, and resource management.",
    focalPerson: {
      name: "Dr. Elizabeth Torres",
      email: "elizabeth.torres@g.batstate-u.edu.ph",
    },
    parametersCount: 4,
  },
};

// Helper function to generate parameters based on count
export function generateParameters(count: number) {
  const parameters = [];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (let i = 0; i < count; i++) {
    parameters.push({
      letter: letters[i],
      title:
        i % 2 === 0
          ? "Statement of Vision, Mission, Goals and Objectives"
          : "Dissemination and Acceptability",
      items: [
        "SYSTEM. Inputs and Processes",
        "IMPLEMENTATION",
        "OUTCOMES",
      ],
    });
  }
  
  return parameters;
}

// Standard files for all areas
export const standardFiles = [
  "OBAQ Instrument for Level 1",
  "Program Performance Profile",
  "Self-Survey",
  "Supplemental Folder",
];
