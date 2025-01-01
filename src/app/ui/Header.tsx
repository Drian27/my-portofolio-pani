import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white px-4 fixed w-full z-50 bg-gradient-to-br bg-black">
      <div className="flex items-center justify-center">
        <nav className="mt-5 my-5">
          <ul className="flex gap-8 text-sm font-medium py-1">
            <li className="py-2 group">
              <Link
                href="/"
                className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative font-inter"
              >
                HOME
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="py-2 group">
              <Link
                href="/work"
                className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative font-inter"
              >
                WORK
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="py-2 group">
              <Link
                href="/about"
                className="text-[#9C9C9C] leading-[1.5] relative font-inter"
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
              <Link
                href="/garage"
                className="text-[#9C9C9C] relative font-inter"
              >
                GARAGE
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="py-2 group">
              <Link
                href="/resume"
                className="text-[#9C9C9C] relative font-inter"
              >
                RESUME
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
