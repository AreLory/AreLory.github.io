import { motion } from "framer-motion";

import { portfolioData } from "../mock";

import me from "../assets/images/lorenzo.png";
import SocialLinks from "./SocialButtons";

export default function Hero() {
  const scrollToSection = (href:string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const buttonVariants = {
    initial: {
      y: 0,
    },
    animate: {},
    hover: {
      y: -10,
    },
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 text-center lg:text-left">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="font-bold leading-tight space-y-2">
            <span className="block text-2xl sm:text-3xl md:text-4xl text-black">
              My name is
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-linear-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <SocialLinks />
          </div>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={me}
            alt="me"
            className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 object-contain"
          />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 max-w-xl"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 bg-linear-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            {portfolioData.role}
          </h2>

          <p className="text-base sm:text-lg text-gray-500 mb-8">
            {portfolioData.tagline}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onClick={() => scrollToSection("#projects")}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-orange-500/60 transition-all"
            >
              View Projects
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onClick={() => scrollToSection("#contact")}
              className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 border-2 border-black rounded-lg font-semibold group"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

              <span className="relative z-10 transition-colors duration-300 font-bold group-hover:text-white">
                Get in touch
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
