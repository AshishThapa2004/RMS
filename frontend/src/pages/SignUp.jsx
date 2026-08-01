import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/images/logo.png"

export const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422 && data.errors) {
          // Laravel validation errors: { errors: { fieldName: ["message"] } }
          const fieldErrors = {};
          Object.keys(data.errors).forEach((key) => {
            fieldErrors[key] = data.errors[key][0];
          });
          setErrors(fieldErrors);
        } else {
          setErrors({ general: data.message || "Signup failed. Please try again." });
        }
        return;
      }

      // Success
      localStorage.setItem("token", data.token);
      console.log("Signed up:", data.user);
      alert("Signup success");
      navigate("/restaurantregister");
    } catch (err) {
      console.error("Signup failed:", err);
      setErrors({ general: "Something went wrong. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100";

  return (
    <div className="min-h-screen w-full bg-[#ececec] flex flex-col items-center justify-center px-8 py-10 sm:py-14">
      {/* Logo */}
    <img src={logo} alt="RMS - Restaurant Management System" className="h-10 w-auto object-contain scale-350"></img>

      {/* Card */}
      <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-9 shadow-xl mt-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-[28px] font-bold text-neutral-900">
            Create <span className="text-orange-500">Account</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Create your account and start managing your{" "}
            <span className="text-orange-500">business</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div> 
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className={`${inputClasses} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
                >
                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`${inputClasses} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                {showConfirmPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <div className="flex justify-center pt-1">
            <div className="relative w-full sm:w-2/3">
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className={`${inputClasses} appearance-none pr-9 cursor-pointer`}
              >
                <option value="" disabled>
                  Role
                </option>
                <option value="admin">Admin</option>
                <option value="worker">Worker</option>
                <option value="kitchen">Kitchen</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                ▾
              </span>
            </div>
          </div>
          {errors.general && <p className="text-red-500 text-xs mt-1">{errors.general}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 w-full rounded-full bg-orange-500 py-3 text-sm font-bold text-white shadow-md transition hover:bg-orange-600 active:scale-[0.99]"
          >
            {isSubmitting ? "Creating account..." : "Next Page"}
          </button>
        </form>
      </div>
    </div>
  );
}