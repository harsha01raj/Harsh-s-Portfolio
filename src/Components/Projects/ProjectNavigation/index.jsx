import React, { useEffect, useRef, useState } from "react";
import "./ProjectNavigation.css";
import Aos from "aos";

const ProjectNavigation = ({ tabs, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]); // Initialize as an empty array

  const sumArray = (arr) => arr.reduce((sum, item) => sum + item, 0);

  useEffect(() => {
    if (itemsEls.current[activeIndex]) {
      Aos.refreshHard();
      const prevElWidths = itemsEls.current
        .slice(0, activeIndex)
        .map((item) => item.offsetWidth);
      setOffset(sumArray(prevElWidths));
      setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
    }
  }, [activeIndex, itemsEls.current]);

  return (
    <nav className="project-navigation">
      {tabs.map((tab, index) => (
        <button
          ref={(el) => (itemsEls.current[index] = el)}
          onClick={() => {
            setActiveIndex(index);
            onChange(tab);
            Aos.refreshHard();
          }}
          key={index}
          className={`tab-button ${activeIndex === index ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
      <span
        className="indicator"
        style={{
          left: `${offset}px`,
          width: `${indicatorWidth}px`,
        }}
      />
    </nav>
  );
};

export default ProjectNavigation;
