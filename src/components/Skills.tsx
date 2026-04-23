import { motion } from "framer-motion";
import { portfolioData } from "../mock";

const Skills = () => {
  const skillCategories = [
    ...new Set(portfolioData.skills.map((skill) => skill.category)),
  ];

  const getSkillsByCategory = (category) => {
    return portfolioData.skills.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-linear-to-b from-orange-500 to-red-500 rounded-full" />
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {getSkillsByCategory(category).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-orange-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                        className="absolute left-0 top-0 h-full bg-linear-to-r from-orange-500 to-red-500 rounded-full"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-gray-700 text-lg">
                Always learning and exploring new technologies to stay at the
                cutting edge of development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
