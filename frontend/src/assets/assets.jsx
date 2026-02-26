import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa"; 
import { FaTools } from "react-icons/fa"; 
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
// import {lindin} from "../../public/linkdin.jpg"
export const aboutInfo = [
  {
    icon: FaCode,
    title: 'Full Stack Development',
    description: 'Building complete web applications using MongoDB, Express.js, React.js, and Node.js.',
    color: 'text-blue'
  },
  {
    icon: FaServer,
    title: 'REST API Development',
    description: 'Designing secure and scalable RESTful APIs with authentication and authorization.',
    color: 'text-purple'
  },
  {
    icon: FaRocket,
    title: 'Performance Optimization',
    description: 'Optimizing React applications and backend services for speed and efficiency.',
    color: 'text-orange'
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    description: 'Designing and managing MongoDB databases with proper schema structure.',
    color: 'text-green'
  },
  {
    icon: FaMobileAlt,
    title: 'Responsive UI Design',
    description: 'Creating modern, mobile-friendly user interfaces using React and Tailwind CSS.',
    color: 'text-cyan'
  }
]


export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: [
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "React", link: "https://react.dev", icon: FaReact },
      { name: "Tailwind CSS", link: "https://tailwindcss.com" },
      { name: "Bootstrap", link: "https://getbootstrap.com" }
    ]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: [
      { name: "Node.js", link: "https://nodejs.org" },
      { name: "Express", link: "https://expressjs.com" },
      { name: "Socket.io", link: "https://socket.io" },
      { name: "JWT Authentication", link: "https://jwt.io" }
    ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: [
      { name: "MongoDB", link: "https://www.mongodb.com" },
      { name: "Mongoose", link: "https://mongoosejs.com" }
    ]
  },
  {
    title: 'Tools & Deployment',
    icon: FaTools,
    description: 'Managing version control and deploying applications to cloud platforms.',
    tags: [
      { name: "Git", link: "https://git-scm.com" },
      { name: "GitHub", link: "https://github.com" },
      { name: "Vercel", link: "https://vercel.com" },
      { name: "Render", link: "https://render.com" }
    ]
  }
];



export const projects=[
  {
  title: "LinkedIn Clone",
  description:
    "A full-stack LinkedIn clone with real-time posts, authentication, connection requests, and profile management system.",
  image:"/linkdin1.png",
  // tech: ["React","Tailwind", "Node.js","MongoDB"],
  tech: [
      {
        name: "React",
        link: "https://react.dev",
        icon: FaReact,
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com",
        icon: RiTailwindCssFill,
      },
      {
        name: "Node.js",
        link: "https://nodejs.org",
        icon: FaNodeJs,
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com",
        icon: SiMongodb,
      },
    ],
  icons: [FaReact,RiTailwindCssFill,FaNodeJs,SiMongodb],
  demo: "https://linkdinproject-frontend.onrender.com",
  code: "https://github.com/milon1000000/LinkdinProject",
}
]