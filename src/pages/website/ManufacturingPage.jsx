import React from 'react';
import {
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  FlaskConical,
  Sparkles,
  ArrowRight,
  Send,
  MapPin,
  FileCheck,
  ThermometerSnowflake,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function ManufacturingPage() {
  const { setIsDemoModalOpen, launchCrmDemo, navigateToWebsite } = useCrm();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. HERO HEADER */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-[#1E2530] via-slate-900 to-[#0A0D14] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EE1C25]/20 border border-[#EE1C25]/40 text-[#FF6B6B] text-xs font-bold">
            <Building2 className="w-4 h-4 text-[#EE1C25]" />
            <span>SISTER CONCERN MANUFACTURING FACILITY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Lanco Industries <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-amber-200">
              State-of-the-Art Chemical Plant (Gujarat, India)
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are proud to establish our new modern sister concern manufacturing factory situated at the chemical zone in Gujarat, India, with full statutory clearances from the Government of Gujarat and engineered for progressive WHO-GMP accreditation.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Inquire Factory Portfolio & Custom Synthesis</span>
            </button>

            <button
              onClick={launchCrmDemo}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Factory Orders in CRM</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. STATUTORY CLEARANCES & CORE CAPABILITIES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Statutory Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">Government of Gujarat Clearances</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full statutory environmental, hazardous handling, and factory compliance granted by the Govt of Gujarat.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">Progressive WHO-GMP Facility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineered in compliance with Schedule M and designed for progressive WHO-GMP accreditation to support global markets.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">Dedicated Chemical Zone (GIDC)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strategically positioned in Gujarat's heavy chemical corridor with dedicated utility pipelines, zero-discharge ETP, and power grids.
              </p>
            </div>
          </div>

        </div>

        {/* Plant Technical Specifications */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004B9B] text-2xs font-extrabold uppercase">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>PLANT INFRASTRUCTURE & REACTION CAPABILITIES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Modern Chemical Synthesis & Pilot Scale-Up
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lanco Industries houses multi-purpose reaction blocks equipped to execute complex multi-step chemical synthesis, acetylation, halogenation, condensation, and purification processes under rigorous temperature and pressure controls.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border-l-4 border-[#004B9B] rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Reaction Vessels</h4>
                  <p className="text-2xs text-slate-600 mt-1">
                    Glass-Lined Reactors (GLR) and Stainless Steel (SS316) vessels ranging from 500L to 5,000L with automated heating/cooling jackets.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border-l-4 border-[#EE1C25] rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Quality Control Laboratory</h4>
                  <p className="text-2xs text-slate-600 mt-1">
                    State-of-the-art analytical testing suite including HPLC, Gas Chromatography (GC), UV-Vis, and Karl Fischer moisture titrators.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Cleanroom Finishing Area</h4>
                  <p className="text-2xs text-slate-600 mt-1">
                    ISO Class 8 cleanrooms with terminal HEPA filtration for final API crystallization, drying, micronization, and fiber drum packing.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border-l-4 border-amber-600 rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Effluent Treatment Plant (ETP)</h4>
                  <p className="text-2xs text-slate-600 mt-1">
                    Zero Liquid Discharge (ZLD) enabled effluent treatment with multiple-effect evaporators (MEE) complying with Gujarat Pollution Control Board.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Card: Software-Integrated Manufacturing */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl shadow-xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-bold text-sm text-cyan-300">Pharma Chemi Software Sync</span>
                  <span className="text-2xs bg-emerald-500/20 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded">
                    LIVE INTEGRATION
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  Direct Factory Order & Batch Traceability
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Unlike traditional third-party manufacturers, Lanco Industries is connected in real-time to the Pharma Chemi CRM desk.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time reactor production batch scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant batch COA upload from plant QC laboratory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct dispatch tracking with factory weighbridge slip</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={launchCrmDemo}
                    className="w-full py-2.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inspect Factory Pipeline in CRM</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 3. CTA SECTION */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Partner with Lanco Industries for Custom Synthesis & Bulk API Supply
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Submit your chemical molecular structure, CAS number, purity target, and batch volume requirements to receive our technical feasibility pack and quotation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 py-3 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Submit Custom Synthesis Inquiry</span>
            </button>

            <button
              onClick={() => navigateToWebsite('catalog')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>Explore 150+ APIs Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
