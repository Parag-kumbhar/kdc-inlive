"use client";

import { useReveal } from "../hooks/useReveal";
import Image from "next/image";


export default function TechnologySection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="technology"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Technology Behind the Live Experience
        </h2>

        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          {/* Image */}
          <Image
            src="/tech-camera.jpg"
            alt="Live streaming camera setup"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-80"
          />


          {/* Text */}
          <div
            className={`transition-all duration-700 ease-out
              ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }
            `}
            style={{ transitionDelay: "120ms" }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cutting-Edge Streaming
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We utilize state-of-the-art streaming technology optimized for
              both mobile and desktop users, ensuring smooth, buffer-free
              viewing experiences regardless of your device or connection
              speed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our advanced broadcasting setup includes multiple HD cameras,
              professional audio equipment, and dedicated streaming servers
              that deliver reliable, high-quality coverage for every match.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {[
            {
              title: "🎥 Professional Equipment",
              text:
                "Multiple HD cameras, professional microphones, and broadcast-quality lighting ensure cinema-grade production values.",
            },
            {
              title: "☁️ Reliable Infrastructure",
              text:
                "Dedicated streaming servers and redundant internet connections guarantee uninterrupted live coverage.",
            },
            {
              title: "📱 Cross-Platform Access",
              text:
                "Optimized streaming works seamlessly on smartphones, tablets, laptops, and smart TVs.",
            },
            {
              title: "🔗 Social Integration",
              text:
                "Instant sharing to YouTube, Instagram, Facebook, and Twitter keeps the cricket community connected.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-blue-100 rounded-xl p-6
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-lg
                ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                }
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div
          className={`bg-blue-200 rounded-2xl p-6
            transition-all duration-700 ease-out
            ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }
          `}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-gray-900 font-medium">
            <strong>Technical Excellence:</strong> Our commitment to quality
            means continuous investment in the latest broadcast technology,
            training our crew, and improving the viewer experience with
            every match we stream.
          </p>
        </div>
      </div>
    </section>
  );
}
