"use client";

import React from "react";
import Link from "next/link";

const quickLinks = [
  [
    { name: "Company Registration", href: "#" },
    { name: "One Person Company Registration", href: "#" },
    { name: "GST Registration", href: "#" },
    { name: "GST LUT Filing", href: "#" },
    { name: "ITR Filing-Businessman", href: "#" },
    { name: "PF Registration", href: "#" },
    { name: "ESI Return Filing", href: "#" },
    { name: "MSME Registration", href: "#" },
    { name: "Name Change", href: "#" },
    { name: "Remove Director", href: "#" },
    { name: "Closure of LLP", href: "#" },
  ],
  [
    { name: "Proprietorship Registration", href: "#" },
    { name: "Private Limited Registration", href: "#" },
    { name: "GST Return Filing", href: "#" },
    { name: "GST Registration Cancellation", href: "#" },
    { name: "Tax Audit", href: "#" },
    { name: "ESI Registration", href: "#" },
    { name: "Trademark Registration", href: "#" },
    { name: "Trust Registration", href: "#" },
    { name: "Registered Office Change", href: "#" },
    { name: "MOA Amendment", href: "#" },
    { name: "Blog", href: "#" },
  ],
  [
    { name: "Partnership Registration", href: "#" },
    { name: "Public Limited Registration", href: "#" },
    { name: "GST Annual Return Filing", href: "#" },
    { name: "ITR Filing–Salaried Person", href: "#" },
    { name: "ITR Filing–Salaried Person", href: "#" },
    { name: "PF Return Filing", href: "#" },
    { name: "MSME Registration", href: "#" },
    { name: "Shop & Establishment Registration", href: "#" },
    { name: "Add Director", href: "#" },
    { name: "Closure of Company", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
];

const QuickLinks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-8">
          Quick Links
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {quickLinks.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-3">
              {column.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-900 font-medium hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
