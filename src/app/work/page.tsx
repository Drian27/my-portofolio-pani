"use client";

import React from "react";
import Card from "../components/Card";
import Image from "next/image";

export default function Work() {

  return (
    <div className="bg-gradient-to-b bg-black to-gray-900 min-h-screen pt-28 ">
      {/* Konten Header */}
      {/* <Header /> */}

      {/* Konten Work */}
      <div className="min-h-screen w-full grid grid-cols-1 lg:mt-20 lg:pt-20 lg:px-3 relative z-10 lg:pb-28">
        <div className="w-full grid grid-cols-1">
          <div className="w-full sm:w-full lg:w-[90%] p-1 lg:p-3 px-10">
            <h1 className="text-3xl lg:text-[56px] font-bold font-inter text-white mb-10 lg:ms-20 ms-0">Highlight Project</h1>
          </div>
        </div>
        <div className="w-full flex justify-center lg:p-2 lg:px-10">
          <Card />
        </div>
      </div>

      <div className="img-content-hero-2">
        <div className="content-frame-img-2">
          <Image className="frame-img-2" src="/frame-home-2.png" width={1000} height={100} alt="Frame" />
        </div>
      </div>

      <div className="img-content-hero-3">
        <div className="content-frame-img-3">
          <Image className="frame-img-3" src="/frame-home-3.png" width={1000} height={100} alt="Frame" />
        </div>
      </div>

      <div className="img-content-hero-5">
        <div className="content-frame-img-5">
          <Image className="frame-img-5" src="/ui-design.png" width={1000} height={100} alt="Frame" />
        </div>
      </div>
    </div>
  );
}
