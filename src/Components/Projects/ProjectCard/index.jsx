import React from "react";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({
  title,
  image,
  description,
  stack,
  demoLink,
  className,
  codeLink,
}) => {
  return (
    <div className={`project-card ${className ? className : ""}`}>
      <div className="picture">
        <img src={image} alt={title} />
      </div>
      <div className="details">
        <div className="top">
          <h2 className="title">{title}</h2>
        </div>
      </div>
      <div className="middle">
        <p className="muted description">{description}</p>
      </div>
      <div className="bottom">
        <div className="stack-container">
          <div className="stack-left">Stack</div>
          <div className="stack-right">
            <div className="stack-box-container">
              {stack.map((list, index) => (
                <div className="stack-box" key={index}>
                  <div className="stack-icon-container">
                    <span
                      className="flex-center stack-icon"
                      style={{ color: list.iconColor }}
                    >
                      {list.icon}
                    </span>
                    <span className="stack-name">{list.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="buttons-container">
          <a href={demoLink} target="_blank" className="btn primary">
            Demo
          </a>

          <a href={codeLink} className="flex-center btn btn-share">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
