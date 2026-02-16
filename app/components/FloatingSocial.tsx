"use client";

export default function FloatingSocial() {
  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3">
      {/* YouTube */}
       {/* WhatsApp */}
      <a
        href="https://wa.me/918459525311"
        target="_blank"
        aria-label="WhatsApp"
        className="w-12 h-12 flex items-center justify-center
                   rounded-full bg-green-500 text-white text-xl
                   shadow-lg transition-all duration-300
                   hover:scale-110 hover:shadow-xl"
      >
        💬
      </a>
      <a
        href="https://youtube.com/@kdc.inlive"
        target="_blank"
        aria-label="YouTube"
        className="w-12 h-12 flex items-center justify-center
                   rounded-full bg-red-600 text-white text-xl
                   shadow-lg transition-all duration-300
                   hover:scale-110 hover:shadow-xl"
      >
        ▶
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/kgcliveofficial"
        target="_blank"
        aria-label="Instagram"
        className="w-12 h-12 flex items-center justify-center
                   rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
                   text-white text-xl
                   shadow-lg transition-all duration-300
                   hover:scale-110 hover:shadow-xl"
      >
        📸
      </a>
    </div>
  );
}
