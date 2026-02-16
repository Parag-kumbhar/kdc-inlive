// // "use client";

// // import Image from "next/image";

// // export default function Navbar() {
// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
// //       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
// //         {/* Logo */}
// //         <div className="flex items-center gap-2">
// //           <Image src="/logo.png" alt="KDC Logo" width={36} height={36} />
// //           <span className="font-bold text-lg">KDC.inlive</span>
// //         </div>

// //         {/* Links */}
// //         <nav className="hidden md:flex gap-6 text-sm font-medium">
// //           <a href="#home" className="hover:text-blue-600">Home</a>
// //           <a href="#features" className="hover:text-blue-600">Features</a>
// //           <a href="#live" className="hover:text-blue-600">Live</a>
// //           <a href="#players" className="hover:text-blue-600">Players</a>
// //           <a href="#fixtures" className="hover:text-blue-600">Fixtures</a>
// //           <a href="#contact" className="hover:text-blue-600">Contact</a>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }





// "use client";

// import { useEffect, useState } from "react";
// import { useActiveSection } from "../hooks/useActiveSection";

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "features", label: "Features" },
//   { id: "youtube", label: "Youtube" },
//   { id: "live", label: "Live" },
//   { id: "players", label: "Players" },
//   { id: "fixtures", label: "Fixtures" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const active = useActiveSection(sections.map((s) => s.id));
//   const [scrolled, setScrolled] = useState(false);

//   // Detect scroll
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleScroll = (id: string) => {
//     const el = document.getElementById(id);
//     el?.scrollIntoView({ behavior: "smooth" });

//     // keep URL clean
//     history.replaceState(null, "", "/");
//   };

//   return (
//     <nav
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${scrolled
//           ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
//           : "bg-white"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

//         {/* LOGO */}
//         <div className="flex items-center gap-2 sm:gap-3">
//           <img
//             src="/logo.png"
//             alt="KDC.inlive"
//             className="h-8 sm:h-9 md:h-11 w-auto transition-transform duration-300 hover:scale-105"
//           />

//           <span className="font-bold tracking-tight text-lg sm:text-xl md:text-2xl leading-none">
//             <span className="text-blue-600">KDC</span>
//             <span className="text-gray-900">.inlive</span>
//           </span>
//         </div>

//         {/* NAV LINKS */}
//         <div className="flex items-center gap-8">
//           {sections.map(({ id, label }) => (
//             <button
//               key={id}
//               onClick={() => handleScroll(id)}
//               className={`relative font-medium pb-1 transition-colors
//                 ${
//                   active === id
//                     ? "text-blue-600"
//                     : "text-gray-700 hover:text-blue-500"
//                 }
//               `}
//             >
//               {label}

//               {active === id && (
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded-full" />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import Image from "next/image";


const sections = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "youtube", label: "Youtube" },
  { id: "live", label: "Live" },
  { id: "players", label: "Players" },
  { id: "fixtures", label: "Fixtures" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection(sections.map(s => s.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    history.replaceState(null, "", "/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all
        ${scrolled ? "backdrop-blur bg-white/80 shadow" : "bg-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="KDC.inlive"
            width={120}
            height={40}
            className="h-8 sm:h-9 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
          />

          <span className="font-bold text-lg sm:text-xl">
            <span className="text-blue-600">KDC</span>
            <span className="text-gray-900">.inlive</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`relative font-medium pb-1 transition-colors
                ${active === id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-500"}
              `}
            >
              {label}
              {active === id && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`text-left font-medium transition-colors
                  ${active === id
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"}
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
