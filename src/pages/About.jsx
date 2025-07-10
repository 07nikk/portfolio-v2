import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./About.scss";
import profile from "../assets/profile.jpg";

const About = () => {
  const user = useSelector((state) => state.user);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullTitle = "About Me";

  // animation effect for the title that repeats
  useEffect(() => {
    let currentCharIndex = isDeleting ? fullTitle.length : 0;
    let typingSpeed = 100;

    const handleTyping = () => {
      if (isDeleting) {
        if (currentCharIndex > 0) {
          currentCharIndex--;
          setDisplayedTitle(fullTitle.substring(0, currentCharIndex));
          setTimeout(handleTyping, typingSpeed / 2);
        } else {
          setIsDeleting(false);
          setTimeout(handleTyping, 1000); // short pause before typing
        }
      } else {
        if (currentCharIndex < fullTitle.length) {
          currentCharIndex++;
          setDisplayedTitle(fullTitle.substring(0, currentCharIndex));
          setTimeout(handleTyping, typingSpeed);
        } else {
          setIsDeleting(true);
          setTimeout(handleTyping, 1500); // pause before deleting
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [isDeleting]);

  return (
    <div className="about-container">
      <h1 className="typing-title">
        {displayedTitle}
        <span className="cursor">|</span>
      </h1>

      <div className="about-content">
        <div className="about-image">
          <img
            src={profile}
            alt="Portrait of Nikhil Thakur"
            className="placeholder-image"
          />
        </div>

        <div className="about-text">
          <h2>{user.name}</h2>
          <h3>{user.title}</h3>

          <p>
            Hello! I'm a passionate {user.role} with expertise in building
            modern web applications. I specialize in React, Redux, and
            responsive design to create seamless user experiences.
          </p>

          <p>
            With a strong foundation in both frontend and backend technologies,
            I enjoy tackling complex problems and turning ideas into reality
            through clean, efficient code.
          </p>

          <div className="company-experience">
            <h3>Company Experience</h3>
            <ul>
              <li>
                <strong>Wipro</strong> — System Administrator and Software
                Developer roles, managing critical bank servers and developing
                backend services with Node.js and Express.
              </li>
              <li>
                <strong>Infosys</strong> — Software Developer working on REST
                APIs and integrating payment gateways, with a focus on reliable
                and scalable fintech solutions.
              </li>
              <li>
                Hands-on experience with TypeScript, React, Redux, Redis
                caching, and API documentation using Swagger.
              </li>
            </ul>
          </div>

          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">CPP</span>
              <span className="skill-tag">Data Structures and Algorithms</span>
              <span className="skill-tag">Typescript</span>
              <span className="skill-tag">LLD/HLD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
