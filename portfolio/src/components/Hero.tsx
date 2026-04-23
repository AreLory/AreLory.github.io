import { motion } from "framer-motion";

import { portfolioData } from "../mock";

import { ArrowDown, MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import me from "../assets/lorenzo.png";

export default function Hero() {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: MailIcon,
  };

  const scrollToSection = (href) => {
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

  return (
    <div
      id="home"
      className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden "
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col mt-8 lg:mt-0 lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1"
        >
          <h1 className="font-bold mb-6 leading-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              My name is
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              {portfolioData.name}
            </span>
          </h1>

          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            {portfolioData.socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={me}
            alt="me"
            className="w-48 sm:w-64 md:w-80 lg:w-full max-w-sm object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {portfolioData.role}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
            {portfolioData.tagline}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button onClick={() => scrollToSection("#about")}>
          <ArrowDown className="text-gray-500 animate-bounce" size={28} />
        </button>
      </div>
    </div>
  );
}
