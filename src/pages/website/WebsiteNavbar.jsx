import React, { useState } from 'react';
import {
  ShieldCheck,
  Phone,
  Sparkles,
  Lock,
  Menu,
  X,
  Send,
  FlaskConical,
  Building2,
  Layers,
  HelpCircle,
  Mail,
  ChevronRight
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function WebsiteNavbar() {
  const { websitePage, navigateToWebsite, launchCrmDemo, launchAuth, setIsDemoModalOpen } = useCrm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Software Features', highlight: true },
    { id: 'catalog', label: '150+ APIs & Chemicals' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & RFQ' },
  ];

  const handleNavClick = (pageId) => {
    navigateToWebsite(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. TOP CORPORATE ANNOUNCEMENT STRIP */}
      <div className="bg-[#0A0D14] text-white text-xs py-2 px-4 border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#EE1C25]/20 text-[#FF4D55] px-2 py-0.5 rounded-full text-[10px] font-bold border border-[#EE1C25]/40">
              PHARMA CHEMI
            </span>
            <span className="text-slate-300 font-medium text-[11px] sm:text-xs">
              Specialized Software Platform for Pharmaceuticals & Chemical Industries
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              WHO-GMP Validated Nodes
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href="tel:+9193234265877"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#EE1C25]" />
              <span>+91 93234265877</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#EE1C25]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#004B9B] to-[#0A66C2] flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              PC
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
                  Pharma <span className="text-[#004B9B]">Chemi</span>
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider -mt-1 hidden sm:block">
                Software for Pharma & Chemical Industries
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = websitePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors flex items-center gap-1 ${
                    isActive 
                      ? 'text-[#004B9B] font-extrabold' 
                      : link.highlight
                        ? 'text-[#004B9B] hover:text-[#003875]'
                        : 'text-slate-600 hover:text-[#004B9B]'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-3 h-3 text-cyan-500" />}
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004B9B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={launchCrmDemo}
              className="px-3.5 py-2 bg-gradient-to-r from-blue-700 to-[#004B9B] hover:from-blue-800 hover:to-[#003c7d] text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Live Software Demo</span>
            </button>

            <button
              onClick={launchAuth}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Staff Login</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-xl">
            {navLinks.map((link) => {
              const isActive = websitePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-[#004B9B]' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#004B9B]" />}
                    {link.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={launchAuth}
                className="w-full py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Staff Portal Sign In</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
