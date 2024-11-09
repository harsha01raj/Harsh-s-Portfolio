import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalender = () => {
  return (
    <section id="git">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos="fade-left">
            <span className="gradient-text">Git Calendar</span>
          </h1>
        </div>
        <div data-aos="fade-right">
          <GitHubCalendar username="harsha01raj" style={{ margin: "0 auto" }} />
        </div>
      </div>
    </section>
  );
};

export default GitCalender;
