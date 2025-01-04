import React from "react";
import Image from "next/image";

const Card = () => {
  const projects = [
    {
      id: 1,
      title: "Integrated communication system to integrate and manage voice, data, and video communication between other work units.",
      date: "August - December 2023",
      description: "This technology enables fast and efficient information exchange between military leaders and troops in the field.",
      image: "/card-portfolio-1.png",
    },
    {
      id: 2,
      title: "monitor the training schedule and report the training results",
      date: "August - December 2023",
      description: "reporting training results becomes easy and efficient anywhere and anytime",
      image: "/card-portfolio-2.png",
    },
    {
      id: 3,
      title: "Smart building data available in the Capital City of Nusantara, Indonesia.",
      date: "July - Nov 2024",
      description: "Managing smart building data in the Capital City of Nusantara, Indonesia, for use by state officials.",
      image: "/card-portfolio-3.png",
    },
    {
      id: 4,
      title: "Redesigning the hotel room booking process for BANHUB to simplify the user experience",
      date: "February - Mey 2023",
      description: "Successfully made hotel room bookings easier and improved user experience by 50%.",
      image: "/card-portfolio-4.png",
    },
  ];

  return (
    <div className="w-[90%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-3 px-5 pb-0 justify-center">
      {projects.map((project) => (
        <div key={project.id} className="w-full bg-[#292929] text-white shadow-lg rounded-3xl flex flex-col justify-between">
          {/* Image Section */}
          <div className="w-full p-4 rounded-t-lg">
            <div className="w-full h-auto relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500} // Ganti ukuran sesuai kebutuhan
                height={300} // Ganti ukuran sesuai kebutuhan
                objectFit="cover"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col p-5 gap-3">
            <h3 className="text-[24px] font-inter text-white font-semibold">{project.title}</h3>
            <p className="text-[18px] font-inter font-medium text-white">{project.date}</p>
          </div>

          {/* Description Section */}
          <div className="p-5 pt-0">
            <p className="text-[18px] font-inter font-regular text-[#CDCDCD]">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
