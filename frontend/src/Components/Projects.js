import React from "react";
import { data } from "../data/all";

const Projects = () => {
  return (
    <div className="projects">
      <div className="grid-container">
        {data.map((project) => (
          <div className="card-container" key={`proj-${project.id}`}>
            <div className="card">
              <div className="side front">
                <div className="card-title">
                  <h2>{project.title}</h2>
                  <div className="underline"></div>
                </div>
                <img src={project.img} alt="project" />
              </div>
              <div className="side back">
                <div className="back-container">
                  <div className="back-top featured-project-tech">
                    {project.technologies.map((x, i) => (
                      <div key={`tec-${i}`}>{x}</div>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--white"
                  >
                    goto link
                  </a>
                  {project.giturl && (
                    <a
                      href={project.giturl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-git"
                    ><span>{"<"} </span>
                      <i className="fab fa-github"></i>{" "}
                      <span> {"/>"}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
