import { useState } from "react";
import type { Project } from "../types/Data";
interface Props {
  projects: Project[]
}

export default function ProjectCardMobile({ projects }:Props) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="mt-10 flex flex-col gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => setExpandedIndex(index === expandedIndex ? -1 : index)}
          className="relative w-full h-64 rounded-2xl overflow-hidden bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-end">
            <h2 className="text-lg font-bold text-white text-center">
              {project.title}
            </h2>
            <div className="mt-3 flex flex-col items-center gap-3">
              <p className="text-gray-300 text-sm text-center">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 pt-1 rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-0.5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="text-sm px-4 py-0.5 rounded-lg bg-orange-500 text-white"
                >
                  Live
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-sm px-4 py-0.5 rounded-lg bg-white/10 text-white border border-white/20"
                >
                  Code
                </a>
              </div>
            </div>
            )
          </div>
        </div>
      ))}
    </div>
  );
}
