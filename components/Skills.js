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
      <h2>Skills</h2>
      <h2>Tech:</h2>
      {techSkillsArr.map((skill) => (
        <div>
          <p>{skill}</p>
        </div>
      ))}
      <h2>Soft Skills:</h2>
      {softSkillsArr.map((skill) => (
        <div>
          <p>{skill}</p>
        </div>
      ))}
    </div>
  );
}
