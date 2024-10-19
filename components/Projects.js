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
    <div>
      <p className="sec-header">Projects</p>
      {projectsArray.map((project) => (
        <div className="card">
          <p>{project.name}</p>
          <p>{project.techStack}</p>
          <p>{project.skills}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
