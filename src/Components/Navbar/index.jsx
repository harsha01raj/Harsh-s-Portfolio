import "./Navbar.css";
import { tabs } from "../../sources";
import { Link } from "react-scroll";
import Logo from "../../Commons/Logo";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import SocialHandles from "../../Commons/SocialHandles";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const downloadResume=()=>{
    window.open("https://drive.usercontent.google.com/u/0/uc?id=1EEKWc65ymsoBJiQiEhowWj-u7CpHshgO&export=download")
  }
  return (
    <nav className="navbar flex">
      {openSidebar ? (
        <div className="overlay" onClick={() => setOpenSidebar(!openSidebar)} />
      ) : (
        ""
      )}
      <Logo />
      <div
        className={`box flex-center tabs-group sidebar ${
          openSidebar ? "visible" : ""
        }`}
      >
        <div
          className="flex-center icon-wrapper cancel-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FaTimes />
        </div>
        {tabs.map((tab, index) => (
          <Link
            to={tab.id}
            smooth={true}
            spy={true}
            className="tab"
            activeClass="active"
            onClick={() => setOpenSidebar(false)}
            key={index}
          >
            {/* {console.log(tab.name)} */}
            {tab.name}
          </Link>
        ))}
      </div>
      <SocialHandles />
      <div className="box flex-center buttons">
        <Link to="contact" smooth={true} className="btn primary contact-btn">
          Hire me
        </Link>
        <Link to="" smooth={true} className="btn services-btn" onClick={downloadResume}>
        ⬇︎ Resume 
        </Link>
        <div
          className="flex-center icon-wrapper menu-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <HiMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
