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
       <div className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Simplify Restaurant
            <br />
            <span className="text-[#F9A304]">Management</span>
          </h1>
          <p className="mt-6 text-black-500 text-lg leading-relaxed max-w-lg">
            Manage orders, staff, tables, and daily operations from one
            powerful platform designed to improve efficiency and enhance the
            dining experience.
          </p>
 
          <div className="mt-5 flex items-center gap-4">
            {/* <button className="flex items-center gap-2 bg-[#F9A304] hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
              Get Start
              <ChevronRight size={18} />
            </button> */}
            <button className="flex items-center gap-2 border border-[#F9A304] text-gray-800 font-semibold px-8 py-2.5 rounded-full hover:bg-[#F9A304] transition-colors">
              Book a Demo
              <Calendar size={16} />
            </button>
          </div>
        </div>
         <div className="flex items-center justify-center -mt-15 md:-mt-30">
          <img
            src={mbl}
            alt="Order flow: taken, sent to kitchen, prepared by chef, served"
            className=" max-w-[600px] h-auto object-contain "
          />
        </div>

    </div>
    
    </div>
  );
}