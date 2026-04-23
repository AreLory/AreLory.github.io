import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden lg:flex w-full justify-center">
          <Navbar navItems={navItems} />
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-700 hover:text-orange-400 transition-colors z-50"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.div>
        </button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                key="menu"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
                className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-xl p-6 flex flex-col"
              >
                <div className="mt-10 space-y-6">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      onClick={() => {
                        scrollToSection(`#${item.href}`);
                        setIsMobileMenuOpen(false);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block text-lg font-medium text-gray-700 hover:text-orange-400 transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
