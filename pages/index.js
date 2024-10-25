import { useEffect, useState } from 'react';
import Certifications from '../components/Certifications';
import ContactInfo from '../components/ContactInfo';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import { getResume } from '../utils/data/linksData';
import Aboutme from '../components/Aboutme';
import Socials from '../components/Socials';
// import Sparkles from '../components/Sparkles';

function Home() {
  const [resume, setResume] = useState({});

  useEffect(() => {
    getResume().then(setResume);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-pg">
      <div className="home-bg-img-cont">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.png" className="portrait-img" alt="" />
      </div>
      <div className="header-sparkles">
        <div className="page-header-home">
          <h2>Tatiana Barga</h2>
        </div>
        {/* <div className="sparkles-comp">
          <Sparkles />
        </div> */}
      </div>

      <div className="aboutme-comp">
        <Aboutme />
      </div>
      <div className="resume-components">
        <div className="skills-contact-sec">
          <div className="skills-comp-home">
            <Skills fromPage="home" />
          </div>
          <div className="cont-comp-home">
            <ContactInfo fromPage="resume" />
          </div>
          <div className="socials-comp-home">
            <Socials className="socials-comp-home" fromPage="home" />
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
        <div className="exp-sec">
          <Experience fromPage="resume" />
        </div>
        <div className="cert-sec">
          <div className="cert-comp">
            <Certifications fromPage="resume" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
