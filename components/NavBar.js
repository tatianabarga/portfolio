/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

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
            <div className={collapsed ? 'x x--hidden' : 'x x--shown'} onClick={toggleCollapse}>
              <p>X</p>
            </div>
            <div className={collapsed ? 'coll-item' : 'non-coll-item'}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className={collapsed ? 'coll-item' : 'non-coll-item'}>
              <Link href="/aboutme">
                <a>About Me</a>
              </Link>
            </div>
            <div className={collapsed ? 'coll-item' : 'non-coll-item'}>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </div>
            <div className={collapsed ? 'burger burger--shown' : 'burger burger--hidden'} onClick={toggleCollapse}>
              <span className="b-icon">
                <Image src="/../public/Burger.png" width="20%" height="20%" />
              </span>
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
