import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Bilal & Co.</h3>
            <p className="text-gray-300 leading-relaxed">
              We are helping Start-ups in Company Registration and also providing ONE STOP SOLUTION for all after company registration compliance
            </p>
            <Link
              href="/about"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              READ MORE
            </Link>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    UGF-5, Ocean Complex, Sector-18, Noida,<br />
                    Uttar Pradesh-201301.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <Link
                  href="tel:+919266685656"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91-9266685656
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <Link
                  href="mailto:Help@Bilal & Co..Com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help@Bilal & Co..Com
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">10:00 am - 8:00 pm</span>
              </div>
            </div>
          </div>

          {/* Terms & Policy Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Terms & Policy</h3>
            <div className="space-y-3">
              <Link
                href="/terms-conditions"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="text-orange-500 group-hover:translate-x-1 transition-transform duration-200">▶</span>
                <span>Terms & Conditions</span>
              </Link>

              <Link
                href="/privacy-policy"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="text-orange-500 group-hover:translate-x-1 transition-transform duration-200">▶</span>
                <span>Privacy Policy</span>
              </Link>

              <Link
                href="/refund-policy"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="text-orange-500 group-hover:translate-x-1 transition-transform duration-200">▶</span>
                <span>Refund Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and social media */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              ©Copyright 2024 Chartered Help Private Limited | All Rights Reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-md flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-md flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-md flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-md flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-md flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-md flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button (optional) */}
      <Link
        href="https://wa.me/919266685656"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Link>
    </footer>
  );
};

export default Footer;