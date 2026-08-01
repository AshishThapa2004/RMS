import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.jpeg";
import { Menu, X } from "lucide-react"; // Install: npm install lucide-react

export const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

<<<<<<< HEAD
  const handleSignUp = () => {
    navigate("/signup");
=======
  const handleSignIn = () => {
    navigate("/signin");
>>>>>>> 06102841ea2b962999f61401620de325df59beed
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 bg-white border-b border-gray-100 relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="RMS - Restaurant Management System" 
              className="h-10 w-auto object-contain scale-200"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium flex">
          <Link to="/" className="text-gray-500 font-semibold hover:text-[#F9A304] transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-gray-600 font-semibold hover:text-[#F9A304] transition-colors">
            How it Works
          </Link>
          <Link to="/features" className="text-gray-600 font-semibold hover:text-[#F9A304] transition-colors">
            Features
          </Link>
          <Link to="/contact" className="text-gray-600 font-semibold hover:text-[#F9A304] transition-colors">
            Contact us
          </Link>

        </div>
          <div className="hidden md:flex items-center">
            <button
<<<<<<< HEAD
              onClick={handleSignUp}
=======
              onClick={handleSignIn}
>>>>>>> 06102841ea2b962999f61401620de325df59beed
              className="bg-[#F9A304] hover:bg-opacity-90 text-white font-semibold px-6 py-1.5 rounded-lg transition-colors"
            >
              Sign in
            </button>
          </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div 
        className={`
          fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={toggleMenu}
      />

      <div 
        className={`
          fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link to="/" onClick={handleNavLinkClick}>
            <img 
              src={logo} 
              alt="RMS - Restaurant Management System" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col p-6 space-y-6">
          <Link 
            to="/" 
            onClick={handleNavLinkClick}
            className="text-gray-700 font-semibold text-lg hover:text-[#F9A304] transition-colors py-2 border-b border-gray-50"
          >
            Home
          </Link>
          <Link 
            to="/how-it-works" 
            onClick={handleNavLinkClick}
            className="text-gray-700 font-semibold text-lg hover:text-[#F9A304] transition-colors py-2 border-b border-gray-50"
          >
            How it Works
          </Link>
          <Link 
            to="/features" 
            onClick={handleNavLinkClick}
            className="text-gray-700 font-semibold text-lg hover:text-[#F9A304] transition-colors py-2 border-b border-gray-50"
          >
            Features
          </Link>
          <Link 
            to="/contact" 
            onClick={handleNavLinkClick}
            className="text-gray-700 font-semibold text-lg hover:text-[#F9A304] transition-colors py-2 border-b border-gray-50"
          >
            Contact us
          </Link>

          {/* Mobile Sign In Button */}
          <div className="pt-4">
            <button
<<<<<<< HEAD
              onClick={handleSignUp}
=======
              onClick={handleSignIn}
>>>>>>> 06102841ea2b962999f61401620de325df59beed
              className="w-full bg-[#F9A304] hover:bg-opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-lg"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;