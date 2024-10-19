/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="nav-container">
      <nav className="navbar" aria-label="Global"> {/* add a logo of my name on left */}
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
        <div className="bttn"> {/* Make this look like a button */}
          <Link href="/contact">
            <a>Get in touch</a>
          </Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
    </header>

  );
}
