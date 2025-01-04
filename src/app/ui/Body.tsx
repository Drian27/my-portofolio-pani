import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function PortfolioBody() {
  return (
    <div id="about" className="bg-gradient-to-b bg-black to-gray-900 min-h-screen">
      <Header />

      <div className="w-full grid grid-cols-2 gap-4 mt-10">
        <div className="w-full h-full">
          <div className="group-text-home text-center lg:text-left px-12 mt-10 pt-14 z-10 relative">
            <p className="w-full text-[36px] text-[#9C9C9C] mb-7 font-inter">UI/UX Designer</p>
            <h1 className="w-full text-white text-3xl text-[56px] font-bold lg:whitespace-nowrap mb-10">Pani Maulana Nurdwiyansah</h1>
            <div className="hr-body-cs mb-7"></div>
            <p className="text-[#9C9C9C] text-[24px] leading-extra mb-7">
              I am capable of creating engaging and intuitive <br /> user interactions and experiences in UI/UX <br /> design, as well as solving user problems <br />
              through compelling narratives and innovative <br /> design solutions.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-8 z-10 relative">
              <a href="https://www.instagram.com/p.maulana72" className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.167 6.33325C21.167 7.16168 20.4954 7.83325 19.667 7.83325C18.8386 7.83325 18.167 7.16168 18.167 6.33325C18.167 5.50482 18.8386 4.83325 19.667 4.83325C20.4954 4.83325 21.167 5.50482 21.167 6.33325Z"
                    fill="#605DFF"
                    stroke="#605DFF"
                  />
                  <path
                    d="M18.3333 1C22.0133 1 25 3.98667 25 7.66667V18.3333C25 22.0133 22.0133 25 18.3333 25H7.66667C3.98667 25 1 22.0133 1 18.3333V7.66667C1 3.98667 3.98667 1 7.66667 1H13H18.3333Z"
                    stroke="#605DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.0003 7.66675C15.947 7.66675 18.3337 10.0534 18.3337 13.0001C18.3337 15.9467 15.947 18.3334 13.0003 18.3334C10.0537 18.3334 7.66699 15.9467 7.66699 13.0001C7.66699 10.0534 10.0537 7.66675 13.0003 7.66675Z"
                    stroke="#605DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="https://wa.me/6289619260062" className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.5025 3.49206C19.3967 2.38099 18.0796 1.50002 16.6282 0.900497C15.1767 0.300974 13.6198 -0.00511579 12.0482 6.4674e-05C5.46332 6.4674e-05 0.0964826 5.34005 0.0964826 11.892C0.0964826 13.992 0.651256 16.032 1.68844 17.832L0 24L6.33166 22.344C8.0804 23.292 10.0462 23.796 12.0482 23.796C18.6332 23.796 24 18.456 24 11.904C24 8.72404 22.7578 5.73605 20.5025 3.49206ZM12.0482 21.78C10.2633 21.78 8.51457 21.3 6.98291 20.4L6.6211 20.184L2.85829 21.168L3.8593 17.52L3.61809 17.148C2.62619 15.5725 2.09961 13.7512 2.09849 11.892C2.09849 6.44405 6.5608 2.00406 12.0362 2.00406C14.6894 2.00406 17.1859 3.03606 19.0553 4.90805C19.981 5.82469 20.7147 6.9151 21.2136 8.11604C21.7126 9.31698 21.9669 10.6045 21.9618 11.904C21.9859 17.352 17.5236 21.78 12.0482 21.78ZM17.4995 14.388C17.198 14.244 15.7266 13.524 15.4613 13.416C15.1839 13.32 14.991 13.272 14.7859 13.56C14.5809 13.86 14.0141 14.532 13.8452 14.724C13.6764 14.928 13.4955 14.952 13.194 14.796C12.8925 14.652 11.9276 14.328 10.794 13.32C9.90151 12.528 9.31055 11.556 9.12965 11.256C8.9608 10.956 9.10553 10.8 9.26231 10.644C9.39497 10.512 9.56382 10.296 9.70854 10.128C9.85327 9.96004 9.91357 9.82804 10.01 9.63604C10.1065 9.43204 10.0583 9.26404 9.98593 9.12004C9.91357 8.97604 9.31055 7.51204 9.06935 6.91205C8.82814 6.33605 8.57487 6.40805 8.39397 6.39605H7.81507C7.61005 6.39605 7.29648 6.46805 7.01909 6.76805C6.75377 7.06805 5.98191 7.78804 5.98191 9.25204C5.98191 10.716 7.05528 12.132 7.2 12.324C7.34472 12.528 9.31055 15.528 12.3015 16.812C13.0131 17.124 13.5678 17.304 14.002 17.436C14.7136 17.664 15.3648 17.628 15.8834 17.556C16.4623 17.472 17.6563 16.836 17.8975 16.14C18.1508 15.444 18.1508 14.856 18.0663 14.724C17.9819 14.592 17.801 14.532 17.4995 14.388Z"
                    fill="#605DFF"
                  />
                </svg>
              </a>
              <a href="mailto:example@example.com" className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.14199 24.9974H9.57039V2.98034L7.60063 1.69612C4.7503 -0.161074 1 1.91839 1 5.35617V22.8266C1 24.0269 1.96062 24.9999 3.14442 24.9999L3.14199 24.9974Z"
                    stroke="#605DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 5.35613V8.26046L9.57039 13.8493L15.9988 18.0428L22.4272 13.8493L31 8.26046V5.35366C31 1.91588 27.2473 -0.163582 24.3945 1.69855L22.4296 2.98278L15.9988 7.1738L9.57039 2.98031L7.60063 1.69608C4.7503 -0.161112 1 1.91835 1 5.35613Z"
                    stroke="#605DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.4268 24.9974H28.8552C29.1361 24.9984 29.4145 24.9429 29.6743 24.8341C29.9341 24.7253 30.1703 24.5654 30.3693 24.3635C30.5683 24.1616 30.7262 23.9217 30.834 23.6575C30.9417 23.3933 30.9971 23.1101 30.9971 22.8241V5.35366C30.9971 1.91588 27.2468 -0.163582 24.3941 1.69855L22.4268 2.98278V24.9974Z"
                    stroke="#605DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/pani-maulana-nurdwiyansah-b93ab3251" className="text-[#605DFF] text-2xl hover:opacity-80 transition-opacity">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.1836 0C21.2445 0 22.2619 0.421427 23.012 1.17157C23.7622 1.92172 24.1836 2.93913 24.1836 4V20C24.1836 21.0609 23.7622 22.0783 23.012 22.8284C22.2619 23.5786 21.2445 24 20.1836 24H4.18359C3.12273 24 2.10531 23.5786 1.35517 22.8284C0.605021 22.0783 0.183594 21.0609 0.183594 20V4C0.183594 2.93913 0.605021 1.92172 1.35517 1.17157C2.10531 0.421427 3.12273 0 4.18359 0H20.1836ZM20.1836 2.66667H4.18359C3.82997 2.66667 3.49083 2.80714 3.24079 3.05719C2.99074 3.30724 2.85026 3.64638 2.85026 4V20C2.85026 20.3536 2.99074 20.6928 3.24079 20.9428C3.49083 21.1929 3.82997 21.3333 4.18359 21.3333H20.1836C20.5372 21.3333 20.8764 21.1929 21.1264 20.9428C21.3765 20.6928 21.5169 20.3536 21.5169 20V4C21.5169 3.64638 21.3765 3.30724 21.1264 3.05719C20.8764 2.80714 20.5372 2.66667 20.1836 2.66667ZM6.85026 9.33333C7.17684 9.33338 7.49204 9.45327 7.73609 9.67029C7.98014 9.8873 8.13605 10.1863 8.17426 10.5107L8.18359 10.6667V17.3333C8.18322 17.6732 8.05309 18 7.8198 18.2472C7.5865 18.4943 7.26766 18.643 6.9284 18.6629C6.58915 18.6828 6.25509 18.5724 5.99448 18.3543C5.73388 18.1362 5.5664 17.8268 5.52626 17.4893L5.51693 17.3333V10.6667C5.51693 10.313 5.6574 9.97391 5.90745 9.72386C6.1575 9.47381 6.49664 9.33333 6.85026 9.33333ZM10.8503 8C11.1625 7.99995 11.4649 8.1095 11.7047 8.30955C11.9444 8.5096 12.1064 8.78745 12.1623 9.09467C12.4308 8.93957 12.7082 8.80023 12.9929 8.67733C13.8823 8.29733 15.2143 8.088 16.4169 8.46533C17.0476 8.66533 17.6809 9.03867 18.1503 9.67467C18.5703 10.2413 18.7969 10.9307 18.8423 11.7053L18.8503 12V17.3333C18.8499 17.6732 18.7198 18 18.4865 18.2472C18.2532 18.4943 17.9343 18.643 17.5951 18.6629C17.2558 18.6828 16.9218 18.5724 16.6612 18.3543C16.4005 18.1362 16.2331 17.8268 16.1929 17.4893L16.1836 17.3333V12C16.1836 11.56 16.0769 11.3547 16.0076 11.26C15.9079 11.1363 15.7709 11.0484 15.6169 11.0093C15.1529 10.8627 14.4849 10.94 14.0409 11.1293C13.3743 11.4147 12.7636 11.8627 12.3476 12.2773L12.1836 12.4533V17.3333C12.1832 17.6732 12.0531 18 11.8198 18.2472C11.5865 18.4943 11.2677 18.643 10.9284 18.6629C10.5891 18.6828 10.2551 18.5724 9.99448 18.3543C9.73388 18.1362 9.5664 17.8268 9.52626 17.4893L9.51693 17.3333V9.33333C9.51693 8.97971 9.6574 8.64057 9.90745 8.39052C10.1575 8.14048 10.4966 8 10.8503 8ZM6.85026 5.33333C7.20388 5.33333 7.54302 5.47381 7.79307 5.72386C8.04312 5.97391 8.18359 6.31305 8.18359 6.66667C8.18359 7.02029 8.04312 7.35943 7.79307 7.60948C7.54302 7.85952 7.20388 8 6.85026 8C6.49664 8 6.1575 7.85952 5.90745 7.60948C5.6574 7.35943 5.51693 7.02029 5.51693 6.66667C5.51693 6.31305 5.6574 5.97391 5.90745 5.72386C6.1575 5.47381 6.49664 5.33333 6.85026 5.33333Z"
                    fill="#605DFF"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
        <div className="z-10 lg:relative">
            <Image src="/hero.png" alt="Pani Maulana" width={1600} height={2000} className="tess w-full"/>
          {/* <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[500px] sm:h-[550px] lg:h-[600px] rounded-lg overflow-hidden custom-photo-position">
          </div> */}
        </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
      </div>

      <div className="img-content-hero">
        <div className="content-frame-img-1">
          <img className="frame-img-1" src="./frame-home-1.png" alt="" />
        </div>
      </div>

      <div className="img-content-hero-5">
          <div className="content-frame-img-4">
            <img className="frame-img-4" src="./ux-design.png" alt="Frame" />
          </div>
        </div>
    </div>
  );
}
