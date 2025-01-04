"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";

export default function Work() {

  return (
    <div className="bg-gradient-to-b bg-black to-gray-900 min-h-screen pt-28">
      {/* Konten Header */}
      <header className="text-white px-4 fixed w-full z-50 bg-gradient-to-br bg-black">
        <div className="flex items-center justify-center">
          <nav>
            <ul className="flex gap-8 text-sm font-medium py-1">
              <li className="py-2 group">
                <Link href="/" className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative font-inter">
                  HOME
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link href="/work" className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative font-inter">
                  WORK
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link href="/about" className="text-[#9C9C9C] leading-[1.5] relative font-inter">
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
                <Link href="/gallery" className="text-[#9C9C9C] relative font-inter">
                  GARAGE
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link href="/resume" className="text-[#9C9C9C] relative font-inter">
                  RESUME
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Konten Work */}
      <div className="min-h-screen w-full grid grid-cols-1 lg:mt-20 lg:pt-20 px-3 relative z-10 pb-28">
        <div className="w-full grid grid-cols-1">
          <div className="w-[90%] p-3 px-5 ">
            <h1 className="text-4xl font-bold text-white mb-10">Highlight Project</h1>
          </div>
        </div>
        <div className="w-full flex justify-center p-1">
          <Card />
        </div>
      </div>

      <div className="img-content-hero-2">
        <div className="content-frame-img-2">
          <img className="frame-img-2" src="./frame-home-2.png" alt="Frame" />
        </div>
      </div>

      <div className="img-content-hero-3">
        <div className="content-frame-img-3">
          <img className="frame-img-3" src="./frame-home-3.png" alt="Frame" />
        </div>
      </div>

      <div className="img-content-hero-5">
        <div className="content-frame-img-5">
          <img className="frame-img-5" src="./ui-design.png" alt="Frame" />
        </div>
      </div>
    </div>
  );
}
