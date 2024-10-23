// components/Header.js
"use client"; // Add this at the top to mark it as a client component

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center py-5 px-10 bg-white shadow-lg">
      <h1 className="text-3xl font-bold">Zakia's Portfolio</h1>

      {/* Mobile Menu Button */}
      <button 
        className="block md:hidden text-xl" 
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Navigation for larger screens */}
      <nav className="hidden md:block">
        <ul className="flex space-x-5">
          <li><Link href="#work">Works</Link></li>
          <li><Link href="#post">Blog</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white p-5`}>
        <ul className="space-y-3 text-center">
          <li><Link href="#work">Works</Link></li>
          <li><Link href="#post">Blog</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
