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
      <div className="cont-item-cont">
        <div className="cont-item">
          <div>
            {email}
          </div>
        </div>
        <div className="cont-item">
          <div>
            {phone}
          </div>
        </div>
        <div className="cont-item">
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <div>
              <p className="cert-txt"> LinkedIn </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  fromPage: PropTypes.string.isRequired,
};
