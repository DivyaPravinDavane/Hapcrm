'use client';

import React, { useState } from 'react';
import {
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

export default function PharmaChemiLandingNext({
  onLaunchDemo = () => alert("Launching Pharma Chemi CRM Demo Workspace..."),
  onBookDemo = () => alert("Opening Book a Demo Form...")
}) {
  // Interactive Simulator State
  const [activeLeadTab, setActiveLeadTab] = useState('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('all');
  const [itemSearchQuery, setItemSearchQuery] = useState('API-1039');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [quoteLoggedNotice, setQuoteLoggedNotice] = useState(false);
  const [paperUploadNotice, setPaperUploadNotice] = useState(false);

  // Sample Leads Dataset matching specification
  const sampleLeads = [
    { id: 'LD-901', client: 'Sun Healthcare (Broker)', item: 'Metformin HCl IP', code: 'API-1115', qty: '2,000 KG', status: 'Sent', tab: 'leads' },
    { id: 'LD-902', client: 'Zydex Chemical Labs', item: 'Ibuprofen 25 EP', code: 'API-1568', qty: '1,500 KG', status: 'Pending', tab: 'myLeads' },
    { id: 'LD-903', client: 'BioCore Trade Corp', item: 'Ciprofloxacin HCl', code: 'API-8639', qty: '500 KG', status: 'Confirm', tab: 'purchase' },
    { id: 'LD-904', client: 'Apex Pharma Global', item: 'Amoxicillin Trihydrate', code: 'API-6133', qty: '4,000 KG', status: 'WON', tab: 'myLeads' },
    { id: 'LD-905', client: 'Raman Chemical Traders', item: 'Paracetamol DC 90%', code: 'API-1039', qty: '10,000 KG', status: 'Reject', tab: 'mobile' },
    { id: 'LD-906', client: 'Krupa Intermediates', item: 'Dextromethorphan HBr', code: 'API-6700', qty: '300 KG', status: 'NoOffer', tab: 'leads' },
    { id: 'LD-907', client: 'Inquiry Lead via Expo', item: 'Unspecified Solvents', code: 'N/A', qty: '25 Drums', status: 'Junk', tab: 'mobile' }
  ];

  // Chemical Items Master catalog matching item code search
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
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
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

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onLaunchDemo}
              className="px-6 py-3.5 bg-gradient-to-r from-blue-700 via-[#004B9B] to-slate-900 hover:from-blue-800 hover:to-black text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-900/25 flex items-center gap-2 transition-all active:scale-95 border border-blue-400/30 cursor-pointer"
            >
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
              onClick={onBookDemo}
              className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-500/20 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Browse 150+ APIs</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. LIVE DASHBOARD KPI BANNER */}
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

      {/* 3. THE 6 DETAILED FEATURE GROUPS */}
      <section className="py-16 bg-slate-50" id="features-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-[#004B9B] text-xs font-bold border border-blue-200">
              ALL 6 SPECIFIED FEATURE SUITES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pharma Chemi CRM Features
            </h2>
          </div>

          {/* Group 1: Lead & Inquiry Management */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#004B9B] uppercase">
              <TrendingUp className="w-4 h-4" />
              <span>1. Lead and Inquiry Management</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Multi-Channel Ingestion & 7 Lifecycle Statuses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="space-y-2">
                <p>• Record lead inquiries from multiple clients, brokers and agents</p>
                <p>• Upload enquiry or paper (document) to create leads instantly</p>
              </div>
              <div className="space-y-2">
                <p>• Separate tabs for Leads, My Leads, Purchase Leads and Mobile Leads</p>
                <p>• Lead statuses: Sent, Pending, Confirm, WON, Reject, NoOffer, Junk</p>
              </div>
            </div>
          </div>

          {/* Group 2: Stock Matching & Quoting */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EE1C25] uppercase">
              <Boxes className="w-4 h-4" />
              <span>2. Stock Matching and Quoting</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Item Master Search & Quote Price Logging</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="space-y-2">
                <p>• Match inquiries with current stock and regular items</p>
                <p>• Item master (Items and Company Items)</p>
                <p>• Global search by customer, item, supplier or product code</p>
              </div>
              <div className="space-y-2">
                <p>• Give the quote price, logged with customer, item, rate and delivery time</p>
                <p>• Order confirmation with PO details</p>
              </div>
            </div>
          </div>

          {/* Group 3: Communication */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase">
              <MessageSquare className="w-4 h-4" />
              <span>3. Communication</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">WhatsApp, Email & Team Comments Stream</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="space-y-2">
                <p>• WhatsApp integration for direct rate and specification sharing</p>
                <p>• Email integration for formal purchase orders</p>
                <p>• Recent updates feed tracking desk activities</p>
              </div>
              <div className="space-y-2">
                <p>• Comments stream for team discussion on margins and delivery</p>
                <p>• Desktop and mobile notifications</p>
              </div>
            </div>
          </div>

          {/* Group 4: Dashboard and Reporting */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase">
              <BarChart3 className="w-4 h-4" />
              <span>4. Dashboard and Reporting</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Daily KPI Cards, Status Charts & Shift Matrix</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="space-y-2">
                <p>• Daily KPI cards: new leads, sent leads, won leads, pending leads, total outstanding, tasks due</p>
                <p>• Comparison with yesterday or last week on each card</p>
              </div>
              <div className="space-y-2">
                <p>• Leads by status chart</p>
                <p>• Leads per staff member chart, with top performer and daily matrix</p>
                <p>• Reports</p>
              </div>
            </div>
          </div>

          {/* Group 5: Team and Productivity */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase">
              <Clock className="w-4 h-4" />
              <span>5. Team and Productivity</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Tasks Due, Planner & 9:30 AM to 6:30 PM Shift Tracking</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="space-y-2">
                <p>• Tasks and task due tracking</p>
                <p>• Planner</p>
                <p>• Daily Work</p>
              </div>
              <div className="space-y-2">
                <p>• Staff activity tracking (9:30 AM to 6:30 PM)</p>
                <p>• Mobile leads entry</p>
                <p>• User login with logout and settings</p>
              </div>
            </div>
          </div>

          {/* Group 6: Business Modules */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase">
              <Building2 className="w-4 h-4" />
              <span>6. Business Modules</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">8 Core Enterprise Desks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-800">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">1. Customers</div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">2. Accounts</div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">3. Sales</div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">4. Expenses</div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">5. Outstanding Balance Tracking</div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">6. Support</div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">7. Utilities</div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">8. Setup</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
