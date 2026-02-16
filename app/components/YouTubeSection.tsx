// export default function YouTubeSection() {
//   return (
//     <section  id="youtube" className="relative py-24">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/youtube-bg.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-white/85"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-gray-900 mb-12">
//           Powered by KDC.inlive YouTube Channel
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-2">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//               Massive Digital Reach
//             </h3>

//             <p className="text-gray-700 mb-4 leading-relaxed">
//               Our official YouTube channel has grown into a thriving community
//               of cricket enthusiasts, delivering daily live broadcasts
//               featuring Kolhapur district matches with expert commentary and
//               comprehensive post-match analysis.
//             </p>

//             <p className="text-gray-700 mb-6 leading-relaxed">
//               From grassroots tournaments to championship finals, we provide
//               exclusive behind-the-scenes footage and intimate player
//               interviews that bring you closer to the game and the athletes
//               who make it special.
//             </p>

//             <ul className="space-y-3 text-gray-700">
//               <li>• Daily live match coverage with professional commentary</li>
//               <li>• Exclusive player interviews and team features</li>
//               <li>• Match replays and highlight reels</li>
//               <li>• Technical analysis and coaching insights</li>
//             </ul>
//           </div>

//           {/* RIGHT STATS */}
//           <div className="space-y-10">
//             <div>
//               <h4 className="text-5xl font-bold text-gray-900">8.3K+</h4>
//               <p className="text-lg font-semibold text-gray-800">
//                 Subscribers
//               </p>
//               <p className="text-gray-600">Growing cricket community</p>
//             </div>

//             <div>
//               <h4 className="text-5xl font-bold text-gray-900">837+</h4>
//               <p className="text-lg font-semibold text-gray-800">
//                 Videos
//               </p>
//               <p className="text-gray-600">Hours of cricket content</p>
//             </div>

//             <div>
//               <h4 className="text-5xl font-bold text-gray-900">8.8M+</h4>
//               <p className="text-lg font-semibold text-gray-800">
//                 Total Views
//               </p>
//               <p className="text-gray-600">Millions of cricket moments</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useReveal } from "../hooks/useReveal";



// export default function YouTubeSection() {
//   const { ref, visible } = useReveal();

//   return (
//     <section
//       id="youtube"
//       ref={ref}
//       className={`relative py-24 transition-all duration-700 ease-out
//         ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
//       `}
//     >
//       {/* Background */}
//       <div
//         className={`absolute inset-0 bg-cover bg-center
//           transition-transform duration-700 ease-out
//           ${visible ? "scale-100" : "scale-105"}
//         `}
//         style={{ backgroundImage: "url('/youtube-bg.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-white/85"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2
//           className={`text-4xl font-bold text-gray-900 mb-12
//             transition-all duration-700 ease-out
//             ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//           `}
//         >
//           Powered by KDC.inlive YouTube Channel
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* LEFT CONTENT */}
//           <div
//             className={`lg:col-span-2 transition-all duration-700 ease-out
//               ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//             `}
//             style={{ transitionDelay: "120ms" }}
//           >
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//               Massive Digital Reach
//             </h3>

         

//             <p className="text-gray-700 mb-4 leading-relaxed">
//               Our official YouTube channel has grown into a thriving community
//               of cricket enthusiasts, delivering daily live broadcasts
//               featuring Kolhapur district matches with expert commentary and
//               comprehensive post-match analysis.
//             </p>

//             <p className="text-gray-700 mb-6 leading-relaxed">
//               From grassroots tournaments to championship finals, we provide
//               exclusive behind-the-scenes footage and intimate player
//               interviews that bring you closer to the game and the athletes
//               who make it special.
//             </p>

//             <ul className="space-y-3 text-gray-700">
//               <li>• Daily live match coverage with professional commentary</li>
//               <li>• Exclusive player interviews and team features</li>
//               <li>• Match replays and highlight reels</li>
//               <li>• Technical analysis and coaching insights</li>
//             </ul>
//           </div>

//           {/* RIGHT STATS (FEATURE CARDS) */}
//           <div className="space-y-10">
//             {[
//               {
//                 value: "8.3K+",
//                 title: "Subscribers",
//                 desc: "Growing cricket community",
//               },
//               {
//                 value: "837+",
//                 title: "Videos",
//                 desc: "Hours of cricket content",
//               },
//               {
//                 value: "8.8M+",
//                 title: "Total Views",
//                 desc: "Millions of cricket moments",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-700 ease-out
//                   hover:-translate-y-2 hover:shadow-lg
//                   ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//                 `}
//                 style={{ transitionDelay: `${200 + index * 120}ms` }}
//               >
//                 <h4 className="text-5xl font-bold text-gray-900">
//                   {item.value}
//                 </h4>
//                 <p className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </p>
//                 <p className="text-gray-600">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
              value={8300}
              suffix="+"
              label="Subscribers"
              delay={0}
            />
            <StatCard
              value={837}
              suffix="+"
              label="Videos"
              delay={150}
            />
            <StatCard
              value={8800000}
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


