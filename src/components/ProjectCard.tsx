import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../types/Data";

interface Props {
  projects: Project[];
}

export default function ProjectCard({ projects }: Props) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleCardHover = (index:number) => {
    setExpandedIndex(index);
  };

  const cardVariants = {
  expanded: {
    flex: 3,
  },
  collapsed: {
    flex: 1,
  },
}

  return (
    <div className="mt-12 flex flex-col md:flex-row justify-center items-stretch gap-6 px-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`relative cursor-pointer h-125 w-full md:w-75 bg-cover bg-center rounded-2xl overflow-hidden transition-all duration-300 ${
            index === expandedIndex ? "md:w-100" : ""
          }`}
          variants={cardVariants}
          initial="collapsed"
          animate={index === expandedIndex ? "expanded" : "collapsed"}
          transition={{ duration: 0.1 }}
          onHoverStart={() => handleCardHover(index)}
          onHoverEnd={() => setExpandedIndex(0)}
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        >
          <motion.div
            layout
            className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px] flex flex-col justify-end p-4"
          >
            <motion.h2
              layout="position"
              className="text-xl font-bold text-white text-center"
            >
              {project.title}
            </motion.h2>
            {index === expandedIndex && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
                className="mt-3 flex flex-col items-center gap-3"
              >
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium bg-linear-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/40 hover:scale-105 hover:shadow-cyan-400/70 transition-all duration-300"
                  >
                    🚀 Live
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    💻 Code
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
          <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-cyan-400/40 transition-all duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
