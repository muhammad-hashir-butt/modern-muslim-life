import React from "react";
import halalImg from "../assets/halal.jpg";
import vlogImg from "../assets/vlog.jpg";
import communityImg from "../assets/community.jpg";
import hijabImg from "../assets/hijabtutorial.jpg";
import interviewImg from "../assets/interview.jpg";
import { FaStarAndCrescent, FaMoon, FaUtensils, FaHeart, FaCheck } from "react-icons/fa";

export default function Ramadan() {
  // Add your images here: either import local files at the top and reference them,
  // or use remote URLs directly in the `image` fields below.
  const blogs = [
    {
      title: "Healthy Halal Recipes",
      summary: "Quick, nutritious, and delicious meals for Muslim families.",
      image: halalImg, // e.g. recipesImg or "https://..."
    },
    {
      title: "Ramadan Vlogs & Tips",
      summary: "Watch daily vlogs and get preparation ideas for Ramadan.",
      image: vlogImg,
    },
    {
      title: "Community Q&A",
      summary: "Discuss modern Muslim issues and share advice with others.",
      image: communityImg,
    },
    {
      title: "Hijab Tutorials",
      summary: "Step-by-step guides to modern and elegant hijab styles.",
      image: hijabImg,
    },
    {
      title: "Entrepreneur Interviews",
      summary: "Insights from successful Muslim entrepreneurs and influencers.",
      image: interviewImg,
    },
  ];

  return (
    <section
      id="ramadan"
      className="my-16 px-6 py-14 bg-gradient-to-br from-green-100 via-green-50 to-white rounded-3xl shadow-2xl border border-green-200 relative overflow-hidden"
    >
      {/* Decorative Glowing Circles */}
      <div className="absolute w-60 h-60 bg-green-300 opacity-20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl -bottom-16 -right-16 animate-ping"></div>

      {/* Heading */}
      <div className="text-center mb-12">
        <FaStarAndCrescent className="text-green-700 text-5xl mx-auto animate-bounce" />
        <h2 className="text-4xl font-extrabold text-green-800 drop-shadow-lg mt-4 animate-glow-text">
          Ramadan Kareem 🌙
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-3 text-sm">
          A month of blessings, patience, self-discipline & spiritual growth. Explore fasting tips, 
          healthy routines, and special Ramadan recipes for a beautiful and peaceful month.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* FASTING CARD */}
        <div className="p-6 bg-white rounded-3xl shadow-xl border border-green-200 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-cardFade">
          <FaMoon className="text-green-600 text-4xl mb-3 animate-spin-slow mx-auto" />
          <h3 className="text-lg font-semibold text-green-700 text-center">Fasting Tips (Roza)</h3>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Stay hydrated during non-fasting hours</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Eat complex carbs during Sehri for long energy</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Avoid oily & heavy food at Iftar</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Light walk after Iftar improves digestion</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Maintain balanced sleep for Tahajjud + Fajr</li>
          </ul>
        </div>

        {/* RECIPES CARD */}
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-white border border-yellow-300 rounded-3xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-cardFade delay-300">
          <FaUtensils className="text-yellow-600 text-4xl mb-3 animate-wiggle mx-auto" />
          <h3 className="text-lg font-semibold text-yellow-700 text-center">Sehri & Iftar Special Recipes</h3>
          <p className="mt-3 text-sm text-gray-700">
            Maintain energy and hydration with these delicious Sunnah-inspired meals:
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>🥣 <strong>Sehri:</strong> Oats, yogurt, bananas, boiled eggs, brown bread</li>
            <li>🥗 <strong>Iftar:</strong> Dates (Ajwa), fruit chaat, lentil soup</li>
            <li>🍗 <strong>Meals:</strong> Grilled chicken, baked fish, vegetable rice</li>
            <li>🍹 <strong>Drinks:</strong> Lemon mint, Rooh Afza, laban (yogurt drink)</li>
          </ul>
        </div>

        {/* SPIRITUALITY CARD */}
        <div className="p-6 bg-white rounded-3xl shadow-xl border border-green-200 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-cardFade delay-500">
          <FaHeart className="text-red-500 text-4xl mb-3 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold text-green-700 text-center">Spiritual Goals</h3>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Recite & understand Quran daily</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Pray Taraweeh regularly</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Make dua in Tahajjud (powerful time)</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Give Sadaqah & help poor families</li>
            <li className="flex gap-2"><FaCheck className="text-green-600 mt-1" /> Avoid social media & bad habits</li>
          </ul>
        </div>
      </div>

      {/* ------------------------------ */}
      {/* BLOG SECTION (with images)    */}
      {/* ------------------------------ */}
      <div id="blogsection" className="mt-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-10 text-center">
          Weekly Lifestyle Blog & Insights
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="p-6 backdrop-blur-sm bg-white/70 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden opacity-0 scroll-animate group"
            >
              {/* IMAGE SLOT */}
              <div className="w-full h-44 md:h-52 rounded-2xl overflow-hidden mb-4 bg-gray-50">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-gray-400 text-sm">
                    <span className="mb-1">Add image here</span>
                    <small className="text-xs">(import or provide URL in blogs array)</small>
                  </div>
                )}
              </div>

              <h3 className="font-extrabold text-2xl mt-2 group-hover:text-green-900 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-700 mt-3 leading-relaxed">{blog.summary}</p>

              <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-300 rounded-full opacity-20 animate-pulse-slow pointer-events-none"></div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center mt-10 text-gray-500 text-xs">
        May Allah accept your fasts, prayers and good deeds. 🌙✨
      </p>

      <style jsx>{`
        @keyframes cardFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          0% {transform: rotate(0deg);}
          100% {transform: rotate(360deg);}
        }
        @keyframes wiggle {
          0%,100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes glow-text {
          0% { text-shadow: 0 0 5px rgba(0,100,0,0.2); }
          100% { text-shadow: 0 0 25px rgba(0,150,0,0.5); }
        }

        .animate-cardFade { animation: cardFade 1s ease forwards; }
        .animate-spin-slow { animation: spin-slow 6s linear infinite; }
        .animate-wiggle { animation: wiggle 2.5s infinite; }
        .animate-glow-text { animation: glow-text 2s infinite alternate; }

        .scroll-animate {
          transform: translateY(50px);
          opacity: 0;
          transition: all 1s ease-out;
        }
        .scroll-animate.visible {
          transform: translateY(0);
          opacity: 1 !important;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite; }
      `}</style>
    </section>
  );
}
