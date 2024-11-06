import React from 'react';
import ContactInfo from '../components/ContactInfo';
import Aboutme from '../components/Aboutme';
import Socials from '../components/Socials';

export default function aboutme() {
  return (
    <div>
      <div className="bg-img-cont-am">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.png" className="portrait-img-am" alt="" />
      </div>
      <div className="aboutme-header">
        <h2 className="aboutme-header-txt">
          {'<h2>'}
          &nbsp;Hi,
          {'</h2>'}
        </h2>

      </div>
      <div className="aboutme-comp">
        <Aboutme />
      </div>
      <div className="aboutme-bio">
        Check out my code on GitHub, my art on Instagram, or my Linked In:
      </div>
      <div className="socials-comp">
        <Socials fromPage="aboutme" />
      </div>
      <div className="cont-comp-grid">
        <div className="cont-comp-am cont-comp">
          <ContactInfo fromPage="aboutme" />
        </div>
        <div className="quote ab-q">
          <p> There really isn&apos;t a difficult thing unless you decide it&apos;s a difficult thing. Otherwise it&apos;s just the next thing you&apos;re figuring out.</p>
        </div>
      </div>
    </div>
  );
}
