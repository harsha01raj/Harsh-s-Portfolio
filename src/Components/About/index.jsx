import React from "react";
import "./About.css";
import { whyChooseMe } from "../../sources";
const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos="fade-left">
            <span className="gradient-text">About Us</span>
          </h1>
          <h4 className="sub-title muted" data-aos="fade-left">
            Hello! I’m Harsh Raj, a dedicated and enthusiastic Full-Stack Web
            Developer with a passion for transforming ideas into digital
            solutions. My journey in tech began with a curiosity for how things
            work behind the scenes of the internet. Today, I specialize in both
            front-end and back-end development, crafting applications that are
            functional, visually appealing, and optimized for the best user
            experience. With a focus on the MERN stack (MongoDB, Express, React,
            Node.js), I’ve developed a skill set that allows me to tackle a
            variety of challenges in web development. From building intuitive
            user interfaces to implementing robust server-side logic, I strive
            to create applications that not only look great but also perform
            flawlessly.
          </h4>
        </div>
        <div className="group">
          {whyChooseMe.map((list, index) => (
            <div
              className="flex-center group-item"
              data-aos="fade-right"
              key={index}
            >
              <div className="flex-center icon-wrapper">{list.icon}</div>
              <h4 className="title">{list.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
