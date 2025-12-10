import React, { useState } from 'react';
import hijabImg from "../assets/hijab.jpg";
import abayaImg from "../assets/abaya.jpg";
import thobeImg from "../assets/thobe.jpg";
import foundationImg from "../assets/foundation.jpg";
import miswakImg from "../assets/miswak.jpg";
import oudImg from "../assets/oud.jpg";
import prayerMatImg from "../assets/prayer-mat.jpg";
import pinsImg from "../assets/pins.jpg";
import tasbeehImg from "../assets/tasbeeh.jpg";
import capIMG from "../assets/muslim-cap.jpg";
import kurtaIMG from "../assets/kurta.webp";
import socksIMG from "../assets/leather-socks.jpg";
import surmaIMG from "../assets/surma.jpg";
import QuranIMG from "../assets/quranpic.webp";
import CounterIMG from "../assets/clock-counter.webp";

// lightweight placeholder
const placeholder = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
  <rect width='100%' height='100%' fill='%23f3f4f6'/>
  <text x='50%' y='50%' text-anchor='middle' fill='%239ca3af'>Image not available</text>
</svg>`;

const products = [
  {id:1, name:'Hijab - Premium Cotton', price:'$12', img: hijabImg, category:'Clothing', gender:'Female'},
  {id:2, name:'Abaya - Elegant Black', price:'$45', img: abayaImg, category:'Clothing', gender:'Female'},
  {id:3, name:'Thobe - Classic White', price:'$35', img: thobeImg, category:'Clothing', gender:'Male'},
  {id:4, name:'Wudhu-friendly Foundation', price:'$20', img: foundationImg, category:'Beauty', gender:'Female'},
  {id:5, name:'Miswak Stick (Natural)', price:'$3', img: miswakImg, category:'Hygiene', gender:'Unisex'},
  {id:6, name:'Islamic Perfume (Oud)', price:'$25', img: oudImg, category:'Beauty', gender:'Unisex'},
  {id:7, name:'Prayer Mat - Deluxe', price:'$18', img: prayerMatImg, category:'Accessories', gender:'Unisex'},
  {id:8, name:'Hijab Pins - Pack of 5', price:'$5', img: pinsImg, category:'Accessories', gender:'Female'},
  {id:9, name:'Tasbeeh Beads', price:'$7', img: tasbeehImg, category:'Accessories', gender:'Unisex'},
  {id:10, name:'Prayer-cap ', price:'$5', img: capIMG, category:'Accessories', gender:'Male'},
  {id:11, name:'Mens-Kurta', price:'$40', img: kurtaIMG, category:'Clothing', gender:'Male'},
  {id:12, name:'Leather-Socks', price:'$6', img: socksIMG, category:'Accessories', gender:'Unisex'},
  {id:13, name:'Premium Quality - Surma', price:'$2', img: surmaIMG, category:'Beauty', gender:'Unisex'},
  {id:14, name:'Quran Pak', price:'$5', img: QuranIMG, category:'Book', gender:'Unisex'},
  {id:15, name:'Counter-Clock', price:'$4', img: CounterIMG, category:'Accessories', gender:'Unisex'},
];

export default function Store() {

  const [activeFilter, setActiveFilter] = useState("All");
  const [cart, setCart] = useState([]);  // ⭐ CART STATE

  // ⭐ Add to Cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`✔ Added to cart: ${product.name}`);
  };

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="store" className="my-16 px-4 md:px-12">
      
      {/* Cart badge (optional) */}
      <div className="text-right mb-4 text-lg font-bold text-green-800">
        🛒 Cart: {cart.length} items
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-10 text-center">
        Halal Store — Featured Collections
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {['All', 'Clothing', 'Beauty', 'Hygiene', 'Accessories'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-white/30 backdrop-blur-md border border-green-200"
          >
            <div className="overflow-hidden rounded-t-3xl bg-gray-100 h-64 w-full">
              <img
                src={product.img || placeholder}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.currentTarget.src = placeholder; }}
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 group-hover:text-green-900 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-700 mt-2">{product.category} • {product.gender}</p>
              <p className="text-green-900 font-semibold mt-3 text-lg">{product.price}</p>

              {/* ⭐ WORKING Add to Cart button */}
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full py-2 rounded-full bg-green-700 text-white font-semibold shadow-md hover:bg-green-800 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-full opacity-20 animate-pulse-slow pointer-events-none"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite; }
      `}</style>
    </section>
  );
}