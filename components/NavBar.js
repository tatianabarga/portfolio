/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <header className="nav-container">
      <nav className="navbar" aria-label="Global"> {/* add a logo of my name on left */}
        <div className="logo">
          <span className="sparkle-nav">
            <Image src="/../public/sparkleMulti.png" width="100%" height="100%" />
          </span>
          <Link href="/">
            <a>Tatiana</a>
          </Link>
        </div>
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
        <div>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </div>
        <Link className="btn-div" href="/contact" passHref>
          <button type="button" className="contact">
            <a>Get in touch</a>
          </button>
        </Link>
      </nav>
    </header>

  );
}
