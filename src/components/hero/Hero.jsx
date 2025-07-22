import React from "react";
import "./Hero.css";
import profile4 from "../../assets/profile4.jpg";

const Hero = ({ refProp, contactRef }) => {
  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={refProp} className="hero">
      <img src={profile4} alt="profile" className="portfolio_animate" />

      <h1>
        <span>I'm Thiyanes,</span> a passionate MERN Stack Developer.
      </h1>

      <p>
        I design and develop modern, responsive websites using technologies like
        React, Node.js, and MongoDB.
      </p>

      <div className="hero-action">
        <div className="hero-connect" onClick={handleScrollToContact}>
          Connect With Me
        </div>
        <a
          className="hero-resume"
          href="/Thiyaneswaran_B_Resume.pdf"
          download="Thiyaneswaran_B_Resume.pdf"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
