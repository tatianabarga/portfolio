import React, { useEffect, useState } from 'react';
import getAllProjects from '../utils/data/projectsData';

export default function Projects() {
  const [projectsArray, setProjectsArray] = useState([]);
  const [thisProject, setThisProject] = useState(
    {
      name: '',
      techStack: '',
      skills: '',
      description: '',
    },
  );

  useEffect(() => {
    getAllProjects().then((projects) => {
      const sortedProjects = Object.values(projects).sort((a, b) => a.orderNum - b.orderNum);
      setProjectsArray(sortedProjects);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setThisProject(projectsArray[0]);
  }, [projectsArray]);

  const back = () => {
    const arrayCopy = [...projectsArray];
    const newItem = arrayCopy.pop();
    arrayCopy.unshift(newItem);
    setProjectsArray(arrayCopy);
  };

  const forward = () => {
    const arrayCopy = [...projectsArray];
    const currentItem = arrayCopy.shift();
    arrayCopy.push(currentItem);
    setProjectsArray(arrayCopy);
  };

  return (
    <div className="project-sec proj proj--home carousel">
      <div className="arrow-btn left-arr-btn">
        <button type="button" onClick={back}>
          &larr;
        </button>
      </div>
      <div className="project-item">
        <p className="proj-name">{thisProject?.name}</p>
        <div className="links-ts-sec">
          <div className="proj-ts">
            <p className="proj-ts-txt">{thisProject?.techStack}</p>
          </div>
          <div className="proj-links">
            {thisProject?.deployedProject
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
            {thisProject?.repoClient
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
            {thisProject?.repoServer
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
            {thisProject?.loom
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
        </div>
        <div className="proj-sk">
          {thisProject?.skills && thisProject.skills.split(', ').map((skill) => (
            <div className="skill-item">{skill}</div>
          ))}
        </div>
        <p className="proj-desc">{thisProject?.description}</p>
      </div>
      <div className="arrow-btn right-arr-btn">
        <button type="button" onClick={forward}>
          &rarr;
        </button>
      </div>
    </div>
  );
}
