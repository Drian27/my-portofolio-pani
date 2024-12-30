"use client";

import Image from "next/image";

export default function Gallery() {
  const rowImages: string[][] = [
    ["/project-1.png", "/project-2.png", "/project-3.png"], // Baris 1
    ["/project-4.png", "/project-7.png", "/project-9.png"], // Baris 2
    ["/project-10.png", "/project-5.png", "/project-8.png"], // Baris 3
  ];

  return (
    <div id="gallery" className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 flex flex-col gap-6">
        {rowImages.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex w-[200%] ${
              rowIndex % 2 === 0 ? "animate-scroll-right" : "animate-scroll-left"
            } gap-4`}
          >
            {row.map((image, index) => (
              <div key={`${rowIndex}-${index}`} className="relative w-[20vw] h-[30vh] flex-shrink-0">
                <Image
                  src={image}
                  alt={`Gallery Image ${rowIndex}-${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}

            {/* Duplikasi gambar untuk animasi yang mulus */}
            {row.map((image, index) => (
              <div key={`${rowIndex}-dup-${index}`} className="relative w-[20vw] h-[30vh] flex-shrink-0">
                <Image
                  src={image}
                  alt={`Gallery Image ${rowIndex}-${index} (Duplicate)`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full relative z-10 text-center transform translate-y-40">
        <h1 className="text-center text-[#FFFFFF] mb-8 drop-shadow-lg mt-20">
          <span className="block text-5xl sm:text-5xl lg:text-8xl font-bold">MY</span>
          <span className="block text-5xl sm:text-5xl lg:text-8xl font-bold">GALLERY</span>
        </h1>
        <button className="btn-gallery-cs px-8 py-4 text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 border-2 border-white hover:opacity-90 transition-all duration-300">
          GALLERY
        </button>
      </div>

      <div className="shadow top"></div>
      <div className="shadow bottom"></div>

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
