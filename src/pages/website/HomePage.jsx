import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  FileCheck,
  Database,
  BarChart3,
  Building2,
  Boxes,
  Globe,
  FlaskConical,
  Award,
  ThermometerSnowflake,
  Send,
  Zap,
  TrendingUp,
  Receipt,
  Truck,
  ChevronRight
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function HomePage() {
  const { launchCrmDemo, navigateToWebsite, setIsDemoModalOpen } = useCrm();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
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
              className="px-6 py-3.5 bg-gradient-to-r from-blue-700 via-[#004B9B] to-slate-900 hover:from-blue-800 hover:to-black text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-900/25 flex items-center gap-2 transition-all active:scale-95 border border-blue-400/30 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Launch Live Software Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
            </button>

            <button
              onClick={() => navigateToWebsite('features')}
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 shadow-xs flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-[#004B9B]" />
              <span>Explore All Software Features</span>
            </button>

            <button
              onClick={() => navigateToWebsite('catalog')}
              className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-500/20 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Browse 150+ APIs</span>
            </button>
          </div>

          {/* Highlights 3-Card Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 text-left">
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

      {/* 2. WHY SPECIALIZED SOFTWARE SECTION */}
      <section className="py-20 bg-white border-y border-slate-200">
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

          {/* 6 Core Modules Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div 
              onClick={() => navigateToWebsite('features')}
              className="p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-[#004B9B] shadow-xs hover:shadow-md transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004B9B] transition-colors">
                Chemical & API Master Catalog
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-indexed with 150+ compendial APIs, CAS numbers, chemical synonyms, molecular formulas, and storage conditions.
              </p>
              <div className="text-2xs font-bold text-[#004B9B] flex items-center gap-1 pt-1">
                <span>Explore Catalog Module</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => navigateToWebsite('features')}
              className="p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-[#EE1C25] shadow-xs hover:shadow-md transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center group-hover:scale-105 transition-transform">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#EE1C25] transition-colors">
                AI Chemical Document Extractor
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upload scanned purchase orders, customer WhatsApp inquiries, or vendor rate sheets. AI fuzzy-matches chemicals automatically.
              </p>
              <div className="text-2xs font-bold text-[#EE1C25] flex items-center gap-1 pt-1">
                <span>Explore AI Extractor Module</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => navigateToWebsite('features')}
              className="p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-[#004B9B] shadow-xs hover:shadow-md transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004B9B] transition-colors">
                Batch Quality & COA Vault
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage lot-by-lot Certificates of Analysis (COA), Drug Master Files (DMF Open Part), and Written Confirmations.
              </p>
              <div className="text-2xs font-bold text-[#004B9B] flex items-center gap-1 pt-1">
                <span>Explore Quality Vault</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => navigateToWebsite('features')}
              className="p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                Multi-Currency Landed Costing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculate international chemical landed costs instantly in USD, EUR, RMB, and INR with customs tariffs and freight.
              </p>
              <div className="text-2xs font-bold text-slate-700 flex items-center gap-1 pt-1">
                <span>Explore Sourcing Desk</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => navigateToWebsite('manufacturing')}
              className="p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-[#EE1C25] shadow-xs hover:shadow-md transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#EE1C25] transition-colors">
                Lanco Industries Factory Sync
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct manufacturing sync with our sister-concern plant in Gujarat Chemical Zone with statutory clearances.
              </p>
              <div className="text-2xs font-bold text-[#EE1C25] flex items-center gap-1 pt-1">
                <span>Inspect Lanco Factory</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={launchCrmDemo}
              className="p-6 bg-gradient-to-br from-[#004B9B] to-slate-900 rounded-2xl text-white shadow-md space-y-3 relative overflow-hidden group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Live Software Demo Sandbox</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Experience the full CRM in action with preloaded pharmaceutical inquiries, purchase leads, and quotation tools.
              </p>
              <div className="text-2xs font-bold text-cyan-300 flex items-center gap-1 pt-1">
                <span>Launch Interactive Demo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigateToWebsite('features')}
              className="px-6 py-3 bg-[#004B9B] hover:bg-[#003875] text-white text-xs font-bold rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View All 7 Software Modules in Detail</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. LANCO MANUFACTURING FACTORY HIGHLIGHT */}
      <section className="py-16 bg-gradient-to-r from-blue-50/50 via-slate-50 to-red-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE1C25]/10 text-[#EE1C25] text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>STATE-OF-THE-ART MANUFACTURING UNIT</span>
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

            <div className="lg:col-span-4 text-center lg:text-right space-y-3">
              <button
                onClick={() => navigateToWebsite('manufacturing')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-95 cursor-pointer"
              >
                Inspect Factory Portfolio →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATS COUNTER BAR */}
      <section className="py-14 bg-gradient-to-r from-[#004B9B] via-[#003875] to-[#032b57] text-white">
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

      {/* 5. INTERACTIVE WORKSPACE CTA BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE WORKSPACE READY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Test Drive the Full Pharma Chemi CRM Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Experience real pharmaceutical sales leads, chemical purchase desks, quotation generator, and AI document parser in real-time. No sign-up or credit card required.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={launchCrmDemo}
                className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Live Demo Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateToWebsite('contact')}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                <span>Request Custom Walkthrough</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
