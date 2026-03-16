
"use client";

import { useReveal } from "../hooks/useReveal";

export default function FanZoneSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="fans"
      ref={ref}
      className={`py-24 bg-pink-400 transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
          🧑‍🤝‍🧑 FAN ZONE
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
          Community & Fan Zone
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {[1, 2, 3].map((_, index) => {
            const { ref, visible } = useReveal(index * 150);

            return (
              <div
                key={index}
                ref={ref}
                className={`bg-blue-100 rounded-2xl p-8
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
              >
                {index === 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Fan Discussions
                    </h3>
                    <p className="text-gray-800 mb-4 leading-relaxed">
                      Join vibrant community discussions where passionate cricket fans
                      share opinions, debate strategies, post match photos, and connect
                      over their love for Kolhapur cricket.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                      <li>Match discussion forums</li>
                      <li>Player performance debates</li>
                      <li>Photo and video submissions</li>
                      <li>Local cricket news sharing</li>
                    </ul>
                  </>
                )}

                {index === 1 && (
                  <>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Fan Clubs & Events
                    </h3>
                    <p className="text-gray-800 mb-4 leading-relaxed">
                      Become part of exclusive fan clubs with opportunities to attend
                      special events, meet-and-greets with players, stadium tours, and
                      community gatherings celebrating cricket.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                      <li>Official fan club memberships</li>
                      <li>Meet-and-greet events</li>
                      <li>Stadium watch parties</li>
                      <li>Annual fan conventions</li>
                    </ul>
                  </>
                )}

                {index === 2 && (
                  <>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Youth Development
                    </h3>
                    <p className="text-gray-800 mb-4 leading-relaxed">
                      Supporting the next generation through youth cricket programs,
                      coaching clinics, talent identification initiatives, and
                      grassroots development that nurtures future stars.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                      <li>Youth coaching programs</li>
                      <li>School cricket initiatives</li>
                      <li>Talent scouting camps</li>
                      <li>Equipment donation drives</li>
                    </ul>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="border-l-4 border-black pl-6 max-w-4xl">
          <p className="text-lg text-black italic">
            “KDC.inlive has transformed how we experience local cricket. The
            community they&apos;ve built is as passionate as the game itself!”
          </p>
        </div>
      </div>
    </section>
  );
}
