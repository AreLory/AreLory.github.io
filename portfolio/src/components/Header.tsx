import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            // onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
          >
            AreLory
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex relative mx-auto w-fit rounded-full border-2 border-white bg-blue-400 p-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                // onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
                
              </a>
            ))}
          </div>

          <a
            href="#home"
            // onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
          >
            AreLory
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="pt-4 pb-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  // onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
