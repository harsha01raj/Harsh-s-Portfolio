import React, { useEffect, useState } from "react";
import "./Achievement.css";
import Odometer from "react-odometerjs";

const Achievement = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClients(0);
      setExperience(1);
      setProjects(21);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="achievement-container">
      <div className="card">
        <div className="flex-center">
          <Odometer value={experience} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted name">Years Experience</p>
      </div>

      <div className="card">
        <div className="flex-center">
          <Odometer value={clients} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted name">Clients Worldwide</p>
      </div>

      <div className="card">
        <div className="flex-center">
          <Odometer value={projects} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted name">Completed Projects</p>
      </div>
    </div>
  );
};

export default Achievement;
