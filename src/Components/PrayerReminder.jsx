import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaCloudSun, FaCloudMoon, FaRegClock } from 'react-icons/fa';

function computePrayerTimes(lat, lng) {
  return {
    Fajr: '05:39am',
    Dhuhr: '12:21pm',
    Asr: '04:06pm',
    Maghrib: '05:42pm',
    Isha: '07:03pm'
  };
}

function parseTimeToDate(str, baseDate = new Date()) {
  if (!str) return null;
  const s = String(str).trim().toLowerCase().replace(/\s+/g, '');
  const match = s.match(/^(\d{1,2}):(\d{2})(am|pm)?$/);
  if (!match) return null;
  let hr = parseInt(match[1], 10);
  const min = parseInt(match[2], 10);
  const ampm = match[3] || null;

  if (ampm) {
    if (ampm === 'am') {
      if (hr === 12) hr = 0;
    } else if (ampm === 'pm') {
      if (hr !== 12) hr = hr + 12;
    }
  }

  const d = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), hr, min, 0, 0);
  return d;
}

export default function PrayerReminder() {
  const [times, setTimes] = useState(null);
  const [currentPrayer, setCurrentPrayer] = useState(null);
  const [nextPrayerCountdown, setNextPrayerCountdown] = useState('');
  const [nextPrayerName, setNextPrayerName] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setTimes(computePrayerTimes(pos.coords.latitude, pos.coords.longitude)),
        () => setTimes(computePrayerTimes(31.5204, 74.3587))
      );
    } else {
      setTimes(computePrayerTimes(31.5204, 74.3587));
    }
  }, []);

  useEffect(() => {
    if (!times) return;

    const tick = () => {
      const now = new Date();
      const entries = Object.entries(times).map(([k, v]) => [k, parseTimeToDate(v, now)]);
      let nextEntry = entries.find(([, date]) => date > now);
      if (!nextEntry) {
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const fajrTomorrow = parseTimeToDate(times.Fajr, tomorrow);
        nextEntry = ['Fajr', fajrTomorrow];
      }

      let current = entries[0][0];
      for (let i = 0; i < entries.length; i++) {
        const [name, date] = entries[i];
        if (now >= date) current = name;
      }

      setCurrentPrayer(current);
      setNextPrayerName(nextEntry[0]);

      const diff = nextEntry[1] - now;
      if (diff > 0) {
        const hrs = Math.floor(diff / 1000 / 60 / 60);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setNextPrayerCountdown(`${hrs}h ${mins}m ${secs}s`);
      } else {
        setNextPrayerCountdown('00:00:00');
      }
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [times]);

  if (!times)
    return (
      <div className="p-6 bg-green-100 rounded-3xl shadow-lg text-center text-green-800 animate-pulse">
        Loading prayer times...
      </div>
    );

  const icons = {
    Fajr: <FaMoon className="text-blue-500 mx-auto mb-1 animate-bounce-slow" />,
    Dhuhr: <FaSun className="text-yellow-500 mx-auto mb-1 animate-bounce-slow" />,
    Asr: <FaCloudSun className="text-orange-400 mx-auto mb-1 animate-bounce-slow" />,
    Maghrib: <FaCloudMoon className="text-red-400 mx-auto mb-1 animate-bounce-slow" />,
    Isha: <FaMoon className="text-purple-500 mx-auto mb-1 animate-bounce-slow" />
  };

  return (
    <section
      className="my-4 p-8 rounded-3xl shadow-2xl relative overflow-hidden border-2 border-green-200 
      bg-gradient-to-br from-green-50 via-green-100 to-green-200"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-6 text-center drop-shadow-lg animate-text-glow">
        Prayer Times Today — Karachi
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {Object.entries(times).map(([k, v]) => (
          <div
            key={k}
            className={`p-5 rounded-2xl text-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
              k === currentPrayer
                ? 'bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white shadow-xl animate-pulse-slow'
                : 'bg-white text-green-800'
            }`}
          >
            {icons[k]}
            <div className="font-semibold text-lg">{k}</div>
            <div className="text-sm mt-1">{v}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-green-900 rounded-2xl flex items-center justify-center gap-3 shadow-2xl text-lg font-semibold animate-bounce-once relative overflow-hidden">
        <FaRegClock className="text-xl animate-spin-slow" />
        <span>
          Next Prayer ({nextPrayerName}) in {nextPrayerCountdown}
        </span>
        <div className="absolute -top-4 -right-6 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-pulse-slow"></div>
      </div>

      <p className="mt-4 text-xs text-gray-600 text-center">
        Note: These times are taken as a static reference for Karachi. For dynamic/accurate calculations use a proper library (e.g., adhan-js) or an API (AlAdhan).
      </p>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes glow-text {
          0%, 100% { text-shadow: 0 0 5px rgba(0,0,0,0.2); }
          50% { text-shadow: 0 0 25px rgba(0,128,0,0.6); }
        }

        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
        .animate-bounce-once { animation: bounce-once 1s; }
        .animate-bounce-slow { animation: bounce-slow 4s infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-text-glow { animation: glow-text 3s infinite alternate; }
      `}</style>
    </section>
  );
}
