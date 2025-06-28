import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Contact = ({ refProp }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dc53c678-f0ba-4b99-9bcd-09511e181853");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div ref={refProp} className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="img not found" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently open to exciting new opportunities and projects.
            Whether you have a collaboration in mind or need help bringing your
            vision to life, feel free to reach out—I'm just a message away.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="img not found" />
              <p>thiyanes754@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="img not found" />
              <p>+91 6383183581</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="img not found" />
              <p>Bengaluru, India</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="img not found" />
              <p>
                <a target="_blank" href="http://www.linkedin.com/in/thiyanes754">LinkedIn</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={github} alt="img not found" />
              <p>
                <a target="_blank" href="https://github.com/Thiyanes754">GitHub</a>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
