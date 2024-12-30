"use client";

import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
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
                  href="/work"
                  className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative"
                >
                  Work
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  href="/about"
                  className="text-[#9C9C9C] leading-[1.5] relative"
                >
                  About
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
                <Link href="/gallery" className="text-[#9C9C9C] relative">
                  Gallery
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link href="/resume" className="text-[#9C9C9C] relative">
                  Resume
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Konten Gallery */}
      <div
        id="gallery"
        className="relative w-full h-screen overflow-hidden pt-20"
      >
        <div className="absolute inset-0 flex flex-col gap-6">
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
          <h1 className="text-center text-[#FFFFFF] mb-8 drop-shadow-lg mt-20">
            <span className="block text-5xl sm:text-5xl lg:text-8xl font-bold">
              MY
            </span>
            <span className="block text-5xl sm:text-5xl lg:text-8xl font-bold">
              GALLERY
            </span>
          </h1>
          <button className="btn-gallery-cs px-8 py-4 text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 border-2 border-white hover:opacity-90 transition-all duration-300">
            GALLERY
          </button>
        </div>

        <div className="shadow top"></div>
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

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">JUNN GARAGE</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://www.instagram.com/p.maulana72/"
                className="text-[#605DFF] text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[#605DFF] text-2xl">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pani-maulana-nurdwiyansah-b93ab3251/"
                className="text-[#605DFF] text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className="mt-4 text-sm">
              © 2024 Junn Garage | All rights reserved
            </p>
          </div>

          <div className="text-center md:text-right mt-8 md:mt-0">
            <h3 className="text-lg font-semibold">Let’s have a chat!</h3>
            <p className="mt-2 text-sm">
              Feel free to discuss collaboration opportunities or just say
              hello. Please get in touch
            </p>
            <a
              href="mailto:p.nurdwiyansah06@gmail.com"
              className="text-white mt-4 block hover:text-purple-400"
            >
              p.nurdwiyansah06@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
