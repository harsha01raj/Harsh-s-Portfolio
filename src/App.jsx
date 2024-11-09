import { useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import GitCalender from "./Components/GitCalender";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <GitCalender/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
