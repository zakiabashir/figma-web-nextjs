// pages/index.js


import Image from 'next/image';
import ProfilePic from '../../public/zpic.jpeg';  // Use your image file

export default function Hero() {
  return (
    <div>
      
      <section className="text-center m-4  ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-[186px] py-[36px] ">
        <div className="p-2  rounded  ml-16 text-left ">
          <h1 className="text-4xl font-bold mb-4">Hi, I am ZAKIA BASHIR, Creative Technologist</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            I design and develop digital solutions to solve problems with style and creativity.
          </p>
          <a
              href="/assets/nextjs/zakia-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 w-full text-black text-2xl font-bold sm:w-auto rounded-full bg-gradient-to-br from-red-500 via-primary-500 to-secondary-500 text-white text-center"
            >
              
                Download CV

            </a>
          </div>

          <div className="p-5 rounded-full flex justify-center  item-center  ">
          <Image src={ProfilePic} alt="Profile Picture" width={150} height={100} className="rounded-full h-100 w-150 text-center" />
        </div>
        </div>
        </section>
    </div>
  );
}
