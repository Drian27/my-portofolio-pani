"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const projects = [
    {
      id: 1,
      title:
        "Integrated communication system to integrate and manage voice, data, and video communication between other work units.",
      duration: "Agustus - Desember 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim enim penatibus ac mi sagittis diam nec.",
      image: "/project-1.png",
    },
    {
      id: 2,
      title: "Command Center, Mobile App",
      duration: "Agustus - Desember 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim enim penatibus ac mi sagittis diam nec.",
      image: "/project-2.png",
    },
    {
      id: 3,
      title: "Nusantara (IKN), Website",
      duration: "Juli - November 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim enim penatibus ac mi sagittis diam nec.",
      image: "/project-3.png",
    },
    {
      id: 4,
      title:
        "Redesigning the hotel room booking process for BANHUB to simplify the user experience",
      duration: "Februari - Mei 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim enim penatibus ac mi sagittis diam nec.",
      image: "/project-4.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b bg-black to-gray-900 min-h-screen pt-28">
      {/* Konten Header */}
      <header className="text-white px-4 fixed w-full z-50 bg-gradient-to-br bg-black">
        <div className="flex items-center justify-center">
          <nav>
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
                  href="/gallery"
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

      {/* Konten Work */}
      <div className="py-10 px-5 max-w-7xl mx-auto pt-20 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-10">
          Highlight Project
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 relative z-10"
            >
              <div className="relative w-full h-56 cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4">{project.duration}</p>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gambar di belakang konten */}
        <div className="img-content-hero-2">
          <div className="content-frame-img-2">
            <img className="frame-img-2" src="./frame-home-2.png" alt="Frame" />
          </div>
        </div>

        {/* Gambar di belakang konten */}
        <div className="img-content-hero-3">
          <div className="content-frame-img-3">
            <img className="frame-img-3" src="./frame-home-3.png" alt="Frame" />
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-black text-white py-8">
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
      </footer> */}
    </div>
  );
}
