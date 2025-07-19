import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile4 from "../../assets/profile4.jpg";

const About = ({ refProp }) => {
  return (
    <div ref={refProp} className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="image not found" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile4} alt="image not found" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a hands-on developer who loves bringing bold ideas to life. I
              explore, experiment, and build from scratch—every line of code I
              write is backed by curiosity and the drive to create seamless user
              experiences.
            </p>

            <p>
              Currently based in Bengaluru and pursuing MERN Stack training, I’m
              building full-stack projects using React, Node.js, Express, and
              MongoDB. Each project I complete is a step forward in writing
              structured, scalable, and maintainable code.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind Css</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>Learning, Building, Growing Every Day</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Technologies Explored</p>
        </div>
      </div>
    </div>
  );
};

export default About;
