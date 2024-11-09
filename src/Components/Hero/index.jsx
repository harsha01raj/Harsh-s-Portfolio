import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import me from "../../assets/me.jpg";
import Achievement from "../../Commons/Achievement";

const Hero = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1EEKWc65ymsoBJiQiEhowWj-u7CpHshgO/view?usp=sharing"
    );
  };
  return (
    <section id="hero">
      <div className="wrapper info-container">
        <div className="column">
          <h3 className="sub-title" data-aos="fade-right">
            Hi, I'm <span className="primary">Harsh raj</span> 👋
          </h3>
          <h1 className="heading-1" data-aos="fade-up">
            A <span className="gradient-text">Fullstack</span> Web Developer
          </h1>
          <p className="muted" data-aos="fade-up" data-aos-delay="200">
            A passionate Full-Stack Developer with a knack for creating
            beautiful, functional, and optimized web experiences. With expertise
            in modern front-end and back-end technologies, I design and develop
            applications that not only meet technical needs but also provide
            great user experiences.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link
              to=""
              smooth={true}
              className="btn primary"
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-offset="50"
              onClick={openResume}
            >
              Resume
            </Link>
            <Link
              to="contact"
              smooth={true}
              className="btn"
              data-aos="fade-left"
              data-aos-delay="1500"
              data-aos-offset="50"
            >
              Get started
            </Link>
          </div>
        </div>
        <div
          className="column hero-image"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src={me} alt="" />
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement />
        </div>
      </div>
    </section>
  );
};

export default Hero;
