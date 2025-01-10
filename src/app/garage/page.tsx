"use client";

import Image from "next/image";

export default function Garage() {
  const rowImages: string[][] = [
    ["/project-1.png", "/project-2.png", "/project-3.png", "/project-4.png"],
    ["/project-5.png", "/project-6.png", "/project-7.png", "/project-8.png"],
    ["/project-9.png", "/project-10.png", "/project-11.png", "/project-12.png"],
  ];

  return (
    <div className="bg-black to-gray-900 min-h-screen">
      <div id="gallery" className="relative w-full h-[150vh] overflow-hidden pt-20">
        <div className="absolute inset-0 flex flex-col lg:gap-12 gap-1 pt-28">
          {rowImages.map((row, rowIndex) => (
            <div key={rowIndex} className={`flex w-full sm:h-[12%] lg:h-[23%] sm:w-full lg:w-[100%] ${rowIndex % 2 === 0 ? "animate-scroll-right" : "animate-scroll-left"} gap-2 lg:gap-4`}>
              {row.map((image, index) => (
                <div key={`${rowIndex}-${index}`} className="relative w-[20vw] h-[30vh] flex-shrink-0">
                  <Image src={image} alt={`Gallery Image ${rowIndex}-${index}`} layout="fill" className="rounded-lg lg:object-cover object-contain sm:w-full sm:h-auto" />
                </div>
              ))}

              {row.map((image, index) => (
                <div key={`${rowIndex}-dup-${index}`} className="relative w-[20vw] h-[30vh] flex-shrink-0">
                  <Image src={image} alt={`Gallery Image ${rowIndex}-${index} (Duplicate)`} layout="fill" className="rounded-lg lg:object-cover object-contain sm:w-full sm:h-auto" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full relative z-10 text-center transform translate-y-40">
          <div className="flex flex-col gap-0 mb-1 lg:mb-10 mt-cs-mobile">
            <h1 className="text-center font-bold text-[36px] lg:text-[100px] text-[#FFFFFF] mb-0 lg:mb-1">MY</h1>
            <h1 className="text-center font-bold text-[36px] lg:text-[100px] font-inter text-[#FFFFFF] mb-2 lg:mb-1">GARAGE</h1>
          </div>
          <button className="btn-gallery-cs text-white font-bold text-[20px] lg:text-[42px] font-inter w-[180px] h-[45px] lg:w-[385px] lg:h-[100px] bg-transparent backdrop-blur-md border-2 border-white hover:opacity-90 transition-all duration-300">View Garage</button>
        </div>

        <div className="shadow top"></div>
        <div className="shadow center"></div>
        <div className="shadow bottom"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-10%);
          }
        }

        @keyframes scroll-horizontal-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-10%);
          }
        }

        .animate-scroll-right {
          animation: scroll-horizontal-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-horizontal-right 30s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}