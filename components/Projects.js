import React, { useEffect, useState } from 'react';
import getAllProjects from '../utils/data/projectsData';

export default function Projects() {
  const [projects, setProjects] = useState({});
  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    getAllProjects().then(setProjects);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProjectsArray(Object.values(projects));
  }, [projects]);

  return (
    <div className="project-sec">
      {projectsArray.map((thisProject) => (
        <div className="project-item">
          <p className="proj-name">{thisProject.name}</p>
          <div className="proj-links">
            {thisProject.deployedProject
              ? (
                <div className="proj-link-item">
                  <a
                    href={thisProject.deployedProject}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="link-txt">Deployed Project</p>
                  </a>
                </div>
              ) : null}
            {thisProject.repoClient
              ? (
                <div className="proj-link-item">
                  <a
                    href={thisProject.repoClient}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="link-txt">Client Repository</p>
                  </a>
                </div>
              ) : null}
            {thisProject.repoServer
              ? (
                <div className="proj-link-item">
                  <a
                    href={thisProject.repoServer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="link-txt">Server Repository</p>
                  </a>
                </div>
              ) : null}
            {thisProject.loom
              ? (
                <div className="proj-link-item">
                  <a
                    href={thisProject.loom}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="link-txt">Demo</p>
                  </a>
                </div>
              ) : null}
          </div>
          <p className="proj-ts">{thisProject.techStack}</p>
          <div className="proj-sk">
            {thisProject.skills.split(', ').map((skill) => (
              <div className="skill-item">{skill}</div>
            ))}
          </div>
          <p className="proj-desc">{thisProject.description}</p>
        </div>
      ))}
    </div>
  );
}
