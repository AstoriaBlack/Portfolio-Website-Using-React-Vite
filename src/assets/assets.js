import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaGamepad, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaPalette, FaRobot, FaCloud } from 'react-icons/fa';

import profileImg from '../assets/AstoriaImg.png';
import aboutImg from '../assets/aboutImg.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.webp';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.webp';
import projectImg5 from '../assets/project5.jpg';
import projectImg6 from '../assets/project6.png';


export const assets = {
    profileImg,aboutImg
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I enjoy developing novel solutions to complex problems using cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are central to everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code that adheres to best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React',  'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Spring', 'Java']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'Firebase']
  },
  {
    title: 'Game Development',
    icon: FaGamepad,
    description: 'Building immersive gaming experiences with modern technologies.',
    tags: ['Unity', 'Blender', 'C#', 'JavaScript']
  },
  {
    title: 'UI/UX Design',
    icon: FaPalette,
    description: 'Creating visually appealing and user-friendly interfaces.',
    tags: ['Figma', 'Adobe XD', 'Sketch', 'Axure']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Docker', 'CI/CD', 'Jest']
  }
];



export const projects = [
  {
    title: "Online Ticketing System",
    description: "A full-featured online ticketing system with user authentication and payment processing.",
    image: projectImg1,
    tech: ["Angular", "SpringBoot", "Java"],
    
    
  },
  {
    title: "LexeraLife - A Mobile App for Dyslexia Support",
    description: "An assistive app with chatbot support, dyslexia-friendly display settings, speech features, calming sounds, and interactive flashcard games.",
    image: projectImg2,
    tech: ["React", "Firebase", "Tensorflow"],
    
    
  },
  {
    title: "Personal Finance Tracker",
    description: "A CRUD-based finance tracker with object-oriented programming and persistent data storage.",
    image: projectImg3,
    tech: ["Python", "MySQL", "Tkinter"],
    
    
  },
  {
    title: "Portfolio Website",
    description: "A 3D portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg6,
    tech: ["Three.js", "Blender", "GSAP"],
    
    
  },
  {
    title: "SDG Website: Life Below Water",
    description: "Team-built informative website with multiple sections aligned with UN SDGs using accessible UI design.",
    image: projectImg5,
    tech: ["HTML", "CSS", "Javascript"],
    
    
  },
  {
    title: "MindLift - A Mental Wellness App Design",
    description: "Designed a user-centric mental wellness application with multiple features.",
    image: projectImg4,
    tech: ["Figma", "User Research", "Wireframing"],
    
    
  }
];

