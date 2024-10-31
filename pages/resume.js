import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import { getResume } from '../utils/data/linksData';
import Certifications from '../components/Certifications';
import ContactInfo from '../components/ContactInfo';
import Socials from '../components/Socials';

export default function Resume() {
  const [resume, setResume] = useState({});
  // const [edArray, setEdArray] = useState([]);

  useEffect(() => {
    getResume().then(setResume);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="res-cont">
      <div className="page-header">
        <h2>Resume</h2>
      </div>
      <div className="res-bg-img-cont">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.png" className="portrait-img" alt="" />
      </div>

      <div className="resume-components">
        <div className="skills-sec">
          <div className="socials-comp">
            <Socials fromPage="resume" />
          </div>
          <div className="skills-comp">
            <Skills fromPage="resume" />
          </div>
        </div>
        <div className="ed-sec">
          <div className="resume-btn">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="res-btn-txt">
                View Official Resume
              </button>
            </a>
          </div>
          <div className="ed-comp">
            <Education fromPage="resume" />
          </div>
        </div>
        <div className="exp-sec-res">
          <Experience fromPage="resume" />
        </div>
        <div className="cert-sec">
          <div className="cert-comp">
            <Certifications fromPage="resume" />
          </div>
          <div className="cont-comp">
            <ContactInfo fromPage="resume" />
          </div>
        </div>
      </div>
    </div>
  );
}
