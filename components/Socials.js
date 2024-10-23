import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getGithub, getLinkedin } from '../utils/data/linksData';

export default function Socials() {
  const [gitHub, setGitHub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  useEffect(() => {
    getLinkedin().then(setLinkedIn);
    getGithub().then(setGitHub);
  }, []);

  return (
    <div className="socials">
      <div className="social-item">
        <Link
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <p className="cert-txt">GitHub</p>
        </Link>
      </div>
      <div className="social-item">
        <Link
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <p className="cert-txt">LinkedIn</p>
        </Link>
      </div>
    </div>
  );
}
