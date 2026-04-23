import { useEffect } from "react"
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OpenCards from "./components/ProjectCard";

// import { Toaster } from "./components/ui/toaster";

function App() {


  return (
    <div>
      <Header />
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      
      <Contact />
      <Footer />
      {/* <Toaster /> */}
    </div>
  );
}

export default App;