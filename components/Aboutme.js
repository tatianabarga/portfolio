import React, { useEffect, useState } from 'react';
import { getDescription, getTitle } from '../utils/data/aboutmeData';

export default function Aboutme() {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    getDescription().then(setDescription);
    getTitle().then(setTitle);
  }, []);

  return (
    <div className="aboutme-cont">
      <div className="aboutme-desc">
        <div className="aboutme-title">
          <h2 className="aboutme-title-txt"> I&apos;m a {title} </h2>
        </div>
        <div className="aboutme-bio">
          <h2 className="aboutme-bio-txt"> {description} </h2>
        </div>
      </div>
    </div>
  );
}
