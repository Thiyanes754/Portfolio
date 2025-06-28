import React from "react";
import "./Footer.css";
import profile2 from "../../assets/profile2.jpg";

const Footer = ({ contactRef }) => {
  const handleScrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footerprofile" src={profile2} alt="img not found" />
          <p>
            Outside of coding, I’m a curious learner and visual thinker. I find
            inspiration in design, animations, and storytelling—and I aim to
            blend creativity with logic in everything I build.
          </p>
        </div>
        <div className="footer-top-right">
          <h3>Let’s Collaborate</h3>
          <p>
            Have a cool idea or project? I’d love to work together and bring it
            to life. <br />
            Let’s build something amazing.
          </p>
          <button className="footer-connect-btn" onClick={handleScrollToContact}>
            Start a Conversation
          </button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Thiyanes | MERN Stack Developer. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
