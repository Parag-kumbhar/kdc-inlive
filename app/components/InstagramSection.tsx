// export default function InstagramSection() {
//   return (
//     <section id="instagram" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
//           Follow the Action on Instagram
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//           {/* Card 1 */}
//           <div>
//             <img
//               src="/insta-1.jpg"
//               alt="Match Day Magic"
//               className="w-56 h-56 mx-auto rounded-full object-cover mb-6"
//             />
//             <h3 className="text-xl font-semibold text-gray-900 mb-3">
//               Match Day Magic
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               Dynamic photo galleries showcasing electrifying match moments,
//               player spotlights, victory celebrations, and passionate fan
//               reactions from every game.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div>
//             <img
//               src="/insta-2.jpg"
//               alt="Interactive Stories"
//               className="w-56 h-56 mx-auto rounded-full object-cover mb-6"
//             />
//             <h3 className="text-xl font-semibold text-gray-900 mb-3">
//               Interactive Stories
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               Engage with polls, trivia quizzes, live Q&A sessions with cricket
//               stars, and exclusive behind-the-scenes content that keeps you
//               connected to the game.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div>
//             <img
//               src="/insta-3.jpg"
//               alt="Community Spirit"
//               className="w-56 h-56 mx-auto rounded-full object-cover mb-6"
//             />
//             <h3 className="text-xl font-semibold text-gray-900 mb-3">
//               Community Spirit
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               User-generated content celebrating Kolhapur&apos;s rich cricket
//               culture, featuring local heroes, grassroots tournaments, and the
//               vibrant fan community that makes our cricket special.
//             </p>
//           </div>
//         </div>

//         {/* CTA Box */}
//         <div className="mt-20 bg-blue-100 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
//           <span className="text-lg font-semibold text-gray-900">
//             📸 Follow us on Instagram:
//           </span>
//           <a
//             href="https://www.instagram.com/kgcliveofficial"
//             target="_blank"
//             className="text-lg font-bold text-blue-600 hover:underline"
//           >
//             @kgcliveofficial
//           </a>
//           <span className="text-gray-700">
//             for daily cricket content, exclusive updates, and community
//             highlights!
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useReveal } from "../hooks/useReveal";
import Image from "next/image";

export default function InstagramSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="instagram"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Follow the Action on Instagram
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              img: "/Instagram1.jpg",
              title: "Award Moment",
              desc:
                "Celebrating standout performances: winners, awards, and proud moments from the presentation ceremony after an epic match.",
            },
            {
              img: "/Instagram2.jpg",
              title: "Toss & Trophy - Match Anticipation",
              desc:
                "The toss, the trophy, and the build-up — that split second of excitement before the contest begins, when every fan holds their breath.",
            },
            {
              img: "/Instagram3.jpg",
              title: "Team Parade - Match Day Arrival",
              desc:
                "Teams march onto the ground before the game — the pre-match energy, uniform pride, and community support captured in one frame.",
            },
          ].map((item, index) => {
            const { ref, visible } = useReveal(index * 150);

            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-500 ease-out
                  ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  }
                `}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={224}
                  height={224}
                  className="w-56 h-56 mx-auto rounded-full object-cover mb-6
                             transition-transform duration-300 ease-out
                             hover:scale-105 hover:shadow-xl"
                />

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

        {/* CTA Box */}
        <div
          className={`mt-20 bg-blue-100 rounded-2xl px-8 py-6
            flex flex-col md:flex-row items-center justify-center gap-3 text-center
            transition-all duration-500 ease-out
            ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }
          `}
        >
          <span className="text-lg font-semibold text-gray-900">
            📸 Follow us on Instagram:
          </span>
          <a
            href="https://www.instagram.com/kdcliveofficial_?igsh=MXVsN2V2Z3dudWU3aA=="
            target="_blank"
            className="text-lg font-bold text-blue-600 hover:underline"
          >
            @kgcliveofficial
          </a>
          <span className="text-gray-700">
            for daily cricket content, exclusive updates, and community
            highlights!
          </span>
        </div>
      </div>
    </section>
  );
}
