"use client";

import Image from "next/image";
import Footer from "../core/Footer";
import Header from "../ui/Header";

export default function GarageTwo() {
  const mygarage = [
    { src: "/img-my-garage-1.png", link: "https://www.figma.com/design/0PgwVLdRZrUVOyNV4CmCFB/Smart-Building-IKN?node-id=0-1&p=f&t=DWTzBd0VvpemWylp-0" },
    { src: "/img-my-garage-2.png", link: "https://www.figma.com/design/3ziCSCq5O7j0akdI7zRVMd/Command-Center?node-id=0-1&node-type=CANVAS&t=CNUoyy9bVOpCLYGr-0" },
    { src: "/img-my-garage-3.png", link: "https://www.figma.com/design/3ziCSCq5O7j0akdI7zRVMd/Command-Center?node-id=0-1&node-type=CANVAS&t=CNUoyy9bVOpCLYGr-0" },
    { src: "/img-my-garage-4.png", link: "https://www.figma.com/design/KQtgG4AT5uUqbdpDmMTMmx/Hijau?node-id=0-1&p=f&t=FgmHdBQluE9EQbWN-0" },
    { src: "/img-my-garage-5.png", link: "https://www.figma.com/design/66dRJR5izlX6DZC9spkiMc/PIPER?node-id=0-1&p=f&t=cNjZSPjpyx6x7WcW-0" },
    { src: "/img-my-garage-6.png", link: "https://www.figma.com/design/Cwi83yjzvH5B8Ickmebmel/Snap-Corner?node-id=0-1&p=f&t=OGxwhFDrXyvoBSuV-0" },
    { src: "/img-my-garage-7.png", link: "https://www.figma.com/design/MlQJJdooeoFE4uiTN1ZOe6/Website-Dashboard-Desa-Maju?node-id=225-31&p=f&t=9NVb3Pgvio2nrCAH-0" },
    { src: "/img-my-garage-8.png", link: "https://www.figma.com/design/dpvLfyNoUwa9odzXzebLzC/Komplain-Kuy?node-id=106-2&p=f&t=U6p3p07TjOPh0zlB-0" },
    { src: "/img-my-garage-9.png", link: "https://www.figma.com/design/dpvLfyNoUwa9odzXzebLzC/Komplain-Kuy?node-id=106-2&p=f&t=U6p3p07TjOPh0zlB-0" },
    { src: "/img-my-garage-10.png", link: "https://www.figma.com/design/HlVTgFiFTS0xIvoustbRyl/Desa-Maju?node-id=0-1&node-type=CANVAS&t=FTYz3dqR4CUv6biq-0" },
    { src: "/img-my-garage-11.png", link: "https://www.figma.com/design/bt48wonMJMGPWzpri6mtUT/Grocery-App?node-id=22-71&p=f&t=dZvKQf0rU6PY9PDu-0" },
    { src: "/img-my-garage-12.png", link: "https://www.figma.com/design/HuTH6KifnwXt7LIIPGNGw3/Ghania-Beef?node-id=13-513&p=f&t=59E9o3YMbZVBnonC-0" },
  ];

  return (
    <div className="bg-gradient-to-b bg-black to-gray-900 min-h-screen">
      {/* Konten Header */}
      <Header />

      {/* Konten Gallery */}
      <div className="w-full flex justify-center gap-4 mt-28 pt-16 z-10 relative">
        <div className="w-full grid grid-cols-1 gap-4 mb-20">
          <div className="text-center">
            <div className="relative">
              <h1 className="text-5xl lg:text-[70px] font-inter font-bold text-white mb-5 transform rotate-20-cs absolute -top-16 left-garage-cs">
                MY
              </h1>
              <h1 className="text-5xl lg:text-[70px] font-inter font-bold text-white pt-5">
                GARAGE
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="img-content-hero">
        <div className="content-frame-img-1-garage">
          <Image
            className="frame-img-1"
            src="/frame-home-1.png"
            width={1000}
            height={500}
            alt=""
          />
        </div>
      </div>

      <div className="w-full mt-5 z-10 relative p-3 px-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-20">
          {mygarage.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Image
                src={image.src}
                alt={`Garage Image ${index + 1}`}
                className="w-full object-contain"
                width={500}
                height={500}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="img-content-hero-3">
        <div className="content-frame-img-3-garage">
          <Image
            className="frame-img-3"
            src="/frame-home-3.png"
            width={1000}
            height={500}
            alt="Frame"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
