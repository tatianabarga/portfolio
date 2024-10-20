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
    <div className="ex-cont">
      <div className="ex-header">
        <h3 className="">Experience</h3>
      </div>
      {exArray.map((experience) => (
        <div>
          <dl className="divide-y divide-gray-100">
            <div className="ex-element px-4 py-6 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0">
              <dt className="ex-title text-sm font-medium leading-6 text-gray-900">{experience.date}</dt>
              <div className="ex-desc col-span-5">
                <dd>{experience.company}</dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2">{experience.jobTitle}</dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2">{experience.description}</dd>
              </div>

            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
