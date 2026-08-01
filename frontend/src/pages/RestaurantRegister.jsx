import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/images/logo.png"

export const RestaurantRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    phone_no: "",
  });

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

    const token = localStorage.getItem("token");

    try {
        const response = await fetch(
        `${import.meta.env.VITE_API_URL}/restaurantregister`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,   // <-- added
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
          setErrors({ general: data.message || "Restaurant Register failed. Please try again." });
        }
        return;
      }

      // Success
      localStorage.setItem("token", data.token);
      console.log("Restaurant Registered", data.user);
      alert("Register success");
      navigate("/");
    } catch (err) {
      console.error("Restaurant Register failed:", err);
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
            name="restaurantName"
            placeholder="Restaurant name"
            value={form.restaurantName}
            onChange={handleChange}
            className={inputClasses}
          />
          {errors.restaurantName && <p className="text-red-500 text-xs mt-1">{errors.restaurantName}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
                <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className={inputClasses}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
            <div>
                <input
                type="tel"
                name="phone_no"
                placeholder="Phone Number"
                value={form.phone_no}
                onChange={handleChange}
                className={inputClasses}
                />
                {errors.phone_no && <p className="text-red-500 text-xs mt-1">{errors.phone_no}</p>}
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