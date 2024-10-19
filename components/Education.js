import React, { useEffect, useState } from 'react';
import getAllEducation from '../utils/data/educationData';

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
      <div className="ed-cont">
        <div>
          <h2 className="main-header">Education</h2>
          {edArray.map((education) => (
            <div>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <dt>{education.school}</dt>
                  {/* <p className="date">{education.date}</p> */}
                  <dd>{education.description}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
