import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  rhsu,
  cex,
  nesc,
  carrent,
  jobit,
  tripguide,
  threejs,
  rhul
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

{/*list of all titles*/}
const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Supervisor",
    icon: mobile,
  },
  {
    title: "Volunteer",
    icon: backend,
  },
  {
    title: "Blog Author",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

{/*work experience card information*/}
const experiences = [
  {
    title: "Cadet Volunteer",
    company_name: "Northamptonshire Emergency Services Cadets",
    icon: nesc,
    iconBg: "#ffffff",
    date: "October 2017 - October 2020",
    points: [
      "Successfully managed teams of varying sizes to produce creative, efficient solutions to complex challenges, inspiring team members to achieve their best.",
      "Demonstrated exceptional adaptability and flexibility, effectively leading teams through diverse and changing schedules and locations.",
      "Coordinated the receiving and management of deliveries on behalf of charities, ensuring that goods were distributed promptly and effectively.",
      "Developed strong confidence and leadership skills, inspiring team members to challenge themselves and achieve their full potential.",
    ],
  },
  {
    title: "Hardware Tester and Sales Assistant",
    company_name: "CEX",
    icon: cex,
    iconBg: "#E6DEDD",
    date: "October 2019 - August 2021",
    points: [
      "Demonstrated a deep understanding of computer and mobile hardware by testing hardware components individually and in tandem with external computer systems, and completing functionality and performance tests on customer hardware, within a limited time constraint.",
      "Developed outstanding communication skills by interacting effectively with customers and the team and providing clear and concise instructions on how to resolve issues related to software and hardware.",
      "Demonstrated leadership and initiative by taking on responsibilities when needed, effectively managing the team, and resolving issues in the absence of the supervisor.",
    ],
  },
  {
    title: "Supervisor and Shop Assistant",
    company_name: "Union Shop",
    icon: rhsu,
    iconBg: "#ffffff",
    date: "September 2021 - Ongoing",
    points: [
      "Developed strong problem-solving skills by identifying and resolving issues related to missing stock, customer confusion, or faulty software.",
      "Provided exceptional customer service by ensuring high levels of customer satisfaction through excellent sales service, resolving customer issues, and addressing customer inquiries promptly and professionally.",
      "Proficiently utilized data analysis skills to optimize inventory management, streamline ordering processes, conduct accurate stock takes, and interpret daily profit figures, contributing to efficient administrative operations.",
      "Leveraged data analysis techniques to effectively analyze sales trends and customer behavior, enhancing the store's strategic decision-making process.",
    ],
  },
  {
    title: "MSci University Student",
    company_name: "Royal Holloway",
    icon: rhul,
    iconBg: "#E6DEDD",
    date: "September 2021 - Ongoing",
    points: [
      "Developed complex algorithms and logical models in Prolog, demonstrating the ability to work independently and efficiently in tackling intricate programming challenges.",
      "Collaborated on the creation of user-friendly interfaces, database schema design, and seamless integration of features, resulting in an effective tool to streamline restaurant operations.",
      "Participated in a group robotics project, overseeing the end-to-end development of a LeJOS Ev3-based dog robot for multifunctional tasks, highlighting problem-solving, interdisciplinary teamwork, and active contribution across coding and physical construction aspects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };