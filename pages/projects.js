import React from 'react';
import ProjectsProjPage from '../components/ProjectsProjPage';

export default function projects() {
  return (
    <div className="proj-pg">
      {/* <div className="bg-img-cont-proj">
         eslint-disable-next-line @next/next/no-img-element //comment this out
        <img src="/clouds.png" className="cloud-img" alt="" />
      </div> */}
      <div className="proj-pg-cont">
        <div className="sec-header">
          <p className="sec-header-txt">Projects and Experience</p>
        </div>
        <div className="project-comp">
          <ProjectsProjPage />
        </div>
      </div>
    </div>
  );
}
