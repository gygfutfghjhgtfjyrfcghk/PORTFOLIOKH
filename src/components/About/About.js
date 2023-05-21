import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋KIBOUCH Haytham <span className="purple-smoke-text">- Intro</span>{" "}
        </span>
        <p className="gray-text">
          Hello, my name is Haytham . I have been developing for over 2 years using React and
          Node.js. You can check out my work.{" "}
        </p>
        <span className="white-text">
          <a href="">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li>Web Developer</li>
          <li>Ui/Ux Designer</li>
          <li>Backed Developer</li>
          <li>graphic designer </li>
          <li>Certified Audio  ING</li>
        </ul>
        
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
