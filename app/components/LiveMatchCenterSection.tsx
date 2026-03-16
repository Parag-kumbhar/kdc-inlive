"use client";

import { useReveal } from "../hooks/useReveal";

export default function LiveMatchCenterSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="live"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
          🔴 LIVE NOW
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Live Match Center: Real-Time Updates & Interactive Features
        </h2>

        {/* Top 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {[
            {
              num: "01",
              title: "Ball-by-Ball Commentary",
              text:
                "Follow every delivery with detailed commentary and live scorecards updated instantly as the action unfolds on the field.",
            },
            {
              num: "02",
              title: "Interactive Match Timeline",
              text:
                "Relive key moments, wickets, boundaries, and game-changing milestones through our visual match timeline that tells the complete story.",
            },
            {
              num: "03",
              title: "Fan Engagement Hub",
              text:
                "Participate in live chat discussions, vote in fan polls, enter prediction contests, and connect with fellow cricket enthusiasts during matches.",
            },
          ].map((item, index) => {
            const { ref, visible } = useReveal(index * 150);

            return (
              <div
                key={item.num}
                ref={ref}
                className={`transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-lg
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-400 font-medium">
                    {item.num}
                  </span>
                  <div className="h-px bg-blue-400 flex-1"></div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            {
              title: "Enhanced Viewing Experience",
              text:
                "Our interactive platform transforms passive watching into active participation. Vote on man of the match, predict the next wicket, share your thoughts in real-time, and compete with other fans for bragging rights.",
            },
            {
              title: "Multiple Camera Angles",
              text:
                "Experience the game from different perspectives with multiple camera feeds, slow-motion replays, and strategic overhead views that bring professional-level coverage to local cricket.",
            },
          ].map((item, index) => {
            const { ref, visible } = useReveal(index * 200);

            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-500 ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
