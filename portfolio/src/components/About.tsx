import { motion } from "framer-motion";
import { Code2, Rocket, Zap } from "lucide-react";
import { portfolioData } from "../mock";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code is my priority.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time, every time.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always exploring new technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 ">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-lg leading-relaxed mb-6">
                  {portfolioData.bio}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div>
                    <span className="text-cyan-400 font-semibold">
                      Location:
                    </span>{" "}
                    {portfolioData.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                  <item.icon className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

            {/* Experience/Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Experience
          </h3>
          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl text-white font-semibold ">
                    {exp.position}
                  </h4>
                  <span className="text-cyan-400 text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-500">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
