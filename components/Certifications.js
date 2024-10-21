import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import getAllCertifications from '../utils/data/certificationsData';

export default function Certifications({ fromPage }) {
  const [certs, setCerts] = useState({});
  const [certArray, setCertArray] = useState([]);

  useEffect(() => {
    getAllCertifications().then(setCerts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCertArray(Object.values(certs));
  }, [certs]);

  return (
    <div className={fromPage === 'resume' ? 'cert cert--resume' : 'cert cert--home'}>
      <div className="cert cert-cont">
        <h2 className="cert cert-header">Certifications</h2>
        <div className="cert ci-cont">
          {certArray.map((cert) => (
            <div className="cert cert-item">
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <p>{cert.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Certifications.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
