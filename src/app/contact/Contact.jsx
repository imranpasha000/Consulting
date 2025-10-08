"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      toast.warning("⚠️ Please fill in all required fields.");
      return;
    }

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!publicKey) {
      toast.error(
        "Email public key not configured. Add NEXT_PUBLIC_EMAILJS_USER_ID to your .env and restart the dev server."
      );
      return;
    }

    if (!serviceId || !templateId) {
      toast.error("Email service not configured. Check your .env values.");
      return;
    }

    // Ensure EmailJS is initialized (handles HMR or cases where init didn't run)
    try {
      emailjs.init(publicKey);
    } catch (err) {
      console.warn("EmailJS init failed on submit:", err);
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    setSending(true);
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
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        {/* Background Elements */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full bottom-1/2 right-1/2 transform translate-x-[-40%] translate-y-[38%] z-0">
          <div className="absolute w-72 h-72 bg-gray-50 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <img
          src="/api/placeholder/400/400"
          alt="decoration"
          className="absolute h-80 top-1/2 left-1/2 transform translate-x-[181%] translate-y-[11%] opacity-20 z-0"
        />

        {/* Main Form Container */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 z-10">
          {/* Contact Info Section */}
          <div className="p-8 lg:p-10 relative">
            {/* Decorative Circle */}
            <div className="absolute w-28 h-28 border-8 border-teal-500 rounded-full bottom-[-70px] right-12 opacity-30 hidden lg:block"></div>

            <h3 className="text-2xl font-medium text-teal-500 mb-4">
              Let&apos;s get in touch
            </h3>

            <p className="text-gray-600 mb-6">
              We are helping Start-ups in Company Registration and also
              providing <span className="font-semibold">ONE STOP SOLUTION</span>{" "}
              for all after company registration compliance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <MapPin className="text-teal-500 w-5 h-5" />
                <span className="ml-3">
                  Sector 16, Noida, Uttar Pradesh - 201301
                </span>
              </div>

              <div className="flex items-center text-gray-700">
                <Mail className="text-teal-500 w-5 h-5" />
                <span className="ml-3">Help@HindFilings.Com</span>
              </div>

              <div className="flex items-center text-gray-700">
                <Phone className="text-teal-500 w-5 h-5" />
                <span className="ml-3">+91-9650393998</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <p className="text-gray-600 mb-3">Connect with us:</p>
              <div className="flex space-x-2">
                {[
                  {
                    name: "Facebook",
                    icon: <Facebook className="w-4 h-4" />,
                    link: "https://www.facebook.com/hindfilings",
                  },
                  {
                    name: "Twitter",
                    icon: <Twitter className="w-4 h-4" />,
                    link: "https://twitter.com/hindfilings",
                  },
                  {
                    name: "Instagram",
                    icon: <Instagram className="w-4 h-4" />,
                    link: "https://www.instagram.com/hindfilings",
                  },
                  {
                    name: "LinkedIn",
                    icon: <Linkedin className="w-4 h-4" />,
                    link: "https://www.linkedin.com/company/hindfilings",
                  },
                  {
                    name: "YouTube",
                    icon: <Youtube className="w-4 h-4" />,
                    link: "https://www.youtube.com/@hindfilings",
                  },
                ].map(({ name, icon, link }) => (
                  <a
                    key={name}
                    href={link}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-105"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-teal-500 p-8 lg:p-10 relative">
            {/* Decorative Circles */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-transparent to-teal-600 rounded-full top-32 -right-10"></div>
            <div className="absolute w-20 h-20 bg-gradient-to-br from-transparent to-teal-600 rounded-full top-2 right-8"></div>

            {/* Triangle decoration */}
            <div className="absolute w-6 h-6 bg-teal-500 transform rotate-45 top-12 -left-3 hidden lg:block"></div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="relative z-10">
              <h3 className="text-2xl font-medium text-white mb-6">
                Contact us
              </h3>

              <div className="space-y-4">
                <FloatingInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  label="Full Name"
                />

                <FloatingInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  label="Email"
                />

                <FloatingInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  label="Phone"
                />

                <FloatingTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  label="Message"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full border-2 border-white py-3 px-6 rounded-lg font-medium mt-6 transition-all ${
                  sending
                    ? "bg-white/60 text-teal-500 cursor-not-allowed"
                    : "bg-white text-teal-500 hover:bg-transparent hover:text-white"
                }`}
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingInput({ type, name, value, onChange, label }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
        className="w-full bg-transparent border-2 border-white rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none transition-colors"
        placeholder={label}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || value
            ? "top-0 -translate-y-1/2 text-xs bg-teal-500 px-2 text-white"
            : "top-1/2 -translate-y-1/2 text-white"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ name, value, onChange, label }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
        rows={4}
        className="w-full bg-transparent border-2 border-white rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none transition-colors resize-none"
        placeholder={label}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || value
            ? "top-0 -translate-y-1/2 text-xs bg-teal-500 px-2 text-white"
            : "top-4 text-white"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
