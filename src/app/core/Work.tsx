"use client";

import React from "react";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Command Center, Desktop App",
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
      title: "Badan Penghubung Kalimantan Timur, Website",
      duration: "Februari - Mei 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim enim penatibus ac mi sagittis diam nec.",
      image: "/project-4.png",
    },
  ];

  return (
    <div
      id="work"
      className="bg-gradient-to-b bg-black to-gray-900 min-h-screen py-10 px-5"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10">
          Highlight Project
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
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
      </div>
    </div>
  );
}
