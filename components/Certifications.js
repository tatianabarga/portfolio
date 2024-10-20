import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import getAllCertifications from '../utils/data/certificationsData';

export default function Certifications() {
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
    <div>
      <div className="cert-cont">
        <div>
          <h2 className="cert-header">Certifications</h2>
          {certArray.map((cert) => (
            <div className="cert">
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
