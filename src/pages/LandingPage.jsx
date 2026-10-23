import React, { useState, useMemo } from 'react';
import {
  FlaskConical,
  Search,
  Filter,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Building2,
  Globe,
  Award,
  ThermometerSnowflake,
  FileText,
  Send,
  Sparkles,
  Lock,
  Layers,
  Clock,
  ArrowUpRight,
  ExternalLink,
  Cpu,
  Boxes,
  FileCheck,
  BarChart3,
  Database,
  Workflow,
  Shield,
  Zap
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';
import { HAP_PRODUCTS } from '../data/hapProducts';

export default function LandingPage() {
  const {
    setIsDemoModalOpen,
    launchCrmDemo,
    launchAuth,
    showToast
  } = useCrm();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  // Direct Contact Form State in Footer
  const [directForm, setDirectForm] = useState({ name: '', email: '', message: '' });
  const [isDirectSending, setIsDirectSending] = useState(false);

  // Categories list
  const categories = [
    'Analgesic / NSAID',
    'Antidiabetic',
    'Antibiotic',
    'Cardiovascular',
    'Antidepressant',
    'Antipsychotic',
    'Gastrointestinal',
    'Neurological',
    'Respiratory',
    'Vitamin',
    'Antifungal',
    'Antihistamine',
    'Urological',
    'Corticosteroid',
    'Hemostatic'
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return HAP_PRODUCTS.filter((item) => {
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        !selectedCategory ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage) || 1;
  const currentRows = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredProducts.slice(start, start + rowsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenInquiry = (productName = 'PARACETAMOL', categoryName = 'Analgesic / NSAID') => {
    window.dispatchEvent(
      new CustomEvent('setInquiryProduct', {
        detail: { product: productName, category: categoryName }
      })
    );
    setIsDemoModalOpen(true);
  };

  const handleDirectFormSubmit = (e) => {
    e.preventDefault();
    if (!directForm.name || !directForm.email || !directForm.message) {
      showToast('Please fill in your name, email and required API.', 'error');
      return;
    }
    setIsDirectSending(true);
    setTimeout(() => {
      setIsDirectSending(false);
      showToast('Thank you! Your direct RFQ has been forwarded to Pharma Chemi sourcing desk.', 'success');
      setDirectForm({ name: '', email: '', message: '' });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. TOP ANNOUNCEMENT / CORPORATE STRIP */}
      <div className="bg-[#0A0D14] text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#EE1C25]/20 text-[#FF4D55] px-2 py-0.5 rounded-full text-[10px] font-bold border border-[#EE1C25]/40">
              PHARMA CHEMI
            </span>
            <span className="text-slate-300 font-medium">
              The Dedicated Software & Enterprise Platform for Pharmaceuticals & Chemical Industries
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

      {/* 2. STICKY GLASSMORPHIC NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#EE1C25]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
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
                Software & Sourcing for Pharma & Chemical Industries
              </p>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#hero" className="hover:text-[#004B9B] transition-colors">Home</a>
            <a href="#software" className="hover:text-[#004B9B] transition-colors flex items-center gap-1 text-[#004B9B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Industry Software</span>
            </a>
            <a href="#products" className="hover:text-[#004B9B] transition-colors">150+ APIs & Chemicals</a>
            <a href="#lanco" className="hover:text-[#EE1C25] transition-colors flex items-center gap-1">
              <span>Lanco Factory</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE1C25] animate-ping" />
            </a>
            <a href="#about" className="hover:text-[#004B9B] transition-colors">Governance</a>
            <a href="#contact" className="hover:text-[#004B9B] transition-colors">Contact</a>
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
              <span>Staff Portal</span>
            </button>
          </div>

        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#004B9B] text-xs font-bold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#004B9B]" />
            <span>PURPOSE-BUILT SOFTWARE FOR PHARMACEUTICALS & CHEMICAL INDUSTRIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            The Dedicated Software & Platform for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004B9B] via-[#0A66C2] to-[#EE1C25]">
              Pharmaceuticals & Chemical Industries
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Pharma Chemi is engineered from the ground up to solve the exact operational, regulatory, and commercial complexities of chemical manufacturers, API traders, bulk drug importers, and pharma distributors. Powered by 150+ compendial APIs, CAS registry matching, batch COA traceability, and direct integration with Lanco Industries Gujarat manufacturing plant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={launchCrmDemo}
              className="px-6 py-3.5 bg-gradient-to-r from-blue-700 via-[#004B9B] to-slate-900 hover:from-blue-800 hover:to-black text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-900/25 flex items-center gap-2 transition-all active:scale-95 border border-blue-400/30"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Launch Live Software Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
            </button>

            <a
              href="#products"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 shadow-xs flex items-center gap-2 transition-all active:scale-95"
            >
              <FlaskConical className="w-4 h-4 text-[#004B9B]" />
              <span>Browse 150+ APIs & Chemicals</span>
            </a>

            <button
              onClick={() => handleOpenInquiry('PARACETAMOL', 'Analgesic / NSAID')}
              className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-500/20 flex items-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Commercial RFQ & COA</span>
            </button>
          </div>

          {/* Highlights 3-Card Row */}
          <div id="strengths" className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 text-left">
            <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#004B9B] transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">WHO-GMP Validated Nodes</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Exclusive sourcing from audit-verified facilities with full regulatory traceability and batch COA.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#EE1C25] transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center mb-3">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Cold-Chain & Bio-Similars</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                End-to-end monitored cold chain line maintaining strict temperature compliance during transit.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#004B9B] transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Pan-Asia & Middle East Sourcing</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Direct import links across China and export operations spanning Asian and Middle Eastern markets.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. DEDICATED INDUSTRY SOFTWARE FOR PHARMACEUTICALS & CHEMICALS */}
      <section id="software" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#004B9B] text-xs font-bold border border-blue-200">
              <Cpu className="w-3.5 h-3.5" />
              <span>INDUSTRY-SPECIFIC SOFTWARE ARCHITECTURE</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Pharmaceuticals & Chemical Companies Run on <span className="text-[#004B9B]">Pharma Chemi</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generic business CRMs fail in chemical and pharmaceutical operations because they lack chemical nomenclature, CAS registry support, batch certificates of analysis (COA), pharmacopeial standards (USP/BP/EP/IP), and hazardous shipping compliance. Pharma Chemi is built natively around chemical and pharmaceutical business logic.
            </p>
          </div>

          {/* 6 Core Industry Software Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#004B9B] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Chemical & API Master Catalog</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-indexed with 150+ compendial APIs, CAS numbers, chemical synonyms, molecular formulas, therapeutic categories, and storage specifications.
              </p>
              <div className="text-2xs font-semibold text-[#004B9B] flex items-center gap-1 pt-1">
                <span>CAS Registry & Synonyms Mapped</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#EE1C25] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center group-hover:scale-105 transition-transform">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">AI Chemical Document Extractor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upload scanned purchase orders, handwritten customer inquiries, or vendor rate sheets. Our AI fuzzy-matches chemical names against catalog items in seconds.
              </p>
              <div className="text-2xs font-semibold text-[#EE1C25] flex items-center gap-1 pt-1">
                <span>OCR & Chemical Name Extraction</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#004B9B] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Batch Quality & COA Vault</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage lot-by-lot Certificates of Analysis (COA), Drug Master Files (DMF Open Part), Written Confirmation (WC), and MSDS safety data sheets.
              </p>
              <div className="text-2xs font-semibold text-[#004B9B] flex items-center gap-1 pt-1">
                <span>USP / BP / EP / IP Standards</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Multi-Currency Landed Costing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculate international chemical landed costs instantly in USD, EUR, RMB, and INR with customs tariffs, port clearing, and freight margins.
              </p>
              <div className="text-2xs font-semibold text-slate-700 flex items-center gap-1 pt-1">
                <span>Automated Forex & Customs Tariff</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#EE1C25] shadow-xs hover:shadow-md transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Lanco Industries Factory Sync</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct manufacturing sync with our sister-concern plant in Gujarat Chemical Zone with statutory clearances and progressive WHO-GMP accreditation.
              </p>
              <div className="text-2xs font-semibold text-[#EE1C25] flex items-center gap-1 pt-1">
                <span>Gujarat Chemical Zone Clearance</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-6 bg-gradient-to-br from-[#004B9B] to-slate-900 rounded-2xl text-white shadow-md space-y-3 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-white/20 text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Live Software Demo Sandbox</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Experience the full CRM in action with preloaded pharmaceutical inquiries, purchase leads, customer quotations, and AI extraction tools.
              </p>
              <button
                onClick={launchCrmDemo}
                className="w-full mt-2 py-2 px-3 bg-white hover:bg-slate-100 text-[#004B9B] text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Launch Interactive Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Banner: Test Drive the Software */}
          <div className="mt-12 p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-2xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3 h-3" />
                <span>INTERACTIVE WORKSPACE READY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Ready to Experience Pharma Chemi in Action?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Test drive the CRM software engineered specifically for pharmaceuticals and chemicals. Explore real lead pipelines, customer accounts, chemical catalog, and AI document parser.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={launchCrmDemo}
                className="px-6 py-3 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Test Drive Software Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={launchAuth}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-all"
              >
                <span>Staff Sign In</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ABOUT SECTION & CORPORATE GOVERNANCE */}
      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#EE1C25] text-xs font-bold border border-red-200">
                <span>CORPORATE GOVERNANCE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Stewards of Global Health <br />
                <span className="text-[#004B9B]">Supply Chains</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Pharma Chemi</strong> is a premier supplier, trader, exporter, and importer of Active Pharmaceutical Ingredients (APIs), excipients, and drug intermediates. Over years of intensive commercial expertise, we supply wholesale formulators, research facilities, and multinational pharmaceutical enterprises across India and overseas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border-l-4 border-[#004B9B] rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Expert Sourcing Desk</h4>
                  <p className="text-2xs sm:text-xs text-slate-600 mt-0.5">
                    Dedicated technical sourcing specialists analyzing pharmacopeial compliance, impurities, and DMF docs.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border-l-4 border-[#EE1C25] rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Dedicated Warehousing</h4>
                  <p className="text-2xs sm:text-xs text-slate-600 mt-0.5">
                    Climate-monitored facilities with periodic audit compliance and strict batch separation.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#products"
                  className="px-5 py-2.5 bg-[#004B9B] hover:bg-[#003c7d] text-white text-xs font-bold rounded-xl transition-all"
                >
                  View Product Portfolio
                </a>
                <button
                  onClick={() => handleOpenInquiry()}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all"
                >
                  Request Technical Pack / COA
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="p-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl shadow-xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-bold text-sm">Pharma Chemi Compliance Matrix</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
                    Audit Verified
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Batch-Specific COA:</strong> Supplied with each consignment detailing assay %, impurity profile, and particle size.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Regulatory Filings:</strong> Open Part Drug Master Files (DMF) and Written Confirmations (WC) for export clients.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Fast-Track Logistics:</strong> Strategic stock points in Mumbai and Gujarat ensuring prompt dispatch.
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-2xs text-slate-400">
                  <span>Registered in Mumbai, India</span>
                  <span className="text-cyan-300 font-semibold">100% Quality Assurance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. LANCO INDUSTRIES HIGHLIGHT (Sister Concern Manufacturing Factory in Gujarat) */}
      <section id="lanco" className="py-16 bg-gradient-to-r from-blue-50/50 via-slate-50 to-red-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE1C25]/10 text-[#EE1C25] text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>STATE-OF-THE-ART MANUFACTURING</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Sister Concern Manufacturing Unit: <span className="text-[#004B9B]">Lanco Industries</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We are proud to establish our new state-of-the-art sister concern manufacturing factory situated at the chemical zone in Gujarat, India, with full statutory clearances from the Government of Gujarat.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The unit is designed under GMP compliance and is engineered for progressive WHO-GMP accreditation to support escalating domestic and international formulation demand.
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-2xs sm:text-xs font-semibold text-slate-700">
                <span className="px-2.5 py-1 bg-slate-100 rounded-md">✓ Chemical Zone, Gujarat</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded-md">✓ Govt of Gujarat Clearances</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded-md">✓ Progressive WHO-GMP Facility</span>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => handleOpenInquiry('Custom Synthesis / Bulk API', 'Lanco Industries Manufacturing')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-95"
              >
                Inquire Factory Portfolio →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMPENDIAL CATALOG (Interactive 150+ APIs Table with Search & Category Filter) */}
      <section id="products" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#004B9B] text-xs font-bold border border-blue-200">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>COMPENDIAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Active Pharmaceutical Ingredients (APIs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Search from our 150 Active Pharmaceutical Ingredients listed below with corresponding therapeutic categories. Filter by category or keyword, and click <strong>Inquire</strong> to open the pre-filled RFQ modal.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl shadow-xs mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              
              {/* Keyword Search */}
              <div className="md:col-span-6">
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Keyword Search
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#EE1C25] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search API or Category (e.g. Paracetamol, Metformin, NSAID, Antidiabetic)..."
                    className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] transition-all font-medium"
                  />
                </div>
              </div>

              {/* Therapeutic Category Dropdown */}
              <div className="md:col-span-4">
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Therapeutic Category
                </label>
                <div className="relative">
                  <Filter className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] transition-all font-medium"
                  >
                    <option value="">All Therapeutic Categories (150 APIs)</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reset Filters */}
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                    setCurrentPage(1);
                  }}
                  className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span>Reset Filters</span>
                </button>
              </div>

            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 text-xs text-slate-600 font-medium">
            <div>
              Showing <span className="font-bold text-[#EE1C25]">{filteredProducts.length}</span> of <span className="font-bold text-slate-900">{HAP_PRODUCTS.length}</span> Active Pharmaceutical Ingredients
            </div>
            <div className="text-2xs text-slate-500">
              Page <span className="font-bold text-slate-800">{currentPage}</span> of <span className="font-bold text-slate-800">{totalPages}</span>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-gradient-to-r from-[#004B9B] to-[#0A66C2] text-white uppercase text-[11px] font-bold tracking-wider">
                    <th className="py-3 px-4 text-center w-16">Sr. No.</th>
                    <th className="py-3 px-4 min-w-[260px]">Active Pharmaceutical Ingredient (API)</th>
                    <th className="py-3 px-4 min-w-[240px]">Therapeutic Category</th>
                    <th className="py-3 px-4 text-center min-w-[120px]">Compendia</th>
                    <th className="py-3 px-4 text-center min-w-[120px]">Status</th>
                    <th className="py-3 px-4 text-right min-w-[120px]">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentRows.length > 0 ? (
                    currentRows.map((product) => (
                      <tr key={product.id} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3 px-4 text-center font-mono text-slate-400 font-semibold">
                          {String(product.id).padStart(3, '0')}
                        </td>
                        <td className="py-3 px-4 font-bold text-[#004B9B]">
                          {product.name}
                        </td>
                        <td className="py-3 px-4 text-slate-700 font-medium">
                          {product.category}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-semibold border border-slate-200">
                            {product.compendia}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {product.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => handleOpenInquiry(product.name, product.category)}
                            className="px-3 py-1.5 bg-[#EE1C25] hover:bg-[#d61921] text-white font-bold text-2xs rounded-lg shadow-xs transition-all active:scale-95"
                          >
                            Inquire / RFQ
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-400">
                        <FlaskConical className="w-8 h-8 mx-auto mb-2 opacity-40" />
                        <div className="font-bold text-slate-700">No matching APIs found</div>
                        <div className="text-2xs mt-1">Try another keyword or reset filters to view all 150 products.</div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-100 transition-colors disabled:opacity-40 flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-7 h-7 rounded-lg font-bold text-xs transition-colors ${
                          currentPage === pageNum
                            ? 'bg-[#004B9B] text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  {totalPages > 7 && <span className="text-slate-400 px-1">...</span>}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-100 transition-colors disabled:opacity-40 flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 7. STATS COUNTER BAR */}
      <section id="stats" className="py-14 bg-gradient-to-r from-[#004B9B] via-[#003875] to-[#032b57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-white">500+</div>
              <p className="text-blue-200 text-xs uppercase font-bold tracking-wider">
                Active Formulators & Clients
              </p>
            </div>

            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-white">150+</div>
              <p className="text-blue-200 text-xs uppercase font-bold tracking-wider">
                Compendial APIs in Catalog
              </p>
            </div>

            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-white">25+</div>
              <p className="text-blue-200 text-xs uppercase font-bold tracking-wider">
                Years Regulatory Excellence
              </p>
            </div>

            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400">100%</div>
              <p className="text-blue-200 text-xs uppercase font-bold tracking-wider">
                GMP Batch Traceability
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER / CONTACT & DIRECT RFQ FORM */}
      <footer id="contact" className="pt-16 pb-10 bg-white border-t border-slate-200 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
            
            {/* Col 1: About Pharma Chemi */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#004B9B] text-white font-extrabold flex items-center justify-center text-xs">
                  PC
                </div>
                <span className="text-lg font-extrabold text-slate-900">
                  Pharma <span className="text-[#004B9B]">Chemi</span>
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed text-xs">
                The dedicated software and sourcing platform engineered specifically for the pharmaceuticals and chemical industries. Powering API sourcing, chemical catalog management, batch traceability, and Lanco Industries manufacturing integration.
              </p>

              <div className="pt-2 text-2xs space-y-1 text-slate-500">
                <div>Domain: <span className="font-mono text-[#004B9B] font-bold">pharmachemi.com / hapenterprise.com</span></div>
                <div>Sister Concern: <span className="font-bold text-slate-700">Lanco Industries (Chemical Zone, Gujarat)</span></div>
              </div>

              <div className="pt-3">
                <button
                  onClick={launchAuth}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-2xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <Lock className="w-3 h-3 text-cyan-300" />
                  <span>Access Internal CRM Desk</span>
                </button>
              </div>
            </div>

            {/* Col 2: Contact & Location */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
                Contact & Location
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#EE1C25] shrink-0 mt-0.5" />
                  <span>
                    Shop No. 4, Gorai Disha CHS ltd, <br />
                    L T Road, Gorai Plot No. 50, Gorai, <br />
                    Borivali (west), Mumbai - 400 092 INDIA
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#EE1C25] shrink-0" />
                  <a href="mailto:inquiry@hapenterprise.com" className="text-[#004B9B] hover:underline font-semibold">
                    inquiry@hapenterprise.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#004B9B] shrink-0" />
                  <span className="font-semibold text-slate-800">+91 93234265877, 9324517446</span>
                </div>
              </div>
            </div>

            {/* Col 3: Direct RFQ Email Form */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
                Direct RFQ Email Form
              </h4>

              <form onSubmit={handleDirectFormSubmit} className="space-y-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Company"
                  value={directForm.name}
                  onChange={(e) => setDirectForm({ ...directForm, name: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] outline-none transition-all"
                />

                <input
                  type="email"
                  required
                  placeholder="Corporate Email Address"
                  value={directForm.email}
                  onChange={(e) => setDirectForm({ ...directForm, email: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] outline-none transition-all"
                />

                <textarea
                  rows={2}
                  required
                  placeholder="Required API / CAS / Target Volume"
                  value={directForm.message}
                  onChange={(e) => setDirectForm({ ...directForm, message: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] outline-none transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={isDirectSending}
                  className="w-full py-2.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isDirectSending ? 'Sending...' : 'Send RFQ via Email'}</span>
                </button>
              </form>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-2xs text-slate-500">
            <div>
              &copy; 2026 Pharma Chemi. Dedicated Software & Platform for Pharmaceuticals & Chemical Industries. All rights reserved.
            </div>
            <div className="flex gap-4">
              <span>WHO-GMP Validated Nodes</span>
              <span>•</span>
              <span>Lanco Industries Gujarat</span>
              <span>•</span>
              <button onClick={launchAuth} className="hover:text-slate-800 font-bold">
                Staff CRM Login
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <a
          href="https://wa.me/919324265877?text=Hello%20Pharma%20Chemi%2C%20I%20am%20interested%20in%20sourcing%20Active%20Pharmaceutical%20Ingredients%20(APIs)."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all relative group"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.562 3.844 1.625 5.469L2 22l4.656-1.594A10.01 10.01 0 0 0 12.03 22c5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.781 0-3.469-.531-4.906-1.469l-.344-.219-3.625 1.25 1.25-3.531-.25-.375a8.232 8.232 0 0 1-1.375-4.656c0-4.562 3.719-8.281 8.281-8.281s8.281 3.719 8.281 8.281-3.719 8.281-8.281 8.281zm4.562-6.188c-.25-.125-1.469-.719-1.688-.812-.219-.094-.375-.125-.531.125-.156.25-.625.812-.781 1-.156.188-.312.188-.562.062-.25-.125-1.062-.375-2.031-1.25-.75-.656-1.25-1.469-1.406-1.719-.156-.25 0-.375.125-.5.125-.125.25-.312.375-.469.125-.156.156-.25.25-.438.094-.188.031-.344-.031-.469-.062-.125-.531-1.312-.75-1.781-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.438.062-.656.312-.219.25-.875.844-.875 2.062s.906 2.375 1.031 2.531c.125.156 1.781 2.719 4.312 3.812.594.25 1.062.406 1.438.531.625.188 1.188.156 1.625.094.5-.062 1.469-.594 1.688-1.188.219-.594.219-1.094.156-1.188-.063-.094-.219-.156-.469-.281z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
        </a>
      </div>

    </div>
  );
}
