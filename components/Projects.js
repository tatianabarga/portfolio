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
