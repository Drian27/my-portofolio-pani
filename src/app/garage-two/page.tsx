"use client";

import Image from "next/image";
import Footer from "../core/Footer";
import Header from "../ui/Header";

export default function GarageTwo() {
  const mygarage = [
    "/img-my-garage-1.png",
    "/img-my-garage-2.png",
    "/img-my-garage-3.png",
    "/img-my-garage-4.png",
    "/img-my-garage-5.png",
    "/img-my-garage-6.png",
    "/img-my-garage-7.png",
    "/img-my-garage-8.png",
    "/img-my-garage-9.png",
    "/img-my-garage-10.png",
    "/img-my-garage-11.png",
    "/img-my-garage-12.png",
  ];

  return (
    <div className="bg-gradient-to-b bg-black to-gray-900 min-h-screen">
      {/* Konten Header */}
      <Header />

      {/* Konten Gallery */}
      <div className="w-full flex justify-center gap-4 mt-28 pt-16 z-10 relative ">
        <div className="w-full grid grid-cols-1 gap-4 mb-20">
          <div className="text-center">
            <div className="relative">
              <h1 className="text-5xl lg:text-[70px] font-inter font-bold text-white mb-5 transform rotate-20-cs absolute -top-16 left-garage-cs">MY</h1>
              <h1 className="text-5xl lg:text-[70px] font-inter font-bold text-white pt-5">GARAGE</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="img-content-hero">
        <div className="content-frame-img-1-garage">
          <Image className="frame-img-1" src="/frame-home-1.png" width={1000} height={500} alt="" />
        </div>
      </div>

      <div className="w-full mt-5 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-20">
          {mygarage.map((image, index) => (
            <div key={index} className="w-full">
              <Image src={image} alt={`Garage Image ${index + 1}`} className="w-full object-contain" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className="img-content-hero-3">
        <div className="content-frame-img-3-garage">
          <Image className="frame-img-3" src="/frame-home-3.png" width={1000} height={500} alt="Frame" />
        </div>
      </div>

      <Footer/>
    </div>
  );
}
