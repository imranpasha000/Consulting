"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { menuConfig } from "./menuConfig";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  // Toggle for mobile menu accordion
  const toggleMobileSection = (label) => {
    setActiveMobileSection(activeMobileSection === label ? null : label);
  };

  // Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchHover, setIsSearchHover] = useState(false);
  const searchInputRef = useRef(null);
  const openSearch = () => {
    setIsSearchOpen(true);
    setIsSearchHover(false);
    setTimeout(() => searchInputRef.current?.focus(), 0);
  };
  const closeSearch = () => setIsSearchOpen(false);
  const showSearch = isSearchOpen || isSearchHover;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center h-16 w-52">
                <Image
                  src="/logo/1.png"
                  alt="logo"
                  width={208}
                  height={48}
                  priority
                  className="object-contain mix-blend-multiply bg-transparent"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menuConfig.map((menu, i) =>
                  menu.columns ? (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
                        {menu.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[700px] p-4 bg-white shadow-xl border border-gray-100 rounded-lg">
                          <div
                            className={`grid gap-6 grid-cols-${menu.columns.length}`}
                          >
                            {menu.columns.map((col, j) => (
                              <div key={j} className="space-y-4">
                                <h3 className="font-bold text-gray-900 text-base">
                                  {col.title}
                                </h3>
                                <div className="space-y-2">
                                  {col.links.map((link, k) => (
                                    <Link
                                      key={k}
                                      href={link.href}
                                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors"
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={i}>
                      <Link
                        href={menu.href}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
                      >
                        {menu.label}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Icon */}
          <div
            className="flex items-center"
            onMouseEnter={() => setIsSearchHover(true)}
            onMouseLeave={() => setIsSearchHover(false)}
          >
            <button
              className="p-2 text-gray-500 hover:text-blue-900 transition-colors"
              onClick={openSearch}
              aria-expanded={showSearch}
              aria-controls="header-search-input"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-500 hover:text-blue-900"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div id="mobile-menu" className="lg:hidden border-t">
            <nav className="p-4 space-y-2">
              {menuConfig.map((menu, i) =>
                menu.columns ? (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(menu.label)}
                      className="w-full text-left cursor-pointer py-2 text-sm font-medium text-gray-700"
                    >
                      {menu.label}
                    </button>
                    {activeMobileSection === menu.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {menu.columns.flatMap((col) =>
                          col.links.map((link, k) => (
                            <Link
                              key={k}
                              href={link.href}
                              className="block text-sm text-gray-700"
                            >
                              {link.name}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={i}
                    href={menu.href}
                    className="block py-2 text-sm font-medium text-gray-700"
                  >
                    {menu.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}

        {/* Search Popup */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={closeSearch}
            />
            <div className="relative z-10 w-full max-w-lg rounded-lg bg-white shadow-lg border p-4">
              <div className="flex items-center gap-2">
                <input
                  ref={searchInputRef}
                  id="header-search-input"
                  type="text"
                  placeholder="Search..."
                  className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
