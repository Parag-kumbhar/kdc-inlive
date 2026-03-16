"use client";

import { useReveal } from "../hooks/useReveal";
import StatCard from "./StatCard";

export default function YouTubeSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="youtube"
      ref={ref}
      className={`relative py-24 transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center
          transition-transform duration-700 ease-out
          ${visible ? "scale-100" : "scale-105"}
        `}
        style={{ backgroundImage: "url('/youtube-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-gray-900 mb-12
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Powered by KDC.inlive YouTube Channel
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT CONTENT */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: "120ms" }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Massive Digital Reach
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our official YouTube channel has grown into a thriving community
              of cricket enthusiasts, delivering daily live broadcasts
              featuring Kolhapur district matches with expert commentary and
              comprehensive post-match analysis.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              From grassroots tournaments to championship finals, we provide
              exclusive behind-the-scenes footage and intimate player
              interviews that bring you closer to the game and the athletes
              who make it special.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Daily live match coverage with professional commentary</li>
              <li>• Exclusive player interviews and team features</li>
              <li>• Match replays and highlight reels</li>
              <li>• Technical analysis and coaching insights</li>
            </ul>
          </div>

          {/* RIGHT STATS – COUNT UP */}
          <div className="space-y-10">
            <StatCard
              value={10341}
              suffix="+"
              label="Subscribers"
              delay={0}
            />
            <StatCard
              value={1127}
              suffix="+"
              label="Videos"
              delay={150}
            />
            <StatCard
              value={10040080}
              suffix="+"
              label="Total Views"
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


