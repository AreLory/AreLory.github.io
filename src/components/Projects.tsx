import { motion } from "framer-motion";

import { portfolioData } from "../mock";

import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="py-24 "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>
        <div className="hidden md:block">
          <ProjectCard projects={portfolioData.projects} />
        </div>

        <div className="md:hidden">
          <ProjectCardMobile projects={portfolioData.projects} />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
