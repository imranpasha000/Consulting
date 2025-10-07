import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleMap from '@/components/GoogleMap';

const Footer = () => {
  return (
    <footer className="relative bg-blue-900 text-white max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 py-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Company Info & Contact */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Hind Filings</h3>
              <p className="text-gray-200 leading-relaxed">
                We are helping Start-ups in Company Registration and also providing
                ONE STOP SOLUTION for all after company registration compliance
              </p>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-300"
                asChild
              >
                <Link href="/about">READ MORE</Link>
              </Button>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-200">
                    Sector 16, Noida,
                    <br />
                    Uttar Pradesh-201301.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <Link
                    href="tel:+919650393998"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    +91-9650393998
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <Link
                    href="mailto:Help@HindFilings.Com"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Help@HindFilings.Com
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-200">10:00 am - 8:00 pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Google Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Find Us</h3>
            <GoogleMap
              address="Sector 16, Noida, Uttar Pradesh 201301"
              height="400px"
            />
            <div className="text-center">
              <Link
                href="https://maps.google.com/?q=Sector+16,+Noida,+Uttar+Pradesh+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-400 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Terms & Policy Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/company-registration"
                className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
              >
                <span className="text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                  ▶
                </span>
                <span>Company Registration</span>
              </Link>
              <Link
                href="/gst-registration"
                className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
              >
                <span className="text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                  ▶
                </span>
                <span>GST Registration</span>
              </Link>
              <Link
                href="/itr-filing"
                className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
              >
                <span className="text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                  ▶
                </span>
                <span>ITR Filing</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Terms & Policy</h3>
            <div className="space-y-3">
              <Link
                href="/terms-conditions"
                className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
              >
                <span className="text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                  ▶
                </span>
                <span>Terms & Conditions</span>
              </Link>

              <Link
                href="/privacy-policy"
                className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
              >
                <span className="text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                  ▶
                </span>
                <span>Privacy Policy</span>
              </Link>

              <Link
                href="/refund-policy"
                className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
              >
                <span className="text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                  ▶
                </span>
                <span>Refund Policy</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
            <div className="space-y-3 text-gray-200">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-green-600">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-green-600">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and social media */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="max-w-screen-2xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              ©Copyright 2025 HindFilings Private Limited | All Rights Reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </Link>
              ))}

              <Link
                href="#"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <Link
        href="https://wa.me/919650393998"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Link>
    </footer>
  );
};

export default Footer;