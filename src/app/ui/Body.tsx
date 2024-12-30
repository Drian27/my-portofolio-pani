import React from "react";
import Image from "next/image";

export default function PortfolioBody() {
  return (
    <div
      id="about"
      className="bg-gradient-to-b bg-black to-gray-900 min-h-screen"
    >
      <div className="min-h-screen bg-black text-white sm:px-10 px-1 md:px-20 py-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <p className="w-full text-xl mt-2 text-gray-400 mb-3">
              UI/UX Designer
            </p>
            <h1 className="w-full text-3xl sm:text-5xl lg:text-6xl font-bold lg:whitespace-nowrap mb-3">
              Pani Maulana Nurdwiyansah
            </h1>
            <p className="text-gray-400 mb-3">
              I am capable of creating engaging and intuitive user interactions
              and experiences in UI/UX design, as well as solving user problems
              through compelling narratives and innovative design solutions.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.instagram.com/p.maulana72/"
                className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/6289619260062"
                className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="mailto:example@example.com"
                className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pani-maulana-nurdwiyansah-b93ab3251/"
                className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[500px] sm:h-[550px] lg:h-[600px] rounded-lg overflow-hidden custom-photo-position">
              <Image
                src="/hero.png"
                alt="Pani Maulana"
                width={1600}
                height={2000}
                className="rounded-lg object-cover absolute z-10 py-10 px-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ikal">
        <div className="drian">
          <img className="h1-csss" src="./bg-radian.png" alt="" />
        </div>
      </div>

    </div>
  );
}
