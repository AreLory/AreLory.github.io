import type { pfData } from "./types/Data";
import insolitopaninoTruck from "./assets/images/furgoncino2.jpg";
import spoonacularImg from "./assets/images/spoonacular.png";
import hakernewsImg from "./assets/images/hakernews.png";

export const portfolioData: pfData = {
  name: "Lorenzo Arena",
  role: "Full Stack Developer",
  tagline:
    "Building modern web applications with clean code and a focus on user experience",
  bio: "I’m a Full Stack Developer with practical experience gained through a Master’s program in Full Stack Development and AI Agents at start2impact. I’m passionate about learning new technologies and continuously improving my skills. I see growth as an ongoing process and a key part of my professional journey.",
  email: "arena.lorenzo2406@gmail.com",
  location: "Pineto (TE), Abruzzo, Italy ",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Arelory",
      icon: "github",
      fromColor: " 	#24292e",
      toColor: " 	#2b3137",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lorenzo-arena-6330903ba/",
      icon: "linkedin",
      fromColor: "#0a66c2",
      toColor: "#004182",
    },
    {
      name: "Email",
      url: "mailto:arena.lorenzo2406@gmail.com",
      icon: "mail",
      fromColor: "#A32E7E",
      toColor: "#E3436B",
    },
  ],

  skills: [
    { name: "React", category: "Frontend", level: 80 },
    { name: "JavaScript/TypeScript", category: "Frontend", level: 80 },
    { name: "Node.js", category: "Backend", level: 75 },
    { name: "Express", category: "Backend", level: 75 },
    { name: "MongoDB", category: "Database", level: 80 },
    { name: "REST API", category: "API", level: 80 },
    { name: "Git", category: "Tools", level: 80 },
    { name: "Axios", category: "Tools", level: 80 },
    { name: "Tailwind CSS", category: "Frontend", level: 80 },
    { name: "Framer Motion", category: "Frontend", level: 70 },
    { name: "Bootstrap", category: "Frontend", level: 65 },
  ],

  projects: [
    {
      id: 1,
      title: "Insolito Panino - Food Truck App",
      description:
        "Full stack web application for managing products and orders in a street food environment. Includes features for creating, updating, and tracking orders in real time.",
      image: insolitopaninoTruck,
      technologies: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "react" },
        { name: "Typescript", icon: "react" },
        { name: "Tailwind CSS", icon: "react" },
        { name: "Vite", icon: "react" },
        { name: "Redux", icon: "react" },
        { name: "Axios", icon: "react" },
        { name: "Express", icon: "react" },
        { name: "MongoDB", icon: "react" },
        { name: "React Router", icon: "react" },
      ],
      liveUrl: "https://insolito-panino.netlify.app/",
      githubUrl: "https://github.com/AreLory/insolito-panino",
      featured: true,
    },
    {
      id: 2,
      title: " Veggie Vibes - Vegetarian Recipes",
      description:
        "Web application that uses the Spoonacular API to discover vegetarian recipes. Users can filter results based on dietary preferences and allergies for a personalized experience.",
      image: spoonacularImg,
      technologies: [
        { name: "React", icon: "react" },
        { name: "Typescript", icon: "react" },
        { name: "Tailwind CSS", icon: "react" },
        { name: "Vite", icon: "react" },
        { name: "Redux", icon: "react" },
        { name: "React Router", icon: "react" },
        { name: "Axios", icon: "react" },
      ],
      liveUrl: "https://arelory.github.io/SpoonacularAPI-Project/",
      githubUrl: "https://github.com/AreLory/SpoonacularAPI-Project",
      featured: true,
    },
    {
      id: 3,
      title: "Haker News",
      description:
        "Web app that fetches and displays the latest tech news from Hacker News in a simple and user-friendly interface.",
      image: hakernewsImg,
      technologies: [
        { name: "Javascript", icon: "react" },
        { name: "CSS", icon: "react" },
        { name: "HTML", icon: "react" },
      ],
      liveUrl: "https://hackernews-arelory.netlify.app/",
      githubUrl: "https://github.com/AreLory/HackerNews",
      featured: false,
    },
  ],

  studies: [
    {
      school: "IIS Adone Zoli",
      period: "2019–2024",
      description:
        "Technical diploma in Agricultural Studies, achieved with good grades.",
    },
    {
      school: "start2impact",
      period: "2025–2026",
      description:
        "Full Stack Development and AI Agents program, focused on hands-on projects, covering technologies such as JavaScript, React, and Node.js.",
    },
  ],
};
