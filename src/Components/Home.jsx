import React, { useState, useEffect, useRef } from "react";
import PrayerReminder from "./PrayerReminder";
import Events from "./Events";
import Ramadan from "./Ramadan";
import Store from "./Store";

import islamicBg from "../assets/islamicbackground.jpg";

const slides = [
  { title: "Balance Your Deen", subtitle: "Spiritual guidance and prayer reminders", color: "text-green-900" },
  { title: "Explore Modern Lifestyle", subtitle: "Events, halal shopping, and community activities", color: "text-green-800" },
  { title: "Join Our Community", subtitle: "Connect with like-minded modern Muslims", color: "text-green-700" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      sectionsRef.current.forEach((el) => {
        if (!el) return;
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("animate-reveal");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* FULL-WIDTH HERO BACKGROUND */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat shadow-xl overflow-hidden py-24"
        style={{
          backgroundImage: `url(${islamicBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Center */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-center">

          {/* Slider */}
          <div className="relative h-72 md:h-96 mb-6 md:mb-12 overflow-hidden">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-1000 ${
                  i === slide ? "opacity-100 translate-y-0 z-10" : "opacity-0 -translate-y-10 z-0"
                }`}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-xl tracking-wider animate-text-glow">
                  {s.title}
                </h1>
                <p className="text-white md:text-lg max-w-3xl mx-auto drop-shadow-lg mb-6">
                  {s.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons — moved closer to subheading */}
          <div className="-mt-20 flex flex-col md:flex-row justify-center gap-6 relative z-20">
            <button
              onClick={() => scrollToSection(1)}
              className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 font-semibold transform hover:scale-110 hover:shadow-2xl hover:bg-green-800 neon-glow"
            >
              Explore Events
            </button>

            <button
              onClick={() => scrollToSection(3)}
              className="px-8 py-3 bg-yellow-400 text-green-900 rounded-full shadow-lg transition-all duration-300 font-semibold transform hover:scale-110 hover:shadow-2xl hover:bg-yellow-500 neon-glow"
            >
              Visit Store
            </button>
          </div>
        </div>
      </section>

      {/* Page Sections with reduced spacing */}
      <div className="relative px-6 py-10 max-w-6xl mx-auto"> {/* py-20 → py-10 */}
        <div ref={(el) => (sectionsRef.current[0] = el)}>
          <PrayerReminder />
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)}><Events /></div>
        <div ref={(el) => (sectionsRef.current[2] = el)}><Ramadan /></div>
        <div ref={(el) => (sectionsRef.current[3] = el)}><Store /></div>
      </div>

      <style jsx>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-text {
          0%, 100% { text-shadow: 0 0 6px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,1); }
        }
        .animate-reveal { animation: reveal 1s forwards; }
        .animate-text-glow { animation: glow-text 3s infinite alternate; }
        .neon-glow { box-shadow: 0 0 8px #fff, 0 0 20px #fff6; }
        .neon-glow:hover { box-shadow: 0 0 14px #fff, 0 0 30px #fff; }
      `}</style>
    </div>
  );
}
