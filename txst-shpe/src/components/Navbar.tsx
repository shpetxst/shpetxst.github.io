import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'SHPEtinas', href: '/shpetinas' },
  { name: 'Calendar', href: '/calendar'},
  { name: 'Merits', href: '/merits' },
  { name: 'Officers', href: '/officers' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-texas-maroon">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-shpe-orange focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo Section aligned to the left */}
              <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-white text-xl font-bold">TXST SHPE</Link>
                </div>
              </div>

              {/* Navigation Links aligned to the right */}
              <div className="hidden sm:block sm:ml-6 flex-grow">
                <div className="flex items-center justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white hover:bg-texas-gold hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}