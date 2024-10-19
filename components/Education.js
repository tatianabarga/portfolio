import React, { useEffect, useState } from 'react';
import { getAllEducation } from '../utils/data/educationData';

export default function Education() {
  const [educations, setEducations] = useState({});
  const [edArray, setEdArray] = useState([]);

  useEffect(() => {
    getAllEducation().then(setEducations);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setEdArray(Object.values(educations));
  }, [educations]);

  return (
    <div>
      <h2>Education</h2>
      {edArray.map((education) => (
        <div>
          <p>{education.school}</p>
          <p>{education.date}</p>
          <p>{education.description}</p>
        </div>
      ))}
    </div>
  );
}
