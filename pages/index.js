// import { useEffect, useState } from 'react';
import Certifications from '../components/Certifications';
// import ContactInfo from '../components/ContactInfo';
import Education from '../components/Education';
import Projects from '../components/Projects';
// import Experience from '../components/Experience';
import Skills from '../components/Skills';
// import { getResume } from '../utils/data/linksData';
import Aboutme from '../components/Aboutme';
import Socials from '../components/Socials';
// import Sparkles from '../components/Sparkles';

function Home() {
  // const [resume, setResume] = useState({});

  // useEffect(() => {
  //   getResume().then(setResume);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="home-pg">
      <div className="home-hero-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/HERO.png" className="hero-img" alt="" />
      </div>
      <div className="home-bg-img-cont">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.png" className="portrait-img" alt="" />
      </div>
      <div className="header-sparkles">
        <div className="page-header-home">
          <h2>Hey! I&apos;m Tati..</h2>
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
          <div className="skills-comp-alt">
            <Skills fromPage="home" />
          </div>
          <div className="socials-comp-home">
            <Socials className="socials-comp-home" fromPage="home" />
          </div>
          {/* <div className="cont-comp-home">
            <ContactInfo fromPage="resume" />
          </div> */}
        </div>
        <div className="quote res-q">
          <p> There really isn&apos;t a difficult thing unless you decide it&apos;s a difficult thing. Otherwise it&apos;s just the next thing you&apos;re figuring out.</p>
        </div>
        <div className="proj-sec-home">
          <p className="proj-header-home">Projects and Experience</p>
          <div className="proj-comp-cont">
            <Projects />
          </div>
        </div>

        <div className="cert-sec">
          <div className="resume-btn-home">
            <a href="/resume.pdf" download="Tatiana-Barga-Resume.pdf">
              <button type="button" className="res-btn-txt">
                Download Resume
              </button>
            </a>
          </div>
          <div className="cert-comp">
            <Certifications fromPage="home" />
          </div>
        </div>
        <div className="ed-sec">
          <div className="ed-comp">
            <Education fromPage="resume" />
          </div>
        </div>
        {/* <div className="exp-sec">
          <Experience fromPage="resume" />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
