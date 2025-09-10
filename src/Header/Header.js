"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Search } from 'lucide-react';
import Link from 'next/link';
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
               <div className="text-2xl font-bold">
                 <span className="text-blue-600">Bilal & </span>
                 <span className="text-orange-500">Co.</span>
                 <span className="text-xs text-gray-500 ml-1">®</span>
               </div>
             </Link>
           </div>
 
           {/* Navigation Menu */}
           <NavigationMenu className="hidden lg:flex" viewport={false}>
             <NavigationMenuList className="flex space-x-1">
               <NavigationMenuItem>
                 <NavigationMenuLink asChild>
                   <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                     Home
                   </Link>
                 </NavigationMenuLink>
               </NavigationMenuItem>
 
               <NavigationMenuItem>
                 <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                   Company Registration
                 </NavigationMenuTrigger>
                 <NavigationMenuContent>
                   <div className="w-64 p-4">
                     <div className="space-y-2">
                       <Link href="/company-registration/private-limited" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Private Limited Company
                       </Link>
                       <Link href="/company-registration/public-limited" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Public Limited Company
                       </Link>
                       <Link href="/company-registration/llp" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Limited Liability Partnership
                       </Link>
                       <Link href="/company-registration/partnership" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Partnership Firm
                       </Link>
                       <Link href="/company-registration/sole-proprietorship" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Sole Proprietorship
                       </Link>
                     </div>
                   </div>
                 </NavigationMenuContent>
               </NavigationMenuItem>
 
               <NavigationMenuItem>
                 <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                   GST Registration
                 </NavigationMenuTrigger>
                 <NavigationMenuContent>
                   <div className="w-64 p-4">
                     <div className="space-y-2">
                       <Link href="/gst/registration" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         GST Registration
                       </Link>
                       <Link href="/gst/return-filing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         GST Return Filing
                       </Link>
                       <Link href="/gst/compliance" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         GST Compliance
                       </Link>
                       <Link href="/gst/consultation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         GST Consultation
                       </Link>
                     </div>
                   </div>
                 </NavigationMenuContent>
               </NavigationMenuItem>
 
               <NavigationMenuItem>
                 <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                   ITR Filing
                 </NavigationMenuTrigger>
                 <NavigationMenuContent>
                   <div className="w-64 p-4">
                     <div className="space-y-2">
                       <Link href="/itr/individual" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Individual ITR Filing
                       </Link>
                       <Link href="/itr/business" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Business ITR Filing
                       </Link>
                       <Link href="/itr/tds-return" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         TDS Return Filing
                       </Link>
                       <Link href="/itr/tax-planning" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Tax Planning
                       </Link>
                     </div>
                   </div>
                 </NavigationMenuContent>
               </NavigationMenuItem>
 
               <NavigationMenuItem>
                 <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                   Other Registration
                 </NavigationMenuTrigger>
                 <NavigationMenuContent>
                   <div className="w-64 p-4">
                     <div className="space-y-2">
                       <Link href="/other/trademark" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Trademark Registration
                       </Link>
                       <Link href="/other/copyright" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Copyright Registration
                       </Link>
                       <Link href="/other/fssai" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         FSSAI License
                       </Link>
                       <Link href="/other/import-export" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Import Export Code
                       </Link>
                     </div>
                   </div>
                 </NavigationMenuContent>
               </NavigationMenuItem>
 
               <NavigationMenuItem>
                 <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                   Other Services
                 </NavigationMenuTrigger>
                 <NavigationMenuContent>
                   <div className="w-64 p-4">
                     <div className="space-y-2">
                       <Link href="/services/accounting" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Accounting Services
                       </Link>
                       <Link href="/services/audit" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Audit Services
                       </Link>
                       <Link href="/services/legal" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Legal Services
                       </Link>
                       <Link href="/services/consultation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                         Business Consultation
                       </Link>
                     </div>
                   </div>
                 </NavigationMenuContent>
               </NavigationMenuItem>
 
               <NavigationMenuItem>
                 <NavigationMenuLink asChild>
                   <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                     Blog
                   </Link>
                 </NavigationMenuLink>
               </NavigationMenuItem>
 
               <NavigationMenuItem>
                 <NavigationMenuLink asChild>
                   <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                     Contact
                   </Link>
                 </NavigationMenuLink>
               </NavigationMenuItem>
             </NavigationMenuList>
           </NavigationMenu>
 
           {/* Search Icon */}
           <div className="flex items-center" onMouseEnter={() => setIsSearchHover(true)} onMouseLeave={() => setIsSearchHover(false)}>
             <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors" onClick={openSearch} aria-expanded={showSearch} aria-controls="header-search-input">
               <Search className="w-5 h-5" />
               <span className="sr-only">Search</span>
             </button>
           </div>
 
           {/* Mobile menu button */}
           <div className="lg:hidden">
             <button className="p-2 text-gray-500 hover:text-blue-600" onClick={() => setIsMobileOpen((v) => !v)} aria-expanded={isMobileOpen} aria-controls="mobile-menu">
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
                 className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
             </div>
           </div>
         </div>
       )}
     </header>
   );
 };
 
 export default Header;