import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/images/logo.png";

export const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
=======
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
 import logo from "../assets/images/logo.png";

export const SignIn = () =>{
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
>>>>>>> 06102841ea2b962999f61401620de325df59beed

  const [formData, setFormData] = useState({
    email: "",
    password: "",
<<<<<<< HEAD
=======
    confirmPassword: "",
>>>>>>> 06102841ea2b962999f61401620de325df59beed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
<<<<<<< HEAD
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Get the API URL from .env
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";
      
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please check your credentials.");
      }

      // Successful login - store the token
      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        // Redirect to dashboard or home page
        navigate("/dashboard");
      } else {
        setError("Login successful but no token received.");
      }

    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ececec] flex flex-col items-center justify-center px-8 py-10 sm:py-14">
      {/* Logo */}
      <img 
        src={logo} 
        alt="RMS - Restaurant Management System" 
        className="h-10 w-auto object-contain scale-350"
      />
=======
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: connect to your signup API
  };

  return (

    <div className="min-h-screen bg-[#ececec] flex flex-col items-center justify-center px-8 py-10 sm:py-14">
      {/* Logo */}
     <img src={logo} alt="RMS - Restaurant Management System" className="h-10 w-auto object-contain scale-350"></img>
>>>>>>> 06102841ea2b962999f61401620de325df59beed
    
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-md px-8 py-10 mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign <span className="text-[#F9A304]">In</span>
        </h2>
        <p className="text-center text-sm text-gray-600 mt-1">
          Log in to your <span className="text-[#F9A304]">account</span>
        </p>

<<<<<<< HEAD
        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl">
            {error}
          </div>
        )}

=======
>>>>>>> 06102841ea2b962999f61401620de325df59beed
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="E-mail Address"
            value={formData.email}
            onChange={handleChange}
<<<<<<< HEAD
            required
=======
>>>>>>> 06102841ea2b962999f61401620de325df59beed
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9A304]"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
<<<<<<< HEAD
              required
=======
>>>>>>> 06102841ea2b962999f61401620de325df59beed
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9A304] pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

<<<<<<< HEAD
          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[#F9A304] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-[#F9A304] text-white font-semibold hover:bg-[#e09200] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
=======
          

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#F9A304] text-white font-semibold hover:bg-[#e09200] transition-colors"
          >
            Create an account
>>>>>>> 06102841ea2b962999f61401620de325df59beed
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#F9A304] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 06102841ea2b962999f61401620de325df59beed
