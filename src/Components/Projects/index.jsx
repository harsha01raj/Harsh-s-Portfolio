import React, { useEffect, useState } from "react";
import "./Projects.css";
import { projects } from "../../sources";
import ProjectCard from "./ProjectCard";
import ProjectNavigation from "./ProjectNavigation";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 600);
  });
  const getTabs = () => {
    const tabs = ["All"];
    projects.map((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
    return tabs;
  };
  const setProjects = (value) => {
    if (value === "All") {
      return setActiveProject(projects);
    }
    const new_projects = projects.filter((item) => item.category === value);
    setActiveProject(new_projects);
  };
  return (
    <section id="projects" data-aos="fade-right" >
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">Projects</span>
          </h1>
        </div>
        <ProjectNavigation tabs={getTabs()} onChange={setProjects} />
        <div className="projects-container">
          {activeProject.map((project, index) => (
            <ProjectCard
              {...project}
              className={load ? "zoom" : ""}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
