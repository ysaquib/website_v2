import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yusuf Saquib | Computer Science Student', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// NAVIGATION BAR
export const headerData = {
  logo: '',
  quicklinks: [
    {
      id: nanoid(),
      title: 'About',
      link: 'about',
    },
    {
      id: nanoid(),
      title: 'Projects',
      link: 'projects',
    },
    {
      id: nanoid(),
      title: 'Contact',
      link: 'contact',
    },
  ],
  btn: 'Resume',
  resume: 'https://www.google.com/',
}

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Yusuf Saquib.',
  subtitle: 'I make things for fun.',
  cta: 'See My Resume',
  paragraph: 'I am a Junior Computer Science student studying at Carnegie Mellon University with a minor in Business Administration, expected to graduate in the Spring of 2022.',
  resume: 'https://www.resumemaker.online/es.php',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello! My name is Yusuf, and I am a Computer Science student at Carnegie Mellon University, minoring in Business Administration. I am expected to graduate in the Spring of 2022.',
  paragraphTwo: 'I love building and creating things, whether it be applications, software for embedded systems, and everything in between! My goal is to create products that are seamless down to the last inch.',
  paragraphThree: 'Here are some of the technologies I\'ve been working with recently:',
  technologies: [
    {
      id: nanoid(),
      name: 'Python',
    },
    {
      id: nanoid(),
      name: 'C',
    },
    {
      id: nanoid(),
      name: 'Assembly',
    },
    {
      id: nanoid(),
      name: 'Node.js',
    },
    {
      id: nanoid(),
      name: 'React',
    },
    {
      id: nanoid(),
      name: 'Raspberry Pi',
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    url: 'https://www.google.com',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Node'},
            {id: nanoid(), name: 'React'},
            {id: nanoid(), name: 'Node'}, ],
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    url: 'https://www.google.com',
    repo: '', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Node'},
            {id: nanoid(), name: 'React'},
            {id: nanoid(), name: 'Node'}, ],
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    url: '',
    repo: '#', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Node'},
            {id: nanoid(), name: 'React'},
            {id: nanoid(), name: 'Node'}, ],
  },
];

