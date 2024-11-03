import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import getAllEducation from '../utils/data/educationData';

export default function Education({ fromPage }) {
  const [edArray, setEdArray] = useState([]);

  useEffect(() => {
    getAllEducation().then((eds) => {
      const sortedEds = Object.values(eds).sort((a, b) => a.orderNum - b.orderNum);
      setEdArray(sortedEds);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={fromPage === 'resume' ? 'ed ed--resume' : 'ed ed--home'}>
      <h2 className="main-header">Education</h2>
      <div className="ei-cont">
        {edArray.map((education) => (
          <div className="ed-item">
            <div className="title">
              <span className="sparkle">
                <Image src="/../public/sparkleDark.png" width="100%" height="100%" />
              </span>
              <p className="school">
                {education.school}
              </p>
            </div>
            {/* <p className="date">{education.date}</p> */}
            <div className="desc">{education.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Education.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
