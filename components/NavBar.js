/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

export default function NavBar() {
  return (
    <header className="nav-container">
      <nav className="navbar" aria-label="Global"> {/* add a logo of my name on left */}
        <div className="first-teir">
          <div className="logo">
            {/* <span className="sparkle-nav">
              <Image src="/../public/sparklePink.png" width="50%" height="70%" />
            </span> */}
            <Link href="/">
              <a>Tatiana</a>
            </Link>
          </div>
          <div className="nav-tabs">
            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div>
              <Link href="/aboutme">
                <a>About Me</a>
              </Link>
            </div>
            <div>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </div>
            <Link className="btn-div" href="/resume" passHref>
              <button type="button" className="res-btn-nav">
                <a>Resume</a>
              </button>
            </Link>
          </div>
        </div>
        <div className="email-nav">
          <p className="email-nav-txt">tatigbarga@gmail.com</p>
        </div>
      </nav>
    </header>

  );
}
