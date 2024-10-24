import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getGithub, getInstagram, getLinkedin } from '../utils/data/linksData';

export default function Socials({ fromPage }) {
  const [gitHub, setGitHub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');

  useEffect(() => {
    getLinkedin().then(setLinkedIn);
    getGithub().then(setGitHub);
    getInstagram().then(setInstagram);
  }, []);

  return (
    <div className={fromPage === 'resume' ? 'socials socials--resume' : 'socials socials--home'}>
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
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="cert-txt">LinkedIn</p>
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
    </div>
  );
}

Socials.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
