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
    <div>
      <h2> Tatiana Barga </h2>
      <h2> {title} </h2>
      <h2> {description} </h2>
    </div>
  );
}
