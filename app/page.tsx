// import FeaturesSection from "./components/FeaturesSection";
// import YouTubeSection from "./components/YouTubeSection";
// import InstagramSection from "./components/InstagramSection";
// import LiveMatchCenterSection from "./components/LiveMatchCenterSection";
// import PlayersSection from "./components/PlayersSection";
// import FixturesSection from "./components/FixturesSection";
// import FanZoneSection from "./components/FanZoneSection";
// import TechnologySection from "./components/TechnologySection";
// import JoinSection from "./components/JoinSection";
// import Navbar from "./components/Navbar";

// export default function HomePage() {
//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <main className="relative min-h-screen flex items-center justify-center">
//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/hero-bg.jpg')" }}
//         >
//           <div className="absolute inset-0 bg-white/80"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-5xl px-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             KDC.inlive: Your Ultimate Kolhapur District Cricket Live Hub
//           </h1>

//           <p className="mt-6 text-lg text-gray-700 max-w-3xl">
//             Welcome to KDC.inlive, the premier destination for live cricket
//             streaming from Kolhapur District. We bring the excitement of local
//             cricket directly to your screens with professional coverage,
//             real-time updates, and passionate commentary that captures every
//             boundary, wicket, and unforgettable moment.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <a
//               href="https://youtube.com/@kdc.inlive?si=ZUWbcpQhp-84Zg3M"
//               target="_blank"
//               className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-600 transition"
//             >
//               Watch Live on YouTube
//             </a>

//             <a
//               href="https://www.instagram.com/kdcliveofficial?igsh=YWRkYjZ4Z2tnZW0z"
//               target="_blank"
//               className="inline-flex items-center justify-center rounded-lg border border-blue-400 px-6 py-3 text-blue-500 font-semibold hover:bg-blue-50 transition"
//             >
//               Follow on Instagram
//             </a>
//           </div>
//         </div>
//       </main>

//       {/* ================= FEATURES SECTION ================= */}
//       <FeaturesSection />

//       {/* ================= YOUTUBE SECTION ================= */}
//       <YouTubeSection />
//       {/* FOURTH */}
//       <InstagramSection />

//       {/* FIFTH */}
//       <LiveMatchCenterSection />

//       {/* SIXTH */}
//       <PlayersSection />

//       {/* SEVEN */}
//       <FixturesSection />


//       {/* EIGHTH */}
//       <FanZoneSection />


//       {/* NINTH  */}
//       <TechnologySection />


//       {/* TENTH */}
//       <JoinSection />



//     </>
//   );
// }




"use client";

import { useEffect, useState } from "react";

import FeaturesSection from "./components/FeaturesSection";
import YouTubeSection from "./components/YouTubeSection";
import InstagramSection from "./components/InstagramSection";
import LiveMatchCenterSection from "./components/LiveMatchCenterSection";
import PlayersSection from "./components/PlayersSection";
import FixturesSection from "./components/FixturesSection";
import FanZoneSection from "./components/FanZoneSection";
import TechnologySection from "./components/TechnologySection";
import JoinSection from "./components/JoinSection";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import Image from "next/image";
// import FloatingSocial from "./components/FloatingSocial";




export default function HomePage() {
  /* 🔒 FORCE SCROLL TO TOP ON LOAD */
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);



  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Offset for fixed navbar */}
      <div className="pt-16">
        {/* ================= HERO SECTION ================= */}
        {/* ================= HERO SECTION ================= */}
        <main
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Optimized Background Image */}
          <Image
            src="/hero-bg.jpg"
            alt="Cricket stadium background"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 animate-[heroZoom_20s_linear_infinite]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80" />

          {/* Soft gradient light */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-5xl px-6 text-center md:text-left">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              🔴 Live District Matches
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fadeUp">
              KDC.inlive: Your Ultimate Kolhapur District Cricket Live Hub
            </h1>

            {/* Paragraph */}
            <p className="mt-6 text-lg text-gray-700 max-w-3xl animate-fadeUp delay-150">
              Welcome to KDC.inlive, the premier destination for live cricket
              streaming from Kolhapur District. We bring the excitement of local
              cricket directly to your screens with professional coverage,
              real-time updates, and passionate commentary that captures every
              boundary, wicket, and unforgettable moment.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeUp delay-300">
              <a
                href="https://youtube.com/@kdc.inlive"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white font-semibold
        transition-all duration-300
        hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
              >
                Watch Live on YouTube
              </a>

              <a
                href="https://www.instagram.com/kgcliveofficial"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg border border-blue-400 px-6 py-3 text-blue-500 font-semibold
        transition-all duration-300
        hover:bg-blue-50 hover:scale-105 hover:shadow-md"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </main>



        {/* ================= SECTIONS ================= */}
        <FeaturesSection />
        <YouTubeSection />
        <InstagramSection />
        <LiveMatchCenterSection />
        <PlayersSection />
        <FixturesSection />
        <FanZoneSection />
        <TechnologySection />
        <JoinSection />

        {/* ================= PREMIUM FOOTER ================= */}
        <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="KDC.inlive"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />

                <span className="text-xl font-bold text-white">
                  KDC.inlive
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The ultimate destination for live Kolhapur district cricket.
                Watch matches, follow players, and stay connected with the
                local cricket community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#live" className="hover:text-white transition">Live</a></li>
                <li><a href="#players" className="hover:text-white transition">Players</a></li>
                <li><a href="#fixtures" className="hover:text-white transition">Fixtures</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://youtube.com/@kdc.inlive"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kgcliveofficial"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Founder : Omkar Mahadev Patil</li>
                <li>
                  <a
                    href="tel:+918459525311"
                    className="hover:text-white transition"
                  >
                    +91 84595 25311
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kolhapurgramincricket@gmail.com"
                    className="hover:text-white transition"
                  >
                    kolhapurgramincricket@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-12 pt-6">
            <div className="max-w-7xl mx-auto px-6 text-center text-sm space-y-2">
              <p>
                © {new Date().getFullYear()}{" "}
                <span className="text-white font-semibold">
                  KDC.inlive
                </span>
                . All rights reserved.
              </p>

              <p className="text-gray-500">
                Website created by{" "}
                <span className="text-white font-semibold">
                  Parag R Kumbhar
                </span>
              </p>
            </div>
          </div>
        </footer>


        {/* Floating Social Buttons */}
        {/* <FloatingSocial /> */}

        {/* Back To Top */}
        <BackToTop />
      </div>
    </>
  );
}
