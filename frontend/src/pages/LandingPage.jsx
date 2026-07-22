import React from "react";
import { UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LandingPage = ()=> {
  const navigate = useNavigate();
  
  const menuCards = [
    {
      title: "Menu",
      description: "Check your favorite dish",
      icon: UtensilsCrossed,
    },
    {
      title: "Waitress",
      description: "Manage tables & active staff",
      icon: UtensilsCrossed,
    },
    {
      title: "Kitchen",
      description: "Cooking status",
      icon: UtensilsCrossed,
    },
    {
      title: "Dashboard",
      description: "View your entier workspace",
      icon: UtensilsCrossed,
    },
  ]

  return (
    <div className="min-h-screen bg-[#ececec]">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-300">
        <span className="text-lg text-gray-800">Logo</span>
        <button className="px-5 py-2 rounded-md border bg-[#F9A304] text-white font-semibold hover:bg-[#e09200] transition-colors">
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

        <button onClick={() => navigate("/signin")}

        className="mt-10 px-8 py-3 rounded-md bg-[#F9A304] text-white font-semibold">
          Get Start
        </button>

        {/* Menu cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
         {menuCards.map((card, idx) => {
            const Icon = card.icon; // Extract component reference
            return (
              <div
                key={idx}
                className="bg-white/80 border border-gray-300 shadow-sm rounded-lg p-5 text-left transition-all hover:shadow-md hover:-translate-y-1"
              >
                <Icon className="w-6 h-6 text-[#F9A304] mb-3" />
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <p className="text-xs text-gray-600 mt-1">
                  {card.description}
                </p>
              </div>
            );
          })}

          
        </div>
      </main>
    </div>
  );
}