"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full py-10 z-10 relative bg-transparent">
      <nav className="container w-full mx-auto lg:px-4 flex items-center justify-center">
        {/* Burger Menu (Menu Garis 3 di kanan) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none absolute right-4"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`w-full justify-center transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          } lg:max-h-none lg:flex lg:gap-8 lg:items-center bg-black lg:bg-transparent text-sm font-medium`}
        >
          <li className="group py-2 px-4 text-center">
            <Link href="/" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              HOME
            </Link>
          </li>
          <li className="group py-2 px-4 text-center">
            <Link href="/about" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              ABOUT
            </Link>
          </li>
          <li className="py-2 text-cente">
            <h1 className="text-[18px] text-white font-bold font-inter lg:leading-[1.2] text-center">
              JUNN <br /> GARAGE
            </h1>
          </li>
          <li className="group py-2 px-4 text-center">
            <Link href="/garage-two" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              GARAGE
            </Link>
          </li>
          <li className="group py-2 px-4 text-center">
            <a
              href="https://drive.google.com/file/d/1CgquQ59w4-NbfnNXgwizHw-dPB3QpL4m/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9C9C9C] text-[18px] hover:text-white relative"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="w-full py-5 z-10 relative bg-transparent">
//       <nav className="container w-full mx-auto lg:px-4 flex items-center justify-end lg:justify-center">
//         {/* Burger Menu */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-white focus:outline-none"
//           aria-label="Toggle navigation"
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             ></path>
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`transition-all duration-300 ease-in-out overflow-hidden ${
//             isOpen ? "max-h-screen" : "max-h-0"
//           } lg:max-h-none lg:flex lg:gap-8 lg:items-center bg-black lg:bg-transparent text-sm font-medium`}
//         >
//           <li className="group py-2 px-4">
//             <Link href="/" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//               HOME
//             </Link>
//           </li>
//           <li className="group py-2 px-4">
//             <Link href="/about" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//               ABOUT
//             </Link>
//           </li>
//           <li className="py-2 text-center text-white font-bold hidden lg:block">
//             JUNN <br />
//             GARAGE
//           </li>
//           <li className="group py-2 px-4">
//             <Link href="/garage-two" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//               GARAGE
//             </Link>
//           </li>
//           <li className="group py-2 px-4">
//             <a
//               href="https://drive.google.com/file/d/16g94UUZP6An8YJMmiV6bTCo9O8OEzCpG/view"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#9C9C9C] text-[18px] hover:text-white relative"
//             >
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//               RESUME
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="w-full py-5 z-10 relative bg-transparent">
//       <nav className="container mx-auto px-4 flex lg:flex-row lg:items-center items-center justify-end lg:justify-center">
//         {/* Logo */}
//         {/* <div className="text-white font-bold text-lg">JUNN GARAGE</div> */}

//         {/* Burger Menu */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-white focus:outline-none"
//           aria-label="Toggle navigation"
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             ></path>
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`transition-all duration-300 ease-in-out overflow-hidden ${
//             isOpen ? "max-h-screen" : "max-h-0"
//           } lg:max-h-none lg:flex lg:gap-8 lg:items-center bg-black lg:bg-transparent text-sm font-medium`}
//         >
//           <li className="group py-2 px-4">
//             <Link href="/" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
//             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//               HOME
//             </Link>
//           </li>
//           <li className="group py-2 px-4">
//             <Link href="/about" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
//             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//               ABOUT
//             </Link>
//           </li>
//           <li className="py-2 text-center text-white font-bold">
//             JUNN <br />
//             GARAGE
//           </li>
//           <li className="group py-2 px-4">
//             <Link href="/garage-two" className="text-[#9C9C9C] text-[18px] hover:text-white relative">
//               GARAGE
//             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//           <li className="group py-2 px-4">
//             <a
//               href="https://drive.google.com/file/d/16g94UUZP6An8YJMmiV6bTCo9O8OEzCpG/view"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#9C9C9C] text-[18px] hover:text-white relative"
//             >
//               RESUME
//             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="w-full py-5 z-10 relative bg-transparent">
//       <nav className="container mx-auto px-4 flex items-center justify-end">
//         {/* Logo */}
//         {/* <div className="text-white font-bold text-lg">JUNN GARAGE</div> */}

//         {/* Burger Menu */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-white focus:outline-none"
//           aria-label="Toggle navigation"
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             ></path>
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent lg:flex lg:items-center lg:gap-8 text-sm font-medium ${
//             isOpen ? "flex flex-col items-center py-4" : "hidden lg:flex"
//           }`}
//         >
//           <li className="group mb-3">
//             <Link
//               href="/"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium relative hover:text-white"
//             >
//               HOME
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//           <li className="group mb-3">
//             <Link
//               href="/about"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium relative hover:text-white"
//             >
//               ABOUT
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>

//           <li className="group mb-3">
//             <h1 className="text-[22px] text-white leading-[1.2] text-center font-inter font-medium relative hover:text-white">
//                 JUNN <br />
//                 GARAGE
//             </h1>
//           </li>
//           <li className="group mb-3">
//             <Link
//               href="/garage-two"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium relative hover:text-white"
//             >
//               GARAGE
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//           <li className="group mb-3">
//             <a
//               href="https://drive.google.com/file/d/16g94UUZP6An8YJMmiV6bTCo9O8OEzCpG/view"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium relative hover:text-white"
//             >
//               RESUME
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }


// import React from "react";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="w-full py-5 z-10 relative">
//       <nav className="w-full border-none hover:opacity-90 transition-all duration-300 z-10 relative">
//         <ul className="flex justify-center items-center gap-8 text-sm font-medium py-1 z-10 relative">
//           <li className="py-2 group">
//             <Link
//               href="/"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
//             >
//               HOME
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//           <li className="py-2 group">
//             <Link
//               href="/about"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
//             >
//               ABOUT
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//           <li>
//             <h1 className="text-[22px] text-white font-bold font-inter leading-[1.2] text-center">
//               JUNN <br />
//               GARAGE
//             </h1>
//           </li>
//           <li className="py-2 group">
//             <Link
//               href="/garage-two"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
//             >
//               GARAGE
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//           <li className="py-2 group">
//             <a
//               href="https://drive.google.com/file/d/16g94UUZP6An8YJMmiV6bTCo9O8OEzCpG/view"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#9C9C9C] text-[18px] font-inter font-medium scroll-smooth relative"
//             >
//               RESUME
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
