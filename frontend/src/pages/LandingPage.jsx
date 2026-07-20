import React from "react";
import { UtensilsCrossed } from "lucide-react";

export const LandingPage = function RestaurantHero() {
  const menuCards = [1, 2, 3, 4];

  return (
   <div className="w-full min-h-screen bg-[#ececec]">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-300">
        <span className="text-lg text-gray-800">Logo</span>
        <button className="px-5 py-2 rounded-md border border-gray-400 bg-white text-sm font-medium text-gray-800 hover:bg-[#F9A304] transition-colors">
          Sign in
        </button>
      </header>

      {/* Hero */}
      <main className="px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Simplify Restaurant{" "}
          <span className="text-[#F9A304]">Management</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
          Manage orders, staff, tables, and daily operations from one
          powerful platform designed to improve efficiency and enhance the
          dining experience.
        </p>

        <button className="mt-8 px-8 py-3 rounded-md bg-[#F9A304] text-white font-semibold hover:bg-[#F9A304] transition-colors">
          Get Start
        </button>

        {/* Menu cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {menuCards.map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-200 rounded-md p-4 text-left"
            >
              <UtensilsCrossed className="w-6 h-6 text-orange-500 mb-3" />
              <h3 className="font-semibold text-gray-900">Menu</h3>
              <p className="text-xs text-gray-600 mt-1">
                Check your favorite dish
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}