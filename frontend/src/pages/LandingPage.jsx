import React from "react";
import { UtensilsCrossed, ChevronRight, Calendar} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import mbl from "../assets/images/mbl.png";

export const LandingPage = ()=> {
  const navigate = useNavigate();
  
  return (
      <div className="min-h-screen bg-[#FFFDF7]">
    
      <NavBar />
      <Outlet />

      {/* Hero */}
       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left copy */}

        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Simplify Restaurant
            <br />
            <span className="text-[#F9A304]">Management</span>
          </h1 >
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Manage orders, staff, tables, and daily operations from one
            powerful platform designed to improve efficiency and enhance the
            dining experience.
          </p>
 
          <div className="mt-6 flex justify-center md:justify-start">
    
            <button className="flex items-center gap-2 border border-[#F9A304] text-gray-800 font-semibold px-8 py-2.5 rounded-full hover:bg-[#F9A304] transition-colors">
              Book a Demo
              <Calendar size={16} />
            </button>
          </div>
        </div>
         <div className="flex items-center justify-center mt-8 md:mt-0 md:-mt-24">
          <img
              src={mbl}
              alt="Order flow: taken, sent to kitchen, prepared by chef, served"
              className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
            />
        </div>

    </div>
    
    </div>
  );
}