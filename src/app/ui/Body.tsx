import React from "react";
import Image from "next/image";

export default function PortfolioBody() {
  return (
    <div
      id="about"
      className="bg-gradient-to-b bg-black to-gray-900 min-h-screen"
    >
      <div className="min-h-screen bg-black text-white sm:px-10 px-1 md:px-20 py-10 pt-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="group-text-home w-full lg:w-1/2 text-center lg:text-left px-12 mt-10 pt-14">
            <p className="w-full text-[36px] text-[#9C9C9C] mb-7 font-inter">
              UI/UX Designer
            </p>
            <h1 className="w-full text-white text-3xl text-[56px] font-bold lg:whitespace-nowrap mb-10">
              Pani Maulana Nurdwiyansah
            </h1>
            <div className="hr-body-cs mb-7"></div>
            <p className="text-[#9C9C9C] text-[24px] leading-extra mb-7">
              I am capable of creating engaging and intuitive <br /> user interactions
              and experiences in UI/UX <br /> design, as well as solving user problems <br />
              through compelling narratives and innovative <br /> design solutions.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-8">
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

          <div className="flex w-1/2 justify-center mt-10 lg:mt-0">
            <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[500px] sm:h-[550px] lg:h-[600px] rounded-lg overflow-hidden custom-photo-position">
              <Image
                src="/hero.png"
                alt="Pani Maulana"
                width={1600}
                height={2000}
                className="img-home-hero rounded-lg object-cover absolute py-10 px-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="img-content-hero">
        <div className="content-frame-img-1">
          <img className="frame-img-1" src="./frame-home-1.png" alt="" />
        </div>
      </div>

    </div>
  );
}
