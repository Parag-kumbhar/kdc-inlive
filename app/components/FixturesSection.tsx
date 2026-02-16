// export default function FixturesSection() {
//   return (
//     <section id="fixtures" className="py-24 bg-pink-400 text-black">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-20">
//           Upcoming Fixtures & Tournament Coverage
//         </h2>

//         {/* Timeline */}
//         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
//           {/* Vertical Line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/70 transform -translate-x-1/2"></div>

//           {/* LEFT SIDE */}
//           <div className="space-y-24">
//             {/* 1 */}
//             <div className="relative">
//               <span className="absolute -right-10 top-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
//                 1
//               </span>
//               <h3 className="text-xl font-semibold mb-3">
//                 Pre-Season Preparations
//               </h3>
//               <p className="leading-relaxed">
//                 Comprehensive schedule announcements for all Kolhapur district
//                 cricket tournaments, league matches, and special exhibition
//                 games throughout the season.
//               </p>
//             </div>

//             {/* 3 */}
//             <div className="relative">
//               <span className="absolute -right-10 top-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
//                 3
//               </span>
//               <h3 className="text-xl font-semibold mb-3">
//                 Live Match Coverage
//               </h3>
//               <p className="leading-relaxed">
//                 Real-time streaming with professional commentary, multiple
//                 camera angles, instant replays, and interactive fan engagement
//                 throughout the game.
//               </p>
//             </div>
//           </div>

//           {/* CENTER SPACER */}
//           <div className="hidden md:block"></div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-24">
//             {/* 2 */}
//             <div className="relative">
//               <span className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
//                 2
//               </span>
//               <h3 className="text-xl font-semibold mb-3">
//                 Pre-Match Previews
//               </h3>
//               <p className="leading-relaxed">
//                 Expert insights, team form analysis, player matchups, pitch
//                 conditions, and weather forecasts to build anticipation before
//                 every major fixture.
//               </p>
//             </div>

//             {/* 4 */}
//             <div className="relative">
//               <span className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
//                 4
//               </span>
//               <h3 className="text-xl font-semibold mb-3">
//                 Post-Match Analysis
//               </h3>
//               <p className="leading-relaxed">
//                 Detailed reports, statistical breakdowns, expert commentary,
//                 player interviews, and comprehensive match summaries to keep
//                 fans fully informed.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Sections */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">
//               Tournament Calendar
//             </h3>
//             <p className="leading-relaxed">
//               Stay updated with our complete tournament calendar featuring
//               dates, venues, participating teams, and live streaming schedules.
//               Never miss an important match with our notification system.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold mb-4">
//               Expert Predictions
//             </h3>
//             <p className="leading-relaxed">
//               Get insights from cricket analysts, former players, and local
//               experts who provide predictions, tactical analysis, and key
//               player insights for upcoming matches.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useReveal } from "../hooks/useReveal";

export default function FixturesSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="fixtures"
      ref={ref}
      className={`py-20 bg-pink-400 text-black transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Upcoming Fixtures & Tournament Coverage
        </h2>

        {/* ===== TIMELINE WRAPPER ===== */}
        <div className="relative">
          {/* FULL HEIGHT MIDDLE LINE */}
          {/* <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/70 -translate-x-1/2" /> */}
          {/* Animated Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-white/70 -translate-x-1/2 overflow-hidden">
            <div
              className={`w-full bg-white origin-top transition-transform duration-1500 ease-out
      ${visible ? "scale-y-100" : "scale-y-0"}
    `}
              style={{ height: "100%" }}
            />
          </div>

          {/* ===== TIMELINE 1–4 ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* LEFT */}
            <div className="space-y-14">
              {[
                {
                  num: 1,
                  title: "Pre-Season Preparations",
                  text:
                    "Comprehensive schedule announcements for all Kolhapur district cricket tournaments, league matches, and special exhibition games throughout the season.",
                },
                {
                  num: 3,
                  title: "Live Match Coverage",
                  text:
                    "Real-time streaming with professional commentary, multiple camera angles, instant replays, and interactive fan engagement throughout the game.",
                },
              ].map((item, index) => {
                const { ref, visible } = useReveal(index * 200);

                return (
                  <div
                    key={item.num}
                    ref={ref}
                    className={`relative pl-14 transition-all duration-500 ease-out
                      hover:-translate-y-2 hover:shadow-lg
                      ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      }
                    `}
                  >
                    <span className="absolute left-0 top-1 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      {item.num}
                    </span>

                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* CENTER SPACER */}
            <div className="hidden md:block" />

            {/* RIGHT */}
            <div className="space-y-14">
              {[
                {
                  num: 2,
                  title: "Pre-Match Previews",
                  text:
                    "Expert insights, team form analysis, player matchups, pitch conditions, and weather forecasts to build anticipation before every major fixture.",
                },
                {
                  num: 4,
                  title: "Post-Match Analysis",
                  text:
                    "Detailed reports, statistical breakdowns, expert commentary, player interviews, and comprehensive match summaries to keep fans fully informed.",
                },
              ].map((item, index) => {
                const { ref, visible } = useReveal(index * 200 + 150);

                return (
                  <div
                    key={item.num}
                    ref={ref}
                    className={`relative pl-14 transition-all duration-500 ease-out
                      hover:-translate-y-2 hover:shadow-lg
                      ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      }
                    `}
                  >
                    <span className="absolute left-0 top-1 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      {item.num}
                    </span>

                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== TIMELINE 5–6 ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT (5) */}
            <div className="space-y-14">
              {[
                {
                  num: 5,
                  title: "Tournament Calendar",
                  text:
                    "Stay updated with our complete tournament calendar featuring dates, venues, participating teams, and live streaming schedules. Never miss an important match with our notification system.",
                },
              ].map((item, index) => {
                const { ref, visible } = useReveal(index * 200 + 300);

                return (
                  <div
                    key={item.num}
                    ref={ref}
                    className={`relative pl-14 transition-all duration-500 ease-out
                      hover:-translate-y-2 hover:shadow-lg
                      ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                      }
                    `}
                  >
                    <span className="absolute left-0 top-1 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      {item.num}
                    </span>

                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* CENTER SPACER */}
            <div className="hidden md:block" />

            {/* RIGHT (6) */}
            <div className="space-y-14">
              {[
                {
                  num: 6,
                  title: "Expert Predictions",
                  text:
                    "Get insights from cricket analysts, former players, and local experts who provide predictions, tactical analysis, and key player insights for upcoming matches.",
                },
              ].map((item, index) => {
                const { ref, visible } = useReveal(index * 200 + 450);

                return (
                  <div
                    key={item.num}
                    ref={ref}
                    className={`relative pl-14 transition-all duration-500 ease-out
                      hover:-translate-y-2 hover:shadow-lg
                      ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                      }
                    `}
                  >
                    <span className="absolute left-0 top-1 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      {item.num}
                    </span>

                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ===== END TIMELINE ===== */}
      </div>
    </section>
  );
}
