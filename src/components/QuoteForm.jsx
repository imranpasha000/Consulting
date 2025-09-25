"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Send data to API
  };

  const handleReset = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
      captcha: "",
    });
  };

  return (
    <section className="bg-blue-900 text-white flex flex-col md:flex-row items-stretch">
      {/* Left Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h4 className="text-sm font-semibold uppercase tracking-wider">
          Let's Talk
        </h4>
        <h2 className="text-3xl font-bold mb-6">Request a Free Quote</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Captcha */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Enter the Captcha
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                required
                className="flex-1 px-3 py-2 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="bg-white text-green-700 font-bold px-3 py-2">
                7xbex
              </div>
              <button
                type="button"
                className="text-sm underline hover:text-green-500"
              >
                Reload
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-sm font-semibold"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-sm font-semibold"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Right Image */}
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src="/Images/meeting.webp"
          alt="Customer Support"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
