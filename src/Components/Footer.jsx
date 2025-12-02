import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-green-800 via-green-900 to-green-800 text-white mt-12 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute w-60 h-60 bg-green-500/30 rounded-full -top-10 -left-10 animate-pulse-slow"></div>
      <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full -bottom-16 -right-16 animate-ping"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-yellow-300">Modern Muslim Life</h3>
          <p className="text-gray-200 text-sm">
            Empowering Muslims with lifestyle guides, spiritual growth tips, and community insights. 
            Stay inspired and connected with faith and modern life.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" className="hover:text-yellow-400 transition-colors"><FaFacebookF /></a>
            <a href="https://twitter.com" className="hover:text-yellow-400 transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com" className="hover:text-yellow-400 transition-colors"><FaInstagram /></a>
            <a href="https://linkedin.com" className="hover:text-yellow-400 transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-yellow-300">Quick Links</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li><a href="#events" className="hover:text-yellow-400 transition-colors">Events</a></li>
            <li><a href="#ramadan" className="hover:text-yellow-400 transition-colors">Ramadan</a></li>
            <li><a href="#blogsection" className="hover:text-yellow-400 transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-yellow-300">Stay Updated</h3>
          <p className="text-gray-200 text-sm">
            Subscribe to our newsletter for the latest tips, articles, and community updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800"
            />
            <button
              type="submit"
              className="bg-yellow-300 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-300 text-xs mt-2 flex items-center gap-1">
            <FaEnvelope /> binteasif045@gmail.com
          </p>
        </div>

      </div>

      <div className="border-t border-green-700 mt-8 py-4 text-center text-gray-300 text-sm relative z-10">
        © 2025 Modern Muslim Life — Built with ❤️ & Islamic values
      </div>

      {/* Footer Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite; }
      `}</style>
    </footer>
  );
}
