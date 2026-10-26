import React from 'react';
import {
  Boxes,
  TrendingUp,
  Building2,
  Globe,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  BarChart3,
  FileCheck,
  Send
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function SolutionsPage() {
  const { launchCrmDemo, navigateToWebsite, setIsDemoModalOpen } = useCrm();

  const solutionsList = [
    {
      title: 'Active Pharmaceutical Ingredient (API) Traders & Importers',
      badge: 'FOR TRADERS & IMPORTERS',
      color: 'blue',
      icon: TrendingUp,
      challenge: 'Handling fluctuating chemical prices from overseas manufacturers (China, India, Europe), complex landed import duties, currency forex shifts, and slow manual quotations in Excel.',
      solution: 'Pharma Chemi provides automated multi-vendor bidding, instantaneous landed-cost calculations (FOB to door-delivery), real-time forex conversions, and <3-minute quotation generation with COA specs.',
      benefits: [
        'Quote chemical inquiries 5x faster than competitors using automated PDF & WhatsApp quotes',
        'Protect profit margins with precise landed cost calculations including customs tariffs & freight',
        'Fuzzy-match customer inquiries automatically with the AI Document Extractor',
        'Track payment aging (0-90+ days) and enforce credit limits before dispatching high-value chemical lots'
      ]
    },
    {
      title: 'Finished Formulation (FDF) Pharmaceutical Manufacturers',
      badge: 'FOR FORMULATION PRODUCERS',
      color: 'emerald',
      icon: Boxes,
      challenge: 'Sourcing compendial purity raw materials (USP/BP/EP/IP) with zero batch deviation, managing thousands of paper COAs, and preparing for strict regulatory audits (FDA / WHO-GMP).',
      solution: 'Pharma Chemi connects formulators directly with pre-vetted WHO-GMP manufacturers, stores digital batch-specific COAs in an encrypted compliance vault, and maintains an unbroken audit trail.',
      benefits: [
        'Instant retrieval of lot-specific Certificate of Analysis (COA) and Open-Part DMF filings',
        'Standardized 150+ APIs catalog pre-indexed by item codes and pharmacopeia standards',
        'Sample request tracking with courier Airway Bill (AWB) integration for QC lab testing',
        'Uninterrupted supply chain backed by validated WHO-GMP manufacturers and buffer stock'
      ]
    },
    {
      title: 'Chemical Synthesis & Intermediate Producers',
      badge: 'FOR CHEMICAL PLANTS & SYNTHESIS UNITS',
      color: 'red',
      icon: Building2,
      challenge: 'Coordinating reactor vessel batch cycles, statutory environmental and hazardous materials clearances, customer custom synthesis specifications, and multi-tier chemical drum packaging.',
      solution: 'Pharma Chemi links chemical synthesis schedules directly with commercial orders, tracking raw material inputs, reactor batch progress, statutory clearances, and finished goods testing.',
      benefits: [
        'Direct connection between production reactors and commercial sales order desks',
        'Track statutory clearances and GIDC environmental compliance documentation',
        'Batch lot allocation for custom synthesis scale-up (500L to 5,000L glass-lined reactors)',
        'Automatic packaging assignment (25kg fibre drums, HDPE bags, ISO tanks)'
      ]
    },
    {
      title: 'Pharmaceutical Exporters & Global Indenting Houses',
      badge: 'FOR GLOBAL EXPORTERS & INDENTING',
      color: 'indigo',
      icon: Globe,
      challenge: 'Navigating country-specific import regulations, multi-currency invoicing (USD/EUR/GBP), Certificate of Origin (COO), Written Confirmation (WC), and cross-border logistics tracking.',
      solution: 'Pharma Chemi automates international export documentation, multi-currency price sheets, port-clearing tracking, and client regulatory dossier packaging.',
      benefits: [
        'Generate multi-currency export quotations and commercial proforma invoices in seconds',
        'Central repository for export dossiers: Written Confirmations (WC), DMFs, and GMP certificates',
        'Pan-Asia and Middle East sourcing network integration with direct trade links',
        'Complete shipment milestone tracking from Mumbai/Gujarat port departure to destination delivery'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. HERO HEADER */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-[#004B9B] via-[#0A66C2] to-blue-700 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold">
            <Boxes className="w-4 h-4 text-cyan-300" />
            <span>TAILORED INDUSTRY ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Built for Every Stakeholder in the <br />
            <span className="text-cyan-200">Pharmaceutical & Chemical Ecosystem</span>
          </h1>

          <p className="text-sm sm:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Whether you are an API import-export trader handling hundreds of dynamic daily quotations, or a formulation plant requiring unbroken batch COA traceability, Pharma Chemi adapts to your exact operational workflows.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={launchCrmDemo}
              className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Live Software Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateToWebsite('features')}
              className="px-6 py-3.5 bg-slate-900 hover:bg-black text-cyan-300 text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              <span>Explore All Software Features</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. SOLUTIONS LIST */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {solutionsList.map((sol, index) => {
          const Icon = sol.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden p-8 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left col: Title and Problem/Solution */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004B9B] text-2xs font-extrabold uppercase">
                    <Icon className="w-3.5 h-3.5 text-[#004B9B]" />
                    <span>{sol.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {sol.title}
                  </h2>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 bg-red-50/60 border-l-4 border-[#EE1C25] rounded-r-xl">
                      <h4 className="text-xs font-bold text-red-900 uppercase tracking-wider mb-1">
                        Operational Challenge
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {sol.challenge}
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50/60 border-l-4 border-[#004B9B] rounded-r-xl">
                      <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                        The Pharma Chemi Solution
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {sol.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right col: Benefits and CTA */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Key Operational Benefits</span>
                  </h3>

                  <div className="space-y-2.5">
                    {sol.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-2xs flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-xs text-slate-700 font-medium leading-relaxed">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={launchCrmDemo}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-cyan-300 text-xs font-bold rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Test Drive Workflow in Live CRM</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. CTA */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Streamline Your Pharmaceutical Enterprise?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Experience the platform engineered specifically for chemical trading and pharmaceutical manufacturing.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={launchCrmDemo}
              className="px-6 py-3 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Live Software Demo</span>
            </button>
            <button
              onClick={() => navigateToWebsite('contact')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-all"
            >
              <span>Contact Sourcing Desk</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
