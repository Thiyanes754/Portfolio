import React from "react";
import "./Hero.css";
import profile4 from "../../assets/profile4.jpg"

const Hero = ({ refProp, contactRef }) => {
  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={refProp} className="hero">
      <img
        src={profile4}
        alt="image not found"
        className="portfolio_animate"
      />

      <h1>
        <span>I'm Thiyanes,</span> a passionate MERN Stack Developer.
      </h1>

      <p>
        I design and develop modern, responsive websites using technologies like
        React, Node.js, and MongoDB. Focused on writing clean code and bringing
        ideas to life through full-stack web development.
      </p>

      <div className="hero-action">
        <div contactref={contactRef} className="hero-connect" onClick={handleScrollToContact}>
          Connect With Me
        </div>
        <a
          className="hero-resume"
          href="/Thiyaneswaran_resume.pdf"
          download="Thiyaneswaran_B_Resume.pdf"
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
