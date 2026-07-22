import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const SignUp = () =>{
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: connect to your signup API
  };

  return (
    <div className="min-h-screen bg-[#ececec] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <h1
        className="text-5xl font-extrabold tracking-wide mb-6"
        style={{
          WebkitTextStroke: "1px #f97316",
          color: "#d1d5db",
        }}
      >
        RMS
      </h1>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-md px-8 py-10">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign <span className="text-[#F9A304]">Up</span>
        </h2>
        <p className="text-center text-sm text-gray-600 mt-1">
          Log in to your <span className="text-[#F9A304]">account</span>
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="E-mail Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9A304]"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9A304] pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#F9A304] text-white font-semibold hover:bg-[#e09200] transition-colors"
          >
            Create an account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{" "}
          <a href="#" className="text-[#F9A304] font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}