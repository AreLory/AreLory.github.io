import type { pfData } from "./types/Data";

export const portfolioData: pfData = {
  name: "Lorenzo Arena",
  role: "Full Stack Developer",
  tagline: "Crafting digital experiences with code and creativity",
  bio: "I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  email: "arena.lorenzo2406@gmail.com",
  location: "Pineto (TE), Abruzzo, Italy ",

  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Email", url: "mailto:alex.morgan@example.com", icon: "mail" },
  ],

  skills: [
    { name: "React", category: "Frontend", level: 95 },
    { name: "JavaScript/TypeScript", category: "Frontend", level: 90 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Python", category: "Backend", level: 80 },
    { name: "MongoDB", category: "Database", level: 85 },
    { name: "PostgreSQL", category: "Database", level: 80 },
    { name: "Docker", category: "DevOps", level: 75 },
    { name: "AWS", category: "Cloud", level: 70 },
    { name: "GraphQL", category: "API", level: 85 },
    { name: "REST API", category: "API", level: 90 },
    { name: "Git", category: "Tools", level: 95 },
    { name: "Tailwind CSS", category: "Frontend", level: 90 },
  ],

  projects: [
    {
      id: 1,
      title: "EcoTrack - Sustainability Platform",
      description:
        "A comprehensive platform helping businesses track and reduce their carbon footprint with real-time analytics and AI-powered recommendations.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: [{name:"React", icon:''}],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "FinFlow - Financial Dashboard",
      description:
        "Modern financial management dashboard with real-time data visualization, budget tracking, and predictive analytics for personal finance.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: [{name:"React", icon:''}],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "DevCollab - Team Collaboration Tool",
      description:
        "Real-time collaboration platform for development teams with integrated code review, task management, and video conferencing.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      technologies: [{name:"React", icon:''}],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 4,
      title: "MindSpace - Mental Wellness App",
      description:
        "Mobile-first wellness application offering guided meditation, mood tracking, and personalized mental health resources.",
      image:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=800&q=80",
      technologies: [{name:"React", icon:''}],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "ShopSmart - E-commerce Platform",
      description:
        "Full-featured e-commerce solution with AI-powered product recommendations, inventory management, and seamless checkout.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: [{name:"React", icon:''}],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "CodeLearn - Interactive Learning Platform",
      description:
        "Educational platform with interactive coding challenges, real-time feedback, and gamified learning experiences.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      technologies:[{name:"React", icon:''}],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ],

  experience: [
    {
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      description:
        "Leading development of enterprise applications, mentoring junior developers, and architecting scalable solutions.",
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description:
        "Built and maintained multiple client projects, implemented CI/CD pipelines, and improved application performance.",
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      period: "2018 - 2019",
      description:
        "Developed responsive websites and web applications for various clients using modern JavaScript frameworks.",
    },
  ],
};
