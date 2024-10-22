import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import getAllExperience from '../utils/data/experienceData';
import { getJobSkills } from '../utils/data/skillsData';

export default function Experience({ fromPage }) {
  const [experiences, setExperiences] = useState({});
  const [jobSkills, setJobSkills] = useState({});
  const [exArray, setExArray] = useState([]);
  const [jsArray, setJsArray] = useState([]);

  useEffect(() => {
    getAllExperience().then(setExperiences);
    getJobSkills().then(setJobSkills);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setExArray(Object.values(experiences));
    setJsArray(Object.values(jobSkills));
  }, [experiences, jobSkills]);

  return (
    <div className={fromPage === 'resume' ? 'exp exp--resume' : 'exp exp--home'}>
      <div className="exp-header">
        <h3 className="header-txt">Experience</h3>
      </div>
      <div className="exp-items-cont">
        {exArray.map((experience) => (
          <div className="exp-item">
            <div className="exp-element">
              <div className="title">
                <span className="sparkle">
                  <Image src="/../public/sparkleDark.png" width="100%" height="100%" />
                </span>
                <p className="date">
                  {experience.date}
                </p>
              </div>
              <div className="info">
                <div className="sub-title">
                  <p className="company">{experience.company}</p>
                  <p className="divider">|</p>
                  <p className="job-title">{experience.jobTitle}</p>
                </div>
                <div className="desc-info">
                  <p className="desc">{experience.description}</p>
                  <p className="desc-bullets">{experience.descBullets}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="exp-sk-cont">
        {jsArray.map((skill) => (
          <div className="exp-skill">
            <div className="exp-sk-txt">
              <p>{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Experience.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
