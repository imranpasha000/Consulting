"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Search, Building2, FileText, Calculator, Briefcase, Shield, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const toggleMobileSection = (sectionKey) => {
    setActiveMobileSection((prev) => (prev === sectionKey ? null : sectionKey));
  };
  const [isSearchHover, setIsSearchHover] = useState(false);
  const searchInputRef = useRef(null);
  const openSearch = () => {
    setIsSearchOpen(true);
    setIsSearchHover(false);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 0);
  };
  const closeSearch = () => setIsSearchOpen(false);
  const showSearch = isSearchOpen || isSearchHover;
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Navigation Menu */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="flex space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
                  Company Registration
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-4 bg-white shadow-xl border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Incorporation Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Building2 className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Incorporation</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/company-registration/private-limited" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Private Limited Company
                          </Link>
                          <Link href="/company-registration/llp" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            LLP Registration
                          </Link>
                          <Link href="/company-registration/one-person" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            One Person Company
                          </Link>
                          <Link href="/company-registration/public-limited" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Public Limited Company
                          </Link>
                          <Link href="/company-registration/section-8" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Section 8 Company
                          </Link>
                          <Link href="/company-registration/business-license" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Business Registration License
                          </Link>
                        </div>
                      </div>

                      {/* Compliance Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Compliance</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/compliance/din-kyc" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Director DIN e KYC Update
                          </Link>
                          <Link href="/compliance/appoint-director" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Appointment of Director
                          </Link>
                          <Link href="/compliance/remove-director" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Removal of Director
                          </Link>
                          <Link href="/compliance/winding-up" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Pvt. Ltd. Winding up
                          </Link>
                          <Link href="/compliance/increase-capital" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Increase Authorized Capital
                          </Link>
                          <Link href="/compliance/change-office" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Registered Office Change
                          </Link>
                        </div>
                      </div>

                      {/* Conversion Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Conversion</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/conversion/opc-to-pvt" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            OPC to PVT. Conversion
                          </Link>
                          <Link href="/conversion/pvt-to-public" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            PVT. to Public Ltd Conversion
                          </Link>
                          <Link href="/conversion/llp-to-pvt" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            LLP to PVT Conversion
                          </Link>
                          <Link href="/conversion/section-8-winding" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Sec-8 Winding Up
                          </Link>
                          <Link href="/conversion/nidhi-winding" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Nidhi Winding Up
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="relative bg-gradient-to-r from-blue-900 via-blue-900 to-red-500 rounded-lg p-4 text-white overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-2 right-4 w-16 h-16 bg-white rounded-full"></div>
                          <div className="absolute bottom-2 left-4 w-12 h-12 bg-white rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full"></div>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-base">Complete Business Solutions</h4>
                              <p className="text-xs opacity-90">From registration to compliance - we&apos;ve got you covered!</p>
                            </div>
                          </div>

                          {/* Illustration */}
                          <div className="hidden lg:block">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
                  GST Registration
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-4 bg-white shadow-xl border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-3 gap-6">
                      {/* GST Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Calculator className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">GST</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/gst/registration" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            GST Registration
                          </Link>
                          <Link href="/gst/return-filing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            GST Return Filing
                          </Link>
                          <Link href="/gst/nil-return" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            GST Nil Return Filing
                          </Link>
                          <Link href="/gst/modification" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            GST Modification
                          </Link>
                          <Link href="/gst/annual-filing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            GSTR-9 Annual Filing
                          </Link>
                          <Link href="/gst/lut-filing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            GST LUT Filing
                          </Link>
                          <Link href="/gst/eway-bill" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            GST E-Way Bill
                          </Link>
                        </div>
                      </div>

                      {/* Annual Compliances Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Annual Compliances & Others</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/compliance/annual-filing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Annual Compliance & Filing
                          </Link>
                          <Link href="/compliance/bookkeeping" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Annual Compliance & Bookkeeping
                          </Link>
                          <Link href="/tax/tax-planning" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Tax Planning & Consultancy
                          </Link>
                          <Link href="/services/online-bookkeeping" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Online Bookkeeping
                          </Link>
                          <Link href="/ngo/12a-80g" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            12A-80G-CSR
                          </Link>
                          <Link href="/services/project-report" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Project Report
                          </Link>
                          <Link href="/compliance/dpt-3" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            DPT-3 Filing
                          </Link>
                          <Link href="/ngo/darpan" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            NGO DARPAN Registration
                          </Link>
                        </div>
                      </div>

                      {/* Payroll Compliance Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Payroll Compliance</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/payroll/pf-esic-registration" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            PF-ESIC Registration
                          </Link>
                          <Link href="/payroll/pf-esic-filing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            PF-ESIC Return Filing
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="relative bg-gradient-to-r from-blue-900 via-blue-900 to-red-500 rounded-lg p-4 text-white overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-3 right-6 w-12 h-12 bg-white rounded-full"></div>
                          <div className="absolute bottom-3 left-6 w-16 h-16 bg-white rounded-full"></div>
                          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white rounded-full"></div>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <Calculator className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Complete Tax Solutions</h4>
                              <p className="text-sm opacity-90">GST, Compliance & More - Expert tax services!</p>
                            </div>
                          </div>

                          {/* Illustration */}
                          <div className="hidden lg:block">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                                <div className="flex flex-col items-center space-y-1">
                                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
                  ITR Filing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[550px] p-4 bg-white shadow-xl border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Individual Tax Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Individual Tax</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/itr/individual" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Individual ITR Filing
                          </Link>
                          <Link href="/itr/salaried" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Salaried ITR Filing
                          </Link>
                          <Link href="/itr/business-individual" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Business Individual ITR
                          </Link>
                          <Link href="/itr/capital-gains" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Capital Gains ITR
                          </Link>
                          <Link href="/itr/foreign-income" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Foreign Income ITR
                          </Link>
                        </div>
                      </div>

                      {/* Business Tax Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Briefcase className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Business Tax</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/itr/business" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Business ITR Filing
                          </Link>
                          <Link href="/itr/tds-return" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            TDS Return Filing
                          </Link>
                          <Link href="/itr/audit" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Tax Audit
                          </Link>
                          <Link href="/itr/advance-tax" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Advance Tax
                          </Link>
                          <Link href="/itr/tax-planning" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Tax Planning
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="relative bg-gradient-to-r from-blue-900 via-blue-900 to-red-500 rounded-lg p-4 text-white overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 right-8 w-14 h-14 bg-white rounded-full"></div>
                          <div className="absolute bottom-4 left-8 w-10 h-10 bg-white rounded-full"></div>
                          <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white rounded-full"></div>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <FileText className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Complete Tax Filing</h4>
                              <p className="text-sm opacity-90">Individual & Business Solutions - Expert ITR services!</p>
                            </div>
                          </div>

                          {/* Illustration */}
                          <div className="hidden lg:block">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                                <div className="flex flex-col items-center space-y-1">
                                  <div className="w-8 h-2 bg-white rounded"></div>
                                  <div className="w-6 h-2 bg-white rounded"></div>
                                  <div className="w-7 h-2 bg-white rounded"></div>
                                  <div className="w-5 h-2 bg-white rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
                  Other Registration
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-4 bg-white shadow-xl border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Trademark Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Trademark</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/trademark/registration" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Trademark Registration
                          </Link>
                          <Link href="/trademark/renewal" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Trademark Renewal
                          </Link>
                          <Link href="/trademark/objection" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Trademark Objection
                          </Link>
                          <Link href="/trademark/opposition" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Trademark Opposition
                          </Link>
                          <Link href="/trademark/assignment" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Trademark Assignment
                          </Link>
                          <Link href="/trademark/logo-design" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Logo Design
                          </Link>
                          <Link href="/trademark/series" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Series Trademark
                          </Link>
                        </div>
                      </div>

                      {/* Copyright Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Copyright</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/copyright/registration" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Copyright Registration
                          </Link>
                        </div>
                      </div>

                      {/* Licenses Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Licenses</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/licenses/fssai" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            FSSAI Registration
                          </Link>
                          <Link href="/licenses/fssai-renewal" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            FSSAI Renewal
                          </Link>
                          <Link href="/licenses/fssai-modification" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            FSSAI Modification
                          </Link>
                          <Link href="/licenses/import-export" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Import Export Code
                          </Link>
                          <Link href="/licenses/iec-modification" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Import Export Code Modification
                          </Link>
                          <Link href="/licenses/fssai-annual" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            FSSAI Annual Return Filing
                          </Link>
                          <Link href="/licenses/bis-certificate" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            BIS Certificate
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="relative bg-gradient-to-r from-blue-900 via-blue-900 to-red-500 rounded-lg p-4 text-white overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-2 right-4 w-18 h-18 bg-white rounded-full"></div>
                          <div className="absolute bottom-2 left-4 w-14 h-14 bg-white rounded-full"></div>
                          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white rounded-full"></div>
                          <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white rounded-full"></div>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <Award className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Complete Registration Solutions</h4>
                              <p className="text-sm opacity-90">Trademark, Copyright & Licenses - Professional registration!</p>
                            </div>
                          </div>

                          {/* Illustration */}
                          <div className="hidden lg:block">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                                <div className="flex items-center space-x-1">
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                  <div className="w-4 h-4 bg-white rounded-full"></div>
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
                  Other Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[550px] p-4 bg-white shadow-xl border border-gray-100 rounded-lg">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Professional Services Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Briefcase className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Professional Services</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/services/accounting" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Accounting Services
                          </Link>
                          <Link href="/services/audit" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Audit Services
                          </Link>
                          <Link href="/services/legal" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Legal Services
                          </Link>
                          <Link href="/services/consultation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Business Consultation
                          </Link>
                          <Link href="/services/bookkeeping" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Online Bookkeeping
                          </Link>
                          <Link href="/services/payroll" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Payroll Management
                          </Link>
                        </div>
                      </div>

                      {/* Specialized Services Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">Specialized Services</h3>
                        </div>
                        <div className="space-y-2">
                          <Link href="/services/iso-certification" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            ISO Certification
                          </Link>
                          <Link href="/services/project-report" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Project Report
                          </Link>
                          <Link href="/services/credit-analysis" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Credit Management Analysis
                          </Link>
                          <Link href="/services/jansamarth" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            JanSamarth Registration
                          </Link>
                          <Link href="/services/consumer-dispute" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Consumer Dispute Resolution
                          </Link>
                          <Link href="/services/online-dispute" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-md transition-colors">
                            Online Dispute Resolution
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="relative bg-gradient-to-r from-blue-900 via-blue-900 to-red-500 rounded-lg p-4 text-white overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-3 right-6 w-16 h-16 bg-white rounded-full"></div>
                          <div className="absolute bottom-3 left-6 w-12 h-12 bg-white rounded-full"></div>
                          <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white rounded-full"></div>
                          <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-white rounded-full"></div>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <Briefcase className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Complete Business Solutions</h4>
                              <p className="text-sm opacity-90">Professional & Specialized Services - Your success is our priority!</p>
                            </div>
                          </div>

                          {/* Illustration */}
                          <div className="hidden lg:block">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center">
                                <div className="flex flex-col items-center space-y-1">
                                  <div className="w-8 h-3 bg-white rounded"></div>
                                  <div className="w-6 h-3 bg-white rounded"></div>
                                  <div className="w-7 h-3 bg-white rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Icon */}
          <div className="flex items-center" onMouseEnter={() => setIsSearchHover(true)} onMouseLeave={() => setIsSearchHover(false)}>
            <button className="p-2 text-gray-500 hover:text-blue-900 transition-colors" onClick={openSearch} aria-expanded={showSearch} aria-controls="header-search-input">
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="p-2 text-gray-500 hover:text-blue-900" onClick={() => setIsMobileOpen((v) => !v)} aria-expanded={isMobileOpen} aria-controls="mobile-menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {isMobileOpen && (
          <div id="mobile-menu" className="lg:hidden border-t">
            <nav className="p-4 space-y-2">
              <Link href="/" className="block py-2 text-sm font-medium text-gray-700">Home</Link>

              <button
                type="button"
                className="w-full text-left cursor-pointer py-2 text-sm font-medium text-gray-700"
                aria-expanded={activeMobileSection === 'company'}
                onClick={() => toggleMobileSection('company')}
              >
                Company Registration
              </button>
              {activeMobileSection === 'company' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/company-registration/private-limited" className="block text-sm text-gray-700">Private Limited Company</Link>
                  <Link href="/company-registration/public-limited" className="block text-sm text-gray-700">Public Limited Company</Link>
                  <Link href="/company-registration/llp" className="block text-sm text-gray-700">Limited Liability Partnership</Link>
                  <Link href="/company-registration/partnership" className="block text-sm text-gray-700">Partnership Firm</Link>
                  <Link href="/company-registration/sole-proprietorship" className="block text-sm text-gray-700">Sole Proprietorship</Link>
                </div>
              )}

              <button
                type="button"
                className="w-full text-left cursor-pointer py-2 text-sm font-medium text-gray-700"
                aria-expanded={activeMobileSection === 'gst'}
                onClick={() => toggleMobileSection('gst')}
              >
                GST Registration
              </button>
              {activeMobileSection === 'gst' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/gst/registration" className="block text-sm text-gray-700">GST Registration</Link>
                  <Link href="/gst/return-filing" className="block text-sm text-gray-700">GST Return Filing</Link>
                  <Link href="/gst/compliance" className="block text-sm text-gray-700">GST Compliance</Link>
                  <Link href="/gst/consultation" className="block text-sm text-gray-700">GST Consultation</Link>
                </div>
              )}

              <button
                type="button"
                className="w-full text-left cursor-pointer py-2 text-sm font-medium text-gray-700"
                aria-expanded={activeMobileSection === 'itr'}
                onClick={() => toggleMobileSection('itr')}
              >
                ITR Filing
              </button>
              {activeMobileSection === 'itr' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/itr/individual" className="block text-sm text-gray-700">Individual ITR Filing</Link>
                  <Link href="/itr/business" className="block text-sm text-gray-700">Business ITR Filing</Link>
                  <Link href="/itr/tds-return" className="block text-sm text-gray-700">TDS Return Filing</Link>
                  <Link href="/itr/tax-planning" className="block text-sm text-gray-700">Tax Planning</Link>
                </div>
              )}

              <button
                type="button"
                className="w-full text-left cursor-pointer py-2 text-sm font-medium text-gray-700"
                aria-expanded={activeMobileSection === 'otherReg'}
                onClick={() => toggleMobileSection('otherReg')}
              >
                Other Registration
              </button>
              {activeMobileSection === 'otherReg' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/other/trademark" className="block text-sm text-gray-700">Trademark Registration</Link>
                  <Link href="/other/copyright" className="block text-sm text-gray-700">Copyright Registration</Link>
                  <Link href="/other/fssai" className="block text-sm text-gray-700">FSSAI License</Link>
                  <Link href="/other/import-export" className="block text-sm text-gray-700">Import Export Code</Link>
                </div>
              )}

              <button
                type="button"
                className="w-full text-left cursor-pointer py-2 text-sm font-medium text-gray-700"
                aria-expanded={activeMobileSection === 'services'}
                onClick={() => toggleMobileSection('services')}
              >
                Other Services
              </button>
              {activeMobileSection === 'services' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/services/accounting" className="block text-sm text-gray-700">Accounting Services</Link>
                  <Link href="/services/audit" className="block text-sm text-gray-700">Audit Services</Link>
                  <Link href="/services/legal" className="block text-sm text-gray-700">Legal Services</Link>
                  <Link href="/services/consultation" className="block text-sm text-gray-700">Business Consultation</Link>
                </div>
              )}

              <Link href="/blog" className="block py-2 text-sm font-medium text-gray-700">Blog</Link>
              <Link href="/contact" className="block py-2 text-sm font-medium text-gray-700">Contact</Link>
            </nav>
          </div>
        )}
      </div>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/40" onClick={closeSearch} />
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
    </header>
  );
};

export default Header;