import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          rel="stylesheet"
          href=""
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          rel="stylesheet"
          href=""
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          rel="stylesheet"
          href=""
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="Langs"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          rel="stylesheet"
          href=""
          className="desktopMenuListItem"
        >
          Skills
        </Link>
      </div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-20}
        duration={1000} //in mili seconds
      >
        <div className="desktopMenuBtn">
          <img src={contactImg} alt="contact" className="desktopMenuImg" />{" "}
          Contact Me
        </div>
      </Link>
      <img
        src={menu}
        alt=""
        className="mobmenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          rel="stylesheet"
          href=""
          className="ListItem"
          onClick={() => setShowMenu(!showMenu)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          rel="stylesheet"
          href=""
          className="ListItem"
          onClick={() => setShowMenu(!showMenu)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          rel="stylesheet"
          href=""
          className="ListItem"
          onClick={() => setShowMenu(!showMenu)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="Langs"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          rel="stylesheet"
          href=""
          className="ListItem"
          onClick={() => setShowMenu(!showMenu)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-20}
          duration={1000}
          rel="stylesheet"
          href=""
          className="ListItem"
          onClick={() => setShowMenu(!showMenu)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
