import React, { useEffect, useState } from 'react';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import { getResume } from '../utils/data/linksData';

export default function Resume() {
  const [resume, setResume] = useState({});
  // const [edArray, setEdArray] = useState([]);

  useEffect(() => {
    getResume().then(setResume);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="res-cont">
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Official Resume
        </button>
      </a>
      <Skills />
      <Education />
      <Experience />
    </div>
  );
}
