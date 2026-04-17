import { ArrowDown, Mail } from "lucide-react";
import { portfolioData } from "../mock";

const Hero = () => {
  const iconMap = {
    // github: Github,
    // linkedin: Linkedin,
    // twitter: Twitter,
    mail: Mail,
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div
        // ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">{portfolioData.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {portfolioData.role}
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {portfolioData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              // onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              // onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            {portfolioData.socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="cursor-pointer"
          // onClick={() => scrollToSection("#about")}
        >
          <ArrowDown className="text-gray-500" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
