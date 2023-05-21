import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
import ImageTemp from "../../images/prev-project-temp.png";
import FigmaIcon from "../../images/figma-icon.svg";

function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        ‍💻 YOu can see on my github  -<span className="purple-smoke-text">the projects bellow</span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">ARTIZONE</span>
          <p className="gray-text text-box">
            website for intermediation between worker and client
          </p>
          <div className="details-stack">
            <span className="white-text">Tech Used </span>
            <ul className="gray-text">
              <li>Reactjs</li>
              <li>Nodejs</li>
            </ul>
          </div>

          <div className="project-details">
            <div className="details-left"></div>
          </div>
        </div>

        <div className="project-box">
          <span className="white-text">Pokedex</span>
          <p className="gray-text text-box">
            Pokemon application 
          </p>
          <div className="details-stack">
            <span className="white-text">Tech Used </span>
            <ul className="gray-text">
              <li>Flutter</li>
              <li>React</li>
            </ul>
          </div>

          <div className="project-details">
            <div className="details-left"></div>
          </div>
        </div>


        <div className="project-box">
          <span className="white-text">Portfoloio </span>
          <p className="gray-text text-box">
            PortfolioKIBOUCH
          </p>
          <div className="details-stack">
            <span className="white-text">Tech Used </span>
            <ul className="gray-text">
              <li>Threejs</li>
              <li>Reactjs</li>
            </ul>
          </div>

          <div className="project-details">
            <div className="details-left"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
