import React, { useEffect, useState } from 'react';
import { getEmail, getPhone } from '../utils/data/aboutmeData';
import { getLinkedin } from '../utils/data/linksData';

export default function ContactInfo() {
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
    <div>
      <h2> Email: {email} </h2>
      <h2> Phone: {phone} </h2>
      <h2> LinkedIn: {linkedin} </h2>
    </div>
  );
}
