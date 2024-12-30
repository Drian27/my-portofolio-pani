"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="h-auto w-full bg-gradient-to-r bg-black text-white flex flex-col items-center px-6 pb-16">
      <header className="text-white px-4 fixed w-full z-50 bg-gradient-to-br bg-black">
        <div className="flex items-center justify-center">
          <nav>
            <ul className="flex gap-8 text-sm font-medium py-1">
              <li className="py-2 group">
                <Link
                  href="/work"
                  className="text-[#9C9C9C] scroll-smooth leading-[1.5] relative"
                >
                  Work
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link
                  href="/about"
                  className="text-[#9C9C9C] leading-[1.5] relative"
                >
                  About
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
                <Link href="/gallery" className="text-[#9C9C9C] relative">
                  Gallery
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="py-2 group">
                <Link href="/resume" className="text-[#9C9C9C] relative">
                  Resume
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Header Section */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center mt-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Hello... I am Pani Maulana Nurdwiyansah
          </h1>
          <p className="text-lg sm:text-xl">
            A UI/UX Designer from Indonesia. Let's create amazing designs and
            user experiences.
          </p>
          <div className="flex space-x-8 mt-4">
            <div>
              <h2 className="text-3xl font-bold">Experience</h2>
              <p className="text-xl">+2</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Project</h2>
              <p className="text-xl">+7</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Tools</h2>
            <div className="flex space-x-4">
              <Image
                src="/icons/figma.png"
                alt="Figma"
                width={40}
                height={40}
                className="rounded"
              />
              <Image
                src="/icons/photoshop.png"
                alt="Photoshop"
                width={40}
                height={40}
                className="rounded"
              />
              <Image
                src="/icons/xd.png"
                alt="Adobe XD"
                width={40}
                height={40}
                className="rounded"
              />
              <Image
                src="/icons/illustrator.png"
                alt="Illustrator"
                width={40}
                height={40}
                className="rounded"
              />
            </div>
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

      <div className="mt-16 max-w-5xl w-full mb-5">
        <h2 className="text-3xl font-bold mb-4">Career Journey</h2>
        <div className="space-y-6 mb-5">
          {/* Experience 1 */}
          <div>
            <h3 className="text-2xl font-semibold">
              Ui/Ux Design (Nusantara - IKN)
            </h3>
            <p className="text-lg">July - Now 2024</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Conduct research with the team to determine the flowchart and
                design.
              </li>
              <li>
                Create UI designs for the CMS, professors, and user requests.
              </li>
              <li>Design a user-friendly interface suitable for all users.</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div>
            <h3 className="text-2xl font-semibold">
              Ui/Ux Design (Snap Corner - Photobox)
            </h3>
            <p className="text-lg">September - October - July 2024</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Conduct research to understand the needs of owners and users.
              </li>
              <li>
                Design photobox website interfaces with user-friendly layouts.
              </li>
              <li>Enhance the user experience by 15%.</li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div>
            <h3 className="text-2xl font-semibold">
              Ui/Ux Design (Piper - Photobooth)
            </h3>
            <p className="text-lg">June - July 2024</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Conduct research with owners to identify needs.</li>
              <li>Create low-fidelity and high-fidelity mockups.</li>
              <li>Develop a user-friendly UI for ease of use.</li>
            </ul>
          </div>

          {/* Experience 4 */}
          <div>
            <h3 className="text-2xl font-semibold">Ui/Ux Design (Desa Maju)</h3>
            <p className="text-lg">January - April 2024</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Conduct research to identify the needs of village staff.</li>
              <li>
                Collaborate with the development team to design the user
                interface
              </li>
              <li>
                Creating the interface for security monitoring, video
                conferencing, training management, and resource management.
              </li>
              <li>
                Design a dark mode color scheme that reflects the Navy's
                background, symbolizing authority, honor, and strength.
              </li>
              <li>Create prototypes and mockups.</li>
              <li>
                Develop a mobile application to check training schedules and
                report training results to the central HO.
              </li>
            </ul>
          </div>

          {/* Experience 5 */}
          <div>
            <h3 className="text-2xl font-semibold">
              Ui/Ux Design (Command Center - Angkatan Laut)
            </h3>
            <p className="text-lg">August - December 2023</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Conduct research to obtain information related to users.</li>
              <li>
                Collaborate with the development team to design the user
                interface
              </li>
              <li>
                Creating the interface for security monitoring, video
                conferencing, training management, and resource management.
              </li>
              <li>
                Design a dark mode color scheme that reflects the Navy's
                background, symbolizing authority, honor, and strength.
              </li>
              <li>Create prototypes and mockups.</li>
              <li>
                Develop a mobile application to check training schedules and
                report training results to the central HO.
              </li>
            </ul>
          </div>

          {/* Experience 6 */}
          <div>
            <h3 className="text-2xl font-semibold">
              Ui/Ux Design (KomplainKuy)
            </h3>
            <p className="text-lg">May - July 2023</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Create low-fidelity wireframes through sketches in a notebook.
              </li>
              <li>
                Design the UI according to the flowchart provided by the client,
                which includes the super admin dashboard, user interface, and
                mobile app.
              </li>
              <li>
                Design a clean UI that is user-friendly to facilitate ease of
                use for the application.
              </li>
              <li>
                Use a comfortable dark mode color scheme for users, along with a
                minimalist layout to enhance usability.
              </li>
            </ul>
          </div>

          {/* Experience 7 */}
          <div>
            <h3 className="text-2xl font-semibold">
              Ui/Ux Design (Badan Perhubungan Kalimantan Timur)
            </h3>
            <p className="text-lg">February - May 2023</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Redesigning the website to be more interactive and responsive,
                resulting in a 20% increase in user experience.
              </li>
              <li>Conduct research to obtain information related to users.</li>
              <li>
                Create the layout for the hotel booking website, including the
                landing page, account creation, login, gallery, hotel facility
                details, etc.
              </li>
              <li>
                Design a new landing page that enhances user experience by 30%.
              </li>
              <li>
                Implement detailed coloring in the design to improve the visual
                appeal for users.
              </li>
              <li>
                Create a clean UI design that is user-friendly to facilitate
                user interaction with the website in terms of images, colors,
                layout, etc.
              </li>
            </ul>
          </div>

          {/* Experience 8 */}
          <div>
            <h3 className="text-2xl font-semibold">Dummy Project</h3>
            <p className="text-lg">
              Ui/Ux Design (Ghania Beef – Online Beef Shopping Application)
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Design the UI for online beer ordering.</li>
              <li>
                Ensure compatibility across different devices and resolutions.
              </li>
              <li>
                Enhance the overall user experience with a modern, clean design.
              </li>
            </ul>
          </div>

          {/* Experience 9 */}
          <div>
            <h3 className="text-2xl font-semibold">
              Ui/Ux Design (Grocery App)
            </h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Create wireframes.</li>
              <li>
                Design the system including colors, text, button bar, and button
                styles.
              </li>
              <li>
                Create the user interface for the home page, product details,
                etc.
              </li>
              <li>
                Create the UI for the home page, product details, shopping cart,
                order details, profile, etc.
              </li>
              <li>Clean design to facilitate user experience.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
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
      </footer>
    </div>
  );
}
