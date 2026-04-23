import { motion } from "framer-motion";
import { Code2, Puzzle, Zap } from "lucide-react";
import { portfolioData } from "../mock";

import curriculum from "../assets/pdf/CV-Lorenzo.pdf";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "I focus on writing maintainable, scalable, and efficient code.",
    },
    {
      icon: Puzzle,
      title: "Problem Solving",
      description:
        "I enjoy tackling challenges and finding effective solutions.",
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description:
        "I’m always exploring new technologies and improving my skills.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="about"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 ">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  {portfolioData.bio}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div>
                    <span className="text-orange-500 font-semibold">
                      Location:
                    </span>{" "}
                    {portfolioData.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 group-hover:border-orange-500/50">
                  <item.icon className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center pb-8">
          <motion.a
            initial={{y:0}}
            whileHover={{y:-10}}
            download
            href={curriculum}
            className="px-6 py-3 w-60 sm:px-8 sm:py-4 bg-linear-to-r text-center from-orange-500 to-red-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-orange-500/70 cursor-pointer"
          >
            Download CV
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-black">
            Studies
          </h3>
          <div className="space-y-6">
            {portfolioData.studies.map((st, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl text-gray-700 font-semibold ">
                    {st.school}
                  </h4>
                  <span className="text-orange-400 text-sm font-medium">
                    {st.period}
                  </span>
                </div>
                <p className="text-gray-500">{st.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