// MORE PROJECTS DATA
export const moreProjectsData = [
  {
    id: nanoid(),
    title: 'Website Version 2',
    year: 'JUL 2020',
    info: 'The second iteration of my professional website. Created using a lot of custom JS, HTML, and CSS from a basic starter from GatsbyJS.',
    url: 'http://www.yusufsaquib.com',
    repo: 'https://github.com/ysaquib/ysaquib_website2', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Node.js'},
            {id: nanoid(), name: 'React'},
            {id: nanoid(), name: 'GatsbyJS'},],
  },
  {
    id: nanoid(),
    title: 'TEDx Dafna Website',
    year: 'JAN 2020',
    info: 'Created the TEDx Youth - Al Dafna website using a template and custom JS code to fit the needs of the hosts at Virginia Commonwealth University Qatar.',
    url: '',
    repo: '', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'HTML'},
            {id: nanoid(), name: 'CSS'},
            {id: nanoid(), name: 'Javascript'}, ],
  },
  {
    id: nanoid(),
    title: 'Digital Canvas',
    year: 'DEC 2019',
    info: 'A project for an Embedded Systems course which uses Ultrasonic Sensors and Servo motors to track an object on a plane and draws the object\'s path on a Python interface using serial communication.',
    url: '',
    repo: 'https://github.com/ysaquib/DigitalCanvas', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'C'},
            {id: nanoid(), name: 'Assembly'},
            {id: nanoid(), name: 'Python'},
            {id: nanoid(), name: 'TI Launchpad'}, ],
  },
  {
    id: nanoid(),
    title: 'Melakia Clothing',
    year: 'NOV 2019',
    info: 'Melakia is a passion project where I create stunning Arabic Calligraphy designs and sell them as hoodies, t-shirts, etc!',
    url: 'https://www.melakia.com',
    repo: '', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Shopify'},
            {id: nanoid(), name: 'Adobe Illustrator'},
            {id: nanoid(), name: 'Liquid'}, ],
  },
  {
    id: nanoid(),
    title: 'IR Signal Decoder',
    year: 'OCT 2019',
    info: 'Decoded an IR signal to perform an action using only C and no libraries. Made as a project for an Embedded Systems course.',
    url: '',
    repo: '', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'C'},
            {id: nanoid(), name: 'TI Launchpad'}, ],
  },
  {
    id: nanoid(),
    title: 'WhatsApp Chat Analyzer',
    year: 'JUN 2019',
    info: 'A simple Python script to analyze chat exports from WhatsApp and creates an Excel spreadsheet to visualize different features of the chats.',
    url: '',
    repo: 'https://github.com/ysaquib/WhatsApp-ChatAnalyzer', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Python'}, ],
  },
  {
    id: nanoid(),
    title: 'C0 Virtual Machine',
    year: 'APR 2019',
    info: 'The C0 Virtual Machine was a project for a Computer Science Course at Carnegie Mellon University. I wrote it all in Assembly and created a Virtual Machine for C0, which is a derivative of C.',
    url: '',
    repo: '', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Assembly'}, ],
  },
  {
    id: nanoid(),
    title: 'Eventify',
    year: 'MAR 2019',
    info: 'An MVP of an event marketing web application that displays events that people can attend and catering to their preferences. Made as a project for an entrepreneurship course.',
    url: '',
    repo: '', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Javascript'},
            {id: nanoid(), name: 'HTML'},
            {id: nanoid(), name: 'CSS'}, ],
  },
  {
    id: nanoid(),
    title: 'Website Builder',
    year: 'DEC 2018',
    info: 'A simple What You See Is What You Get website building tool made with Python. Elements can be dragged around and edited.',
    url: '',
    repo: 'https://github.com/ysaquib/WebsiteBuilder', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Python'},
            {id: nanoid(), name: 'HTML'},
            {id: nanoid(), name: 'CSS'}, ],
  },
  {
    id: nanoid(),
    title: 'Website Version 1',
    year: 'SEP 2018',
    info: 'The first iteration of my professional website. This website was made using some custom HTML and CSS along with a starter from Hugo.io.',
    url: '',
    repo: 'https://github.com/ysaquib/ysaquib_website', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Hugo.io'},
            {id: nanoid(), name: 'HTML'}, ],
  },
  {
    id: nanoid(),
    title: 'HUDEdit Version 3',
    year: 'APR 2018',
    info: 'The third iteration of my HUDEdit software. This version was made to improve the UI and performance, as the SWT library is severely outdated. In addition, I optimized the code and cleaned up some bugs.',
    url: '',
    repo: 'https://github.com/ysaquib/HUDEdit-Version3', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Java'},
            {id: nanoid(), name: 'JavaFX'}, ],
  },
  {
    id: nanoid(),
    title: 'HUDEdit Version 2',
    year: 'MAR 2017',
    info: 'The second iteration of my HUDEdit software. Since the last version, I finished the drag and drop functionality and added color configuration. In addition, performance was significantly improved.',
    url: '',
    repo: 'https://github.com/ysaquib/HUDEdit-2.0', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Java'},
            {id: nanoid(), name: 'Java SWT'}, ],
  },
  {
    id: nanoid(),
    title: 'HUDEdit InDev',
    year: 'DEC 2016',
    info: 'The first iteration of my HUDEdit software. This program uses a drag and drop feature to edit the Heads Up Display of a videogame and outputs a config file the game can read!',
    url: '',
    repo: 'https://github.com/ysaquib/HUDEdit_InDev', // if no repo, the button will not show up
    tech: [ {id: nanoid(), name: 'Java'},
            {id: nanoid(), name: 'Java SWT'}, ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'yusufsaquib@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
