"use client";

import React from "react";

export default function Resume() {
  return (
    <div className="h-screen w-full bg-gradient-to-r bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hello... I am Pani Maulana Nurdwiyansah
        </h1>
        <p className="text-lg sm:text-xl mb-10">
          A UI/UX Designer from Indonesia. Let&apos;s create amazing designs and user
          experiences.
        </p>
        <a
          href="https://drive.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300"
        >
          Direct Google Drive
        </a>
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
            <h3 className="text-lg font-semibold">Let&apos;s have a chat!</h3>
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
