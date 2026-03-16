"use client";

import { useReveal } from "../hooks/useReveal";
import Image from "next/image";

export default function PlayersSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="players"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet the Players: Kolhapur&apos;s Cricket Stars
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mb-16">
          Discover the talented athletes who make Kolhapur district cricket
          exceptional. From emerging young talents to seasoned veterans, each
          player brings unique skills, dedication, and passion to the game.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: "🏏",
              title: "Player Profiles",
              text: "Comprehensive profiles featuring career statistics, batting and bowling averages, match performances, and personal background stories of standout district players.",
            },
            {
              icon: "🎥",
              title: "Video Highlights",
              text: "Curated collections of top performances, match-winning innings, brilliant bowling spells, spectacular catches, and memorable moments that define greatness.",
            },
            {
              icon: "🏆",
              title: "Inspiring Journeys",
              text: "Follow the remarkable paths from grassroots cricket to district-level stardom, showcasing dedication, perseverance, and the dreams that drive our local heroes.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border border-blue-300 rounded-2xl p-8 relative
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-xl
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white text-xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            "/player-1.jpg",
            "/player-2.jpg",
            "/player-3.jpg",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Cricket Player"
              width={600}
              height={400}
              className={`rounded-2xl object-cover h-64 w-full
                transition-all duration-700 ease-out
                hover:scale-105 hover:shadow-xl
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            />
          ))}
        </div>

        {/* Wide Image */}
        <Image
          src="/player-wide.jpg"
          alt="Cricket Practice Session"
          width={1200}
          height={500}
          className={`rounded-2xl object-cover h-80 w-full
            transition-all duration-700 ease-out
            hover:scale-[1.02] hover:shadow-xl
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
          style={{ transitionDelay: "400ms" }}
        />
      </div>
    </section>
  );
}
