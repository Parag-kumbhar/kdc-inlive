"use client";

import { useReveal } from "../hooks/useReveal";

export default function FeaturesSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`py-20 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div id="features" className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
          🏏 LIVE CRICKET
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Experience Kolhapur Cricket Like Never Before
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎥",
              title: "Live Streaming Excellence",
              desc:
                "Watch every thrilling moment from Kolhapur District cricket matches with crystal-clear HD streaming quality that puts you right in the heart of the action.",
            },
            {
              icon: "🐞",
              title: "Real-Time Updates",
              desc:
                "Get instant score updates, comprehensive player statistics, detailed match highlights, and ball-by-ball commentary as the game unfolds.",
            },
            {
              icon: "♿",
              title: "Anytime, Anywhere Access",
              desc:
                "Experience local cricket passion directly on your screen, whether you're at home, work, or on the go—never miss a moment of the action.",
            },
          ].map((item, index) => {
            const { ref, visible } = useReveal(index * 150);

            return (
              <div
                key={index}
                ref={ref}
                className={`rounded-2xl bg-blue-100 p-8 border border-blue-200
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full
                             bg-blue-400 text-white mb-6 text-2xl
                             transition-transform duration-300
                             group-hover:scale-110"
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
