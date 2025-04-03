import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getGithub,
  getInstagram,
  getLinkedin,
  getBehance,
} from '../utils/data/linksData';

export default function Socials({ fromPage }) {
  const [gitHub, setGitHub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');
  const [behance, setBehance] = useState('');
  const [classLabel, setClassLabel] = useState('');

  useEffect(() => {
    if (fromPage === 'resume') setClassLabel('socials socials--resume');
    if (fromPage === 'aboutme') setClassLabel('socials socials--aboutme');
    if (fromPage === 'home') setClassLabel('socials socials--home');
  }, [fromPage]);

  useEffect(() => {
    getLinkedin().then(setLinkedIn);
    getGithub().then(setGitHub);
    getInstagram().then(setInstagram);
    getBehance().then(setBehance);
  }, []);

  return (
    // eslint-disable-next-line no-nested-ternary
    <div className={classLabel}>
      <div className="social-item">
        <a
          href={behance}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="cert-txt">Behance</p>
        </a>
      </div>
      <div className="social-item">
        <a
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="cert-txt">GitHub</p>
        </a>
      </div>
      <div className="social-item">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="cert-txt">Instagram</p>
        </a>
      </div>
      <div className="social-item">
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="cert-txt">LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

Socials.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
