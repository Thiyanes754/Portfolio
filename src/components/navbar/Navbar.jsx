import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import nav_underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import profile2 from "../../assets/profile2.jpg";

const Navbar = ({ refs }) => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  const scrollToSection = (refKey, menuName) => {
    setMenu(menuName);
    closeMenu();
    if (refs[refKey]?.current) {
      refs[refKey].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      {/* Profile / Logo Section */}
      <div className="profile-container">
        <img className="profileimage" src={profile2} alt="logo" />
        <p>Portfolio</p>
      </div>

      {/* Mobile Open Button */}
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu"
        className="nav-mob-open"
      />

      {/* Navigation Menu */}
      <ul ref={menuRef} className="nav-menu">
        {/* Mobile Close Button */}
        <img
          src={menu_close}
          alt="close"
          className="nav-mob-close"
          onClick={closeMenu}
        />

        <li onClick={() => scrollToSection("homeRef", "home")}>
          <p>Home</p>
          {menu === "home" && <img src={nav_underline} alt="underline" />}
        </li>

        <li onClick={() => scrollToSection("aboutRef", "about")}>
          <p>About Me</p>
          {menu === "about" && <img src={nav_underline} alt="underline" />}
        </li>

        <li onClick={() => scrollToSection("servicesRef", "services")}>
          <p>Services</p>
          {menu === "services" && <img src={nav_underline} alt="underline" />}
        </li>

        <li onClick={() => scrollToSection("workRef", "work")}>
          <p>Portfolio</p>
          {menu === "work" && <img src={nav_underline} alt="underline" />}
        </li>

        <li onClick={() => scrollToSection("contactRef", "contact")}>
          <p>Contact</p>
          {menu === "contact" && <img src={nav_underline} alt="underline" />}
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <button
          className="nav-button"
          onClick={() => scrollToSection("contactRef", "contact")}
        >
          Connect With Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
