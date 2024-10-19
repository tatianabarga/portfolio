/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="hidden lg:flex lg:flex-1">
          <Link href="/aboutme" className="text-sm font-semibold leading-6 text-gray-900">
            <a>About Me</a>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1">
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <a>Projects</a>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1">
          <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            <a>Contact Info</a>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1">
          <Link href="/resume" className="text-sm font-semibold leading-6 text-gray-900">
            <a>Resume</a>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1">
          <Link href="/home" className="text-sm font-semibold leading-6 text-gray-900">
            <a>Home</a>
          </Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a> */}
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
