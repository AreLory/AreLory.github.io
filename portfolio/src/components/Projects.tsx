import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "../mock";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  // const [filter, setFilter] = useState("all");

  // const filteredProjects =
  //   filter === "all"
  //     ? portfolioData.projects
  //     : portfolioData.projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        {/* Button */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === "all"
                ? "bg-linear-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === "featured"
                ? "bg-linear-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            Featured
          </button>
        </motion.div> */}

        {/* Project Card */}
        <div className="">
          <ProjectCard projects={portfolioData.projects}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
