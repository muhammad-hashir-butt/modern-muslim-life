import React from "react";
import logo from "../assets/logos.jpg"; // <-- YOUR LOGO
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-green-900 via-green-800 to-green-900 text-white mt-20 overflow-hidden">

      {/* Soft Glow Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 opacity-70"></div>

      {/* Background Glow Circles */}
      <div className="absolute w-72 h-72 bg-green-400/20 rounded-full top-10 -left-20 blur-3xl"></div>
      <div className="absolute w-64 h-64 bg-yellow-300/10 rounded-full bottom-0 -right-16 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12 relative z-10">

        {/* ------------------- ABOUT ------------------- */}
        <div className="space-y-5 text-center md:text-left">

          {/* LOGO + BRAND TITLE */}
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-3">

            {/* PREMIUM LOGO WRAPPER */}
            <div className="p-[3px] rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 shadow-lg">
              <div className="bg-green-900 rounded-2xl p-2 flex items-center justify-center">
                <img 
                  src={logo}
                  alt="Modern Muslim Life Logo"
                  className="h-14 w-auto object-contain rounded-xl"
                />
              </div>
            </div>

            {/* BRAND NAME */}
            <h3 className="text-2xl font-extrabold tracking-wide text-yellow-300 drop-shadow-md">
              Modern Muslim Life
            </h3>

          </div>

          {/* Description */}
          <p className="text-gray-200 text-sm leading-relaxed mt-1">
            Your trusted hub for modern Islamic living — lifestyle guides, spiritual inspiration,
            halal tips, and community-centered content.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-yellow-300 hover:text-green-900 
                           transition-all shadow-md hover:shadow-yellow-300/30"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ------------------- QUICK LINKS ------------------- */}
        <div className="space-y-5 text-center md:text-left">
          <h3 className="text-2xl font-bold text-yellow-300">Quick Links</h3>
          <ul className="text-gray-200 text-sm space-y-3">
            {[
              { label: "Events", link: "#events" },
              { label: "Ramadan", link: "#ramadan" },
              { label: "Blog", link: "#blogsection" },
              { label: "Contact Us", link: "#contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  className="hover:text-yellow-300 transition-all hover:pl-2 block"
                >
                  • {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------- NEWSLETTER ------------------- */}
        <div className="space-y-5 text-center md:text-left">
          <h3 className="text-2xl font-bold text-yellow-300">Stay Updated</h3>
          <p className="text-gray-200 text-sm">
            Join our newsletter for weekly articles, tips, and community guidance.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 mt-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 border 
                         focus:ring-2 focus:ring-yellow-300 focus:outline-none shadow-md"
            />
            <button
              type="submit"
              className="bg-yellow-300 text-green-900 px-5 py-2 rounded-xl font-semibold 
                         hover:bg-yellow-400 shadow-md transition-all"
            >
              Subscribe
            </button>
          </form>

          <p className="text-gray-300 text-xs mt-4 flex justify-center md:justify-start items-center gap-2">
            <FaEnvelope /> binteasif045@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-700 py-5 text-center text-gray-300 text-sm relative z-10">
        © 2025 Modern Muslim Life — Built with ❤ & Islamic Values
      </div>
    </footer>
  );
}