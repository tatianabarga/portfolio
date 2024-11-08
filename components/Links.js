import React, { useEffect, useState } from 'react';
import {
  getGithub,
  getInstagram,
  getLinkedin,
  getPortfolio,
} from '../utils/data/linksData';
import getAllProjects from '../utils/data/projectsData';

export default function Lins() {
  const [gitHub, setGitHub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    getAllProjects().then((projects) => {
      const sortedProjects = Object.values(projects).sort((a, b) => a.orderNum - b.orderNum);
      setProjectsArray(sortedProjects);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLinkedin().then(setLinkedIn);
    getGithub().then(setGitHub);
    getInstagram().then(setInstagram);
    getPortfolio().then(setPortfolio);
  }, []);

  return (
    // eslint-disable-next-line no-nested-ternary
    <div className="links">
      <div className="social-links link-sec">
        <p className="link-header">Socials</p>
        <div className="link-item">
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="cert-txt">Instagram</p>
          </a>
        </div>
        <div className="link-item">
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="cert-txt">LinkedIn</p>
          </a>
        </div>
      </div>
      <div className="work-links link-sec">
        <p className="link-header">My Work</p>
        <div className="link-item">
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="cert-txt">GitHub</p>
          </a>
        </div>
        <div className="link-item"> {/* TODO: set up */}
          <a href={portfolio}>
            <p className="cert-txt">My Portfolio</p>
          </a>
        </div>
        <div className="proj-sec-links link-sec">
          <p className="link-header">Projects Links</p>
          <div className="project-links">
            {projectsArray.map((thisProject) => (
              <div className="project-item-links">
                <p className="proj-name-links link-subheader">{thisProject.name}</p>
                <div className="links-ts-sec">
                  <div className="proj-links">
                    {thisProject.deployedProject
                      ? (
                        <div className="proj-link-item link-item">
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
                        <div className="proj-link-item link-item">
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
                        <div className="proj-link-item link-item">
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
                        <div className="proj-link-item link-item">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
