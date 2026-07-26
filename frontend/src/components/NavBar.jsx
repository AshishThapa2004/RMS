  import { Link } from "react-router-dom";
  import logo from "../assets/images/logo.jpeg";

   export const NavBar = ()=>{
    return(
      <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-100">
        {/* Logo */}
            <div className="flex items-center px-30">
              <img src={logo} alt="RMS - Restaurant Management System" className="h-10 w-auto object-contain scale-200"></img>
            </div>
 

        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">

          <a href="#" className="text-gray-500 font-semibold hover:text-[#F9A304]">Home</a>
          <a href="#" className="text-gray-600 font-semibold hover:text-[#F9A304]">How it Works</a>
          <a href="#" className="text-gray-600 font-semibold hover:text-[#F9A304]">Features</a>
          <a href="#" className="text-gray-600 font-semibold hover:text-[#F9A304]">Contact us</a>

          <div className="px-50">
            <button className="bg-[#F9A304] hover:bg-opacity-90 text-white font-semibold px-6 py-1 rounded-lg transition-color">
              Sign in
            </button>
          </div>

        </div>

 
      </nav>
    

    );

   };
   export default NavBar

