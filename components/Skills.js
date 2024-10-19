import React, { useEffect, useState } from 'react';
import { getSoftSkills, getTechSkills } from '../utils/data/skillsData';

export default function Skills() {
  const [softSkills, setSoftSkills] = useState({});
  const [techSkills, setTechSkills] = useState({});
  const [softSkillsArr, setSoftSkillsArr] = useState([]);
  const [techSkillsArr, setTechSkillsArr] = useState([]);

  useEffect(() => {
    getSoftSkills().then(setSoftSkills);
    getTechSkills().then(setTechSkills);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSoftSkillsArr(Object.values(softSkills));
    setTechSkillsArr(Object.values(techSkills));
  }, [softSkills, techSkills]);

  return (
    <div>
      <h2 className="subheader">Skills</h2>
      <div className="sk-cont">
        <div className="sk-subcont">
          <h2 className="subheader">Tech:</h2>
          {techSkillsArr.map((skill) => (
            <div className="skill">
              <div className="skill-txt">
                <p>{skill}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sk-subcont">
          <h2 className="subheader">Soft Skills:</h2>
          {softSkillsArr.map((skill) => (
            <div className="skill">
              <div className="skill-txt">
                <p>{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
