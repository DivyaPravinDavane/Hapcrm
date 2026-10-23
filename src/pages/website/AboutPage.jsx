import React from 'react';
import {
  ShieldCheck,
  Building2,
  Award,
  Globe,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  ArrowRight,
  FlaskConical,
  Send,
  Lock,
  ThermometerSnowflake,
  FileText
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function AboutPage() {
  const { navigateToWebsite, launchCrmDemo, setIsDemoModalOpen } = useCrm();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. HERO HEADER */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-[#003875] via-[#004B9B] to-[#0A66C2] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold">
            <Building2 className="w-4 h-4 text-cyan-300" />
            <span>CORPORATE GOVERNANCE & PHARMACEUTICAL EXCELLENCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            About Pharma Chemi <br />
            <span className="text-cyan-200">& Global Sourcing Operations</span>
          </h1>

          <p className="text-sm sm:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Pharma Chemi is a premier supplier, trader, exporter, and importer of Active Pharmaceutical Ingredients (APIs), excipients, and drug intermediates, backed by our proprietary industry software and audit-verified WHO-GMP manufacturing network.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Submit Commercial Sourcing RFQ</span>
            </button>

            <button
              onClick={launchCrmDemo}
              className="px-6 py-3.5 bg-slate-900 hover:bg-black text-cyan-300 text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Live Software Demo</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#EE1C25] text-2xs font-extrabold uppercase">
                <span>OUR MISSION & VALUES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Stewards of Global Health <br />
                <span className="text-[#004B9B]">Supply Chains</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over years of commercial expertise, <strong>Pharma Chemi</strong> has built trusted supply relationships with wholesale formulators, research facilities, and multinational pharmaceutical enterprises across India and overseas.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We combine deep technical sourcing competence with custom software that accelerates inquiry turnaround, validates pharmacopeial compliance, and eliminates batch documentation bottlenecks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border-l-4 border-[#004B9B] rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Expert Sourcing Desk</h4>
                  <p className="text-2xs text-slate-600 mt-1">
                    Specialists analyzing pharmacopeial compliance, impurity profiles, and Drug Master Files.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border-l-4 border-[#EE1C25] rounded-r-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Dedicated Warehousing</h4>
                  <p className="text-2xs text-slate-600 mt-1">
                    Climate-monitored facilities with periodic audit compliance and strict batch separation.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Card: Compliance Matrix */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl shadow-xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-bold text-sm text-cyan-300">Pharma Chemi Compliance Matrix</span>
                  <span className="text-2xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
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

        {/* 3 Core Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">WHO-GMP Validated Nodes</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Exclusive sourcing from audit-verified facilities with full regulatory traceability and batch COA.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center mb-3">
              <ThermometerSnowflake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Cold-Chain & Bio-Similars</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              End-to-end monitored cold chain line maintaining strict temperature compliance during transit.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Pan-Asia & Middle East Sourcing</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Direct import links across China and export operations spanning Asian and Middle Eastern markets.
            </p>
          </div>
        </div>

        {/* Technical Walkthrough Highlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#004B9B]/20 text-cyan-300 text-2xs font-bold border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE SOFTWARE PLATFORM</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Experience Pharma Chemi Software Live
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Inspect real-time inquiry management, 150+ APIs Item Master catalog, chemical document AI extractor, and automated quotation pipelines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={launchCrmDemo}
              className="px-5 py-2.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Launch Live Software Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
