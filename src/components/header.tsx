// components/Header.js
"use client"; // Add this at the top to mark it as a client component
import Link from 'next/link';

export default function Header() {
  

  return (
    <header className=" z-50 sticky top-0 bg-red-50 flex justify-between items-center py-5 px-10">
      <h1 className="text-3xl font-bold">Zakia&apos;s Portfolio</h1>

      {/* Navigation for larger screens */}
      <nav className=" md:ml-auto  flex flex-wrap items-right text-base justify-end ">
        
          <Link href="#work" className='mr-5 hover:text-blue-600 p-2'>Works</Link>
          <Link href="#post" className='mr-5 hover:text-blue-600 p-2'>Blog</Link>
         <Link href="#contact " className='mr-5 hover:text-blue-600 p-2'>Contact</Link>
        
      </nav>
    </header>
  );
}
