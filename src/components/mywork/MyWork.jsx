import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = ({ refProp }) => {

  const handleClick = (e, work) => {
    e.preventDefault();

    if (work.name === "Netflix Clone") {
      alert("⚠️ Don’t worry!\n\nThis is a safe test project hosted on Vercel.\n\nIf your browser shows a red warning page like 'Dangerous site', just click:\n\n🔸 'Details' → 'Visit this unsafe site'\n\n✅ Then it will open normally. It’s safe.");
    }

    // Open in a new tab manually
    window.open(work.link, '_blank');
  };

  return (
    <div ref={refProp} className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mywork-card"
            onClick={(e) => handleClick(e, work)}
          >
            <img src={work.w_img} alt={`Project ${index + 1}`} />
          </a>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
