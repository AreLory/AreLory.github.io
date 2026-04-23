import { motion } from "framer-motion";

import { Heart, MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolioData } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              {portfolioData.name}
            </h3>
            <p className="text-gray-400 mb-4">{portfolioData.tagline}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {portfolioData.socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-orange-400 hover:border-orange-400 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with{" "}
              <Heart size={16} className="text-orange-400 fill-orange-400" /> and
              lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
