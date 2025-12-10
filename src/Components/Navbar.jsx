import React, { useState } from "react";
import logo from "../assets/logos.jpg";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const links = ["Events", "Ramadan", "Store"];

  const logoFallback = `data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' width='240' height='60'>
    <rect width='100%' height='100%' fill='%23103e07'/>
    <text x='50%' y='50%' font-family='Arial' font-size='18' fill='%23fff' text-anchor='middle' alignment-baseline='middle'>Modern Muslim Life</text>
  </svg>`;

  const handleLogin = () => {
    if (email === "Admin@gmail.com" && password === "Admin123") {
      alert("Login Successful!");
      setLoginOpen(false);
      setEmail("");
      setPassword("");
    } else {
      alert("Incorrect Email or Password!");
    }
  };

  const handleCartClick = () => {
    // Placeholder: change to open cart drawer or navigate to cart page
    window.location.href = '/cart';
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 bg-green-900/75 backdrop-blur-md text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 md:gap-4" aria-label="Home">
            <img
              src={logo}
              onError={(e) => (e.currentTarget.src = logoFallback)}
              alt="Modern Muslim Life logo"
              className="h-10 md:h-12 object-contain rounded-md shadow-sm"
            />
            {/* Desktop text */}
            <span className="hidden md:inline-block text-lg md:text-xl font-bold tracking-wide leading-none">
              Modern Muslim Life
            </span>
            {/* Mobile text */}
            <span className="md:hidden text-sm font-semibold text-white/90 leading-none">
              Modern Muslim Life
            </span>
          </a>

          {/* Desktop Links + Login + Cart */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-6">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm md:text-base hover:text-yellow-300 transition-colors duration-200 px-2 py-1 rounded-md"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Cart button (beside Login) */}
            <button
              onClick={handleCartClick}
              className="flex items-center gap-2 border border-transparent bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg transition-shadow duration-150"
              aria-label="Open cart"
              title="Cart"
            >
              <FaShoppingCart className="text-lg" />
              <span className="hidden sm:inline text-sm font-medium">Cart</span>
            </button>

            <button
              onClick={() => setLoginOpen(true)}
              className="bg-yellow-300 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-shadow duration-200 shadow-sm hover:shadow-md"
              aria-label="Open login"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl p-2 rounded-md hover:bg-white/10 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transform-gpu transition-all duration-300 ease-in-out origin-top ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-green-900/95 px-6 pt-4 pb-6 border-t border-green-800">
            {/* Mobile Top: Logo + Close */}
            <div className="flex items-center justify-between mb-4">
              <a href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                <img
                  src={logo}
                  onError={(e) => (e.currentTarget.src = logoFallback)}
                  alt="Modern Muslim Life logo"
                  className="h-10 object-contain rounded-md shadow-sm"
                />
                <span className="text-sm font-semibold text-white/90 leading-none">
                  Modern Muslim Life
                </span>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded hover:bg-white/10"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-3 mb-4">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white text-lg py-3 px-3 rounded-md hover:bg-white/8 transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Login + Cart Buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <button
                  onClick={handleCartClick}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/15 transition"
                  aria-label="Open cart"
                >
                  <FaShoppingCart />
                  <span className="hidden sm:inline">Cart</span>
                </button>

                <button
                  onClick={() => {
                    setLoginOpen(true);
                    setMenuOpen(false);
                  }}
                  className="flex-1 bg-yellow-300 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition shadow-sm"
                  aria-label="Open login"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* LOGIN POPUP */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[999] px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-xl text-gray-900 shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4 text-green-800">Login</h2>

            <label className="text-xs text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            />

            <label className="text-xs text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            />

            <div className="flex gap-3">
              <button
                onClick={handleLogin}
                className="flex-1 bg-green-800 text-white py-2 rounded-lg font-semibold hover:bg-green-900 transition"
                aria-label="Submit login"
              >
                Login
              </button>

              <button
                onClick={() => setLoginOpen(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
                aria-label="Cancel login"
              >
                Cancel
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-3">
              Admin demo: Admin@gmail.com / Admin123
            </p>
          </div>
        </div>
      )}
    </>
  );
}
