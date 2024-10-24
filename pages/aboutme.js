import React from 'react';
import ContactInfo from '../components/ContactInfo';
import Aboutme from '../components/Aboutme';
import Socials from '../components/Socials';

export default function aboutme() {
  return (
    <div>
      <div className="aboutme-header">
        <h2 className="aboutme-header-txt"> Hey! I&apos;m Tati </h2>
      </div>
      <div className="bg-img-cont-am">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.png" className="portrait-img-am" alt="" />
      </div>
      <div className="aboutme-comp">
        <Aboutme />
      </div>
      <div className="socials-comp">
        <Socials />
      </div>
      <div className="cont-comp-grid">
        <div className="cont-comp-am cont-comp">
          <ContactInfo fromPage="aboutme" />
        </div>
      </div>
    </div>
  );
}
