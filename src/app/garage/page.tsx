"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../core/Footer";

export default function Garage() {
  const rowImages: string[][] = [
    ["/project-1.png", "/project-2.png", "/project-3.png"],
    ["/project-4.png", "/project-7.png", "/project-9.png"],
    ["/project-10.png", "/project-5.png", "/project-8.png"],
  ];

  return (
    <div className="bg-black to-gray-900 min-h-screen">
      {/* Konten Header */}
      <header className="text-white px-4 fixed w-full z-50 bg-gradient-to-br bg-black">
        <div className="flex items-center justify-center">
          <nav>
            <ul className="flex gap-8 text-sm font-medium py-1">
            <li className="py-2 group">
              <Link
                href="/"
                className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative"
              >
                HOME
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
              <li className="py-2 group">
                <Link
                  href="/work"
                  className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative"
                >
                  WORK
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  href="/about"
                  className="text-[#9C9C9C] leading-[1.5] relative"
                >
                  ABOUT
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <h1 className="text-sm font-bold text-center">
                  <span>JUNN</span>
                  <br />
                  GARAGE
                </h1>
              </li>
              <li className="py-2 group">
                <Link href="/garage" className="text-[#9C9C9C] relative">
                  GARAGE
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link href="/resume" className="text-[#9C9C9C] relative">
                  RESUME
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Konten Gallery */}
      <div id="gallery" className="relative w-full h-[150vh] overflow-hidden pt-20">
        <div className="absolute inset-0 flex flex-col gap-12 pt-28">
          {rowImages.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex w-[200%] ${
                rowIndex % 2 === 0
                  ? "animate-scroll-right"
                  : "animate-scroll-left"
              } gap-4`}
            >
              {row.map((image, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="relative w-[20vw] h-[30vh] flex-shrink-0"
                >
                  <Image
                    src={image}
                    alt={`Gallery Image ${rowIndex}-${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}

              {row.map((image, index) => (
                <div
                  key={`${rowIndex}-dup-${index}`}
                  className="relative w-[20vw] h-[30vh] flex-shrink-0"
                >
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
          <div className="flex flex-col gap-0 mb-10">
            <h1 className="text-center font-bold text-[100px] text-[#FFFFFF] mb-1">
              MY
            </h1>
            <h1 className="text-center font-bold text-[100px] font-inter text-[#FFFFFF] mb-1">
              GARAGE
            </h1>
          </div>
          <button className="btn-gallery-cs text-white font-bold text-[42px] font-inter w-[385px] h-[100px] bg-transparent backdrop-blur-md border-2 border-white hover:opacity-90 transition-all duration-300">
            View Garage
          </button>

          {/* <button className="btn-gallery-cs px-8 py-4 text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 border-2 border-white hover:opacity-90 transition-all duration-300">
            View Garage
          </button> */}
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
