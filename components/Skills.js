import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSoftSkills, getTechSkills } from '../utils/data/skillsData';

export default function Skills({ fromPage }) {
  const [softSkills, setSoftSkills] = useState({});
  const [softSkillsArr, setSoftSkillsArr] = useState([]);
  const [techSkillsArr, setTechSkillsArr] = useState([]);

  useEffect(() => {
    getSoftSkills().then(setSoftSkills);
    getTechSkills().then((skills) => {
      const sortedByKeys = Object.entries(skills)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
        .map(([, value]) => value);
      // Sort tech skills in alphabetical order by key in key value pairs. skills that should be displayed first are created with keys begginning with an 'a'.

      setTechSkillsArr(sortedByKeys);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSoftSkillsArr(Object.values(softSkills));
  }, [softSkills]);

  return (
    <div className={fromPage === 'resume' ? 'skills skills--resume' : 'skills skills--home'}>
      <h2 className="subheader">Skills</h2>
      <div className="sk-cont">
        <div className="sk-subcont">
          {techSkillsArr.map((skill) => (
            <div className="skill skill--tech">
              <div className="skill-txt--tech">
                <p>{skill}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sk-subcont">
          {softSkillsArr.map((skill) => (
            <div className="skill skill--soft">
              <div className="skill-txt--soft">
                <p>{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
