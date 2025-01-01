"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left text-xl font-semibold">
          <h2 className="text-xl font-semibold">
            <span>JUNN</span>
            <br />
            GARAGE
          </h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href=""
              className="text-2xl"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
              />
            </a>
            <a href="" className="text-2xl">
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={32}
                height={32}
              />
            </a>
            <a
              href=""
              className="text-2xl"
            >
              <Image
                src="/gmail.png"
                alt="Gmail"
                width={32}
                height={32}
              />
            </a>
            <a
              href=""
              className="text-2xl"
            >
              <Image
                src="/linkedin.png"
                alt="Linkedin"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right mt-8 md:mt-0">
          <h3 className="text-lg font-semibold">Garage of Design</h3>
          <p className="mt-2 text-xl font-medium">
            Let's create amazing designs and user experiences.
          </p>
          <p className="mt-4 text-sm">
            © 2024 Junn Garage | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
