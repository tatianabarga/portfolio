import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getEmail, getPhone } from '../utils/data/aboutmeData';
import { getLinkedin } from '../utils/data/linksData';

export default function ContactInfo({ fromPage }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');

  useEffect(() => {
    getEmail().then(setEmail);
    getPhone().then(setPhone);
    getLinkedin().then(setLinkedin);
  }, []);

  return (
    // TODO: put email and phone next to icons, put linked in as embedded link by icon
    <div className={fromPage === 'resume' ? 'contact-info contact-info--resume' : 'contact-info contact-info--contact'}>
      <div> {email} </div>
      <div> {phone} </div>
      <div>
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <p className="cert-txt"> LinkedIn </p>
        </Link>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
