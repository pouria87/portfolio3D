export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Reza Rhnama',
    position: 'CKO at Vanex currency Exchange',
    img: 'assets/review1.jpg',
    review:
      'Working with Pouria was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mostafa Jalam',
    position: 'Senior Dev ops Engineer',
    img: 'assets/review2.jpg',
    review:
      'Pouria’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: `Amir Baba'Ali`,
    position: 'Technical Lead at Dotin',
    img: 'assets/review3.jpg',
    review:
      'I can’t say enough good things about Pouria. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
];

export const myProjects = [
  {
    title: 'liveLight - Real-Time City Lighting Dashboard',
    desc: ' liveLight is a cutting-edge real-time dashboard that transforms the way city lighting systems are monitored and managed. Unlike traditional lighting management systems, liveLight allows administrators to oversee and control millions of streetlights and public lighting units simultaneously, with precise real-time data and updates.',

    subdesc:
      'Built with Next.js and React latest features, liveLight ensures instant synchronization of lighting data across multiple locations. Whether it’s adjusting lighting schedules, detecting faulty units, or optimizing energy usage, the dashboard provides an intuitive and responsive interface for Mashhad-city administrators.',

    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/liveLight.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/JavaScript.png',
      },
    ],
  },
  {
    title: 'karafs - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, and React that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/karafs.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/JavaScript.png',
      },
    ],
  },
  {
    title: 'Faradars - Online school Platform',
    desc: 'Horizon is a comprehensive online school platform that offers students, teachers, and parents a seamless management dashboard. It allows users to connect multiple courses, classes, and teamwork .',
    subdesc: 'Built with Next.js and React.',
    href: '',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/faradars.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/JavaScript.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -5, 0] : [0.25, -6.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Bina Pardaz',
    pos: 'React Web Developer',
    duration: '2022 - Present',
    title:
      'Develop and maintain web applications using React.js. Collaborate with cross-functional teams, write clean code, debug, and optimize performance. Familiarity with JavaScript, APIs, and version control required.',
    icon: '/assets/bina.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'RMTTI',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Assist in building and maintaining websites using HTML, CSS, and JavaScript. Collaborate with designers and senior developers to implement responsive designs. Basic knowledge of frameworks and version control is helpful.',
    icon: '/assets/RMTTI.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Etic',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'Support development teams by writing and testing code. Learn software development processes, assist with debugging, and participate in code reviews. No prior experience necessary; willingness to learn is essential.',
    icon: '/assets/etic.png',
    animation: 'salute',
  },
];
