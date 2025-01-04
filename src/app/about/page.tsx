"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../ui/Header";
import Footer from "../core/Footer";

export default function About() {
  return (
    <div className="bg-gradient-to-b bg-black to-gray-900 min-h-screen">
      <Header />

      {/* Header Section One */}
      <div className="w-full grid grid-cols-2 gap-4 mt-10 mb-20">
        <div className="w-full h-full">
          <div className="group-text-home text-center lg:text-left px-12 mt-10 pt-10 z-10 relative">
            <h1 className="w-full text-white text-3xl text-[52px] font-bold lg:whitespace-nowrap mb-5 leading-snug">
              Hello... I am Pani Maulana <br /> Nurdwiyansah, a UI/UX Designer <br /> from Indonesia. Let's create <br /> amazing designs and user <br /> experiences.
            </h1>
            <div className="w-[80%] flex justify-between gap-5 mb-5">
              <div className="mb-5 text-start">
                <h4 className="lg:text-[32px] font-inter font-medium text-white mb-2">Experience</h4>
                <h3 className="lg:text-[36px] font-inter font-bold text-white">+2</h3>
              </div>
              <div className="mb-5 text-start">
                <h4 className="lg:text-[32px] font-inter font-medium text-white mb-2">Project</h4>
                <h3 className="lg:text-[36px] font-inter font-bold text-white">+10</h3>
              </div>
            </div>
            <div className="mb-3">
              <h4 className="lg:text-[32px] font-inter font-medium text-white mb-2">Tools</h4>
            </div>
            <div className="flex justify-center lg:justify-start gap-8">
              <div className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <Image src="/icon-tools-1.png" alt="figma" width={50} height={50}></Image>
              </div>
              <div className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <Image src="/icon-tools-2.png" alt="figma" width={50} height={50}></Image>
              </div>
              <div className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <Image src="/icon-tools-3.png" alt="figma" width={50} height={50}></Image>
              </div>
              <div className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <Image src="/icon-tools-4.png" alt="figma" width={50} height={50}></Image>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="z-10 relative">
            <Image src="/hero.png" alt="Pani Maulana" width={1600} height={2000} className="tess w-full" />
            {/* <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[500px] sm:h-[550px] lg:h-[600px] rounded-lg overflow-hidden custom-photo-position">
                  </div> */}
          </div>
        </div>
      </div>

      <div className="img-content-hero">
        <div className="content-frame-img-1-about">
          <img className="frame-img-1" src="./frame-home-1.png" alt="" />
        </div>
      </div>

      <div className="img-content-hero-2">
        <div className="content-frame-img-2-about">
          <img className="frame-img-2" src="./frame-home-2.png" alt="Frame" />
        </div>
      </div>

      {/* Header Section Two */}
      <div className="w-full grid grid-cols-1 gap-4 mt-10 mb-10 z-10 relative">
        <div className="w-full mb-5 lg:ps-10">
          <p className="lg:text-[24px] font-inter lg:whitespace-nowrap mb-3 leading-none font-medium text-white">I am a student from a university in Bogor. Indonesia, and I became interested in the field of</p>
          <p className="lg:text-[24px] font-inter lg:whitespace-nowrap mb-3 leading-none font-medium text-white">UI/UX in 2021. I possess the ability for creative problem-solving, creating engaging and intuitive</p>
          <p className="lg:text-[24px] font-inter lg:whitespace-nowrap mb-3 leading-none font-medium text-white">user interactions and experiences in UI/UX design. I am proficient in using software such as Figma</p>
          <p className="lg:text-[24px] font-inter lg:whitespace-nowrap mb-3 leading-none font-medium text-white">and can work well in a team with good time management skills.</p>
        </div>

        <div className="w-full mb-5 lg:ps-10 z-10 relative">
          <p className="lg:text-[24px] font-inter lg:whitespace-nowrap mb-3 leading-none font-medium text-white">I started my career as a freelance UI/UX designer in 2022 with over a year of experience. I have</p>
          <p className="lg:text-[24px] font-inter lg:whitespace-nowrap mb-3 leading-none font-medium text-white">managed numerous web and mobile application projects, helping to transform complex user issues</p>
          <p className="lg:text-[24px] font-inter lg:whitespace-nowrap mb-3 leading-none font-medium text-white">into visually appealing and more organized solutions.</p>
        </div>
      </div>

      {/* Header Section Three */}
      <div className="w-full grid grid-cols-1 gap-4 mt-10 mb-10 z-10 relative">
        <div className="mb-5 lg:px-10">
          <h2 className="text-3xl lg:text-[46px] font-inter font-bold text-white mb-10">Career Journey</h2>
          <h3 className="text-3xl lg:text-[34px] font-inter font-semibold text-white">PT. Exenesia – Bogor, Indonesia</h3>
        </div>

        <div className="mb-5 lg:px-10">
          <h4 className="text-3xl lg:text-[30px] font-inter font-semibold text-white mb-8">Ui/Ux Design (Nusantara - IKN)</h4>
          <h5 className="text-2xl lg:text-[28px] font-inter font-medium text-white mb-5">July - Now 2024</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Conduct research with the team to determine the flowchart and design related to this project.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create the UI design for the CMS, to create, manage, and modify content.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create the UI design for user requests, a means to request necessary needs.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create the UI design for professors, to monitor all activities on the Nusantara website.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Design a user-friendly interface so that users do not find it difficult to use the website.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Ui/Ux Design (Snap Corner - Photobox)</h2>
          <h5 className="text-2xl lg:text-[28px] font-inter font-medium text-white mb-5">September - October - July 2024</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Conduct research to understand the needs of owners and users.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create the interface design for the company profile website as well as for online ticket booking.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Design the photobox website interface with a clean UI and user-friendly layout to facilitate user <br /> interaction.
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Develop a user-friendly UI design that enhances the user experience by 15%.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Ui/Ux Design (Piper - Photobooth)</h2>
          <h5 className="text-2xl lg:text[28px] font-inter font-medium text-white mb-5">June - July 2024</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Conduct research with the owner to identify what is needed.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create low-fidelity mockups on paper.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Design the system and other components.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Start designing in Figma, transitioning from low-fidelity to high-fidelity.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Create a website interface design with a clean UI that is user-friendly to facilitate ease of use for <br /> users.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Ui/Ux Design (Desa Maju)</h2>
          <h5 className="text-2xl lg:text[28px] font-inter font-medium text-white mb-5">January - April 2024</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Conduct research to identify the needs of the village staff.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Create a super admin website dashboard to monitor community requests/needs regarding <br /> correspondence.{" "}
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                A standout feature of the progressive village is the "Report Village" feature, which allows <br /> residents to report disturbances in the community and will immediately notify village staff with <br /> the location.{" "}
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Develop a mobile app for residents to submit requests for letter creation online.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create a mobile app that enhances user experience and convenience by 30%.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Design a clean UI and user-friendly interface for both applications.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Ui/Ux Design (Command Center - Angkatan Laut)</h2>
          <h5 className="text-2xl lg:text[28px] font-inter font-medium text-white mb-5">August - December 2023</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Conduct research to obtain information related to users.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Collaborate with the development team to design the user interface</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Creating the interface for security monitoring, video conferencing, training management, and <br /> resource management.
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Design a dark mode color scheme that reflects the Navy's background, symbolizing authority, <br /> honor, and strength.{" "}
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create prototypes and mockups.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Develop a mobile application to check training schedules and report training results to the <br /> central HO.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Ui/Ux Design (KomplainKuy)</h2>
          <h5 className="text-2xl lg:text-[28px] font-inter font-medium text-white mb-5">May - July 2023</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create low-fidelity wireframes through sketches in a notebook.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Design the UI according to the flow chart provided by the client, which includes the super admin <br /> dashboard, user interface, and mobile app.
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Design a clean UI that is user-friendly to facilitate ease of use for the application.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Use a comfortable dark mode color scheme for users, along with a minimalist layout to enhance <br /> usability.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Ui/Ux Design (Badan Perhubungan Kalimantan Timur)</h2>
          <h5 className="text-2xl lg:text-[28px] font-inter font-medium text-white mb-5">February - May 2023</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Redesigning the website to be more interactive and responsive, resulting in a 20% increase in <br /> user experience.
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Conduct research to obtain information related to users.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Create the layout for the hotel booking website, including the landing page, account creation, <br /> login, gallery, hotel facility details, etc.{" "}
              </li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Design a new landing page that enhances user experience by 30%.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Implement detailed coloring in the design to improve the visual appeal for users.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">
                Create a clean UI design that is user-friendly to facilitate user interaction with the website in <br /> terms of images, colors, layout, etc.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Dummy Project</h2>
          <h5 className="text-2xl lg:text-[28px] font-inter font-medium text-white mb-5">Ui/Ux Design (Ghania Beef – Online Beef Shopping Application)</h5>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Design the UI for online beef ordering.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create a system design that includes colors, text, button bar, and button styles.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Develop the login and account creation page.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create the order and profile page</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 lg:px-10">
          <h2 className="text-3xl lg:text-[34px] font-inter font-semibold text-white mb-8">Ui/Ux Design (Grocery App)</h2>
          <div className="">
            <ul className="list-disc pl-6 mt-2">
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create wireframes.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Design the system including colors, text, button bar, and button styles.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create the user interface for the home page, product details, etc.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Create the UI for the home page, product details, shopping cart, order details, profile, etc.</li>
              <li className="text-2xl lg:text-[20px] font-inter font-medium text-white mb-1">Clean design to facilitate user experience.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="img-content-hero-3">
        <div className="content-frame-img-3-about">
          <img className="frame-img-3" src="./frame-home-3.png" alt="Frame" />
        </div>
      </div>


      <Footer />
    </div>

    
  );
}
