"use client";

import { useReveal } from "../hooks/useReveal";

export default function JoinSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Join the KDC.inlive Cricket Family Today!
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mb-16">
          Become part of Kolhapur&apos;s cricket revolution where every run,
          wicket, and catch counts. Join thousands of passionate fans who never
          miss a moment of local cricket action through our comprehensive
          digital platform.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {[
            {
              title: "Subscribe on YouTube",
              text: (
                <>
                  Hit subscribe on our{" "}
                  <a
                    href="https://youtube.com/@kdc.inlive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    YouTube channel
                  </a>{" "}
                  for live match alerts, exclusive content, player interviews, and
                  highlights delivered directly to your feed.
                </>
              ),
            },
            {
              title: "Follow on Instagram",
              text: (
                <>
                  Follow{" "}
                  <a
                    href="https://www.instagram.com/kdcliveofficial_?igsh=MXVsN2V2Z3dudWU3aA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    @kgcliveofficial
                  </a>{" "}
                  for daily stories, match photos, behind-the-scenes content, and
                  community engagement.
                </>
              ),
            },
            {
              title: "Download the App",
              text:
                "Get the upcoming KDC.inlive mobile app for personalized match alerts, exclusive features, offline highlights, and the ultimate cricket experience.",
            },
          ].map((item, index) => {
            const { ref, visible } = useReveal(index * 150);

            return (
              <div
                key={index}
                ref={ref}
                className={`border border-blue-300 rounded-2xl p-8
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:shadow-xl
          ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"}
        `}
              >
                <div className="text-xl font-bold mb-4 text-gray-900">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>


        {/* Divider */}
        <hr className="my-16" />

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {[1, 2].map((_, index) => {
            const { ref, visible } = useReveal(index * 150);

            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-500 ease-out
                  ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"}
                `}
              >
                {index === 0 && (
                  <>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                      Contact KDC.inlive
                    </h3>

                    <p className="mb-3 text-gray-800">
                      <strong className="text-gray-900">Founder:</strong>{" "}
                      Omkar Mahadev Patil
                    </p>

                    <p className="mb-3 text-gray-800">
                      <strong className="text-gray-900">Phone:</strong>{" "}
                      <a
                        href="tel:+918459525311"
                        className="text-blue-600 font-semibold hover:text-blue-700"
                      >
                        +91 84595 25311
                      </a>
                    </p>

                    <p className="text-gray-800">
                      <strong className="text-gray-900">Email:</strong>{" "}
                      <a
                        href="mailto:kolhapurgramincricket@gmail.com"
                        className="text-blue-600 font-semibold hover:text-blue-700"
                      >
                        kolhapurgramincricket@gmail.com
                      </a>
                    </p>
                  </>
                )}

                {index === 1 && (
                  <>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                      Connect With Us
                    </h3>

                    {/* ✅ YouTube link */}
                    <p className="mb-3 text-gray-800">
                      <strong className="text-gray-900">YouTube:</strong>{" "}
                      <a
                        href="https://youtube.com/@kdc.inlive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        @kdc.inlive
                      </a>
                    </p>

                    {/* ✅ Instagram link */}
                    <p className="mb-4 text-gray-800">
                      <strong className="text-gray-900">Instagram:</strong>{" "}
                      <a
                        href="https://www.instagram.com/kdcliveofficial_?igsh=MXVsN2V2Z3dudWU3aA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        @kgcliveofficial
                      </a>
                    </p>

                    <p className="text-gray-800">
                      Join our growing community of 8,464+ subscribers and
                      experience cricket like never before!
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://youtube.com/@kdc.inlive"
            target="_blank"
            className="inline-flex justify-center items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Watch Live Cricket Now
          </a>

          <a
            href="mailto:kolhapurgramincricket@gmail.com"
            className="inline-flex justify-center items-center border border-blue-500 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
