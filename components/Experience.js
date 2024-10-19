import React, { useEffect, useState } from 'react';
import getAllExperience from '../utils/data/experienceData';

export default function Experience() {
  const [experiences, setExperiences] = useState({});
  const [exArray, setExArray] = useState([]);

  useEffect(() => {
    getAllExperience().then(setExperiences);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setExArray(Object.values(experiences));
  }, [experiences]);

  return (
    <div>
      <h2>Experience</h2>
      {exArray.map((experience) => (
        <div>
          <p>{experience.company}</p>
          <p>{experience.jobTitle}</p>
          <p>{experience.date}</p>
          <p>{experience.skills}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}
