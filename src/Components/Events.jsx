import React, { useState, useEffect } from "react";
import eventsData from "../Data/events";
import { FaStar, FaMoon, FaGift, FaClock } from "react-icons/fa";

const typeIcons = {
  Festival: <FaGift className="text-yellow-500 inline-block mr-2" />,
  Spiritual: <FaStar className="text-purple-500 inline-block mr-2" />,
  Observance: <FaMoon className="text-blue-500 inline-block mr-2" />,
};

const typeColors = {
  Festival: "bg-yellow-300 text-yellow-900",
  Spiritual: "bg-purple-300 text-purple-900",
  Observance: "bg-blue-300 text-blue-900",
};

export default function Events() {
  const [filter, setFilter] = useState("All");

  const getCountdown = (dateStr) => {
    const now = new Date();
    const eventDate = new Date(dateStr);
    const diff = eventDate - now;
    if (diff <= 0) return "Event Started!";
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    return `${d}d ${h}h ${m}m`;
  };

  const filteredEvents =
    filter === "All" ? eventsData : eventsData.filter((e) => e.type === filter);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".event-card");
      const windowHeight = window.innerHeight;
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          el.classList.add("fade-slide-rotate");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredEvents]);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".scroll-animate").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section id="events" className="my-12 px-4 md:px-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 text-center">
        Islamic Events & Festivals
      </h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Festival", "Spiritual", "Observance"].map((f) => (
          <button
            key={f}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === f
                ? "bg-green-700 text-white shadow-lg scale-105"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((e) => (
          <div
            key={e.id}
            className="event-card p-6 backdrop-blur-sm bg-white/70 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden opacity-0 flex flex-col"
          >
            {/* Type Badge */}
            <span
              className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${typeColors[e.type]}`}
            >
              {e.type}
            </span>

            {/* Icon */}
            <div className="absolute top-3 left-3 text-2xl group-hover:animate-bounce">
              {typeIcons[e.type]}
            </div>

            {/* Title */}
            <h3 className="font-extrabold text-2xl mt-6 group-hover:text-green-900 transition-colors duration-300">
              {e.title}
            </h3>

            {/* Short Summary */}
            <p className="text-gray-700 mt-3 leading-relaxed flex-grow">{e.summary}</p>

            {/* Detailed Content */}
            <p className="text-gray-600 mt-2 text-sm leading-relaxed flex-grow">
              {e.details}
            </p>

            {/* Spacer to create gap between text and countdown */}
            <div className="mt-4"></div>

            {/* Countdown Section Positioned at Bottom */}
            <div className="flex items-center gap-2 text-xs text-gray-600 mt-auto">
              <FaClock /> Countdown: {getCountdown(e.date)}
            </div>

            {/* Countdown bar */}
            <div className="h-1 w-full bg-green-200 rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-green-700 transition-all duration-1000"
                style={{
                  width: `${Math.min(
                    100,
                    ((new Date() - new Date(e.date)) / 1000 / 60 / 60 / 24) * 2
                  )}%`,
                }}
              ></div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-green-200 rounded-full opacity-30 animate-pulse-slow"></div>
          </div>
        ))}
      </div>

      {/* Scroll Reveal & Pulse Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite; }
        .fade-slide-rotate {
          opacity: 1 !important;
          transform: translateY(0) rotate(0deg) !important;
          transition: all 1s ease-out;
        }
        .event-card { transform: translateY(40px) rotate(-2deg); display: flex; flex-direction: column; }
        .scroll-animate {
          transform: translateY(50px);
          opacity: 0;
          transition: all 1s ease-out;
        }
        .scroll-animate.visible {
          transform: translateY(0);
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
