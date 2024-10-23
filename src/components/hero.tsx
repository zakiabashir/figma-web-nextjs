// pages/index.js

import Image from 'next/image';
import ProfilePic from '../../public/zpic.jpeg'; // Use your image file

export default function Hero() {
  return (
    <div>
      <section className="text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8 lg:px-24 lg:py-16">
          {/* Text Section */}
          <div className="p-4 text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hi, I am ZAKIA BASHIR, Creative Technologist
            </h1>
            <p className="text-gray-600">
              I design and develop digital solutions to solve problems with style and creativity.
            </p>
            <a
              href="/zakia-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-br from-red-600 to-secondary-500 text-black font-bold rounded-full inline-block"
            >
              Download CV
            </a>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center p-5">
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
