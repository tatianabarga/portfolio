import React from 'react';
import Projects from '../components/Projects';

export default function projects() {
  return (
    <div className="proj-pg">
      <div className="bg-img-cont-proj">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/clouds.png" className="cloud-img" alt="" />
      </div>
      <div className="proj-pg-cont">
        <div className="sec-header">
          <p className="sec-header-txt">Projects</p>
        </div>
        <div className="project-comp">
          <Projects />
        </div>
      </div>
    </div>
  );
}
