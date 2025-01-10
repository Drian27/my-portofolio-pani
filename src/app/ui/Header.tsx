import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-5 z-10 relative">
      <nav className="w-full border-none hover:opacity-90 transition-all duration-300 z-10 relative">
        <ul className="flex justify-center items-center gap-8 text-sm font-medium py-1 z-10 relative">
          <li className="py-2 group">
            <Link
              href="/"
              className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
            >
              HOME
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="py-2 group">
            <Link
              href="/about"
              className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
            >
              ABOUT
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <h1 className="text-[22px] text-white font-bold font-inter leading-[1.2] text-center">
              JUNN <br />
              GARAGE
            </h1>
          </li>
          <li className="py-2 group">
            <Link
              href="/garage-two"
              className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
            >
              GARAGE
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="py-2 group">
            <a
              href="https://drive.google.com/file/d/16g94UUZP6An8YJMmiV6bTCo9O8OEzCpG/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
            >
              RESUME
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
