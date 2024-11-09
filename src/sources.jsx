import { IoMdAnalytics } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent, MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import {
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaLaptopCode,
  FaLinkedin,
} from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import TATA1mg from "./assets/TATA1mg.jpeg";
import NordStromRack from "./assets/NordStromRack.jpeg";
import JSTimer from "./assets/JSTimer.jpeg";
import GeminiAI from "./assets/GeminiAI.jpeg";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";

export const tabs = [
  { name: "Home", id: "hero" },
  { name: "About Me", id: "about" },
  { name: "Skill", id: "skill" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const whyChooseMe = [
  {
    title: "Unmatched Local Expertise",
    icon: <GrUserExpert />,
    link: "",
  },
  {
    title: "Comprehensive Market Analysise",
    icon: <IoMdAnalytics />,
    link: "",
  },
  {
    title: "Dedicated Client Support",
    icon: <MdOutlineSupportAgent />,
    link: "",
  },
  {
    title: "Innovative Marketing Strategies",
    icon: <RiExchange2Fill />,
    link: "",
  },
];
export const services = [
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode />,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  {
    name: "Content Creation",
    icon: <TfiWrite />,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
];

export const skills = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Intermediate",
      },
      {
        skill: "Redux",
        level: "Intermediate",
      },
      {
        skill: "Git",
        level: "Intermediate",
      },
      {
        skill: "Axios",
        level: " Intermediate",
      },
      {
        skill: "JSON Server",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
      },
      {
        skill: "Express js",
        level: "Intermediate",
      },
      {
        skill: "Mongoose",
        level: "Intermediate",
      },
      {
        skill: "Restful APIs",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Programming Language",
    data: [
      {
        skill: "C",
        level: "Intermediate",
      },
      {
        skill: "C++",
        level: "Intermediate",
      },
      {
        skill: "Java",
        level: "Intermediate",
      },
      {
        skill: "python",
        level: "Intermediate",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Gemini AI",
    image: `${GeminiAI}`,
    category: "AI",
    description: `For this project, you're building a Gemini AI clone using a robust stack of technologies, including React for the frontend, Node.js for the backend, Mongoose and MongoDB for data management, and the Gemini API to power AI-driven features. The application will securely handle signup and login processes, with credentials stored in MongoDB. Additionally, recent searches will be saved and displayed to users based on their roles, allowing for tailored access and data management based on each user's permissions. This project highlights the combination of role-based access control and AI capabilities to deliver a personalized, secure, and efficient user experience.`,
    demoLink: "https://bespoke-churros-5720fb.netlify.app",
    codeLink:"https://github.com/harsha01raj/AI",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 2,
    title: "E-Commerce Application",
    image: `${TATA1mg}`,
    category: "Web",
    description: `For this project, you're creating a clone of Tata 1mg using core web development technologies—HTML, CSS, and JavaScript. The goal is to replicate the user interface and functionalities of the Tata 1mg platform, focusing on intuitive design and smooth user interactions. This project will emphasize responsive layouts, user-friendly navigation, and interactive features to mimic the experience of a real health and wellness platform. By leveraging HTML for structure, CSS for styling, and JavaScript for dynamic functionality, you're creating a polished, accessible, and engaging web application that demonstrates your front-end skills.`,
    demoLink: "https://nimble-moonbeam-7d03af.netlify.app/",
    codeLink:"https://github.com/masai-course/harsh_raj_cap05_206/tree/master/Frontend%20folder/HTML%20and%20CSS/TATA_1mg%20project",
    stack: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        iconColor: "red",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        iconColor: "Yellow",
      },
    ],
  },
  {
    id: 3,
    title: "NordStrom-Rack",
    image: `${NordStromRack}`,
    category: "Web",
    description: `For this project, you’re creating a clone of Nordstrom Rack using React, CSS, and JavaScript. The goal is to replicate the user interface and core functionalities of the Nordstrom Rack platform, focusing on a high-quality user experience and smooth functionality. This project will emphasize responsive design, intuitive navigation, and interactive features to mimic the feel of a real e-commerce site. Leveraging React for component-based structure, CSS for styling, and JavaScript for dynamic interactions, you’re developing a polished, engaging application that showcases your front-end development and design skills, especially in the context of e-commerce.`,
    demoLink: "https://nordstrom-rack-online.netlify.app",
    codeLink:"https://github.com/masai-course/harsh_raj_cap05_206/tree/master/Frontend%20folder/React%20project/Nordstromrack",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        iconColor: "Yellow",
      },
    ],
  },
  {
    id: 4,
    title: "JSTimer",
    image: `${JSTimer}`,
    category: "Web Apps",
    description: `For this project, you’re creating a functional timer using basic HTML, CSS, and JavaScript. The goal is to build a visually appealing and interactive timer that includes start, stop, and reset features, providing a seamless user experience. This project will emphasize clean, minimalistic design through CSS and precise time functionality using JavaScript, enhancing your understanding of DOM manipulation and event handling. By structuring the timer with HTML, styling it with CSS, and adding dynamic functionality through JavaScript, you’re creating a practical, user-friendly tool that demonstrates your front-end skills and ability to build interactive components.`,
    demoLink: "https://creative-parfait-ad3773.netlify.app",
    codeLink:"https://github.com/harsha01raj/Asynchronous/blob/main/Jstimer.html",
    stack: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        iconColor: "red",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        iconColor: "Yellow",
      },
    ],
  },
];

export const contactOptions = [
  {
    title: "Email",
    value: "harshraj810k@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "Phone Number",
    value: "+91 6205286521",
    icon: <IoCallOutline />,
  },
  {
    title: "Address",
    value: "Nurpoor Katra Bazat Patna City",
    icon: <IoLocationOutline />,
  },
];

export const socialHandles = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/hr_gaming_clash/?fbclid=IwAR0900yq9LWCwjJXCgalu0MmsH1TGDxkr251c_DUobPheTNj17PIMyz8tBc",
  },

  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/harsh-raj-49286427a/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/harsha01raj/",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@hr_coding",
  },
];

export const footer = [
  {
    title: "Explore",
    routes: [
      { name: "Home", id: "hero" },
      { name: "About Me", id: "about" },
      { name: "Skill", id: "skill" },
    ],
  },
  {
    title: "Trusted",
    routes: [
      { name: "GitHub Calender", id: "git" },
      { name: "Projects", id: "projects" },
    ],
  },
  {
    title: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
