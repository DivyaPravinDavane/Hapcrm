'use client';

import React, { useState } from 'react';
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
  ChevronRight,
  Search,
  MessageSquare,
  Mail,
  Bell,
  Clock,
  Users,
  Layers,
  Lock,
  UploadCloud,
  Check,
  Calendar,
  DollarSign,
  AlertCircle,
  Filter,
  PhoneCall,
  FileText,
  SlidersHorizontal,
  ChevronDown,
  RefreshCw,
  FolderSync
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function HomePage() {
  const { launchCrmDemo, navigateToWebsite, setIsDemoModalOpen } = useCrm();

  // Interactive Demo State inside Landing Page
  const [activeLeadTab, setActiveLeadTab] = useState('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('all');
  const [itemSearchQuery, setItemSearchQuery] = useState('API-1039');
  const [activeFeatureCategory, setActiveFeatureCategory] = useState('leads');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [activeRoleTab, setActiveRoleTab] = useState('sales');
  const [activeFaq, setActiveFaq] = useState(null);
  const [quoteLoggedNotice, setQuoteLoggedNotice] = useState(false);
  const [paperUploadNotice, setPaperUploadNotice] = useState(false);

  // Sample B2B Leads Dataset matching specification
  const sampleLeads = [
    { id: 'LD-901', client: 'Sun Healthcare (Broker)', item: 'Metformin HCl IP', code: 'API-1115', qty: '2,000 KG', status: 'Sent', tab: 'leads' },
    { id: 'LD-902', client: 'Zydex Chemical Labs', item: 'Ibuprofen 25 EP', code: 'API-1568', qty: '1,500 KG', status: 'Pending', tab: 'myLeads' },
    { id: 'LD-903', client: 'BioCore Trade Corp', item: 'Ciprofloxacin HCl', code: 'API-8639', qty: '500 KG', status: 'Confirm', tab: 'purchase' },
    { id: 'LD-904', client: 'Apex Pharma Global', item: 'Amoxicillin Trihydrate', code: 'API-6133', qty: '4,000 KG', status: 'WON', tab: 'myLeads' },
    { id: 'LD-905', client: 'Raman Chemical Traders', item: 'Paracetamol DC 90%', code: 'API-1039', qty: '10,000 KG', status: 'Reject', tab: 'mobile' },
    { id: 'LD-906', client: 'Krupa Intermediates', item: 'Dextromethorphan HBr', code: 'API-6700', qty: '300 KG', status: 'NoOffer', tab: 'leads' },
    { id: 'LD-907', client: 'Inquiry Lead via Expo', item: 'Unspecified Solvents', code: 'N/A', qty: '25 Drums', status: 'Junk', tab: 'mobile' }
  ];

  // B2B Items Master catalog matching product code search
  const chemicalCatalog = {
    'API-1039': { name: 'Paracetamol Fine Powder / DC 90%', code: 'API-1039', stock: '8,400 KG', rate: '$4.45 / KG', supplier: 'Gujarat Synthesis Node', regularItem: true },
    'API-1568': { name: 'Ibuprofen 25 EP / USP', code: 'API-1568', stock: '4,200 KG', rate: '$13.20 / KG', supplier: 'Panoli API Cluster', regularItem: true },
    'API-1115': { name: 'Metformin Hydrochloride IP', code: 'API-1115', stock: '12,500 KG', rate: '$3.80 / KG', supplier: 'Aarti Chem Node', regularItem: true },
    'API-5078': { name: 'Acetylsalicylic Acid (Aspirin USP)', code: 'API-5078', stock: '3,200 KG', rate: '$4.85 / KG', supplier: 'Zydex Bulk Depot', regularItem: true }
  };

  const filteredLeads = sampleLeads.filter(l => {
    const matchTab = activeLeadTab === 'all' || l.tab === activeLeadTab;
    const matchStatus = selectedStatusFilter === 'all' || l.status.toLowerCase() === selectedStatusFilter.toLowerCase();
    return matchTab && matchStatus;
  });

  const getStatusBadgeStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'sent': return 'bg-sky-100 text-sky-800 border-sky-300';
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'confirm': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'won': return 'bg-green-100 text-green-900 border-green-400 font-extrabold';
      case 'reject': return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'nooffer': return 'bg-slate-200 text-slate-800 border-slate-300';
      case 'junk': return 'bg-slate-100 text-slate-500 border-slate-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const workflowSteps = [
    {
      no: '01',
      title: 'Record Inquiry',
      desc: 'Capture requirements from clients, brokers, and channel agents. Upload paper inquiry documents or scanned letters to auto-generate leads.',
      badge: 'Multi-Channel Intake'
    },
    {
      no: '02',
      title: 'Match Stock',
      desc: 'Cross-check inquiries instantly against current warehouse lots or approved regular items in the Item Master via Item Code.',
      badge: 'Item Master Match'
    },
    {
      no: '03',
      title: 'Give Quote Price',
      desc: 'Compute margin, freight, and tax. The CRM logs customer, item, rate, and delivery terms in an unalterable audit trail.',
      badge: 'Margin Engine'
    },
    {
      no: '04',
      title: 'WhatsApp / Email',
      desc: 'Send formal PDF quotes with COA specifications directly into the buyer’s WhatsApp chat or email inbox with team comment tracking.',
      badge: 'Instant Dispatch'
    },
    {
      no: '05',
      title: 'Confirm Order',
      desc: 'Finalize order with Purchase Order (PO) details, advance payments, and transition lead status directly to WON in accounts.',
      badge: 'PO Finalization'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. HERO SECTION (Preserving exact visual identity from screenshot) */}
      <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
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
            Pharma Chemi is engineered from the ground up to solve the exact operational, regulatory, and commercial complexities of chemical manufacturers, API traders, bulk drug importers, and pharma distributors. Powered by 150+ compendial APIs, item master matching, batch COA traceability, and automated quotation pipelines.
          </p>

          {/* Hero CTA Buttons */}
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
              onClick={() => {
                const el = document.getElementById('features-explorer');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 text-left">
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

      {/* 2. LIVE DASHBOARD KPI BANNER (Sample Data as requested) */}
      <section className="py-8 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Trading Desk Overview</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-400 border border-slate-700">Sample Data</span>
            </div>
            <div className="text-xs text-slate-400">
              Shift Window: <strong className="text-white">9:30 AM to 6:30 PM</strong>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-[11px] font-bold uppercase">New Leads</div>
              <div className="text-2xl font-extrabold text-white mt-1">12</div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">+4 vs yesterday</div>
            </div>

            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-[11px] font-bold uppercase">Sent Leads</div>
              <div className="text-2xl font-extrabold text-white mt-1">19</div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">+6 vs last week</div>
            </div>

            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-[11px] font-bold uppercase">Won Leads</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1">4</div>
              <div className="text-[11px] text-emerald-300 font-semibold mt-0.5">+1 vs yesterday</div>
            </div>

            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-[11px] font-bold uppercase">Pending Leads</div>
              <div className="text-2xl font-extrabold text-amber-400 mt-1">3</div>
              <div className="text-[11px] text-amber-300 font-semibold mt-0.5">Awaiting COA check</div>
            </div>

            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-[11px] font-bold uppercase">Outstanding</div>
              <div className="text-2xl font-extrabold text-sky-400 mt-1">$248k</div>
              <div className="text-[11px] text-sky-300 font-semibold mt-0.5">-$12k collected</div>
            </div>

            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-[11px] font-bold uppercase">Tasks Due</div>
              <div className="text-2xl font-extrabold text-rose-400 mt-1">9</div>
              <div className="text-[11px] text-rose-300 font-semibold mt-0.5">Due before 6:30 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS: 5-STEP STREAMLINED FLOW */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-[#004B9B] text-xs font-bold border border-blue-200">
              STREAMLINED OPERATING FLOW
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 Steps from Raw Inquiry to Confirmed PO
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any stage to view how Pharma Chemi powers chemical inquiries end-to-end.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {workflowSteps.map((s, idx) => (
              <button
                key={s.no}
                onClick={() => setActiveWorkflowStep(idx)}
                className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                  activeWorkflowStep === idx
                    ? 'bg-blue-50 border-[#004B9B] shadow-md ring-2 ring-[#004B9B]/20'
                    : 'bg-slate-50 border-slate-200 hover:bg-white'
                }`}
              >
                <span className="text-[11px] font-mono font-bold text-[#004B9B] block">STEP {s.no}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Showcase */}
          <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#004B9B] text-xs font-bold">
                {workflowSteps[activeWorkflowStep].badge}
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Step {workflowSteps[activeWorkflowStep].no}: {workflowSteps[activeWorkflowStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {workflowSteps[activeWorkflowStep].desc}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={launchCrmDemo}
                className="px-5 py-2.5 bg-[#004B9B] hover:bg-[#003875] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Try this in Live Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 6 FEATURE GROUPS (ALL REQUESTED FEATURES SHOWN ON LANDING PAGE) */}
      <section className="py-20 bg-slate-50" id="features-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#004B9B] text-xs font-bold border border-blue-200">
              <Boxes className="w-3.5 h-3.5" />
              <span>THE 6 COMPLETE FEATURE MODULES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything Your Sales & Sourcing Desk Needs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore the exact capabilities of Pharma Chemi CRM engineered specifically for pharmaceutical chemicals and API brokerage.
            </p>
          </div>

          {/* =================================================================
              FEATURE 1: LEAD AND INQUIRY MANAGEMENT
             ================================================================= */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004B9B] text-xs font-bold border border-blue-200">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>FEATURE GROUP 01</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Lead and Inquiry Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Record lead inquiries from multiple clients, brokers, and trade agents seamlessly. Support upload of inquiry paper/documents to automatically create structured leads.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#004B9B] shrink-0 mt-0.5" />
                  <span><strong>Multi-source ingestion:</strong> Direct clients, brokers, and trading agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#004B9B] shrink-0 mt-0.5" />
                  <span><strong>Paper & Document Upload:</strong> OCR extraction converts scanned letters into leads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#004B9B] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Tabs:</strong> Leads, My Leads, Purchase Leads, and Mobile Leads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#004B9B] shrink-0 mt-0.5" />
                  <span><strong>7 Lifecycle Statuses:</strong> Sent, Pending, Confirm, WON, Reject, NoOffer, Junk.</span>
                </li>
              </ul>
            </div>

            {/* Interactive Lead Simulator Mock */}
            <div className="lg:col-span-7 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex gap-1.5 overflow-x-auto">
                  <button
                    onClick={() => setActiveLeadTab('all')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeLeadTab === 'all' ? 'bg-[#004B9B] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    All Leads (7)
                  </button>
                  <button
                    onClick={() => setActiveLeadTab('myLeads')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeLeadTab === 'myLeads' ? 'bg-[#004B9B] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    My Leads (2)
                  </button>
                  <button
                    onClick={() => setActiveLeadTab('purchase')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeLeadTab === 'purchase' ? 'bg-[#004B9B] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    Purchase Leads (1)
                  </button>
                  <button
                    onClick={() => setActiveLeadTab('mobile')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeLeadTab === 'mobile' ? 'bg-[#004B9B] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    Mobile Leads (2)
                  </button>
                </div>

                <button
                  onClick={() => {
                    setPaperUploadNotice(true);
                    setTimeout(() => setPaperUploadNotice(false), 3000);
                  }}
                  className="px-2.5 py-1 text-xs bg-red-50 text-[#EE1C25] font-bold rounded-lg border border-red-200 hover:bg-red-100 flex items-center gap-1 cursor-pointer"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Upload Paper</span>
                </button>
              </div>

              {paperUploadNotice && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-lg flex items-center gap-2 animate-bounce">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Scanned inquiry paper converted! New lead created in My Leads.</span>
                </div>
              )}

              {/* Status Chips Filter */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-slate-400 font-bold mr-1">Status:</span>
                {['all', 'Sent', 'Pending', 'Confirm', 'WON', 'Reject', 'NoOffer', 'Junk'].map(st => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatusFilter(st)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold cursor-pointer transition-all ${
                      selectedStatusFilter === st
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Mini Table */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">ID</th>
                      <th className="p-2.5">Customer / Broker</th>
                      <th className="p-2.5">Product / Item Code</th>
                      <th className="p-2.5">Qty</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredLeads.map(lead => (
                      <tr key={lead.id} className="hover:bg-slate-50/80">
                        <td className="p-2.5 font-mono font-bold text-slate-900">{lead.id}</td>
                        <td className="p-2.5 font-medium">{lead.client}</td>
                        <td className="p-2.5">
                          <div className="font-bold text-slate-800">{lead.item}</div>
                          <div className="text-[10px] text-slate-400 font-mono">Code: {lead.code}</div>
                        </td>
                        <td className="p-2.5">{lead.qty}</td>
                        <td className="p-2.5">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadgeStyle(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          {/* =================================================================
              FEATURE 2: STOCK MATCHING AND QUOTING
             ================================================================= */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Item Stock Search */}
            <div className="lg:col-span-7 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 order-2 lg:order-1">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-300 shadow-xs">
                <Search className="w-4 h-4 text-[#004B9B]" />
                <input
                  type="text"
                  value={itemSearchQuery}
                  onChange={(e) => setItemSearchQuery(e.target.value)}
                  placeholder="Global search by item code, product, customer, or supplier..."
                  className="w-full text-xs outline-none bg-transparent text-slate-800 font-medium"
                />
                <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-50 text-[#004B9B] rounded font-bold border border-blue-200">
                  Item Matcher
                </span>
              </div>

              {/* Sample item code tags to click */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-slate-400 font-bold mr-1">Quick Code:</span>
                {['API-1039', 'API-1568', 'API-1115', 'API-5078'].map(code => (
                  <button
                    key={code}
                    onClick={() => setItemSearchQuery(code)}
                    className="px-2 py-0.5 bg-white hover:bg-blue-50 text-slate-700 text-[11px] font-mono rounded border border-slate-200 cursor-pointer"
                  >
                    Code {code}
                  </button>
                ))}
              </div>

              {/* Matched Product Result */}
              {chemicalCatalog[itemSearchQuery] ? (
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#004B9B]">Code: {chemicalCatalog[itemSearchQuery].code}</span>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5">{chemicalCatalog[itemSearchQuery].name}</h4>
                      <p className="text-xs text-slate-500">Regular Supplier: {chemicalCatalog[itemSearchQuery].supplier}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      ✓ In Current Stock
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 p-2.5 bg-slate-50 rounded-lg text-xs">
                    <div>
                      <span className="text-slate-500 text-[11px] block">Stock Lot:</span>
                      <strong className="text-slate-900">{chemicalCatalog[itemSearchQuery].stock}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[11px] block">Quote Price:</span>
                      <strong className="text-[#004B9B] font-bold">{chemicalCatalog[itemSearchQuery].rate}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[11px] block">Delivery Time:</span>
                      <strong className="text-slate-900">Immediate Ready Lot</strong>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-xs text-slate-500">PO Details: Logged with customer & rate</span>
                    <button
                      onClick={() => {
                        setQuoteLoggedNotice(true);
                        setTimeout(() => setQuoteLoggedNotice(false), 3000);
                      }}
                      className="px-4 py-2 bg-[#004B9B] hover:bg-[#003875] text-white text-xs font-bold rounded-lg shadow-xs transition-all cursor-pointer"
                    >
                      Give Quote Price
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center text-xs text-slate-500">
                  No direct product match found for query. Try clicking one of the sample item code tags above!
                </div>
              )}

              {quoteLoggedNotice && (
                <div className="p-2.5 bg-green-50 border border-green-300 text-green-900 text-xs rounded-lg flex items-center gap-2 animate-pulse font-bold">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Quotation logged: Customer, Item, Rate, and Delivery Time recorded! PO confirmation pending.</span>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#EE1C25] text-xs font-bold border border-red-200">
                <Boxes className="w-3.5 h-3.5" />
                <span>FEATURE GROUP 02</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Stock Matching and Quoting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect incoming buyer demand with active inventory and regular supplier items in seconds. Eliminate stock check delays with global search.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EE1C25] shrink-0 mt-0.5" />
                  <span><strong>Match Inquiries:</strong> Current warehouse stock and regular items catalog.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EE1C25] shrink-0 mt-0.5" />
                  <span><strong>Item Master:</strong> Unified management of Standard Items and Company Items.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EE1C25] shrink-0 mt-0.5" />
                  <span><strong>Global Search:</strong> Find by customer, item, supplier, or product code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EE1C25] shrink-0 mt-0.5" />
                  <span><strong>Quote Price Logging:</strong> Record customer, item, rate, and delivery time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EE1C25] shrink-0 mt-0.5" />
                  <span><strong>Order Confirmation:</strong> Capture buyer PO details and advance payments.</span>
                </li>
              </ul>
            </div>
          </div>


          {/* =================================================================
              FEATURE 3: COMMUNICATION
             ================================================================= */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>FEATURE GROUP 03</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Integrated Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect quotes, specs, and discussions across WhatsApp and formal email channels so negotiations are never lost in personal message threads.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>WhatsApp Integration:</strong> Send quotes and COAs directly to procurement managers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Email Integration:</strong> Automated logging of client responses and formal tenders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Recent Updates Feed:</strong> Desk activity timeline visible across sales & sourcing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comments Stream:</strong> Internal team discussion on pricing, freight, and terms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Notifications:</strong> Instant alerts on quote approvals and client responses.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-5 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* WhatsApp Thread Card */}
              <div className="p-3.5 bg-[#EFEAE2] rounded-xl border border-slate-300/70 space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-300/60">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-[10px]">
                      WA
                    </div>
                    <span className="text-xs font-bold text-slate-900">WhatsApp Desk</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Live Client Link</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-white rounded-lg rounded-tl-none shadow-xs text-slate-800">
                    <p className="leading-snug">"Please quote best price for 5 MT Paracetamol DC 90% CIF Nhava Sheva."</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-1">11:42 AM</span>
                  </div>
                  <div className="p-2.5 bg-[#D9FDD3] rounded-lg rounded-tr-none shadow-xs text-slate-900 ml-4">
                    <p className="leading-snug">"Quoted $4.45/KG Net CIF. Batch COA attached from Gujarat node."</p>
                    <span className="text-[9px] text-slate-500 block text-right mt-1">11:45 AM</span>
                  </div>
                </div>
              </div>

              {/* Internal Comments & Email Stream */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-[#004B9B]" />
                    <span>Recent Updates & Comments</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="text-[#004B9B] block text-[11px]">Procurement Desk:</strong>
                    <p className="text-slate-600 text-[11px]">"Gujarat supplier locked 5MT lot. Margin approved at 6%."</p>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="text-emerald-700 block text-[11px]">Email Integration:</strong>
                    <p className="text-slate-600 text-[11px]">"Formal quote PDF dispatched to procurement@globalpharma.com."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* =================================================================
              FEATURE 4: DASHBOARD AND REPORTING
             ================================================================= */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Dashboard and Matrix */}
            <div className="lg:col-span-7 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 order-2 lg:order-1">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-800">Executive Daily Matrix & Performance</span>
                <span className="text-[11px] font-mono bg-blue-100 text-[#004B9B] px-2 py-0.5 rounded font-bold">
                  Reports Module
                </span>
              </div>

              {/* Staff Leaderboard */}
              <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-900 mb-2">Leads per Staff Member (Active Shift)</div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span>Rajesh Kumar <strong className="text-amber-600 font-bold ml-1">🏆 Top Performer</strong></span>
                      <span className="font-mono">17 leads (9 Won)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#004B9B] h-full rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span>Priya Sharma</span>
                      <span className="font-mono">13 leads (6 Won)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-600 h-full rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span>Amit Verma</span>
                      <span className="font-mono">10 leads (4 Won)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-500 h-full rounded-full" style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Shift Matrix Table */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-600 border-b border-slate-200 text-[11px]">
                    <tr>
                      <th className="p-2">Staff</th>
                      <th className="p-2">New Leads</th>
                      <th className="p-2">Sent Quotes</th>
                      <th className="p-2">Won Orders</th>
                      <th className="p-2">Tasks Done</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px]">
                    <tr>
                      <td className="p-2 font-bold">Rajesh K.</td>
                      <td className="p-2">6</td>
                      <td className="p-2">8</td>
                      <td className="p-2 text-emerald-700 font-bold">3 Won</td>
                      <td className="p-2 font-mono">100%</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Priya S.</td>
                      <td className="p-2">4</td>
                      <td className="p-2">5</td>
                      <td className="p-2 text-emerald-700 font-bold">1 Won</td>
                      <td className="p-2 font-mono">80%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold border border-purple-200">
                <BarChart3 className="w-3.5 h-3.5 text-purple-600" />
                <span>FEATURE GROUP 04</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Dashboard and Reporting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Stay in full control of desk volume and financial exposure. Compare KPI cards against yesterday or last week, monitor staff output, and audit trade conversions.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Daily KPI Cards:</strong> New leads, sent leads, won leads, pending leads, total outstanding, tasks due.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Period Comparisons:</strong> Delta against yesterday or last week on each card.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Leads by Status Chart:</strong> Real-time visualization of your trade pipeline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Staff Output Chart:</strong> Top performer identification and daily matrix.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Audited Reports:</strong> Exportable trade sheets and conversion ratios.</span>
                </li>
              </ul>
            </div>
          </div>


          {/* =================================================================
              FEATURE 5: TEAM AND PRODUCTIVITY
             ================================================================= */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>FEATURE GROUP 05</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Team and Productivity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ensure complete follow-up discipline. Structure work around working shifts, schedule customer meetings in the Planner, and record daily work logs.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Tasks and Task-Due Tracking:</strong> Automatic urgency color-coding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Planner:</strong> Schedule customer calls and supplier plant visits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Daily Work Log:</strong> Transparent end-of-shift progress summaries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Staff Activity Tracking:</strong> 9:30 AM to 6:30 PM working shift hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Mobile Leads Entry:</strong> Fast lead capture for field visits and trade expos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>User Login & Roles:</strong> Secure credentials with session logout and settings.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Planner & Shift Tasks (9:30 AM – 6:30 PM)</span>
                </span>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  Active Shift
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border-l-4 border-l-rose-500 border border-slate-200 flex justify-between items-center">
                  <div>
                    <strong className="text-slate-900 block">Follow up PO confirmation</strong>
                    <span className="text-slate-500 text-[11px]">Client: Torrent Bio | Due: 2:00 PM</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
                    Urgent
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border-l-4 border-l-blue-500 border border-slate-200 flex justify-between items-center">
                  <div>
                    <strong className="text-slate-900 block">Verify Manufacturer COA Batch #B-902</strong>
                    <span className="text-slate-500 text-[11px]">Supplier: Aarti Chem | Due: 4:30 PM</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    Pending
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border-l-4 border-l-emerald-500 border border-slate-200 flex justify-between items-center">
                  <div>
                    <strong className="text-slate-900 block">Mobile Lead Ingestion: ChemTech Expo</strong>
                    <span className="text-slate-500 text-[11px]">Agent: Vikram | Logged from Mobile Phone</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Logged
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* =================================================================
              FEATURE 6: BUSINESS MODULES (ALL 8 SUB-MODULES)
             ================================================================= */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004B9B] text-xs font-bold border border-blue-200">
                <Building2 className="w-3.5 h-3.5" />
                <span>FEATURE GROUP 06</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Complete Business Modules
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Beyond CRM: Run your entire chemical trading business across customers, accounts, sales, expenses, and system setup.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#004B9B] flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Customers</h4>
                <p className="text-[11px] text-slate-600">Verified buyer profiles, GST/IEC details, drug licenses, and credit histories.</p>
              </div>

              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#004B9B] flex items-center justify-center font-bold">
                  <Receipt className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Accounts</h4>
                <p className="text-[11px] text-slate-600">Customer trade ledgers, invoice settlements, and credit limit tracking.</p>
              </div>

              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#004B9B] flex items-center justify-center font-bold">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Sales</h4>
                <p className="text-[11px] text-slate-600">Confirmed orders, contract execution records, and delivery schedules.</p>
              </div>

              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#004B9B] flex items-center justify-center font-bold">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Expenses</h4>
                <p className="text-[11px] text-slate-600">Track sample laboratory tests, ocean freight, warehousing, and broker fees.</p>
              </div>

              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-[#EE1C25] flex items-center justify-center font-bold">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Outstanding Tracking</h4>
                <p className="text-[11px] text-slate-600">Aging buckets (0-30, 31-60, 61-90+ days) to safeguard trading cash flow.</p>
              </div>

              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#004B9B] flex items-center justify-center font-bold">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Support</h4>
                <p className="text-[11px] text-slate-600">Client ticket handling for batch COA queries, delay notices, and claims.</p>
              </div>

              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#004B9B] flex items-center justify-center font-bold">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Utilities</h4>
                <p className="text-[11px] text-slate-600">Unit conversion tools, bulk item import/export, and system health tools.</p>
              </div>

              <div className="p-4 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200 transition-all space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#004B9B] flex items-center justify-center font-bold">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Setup</h4>
                <p className="text-[11px] text-slate-600">Configure company item masters, tax rules, user roles, and office shifts.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 5. COMPARISON SECTION: WHY PHARMA CHEMI VS SPREADSHEETS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-[#004B9B] text-xs font-bold border border-blue-200">
              HONEST COMPARISON
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Generic Spreadsheets & Chat Apps Fail
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare purpose-built chemical trading features against generic spreadsheets and WhatsApp chats.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4 w-1/3">Feature Capability</th>
                  <th className="p-4 w-1/5 text-slate-500">Spreadsheets</th>
                  <th className="p-4 w-1/5 text-slate-500">Chat Apps (WhatsApp)</th>
                  <th className="p-4 w-1/4 bg-blue-50/80 text-[#004B9B] border-l border-blue-200">Pharma Chemi CRM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Inquiry Intake by Document / Paper</td>
                  <td className="p-4 text-slate-500">Manual re-typing</td>
                  <td className="p-4 text-slate-500">Scattered photo files</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Document upload to lead</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Item Master & Product Code Search</td>
                  <td className="p-4 text-slate-500">Slow text filter</td>
                  <td className="p-4 text-slate-500">No item code search</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Global item master search</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Stock & Regular Item Matching</td>
                  <td className="p-4 text-slate-500">Outdated static sheet</td>
                  <td className="p-4 text-slate-500">Call warehouse staff</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Direct real-time match</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Quote Logging with Rate & Delivery</td>
                  <td className="p-4 text-slate-500">Easily overwritten</td>
                  <td className="p-4 text-slate-500">Buried in chat history</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Structured logged quotes</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">7 Lifecycle Lead Statuses</td>
                  <td className="p-4 text-slate-500">Color cells manually</td>
                  <td className="p-4 text-slate-500">None</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Dedicated workflow engine</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Staff Shift Tracking (9:30 AM – 6:30 PM)</td>
                  <td className="p-4 text-slate-500">Not possible</td>
                  <td className="p-4 text-slate-500">Online/offline only</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Activity matrix & daily work</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Customer Ledger & Outstanding Balance</td>
                  <td className="p-4 text-slate-500">Complex formula breakdown</td>
                  <td className="p-4 text-slate-500">None</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Integrated balance tracking</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Multi-User Roles & Permissions</td>
                  <td className="p-4 text-slate-500">Risky file access [verify]</td>
                  <td className="p-4 text-slate-500">No role restrictions</td>
                  <td className="p-4 bg-blue-50/30 text-[#004B9B] font-bold border-l border-blue-200">Secure role logins</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION BANNER */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-14 bg-gradient-to-br from-slate-900 via-[#003875] to-slate-900 rounded-3xl border border-blue-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                INSTANT TEST-DRIVE READY
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Run an Organized Pharma Sales Desk?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Experience all 6 feature groups in action: record leads, match stock by item code, quote via WhatsApp, and track customer balances in Pharma Chemi CRM.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={launchCrmDemo}
                className="px-7 py-4 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Live Demo Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all cursor-pointer"
              >
                <span>Book 20-Min Walkthrough</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
