"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    if (publicKey) {
      try {
        emailjs.init(publicKey);
      } catch (err) {
        console.warn("EmailJS init failed:", err);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.email ||
      !formData.message
    ) {
      toast.warning("⚠️ Please fill in all required fields.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      toast.error(" Email service not configured. Check your .env values.");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.mobile,
      message: formData.message,
      time: new Date().toLocaleString(),
    };
    try {
      await emailjs.send(serviceId, templateId, templateParams);

      toast.success("Your message has been sent successfully!");
      handleReset();
    } catch (err) {
      console.error("Email send failed:", err);
      toast.error("Failed to send your message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
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
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={sending}
              className={`px-6 py-2 rounded-sm font-semibold transition-colors ${
                sending
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {sending ? "Sending..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-sm font-semibold transition-colors"
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
