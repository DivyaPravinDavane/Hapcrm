import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Bot,
  Zap,
  BarChart3,
  Users,
  ShieldCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Building2,
  Calendar,
  Layers,
  FileText,
  Clock,
  Compass,
  TrendingUp,
  MapPin,
  Lock,
  Globe,
  Star,
  Activity,
  Flame,
  Award,
  Database,
  ArrowUpRight,
  Play,
  HelpCircle
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function LandingPage() {
  const {
    setIsDemoModalOpen,
    setIsTrialModalOpen,
    launchCrmDemo,
    launchAuth
  } = useCrm();

  // Active state for AION Autopilot tabs: 'auto' | 'ai'
  const [activeAionTab, setActiveAionTab] = useState('auto');

  // Active state for Everyday Toolkit capabilities: 0 to 5
  const [activeToolkitIndex, setActiveToolkitIndex] = useState(0);

  // Active state for 7-Stage Workflow Step: 0 to 6
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // FAQ open item
  const [openFaq, setOpenFaq] = useState(0);

  // Capabilities Data
  const capabilities = [
    {
      id: '01',
      title: 'Lead Management & RFQs',
      tagline: 'Never lose a chemical enquiry or formulation lead again.',
      description: 'Capture chemical and API enquiries automatically from WhatsApp, IndiaMART, web forms, and direct email. Keep formulation details, purity grades, mesh sizes, and batch requirements connected from first touch to delivery.',
      features: [
        'Automated omni-channel enquiry capture (WhatsApp, Web, ChemAnalyst)',
        'Chemical purity, CAS number, and batch size tracking',
        'Complete interaction history and document audit trail',
        'Auto-detection of repeat buyers and priority accounts'
      ],
      sampleData: {
        buyer: 'Cipla Formulation Plant - Unit IV',
        product: 'Paracetamol IP / BP Grade (Micronized)',
        qty: '12,000 KG',
        status: 'Active Negotiation',
        badgeColor: 'bg-emerald-100 text-emerald-800'
      }
    },
    {
      id: '02',
      title: 'Smart Lead Assignment',
      tagline: 'Zero delay. Leads routed to the exact right territory specialist.',
      description: 'Automatically route inquiries based on territory zones, product categories (Bulk APIs vs. Fine Chemicals), or representative availability. Eliminate manual re-dispatch and ensure your fastest reps contact hot leads first.',
      features: [
        'Rule-based routing by state, territory, and PIN codes',
        'Specialization routing: APIs, Intermediates, or Excipients',
        'Round-robin and workload-balanced distribution',
        'Instant WhatsApp notifications to assigned medical reps'
      ],
      sampleData: {
        buyer: 'Sun Pharma Baroda Manufacturing',
        product: 'Metformin Hydrochloride Pure API',
        qty: '25 MT (Export Container)',
        status: 'Assigned to West Zone Lead (Eshwari)',
        badgeColor: 'bg-blue-100 text-blue-800'
      }
    },
    {
      id: '03',
      title: 'Automated Follow-Up & Samples',
      tagline: 'Keep opportunities moving without relying on sticky notes.',
      description: 'Create multi-touch automated follow-up cadences. Automatically notify buyers when Certificate of Analysis (COA) documents are uploaded, when sample batches are dispatched via courier, or when quotes require renewal.',
      features: [
        'Sample dispatch tracking with courier AWB tracking integration',
        'Automated quotation follow-up cadences via WhatsApp and Email',
        'COA (Certificate of Analysis) auto-delivery to QA managers',
        'Escalation alerts when high-value deals stall for 48 hours'
      ],
      sampleData: {
        buyer: 'Zydus Lifesciences Ahmedabad',
        product: 'Amoxicillin Trihydrate Compacted',
        qty: '5,000 KG',
        status: 'Follow-Up Due: Sample Test Results Review',
        badgeColor: 'bg-amber-100 text-amber-800'
      }
    },
    {
      id: '04',
      title: 'Distributor & Stockist Network',
      tagline: 'Centralize primary and secondary pharmaceutical distribution.',
      description: 'Manage regional distributors, stockists, and institutional supply chains. Track distributor credit limits, Drug License (Form 20B/21B) expiry dates, territory exclusivity, and secondary replenishment orders in one place.',
      features: [
        'Distributor tier pricing and volume discounts',
        'Drug License (DL) & GST compliance verification repository',
        'Primary vs. Secondary sales order tracking',
        'Real-time stockist outstanding ledger and payment terms'
      ],
      sampleData: {
        buyer: 'Mahavir Chem-Pharma Distributors (Gujarat)',
        product: 'Contract Supply Agreement (Quarterly)',
        qty: 'Multi-Item Order (₹ 84.5 Lakhs)',
        status: 'Active Stockist • Credit Approved',
        badgeColor: 'bg-purple-100 text-purple-800'
      }
    },
    {
      id: '05',
      title: 'Customer & Doctor Relationships',
      tagline: 'Complete 360° visibility before every client meeting.',
      description: 'Maintain deep customer profiles for pharmaceutical companies, compounding labs, and hospital procurement teams. Access past orders, approved chemical grades, key contacts, and compliance certificates in seconds.',
      features: [
        'Unified client directory with multi-contact organization charts',
        'Historical order books and repeat purchase frequency',
        'Direct 1-tap call, email, and WhatsApp logs',
        'Contract documents, NDA, and quality audit storage'
      ],
      sampleData: {
        buyer: 'Torrent Pharmaceuticals R&D Center',
        product: 'Custom Synthesis Intermediates',
        qty: '200 KG Pilot Batch',
        status: 'Approved Vendor Status (A+)',
        badgeColor: 'bg-teal-100 text-teal-800'
      }
    },
    {
      id: '06',
      title: 'Sales Analytics & Forecasting',
      tagline: 'Actionable executive visibility into revenue velocity and MR performance.',
      description: 'Give leadership a crystal-clear cockpit into sales numbers, field activity logs, territory quota attainment, and future chemical demand. Spot bottlenecks before they impact your quarterly revenue.',
      features: [
        'Live pipeline revenue forecasting with probability weighting',
        'Field force call rate and meeting conversion analytics',
        'Product category sales breakdown (APIs, Excipients, Solvents)',
        'One-click exportable management reports (CSV / Excel / PDF)'
      ],
      sampleData: {
        buyer: 'West Zone Territory Consolidated',
        product: 'Q3 Forecast Attainment',
        qty: '₹ 14.8 Cr (114% of Target)',
        status: 'On Track for Record Quarter',
        badgeColor: 'bg-emerald-100 text-emerald-800'
      }
    }
  ];

  // 7-Stage Workflow Steps
  const workflowSteps = [
    {
      step: '01',
      title: 'New Enquiry',
      desc: 'Inbound RFQ captured from WhatsApp, IndiaMART, Website, or ChemAnalyst with instant chemical spec extraction.',
      highlight: 'Instant ingestion & chemical parsing'
    },
    {
      step: '02',
      title: 'Lead Assigned',
      desc: 'Smart rule engine evaluates territory, product category, and rep capacity to route lead in under 10 seconds.',
      highlight: 'Sub-minute territory dispatch'
    },
    {
      step: '03',
      title: 'Sales Connect',
      desc: 'Rep connects via WhatsApp/call with pre-filled formulation specs, CAS number, and instant Certificate of Analysis (COA).',
      highlight: 'Context-rich first touch'
    },
    {
      step: '04',
      title: 'Follow Up',
      desc: 'Automated cadence triggers sample dispatch reminders, quotation delivery, and commercial price negotiation.',
      highlight: 'Zero dropped follow-ups'
    },
    {
      step: '05',
      title: 'Customer Engage',
      desc: 'Technical review with QA/R&D teams, sample approval validation, and commercial payment terms agreement.',
      highlight: 'Technical & sample validation'
    },
    {
      step: '06',
      title: 'Opportunity',
      desc: 'Formal purchase order (PO) issued, manufacturing batch reserved, and credit limits verified with finance.',
      highlight: 'PO receipt & batch allocation'
    },
    {
      step: '07',
      title: 'Sales Conversion',
      desc: 'Dispatched with e-way bill & COA; converted to customer account for automated repeat reordering cycles.',
      highlight: 'Won & automated repeat cycle'
    }
  ];

  const currentCap = capabilities[activeToolkitIndex];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-emerald-200">
      
      {/* 1. TOP NOTICE / ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-500/30">
              <Zap className="w-3 h-3" />
              NEW
            </span>
            <span className="font-medium">
              Autonomous Sales for Chemical & Pharma Manufacturers: Meet PharmaChemi AION Autopilot
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-[11px]">
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              21 CFR Part 11 & GMP Compliant
            </span>
            <span className="hidden sm:inline">|</span>
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 hover:underline"
            >
              <span>Schedule Live Walkthrough</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. STICKY GLASSMORPHIC NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-100 stroke-current fill-none stroke-2">
                <path d="M10 2v7.31L4.2 18.2a2 2 0 0 0 1.66 2.8h12.28a2 2 0 0 0 1.66-2.8L14 9.31V2" />
                <path d="M8.5 2h7" />
                <path d="M14 9.3h-4" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
                  Pharma<span className="text-emerald-600">Chemi</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  CRM
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">
                Pharma & Chemical Sales Suite
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#pharma-core" className="hover:text-emerald-600 transition-colors">The Pharma Core</a>
            <a href="#capabilities" className="hover:text-emerald-600 transition-colors">Everyday Toolkit</a>
            <a href="#aion-ai" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
              <span>AION Autopilot</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </a>
            <a href="#workflow" className="hover:text-emerald-600 transition-colors">Workflow</a>
            <a href="#field-sales" className="hover:text-emerald-600 transition-colors">Field Sales</a>
            <a href="#why-us" className="hover:text-emerald-600 transition-colors">Why PharmaChemi</a>
            <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
          </nav>

          {/* CTA Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={launchAuth}
              className="text-xs font-bold text-slate-700 hover:text-emerald-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all"
            >
              Login to CRM
            </button>

            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md shadow-emerald-600/20 transition-all active:scale-95"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={launchCrmDemo}
              title="Test drive the full CRM app directly"
              className="inline-flex items-center gap-1 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-bold rounded-xl shadow-sm border border-slate-700 transition-all active:scale-95"
            >
              <Play className="w-3 h-3 fill-emerald-400 text-emerald-400" />
              <span>Live App</span>
            </button>
          </div>

        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        {/* Subtle decorative glow elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI-POWERED PHARMA CRM & DISTRIBUTOR SUITE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Pharma CRM for <br />
                Smarter{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">
                  Sales Management
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Manage leads, chemical & API distributors, field sales representatives, batch specifications, customer relationships, and automated follow-ups with CRM software purpose-built for modern pharmaceutical teams.
              </p>

              {/* Punchline */}
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Work smarter. Follow up faster. Convert better.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all active:scale-95"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#workflow"
                  className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 shadow-xs flex items-center gap-2 transition-all"
                >
                  <span>Explore the Workflow</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>

                <button
                  onClick={launchCrmDemo}
                  className="px-4 py-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs sm:text-sm rounded-xl border border-indigo-200 flex items-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Test Drive CRM App</span>
                </button>
              </div>

              {/* Trust checklist */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-2xs sm:text-xs font-semibold text-slate-600 border-t border-slate-200/80">
                <span className="flex items-center gap-1 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Lead to conversion
                </span>
                <span className="flex items-center gap-1 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Field-ready MR tracking
                </span>
                <span className="flex items-center gap-1 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Built-in AI intelligence
                </span>
                <span className="flex items-center gap-1 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  21 CFR Part 11 compliant
                </span>
              </div>

            </div>

            {/* Right Hero Visual / Interactive Cockpit Mockup */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 rounded-3xl blur-lg opacity-30 animate-pulse" />

                {/* Dashboard Card Container */}
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  
                  {/* Mock Window Header */}
                  <div className="bg-[#2D3282] text-white px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[11px] font-semibold text-blue-200 ml-2">
                        PharmaChemi Cockpit • Live Operations
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-blue-600/60 px-2 py-0.5 rounded text-cyan-200">
                      LIVE SYNC
                    </span>
                  </div>

                  {/* Top Metric Strip */}
                  <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50/80 p-3 border-b border-slate-100 text-center">
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">Monthly Pipeline</div>
                      <div className="text-sm font-extrabold text-slate-900 mt-0.5">₹ 4.85 Cr</div>
                      <span className="text-[10px] text-emerald-600 font-bold">+34.2% MoM</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">Active Leads</div>
                      <div className="text-sm font-extrabold text-slate-900 mt-0.5">1,428</div>
                      <span className="text-[10px] text-blue-600 font-bold">98 Qualified</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">Conversion</div>
                      <div className="text-sm font-extrabold text-slate-900 mt-0.5">34.6%</div>
                      <span className="text-[10px] text-emerald-600 font-bold">Avg 4.2 Days</span>
                    </div>
                  </div>

                  {/* Active Live Deal Feed */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                      <span>RECENT PHARMA & CHEMICAL ENQUIRIES</span>
                      <span className="text-emerald-600 hover:underline cursor-pointer" onClick={launchCrmDemo}>
                        Open in CRM →
                      </span>
                    </div>

                    {/* Deal Item 1 */}
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-emerald-400 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-slate-900">Paracetamol IP / BP Grade (99.8%)</div>
                          <div className="text-[11px] text-slate-500">Cipla Formulation Plant • Pune Unit</div>
                        </div>
                        <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          ₹ 45.0 L
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                          <CheckCircle2 className="w-3 h-3" />
                          COA Batch Approved
                        </span>
                        <span className="text-slate-400">Follow-up: Today 4:00 PM</span>
                      </div>
                    </div>

                    {/* Deal Item 2 */}
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-400 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-slate-900">Metformin Hydrochloride Pure API</div>
                          <div className="text-[11px] text-slate-500">Sun Pharma • Baroda Bulk Plant</div>
                        </div>
                        <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                          ₹ 82.5 L
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                        <span className="inline-flex items-center gap-1 font-semibold text-blue-600">
                          <Activity className="w-3 h-3" />
                          Commercial Sourcing Stage
                        </span>
                        <span className="text-slate-400">Territory: West Zone</span>
                      </div>
                    </div>

                    {/* Deal Item 3 */}
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-purple-400 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-slate-900">Amoxicillin Trihydrate Compacted</div>
                          <div className="text-[11px] text-slate-500">Zydus Lifesciences • Moraiya Plant</div>
                        </div>
                        <span className="text-xs font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                          ₹ 64.0 L
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                        <span className="inline-flex items-center gap-1 font-semibold text-purple-600">
                          <CheckCircle2 className="w-3 h-3" />
                          Dispatch Ready
                        </span>
                        <span className="text-slate-400">Order Dispatched</span>
                      </div>
                    </div>

                    {/* AI Agent Notification banner */}
                    <div className="p-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="text-[11px] text-slate-700">
                        <span className="font-bold text-emerald-900">AION Autonomous Agent: </span>
                        Auto-assigned 4 high-value API RFQs from WhatsApp directly to Area Managers.
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Footer */}
                  <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Ready to explore?</span>
                    <button
                      onClick={launchCrmDemo}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm transition-all"
                    >
                      Click to Test Drive CRM →
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE PHARMA SALES CORE ("What is Pharma CRM?") */}
      <section id="pharma-core" className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>THE PHARMA SALES CORE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What is <span className="text-emerald-600">Pharma CRM?</span>
          </h2>

          <div className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              Pharma CRM is an intelligent operations platform designed specifically to help pharmaceutical manufacturers, bulk chemical producers, API traders, and formulation distributors manage complex sales pipelines, customer interactions, regulatory documents, and follow-ups from one centralized place.
            </p>
            <p>
              Unlike generic CRMs, <strong>PharmaChemi</strong> is engineered around the actual way pharma sales happen: tracking chemical purity grades, Certificate of Analysis (COA) dispatches, sample approvals, distributor commission ledgers, and multi-state medical representative (MR) field visits.
            </p>
          </div>

          {/* Connected Callout Card */}
          <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border border-emerald-200/80 rounded-2xl max-w-2xl mx-auto shadow-xs text-xs sm:text-sm text-slate-700 font-medium">
            Keep critical customer and sales activity connected instead of scattered across spreadsheets, paper diaries, fragmented WhatsApp chats, and disconnected tools.
          </div>

          {/* 3 Metric Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg mb-3">
                3x
              </div>
              <h3 className="text-sm font-bold text-slate-900">Faster Quotation Turnaround</h3>
              <p className="text-xs text-slate-600 mt-1">
                Respond to API & chemical RFQs in minutes with pre-approved price lists and spec sheets.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-3">
                48%
              </div>
              <h3 className="text-sm font-bold text-slate-900">Higher Field Rep Productivity</h3>
              <p className="text-xs text-slate-600 mt-1">
                Automated daily call reports (DCR) and geotagged visits eliminate tedious administrative paperwork.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mb-3">
                100%
              </div>
              <h3 className="text-sm font-bold text-slate-900">Distributor Visibility</h3>
              <p className="text-xs text-slate-600 mt-1">
                Full transparency across primary and secondary distribution orders, credit limits, and renewals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. AION AUTOPILOT & AI+ (Autonomous & Generative CRM) */}
      <section id="aion-ai" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Section Head */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              <Bot className="w-3.5 h-3.5" />
              <span>AION BY PHARMACHEMI</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Meet <span className="text-emerald-400">AION Autopilot & AI+</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Put your pharma sales on autopilot while Gen AI scores, analyses, and writes everything for you, all inside one connected CRM.
            </p>
          </div>

          {/* Dual Tabs Switcher */}
          <div className="flex justify-center mt-8">
            <div className="bg-slate-800 p-1.5 rounded-2xl border border-slate-700 inline-flex shadow-inner">
              <button
                onClick={() => setActiveAionTab('auto')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                  activeAionTab === 'auto'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>AION Autopilot (Autonomous Sales)</span>
              </button>
              <button
                onClick={() => setActiveAionTab('ai')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                  activeAionTab === 'ai'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>AION AI+ (Sales Intelligence)</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Autopilot Content */}
          {activeAionTab === 'auto' && (
            <div className="mt-12 space-y-8 animate-in fade-in duration-300">
              
              {/* Hero Banner Band */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-800 to-slate-900 border border-emerald-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                    24/7 Pipeline Momentum
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Sales that runs while <br />
                    <span className="text-emerald-400">you sleep.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    AION Autopilot calls, qualifies, follows up, and routes chemical enquiries automatically. Your sales team steps in only when it is time to close high-value POs.
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  {/* Feature Row 1 */}
                  <div className="p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">AI Calling Agent</div>
                      <div className="text-2xs sm:text-xs text-slate-300">
                        Automatically places voice calls to confirm buyer chemical specs, target price, and delivery timelines.
                      </div>
                    </div>
                  </div>

                  {/* Feature Row 2 */}
                  <div className="p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">WhatsApp AI Chatbot</div>
                      <div className="text-2xs sm:text-xs text-slate-300">
                        Engages buyers 24/7, shares standard Certificate of Analysis (COA), and captures RFQs directly on WhatsApp.
                      </div>
                    </div>
                  </div>

                  {/* Feature Row 3 */}
                  <div className="p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">Auto Lead Qualifier</div>
                      <div className="text-2xs sm:text-xs text-slate-300">
                        Asks the right qualification questions (MOQ, pharmacopeia standards, payment terms) without manual rep effort.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Autopilot 6 Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Custom Automation</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Build rules and multi-step triggers to run your chemical sales pipeline on autopilot without writing code.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Bulk Calling Campaigns</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Launch high-volume outbound calling campaigns to pharmacy chains & stockists with live analytics.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Rule-Based Calling</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Trigger calls automatically based on quotation delivery, sample arrival, or 48-hour buyer inactivity.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Flame className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Qualified Lead Alerts</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Instantly alerts area sales reps when a lead turns purchase-ready so high-value deals never go cold.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Smart Cockpit Dashboard</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    One unified screen to monitor automated calls, WhatsApp conversations, and lead movement in real time.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Always On. Always Working.</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Autopilot works 24/7 across international time zones so your export pipeline never stalls.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: AI+ Content */}
          {activeAionTab === 'ai' && (
            <div className="mt-12 space-y-8 animate-in fade-in duration-300">
              
              {/* Hero Banner Band */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-800 to-slate-900 border border-indigo-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                    Generative Intelligence
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Your CRM, one step <br />
                    <span className="text-indigo-400">ahead of every deal.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    AION AI+ brings generative AI into every interaction—scoring chemical leads, analysing buying patterns, and drafting technical follow-ups so reps always know who to contact and what to offer.
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  {/* AI Feature Row 1 */}
                  <div className="p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center gap-3.5 hover:border-indigo-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">AI Lead Scoring & Intent Matrix</div>
                      <div className="text-2xs sm:text-xs text-slate-300">
                        Ranks buyers by purchase frequency, volume budget, and historical payment performance.
                      </div>
                    </div>
                  </div>

                  {/* AI Feature Row 2 */}
                  <div className="p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center gap-3.5 hover:border-indigo-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">Chemical Lead & Spec Analyser</div>
                      <div className="text-2xs sm:text-xs text-slate-300">
                        Automatically extracts chemical purity, CAS number, pharmacopeia grades, and MOQ from emails.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI 4 Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">AI WhatsApp Writer</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Writes personalized WhatsApp follow-ups in seconds with exact formulation context and sample status.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Lead Update Writer</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Keeps doctor and distributor meeting notes clean and structured, automatically generated from call transcripts.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                    <Bot className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">AI Quotation & Email Writer</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Drafts professional sales proposals and batch specification cover letters directly from CRM data.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">MoM Writer</h4>
                  <p className="text-2xs sm:text-xs text-slate-400 mt-1">
                    Generates structured Minutes of Meeting capturing action items, sample requests, and next deadlines.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Bottom Action Note */}
          <div className="mt-12 text-center pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs text-slate-400">
              Everything included out of the box. No external API keys required.
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Schedule AION Demo
              </button>
              <button
                onClick={launchCrmDemo}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all"
              >
                Try Live in CRM
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. THE EVERYDAY SALES TOOLKIT (Interactive Capability Showcase) */}
      <section id="capabilities" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>THE EVERYDAY TOOLKIT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pharma CRM Features for <span className="text-emerald-600">Your Sales Team</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Everything your team needs to organize the pharmaceutical sales process and act with confidence.
            </p>
          </div>

          {/* Interactive Tabs Header */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-white p-2 rounded-2xl border border-slate-200/80 shadow-xs">
            {capabilities.map((cap, index) => {
              const isSelected = activeToolkitIndex === index;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveToolkitIndex(index)}
                  className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {cap.id}
                  </span>
                  <span className="text-xs font-bold leading-snug line-clamp-2">
                    {cap.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Stage Display Card */}
          <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>CAPABILITY {currentCap.id} OF 06</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {currentCap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentCap.description}
                </p>

                {/* Bullet checklist */}
                <div className="space-y-2 pt-2">
                  {currentCap.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 transition-all"
                  >
                    <span>See it in your workflow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={launchCrmDemo}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all"
                  >
                    Test in Live CRM
                  </button>
                </div>
              </div>

              {/* Right Column: Live Interactive Card Mock */}
              <div className="lg:col-span-5">
                <div className="p-6 bg-slate-50 border border-slate-200/90 rounded-2xl shadow-inner space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Live Module Preview</span>
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${currentCap.sampleData.badgeColor}`}>
                      {currentCap.sampleData.status}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-2xs text-slate-400 font-bold uppercase">Customer Account</span>
                      <div className="font-extrabold text-slate-900 mt-0.5">
                        {currentCap.sampleData.buyer}
                      </div>
                    </div>

                    <div>
                      <span className="text-2xs text-slate-400 font-bold uppercase">Chemical Specification</span>
                      <div className="font-bold text-emerald-800 bg-white p-2.5 rounded-xl border border-slate-200 mt-0.5">
                        {currentCap.sampleData.product}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                        <span className="text-2xs text-slate-400 font-bold uppercase">Volume Requirement</span>
                        <div className="font-extrabold text-slate-900 mt-0.5">{currentCap.sampleData.qty}</div>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                        <span className="text-2xs text-slate-400 font-bold uppercase">Compliance Audit</span>
                        <div className="font-bold text-emerald-600 mt-0.5">✓ 100% Passed</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-2xs text-slate-500">
                    <span>Audit Logged: Just now</span>
                    <span className="font-semibold text-emerald-600">Encrypted DB Record</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. ONE CONNECTED JOURNEY (7-STAGE WORKFLOW ROAD) */}
      <section id="workflow" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>ONE CONNECTED JOURNEY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Manage Your Pharma Sales Process from <br />
              <span className="text-emerald-600">Enquiry to Conversion</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A connected pharma sales CRM can help your team manage every stage of the customer journey seamlessly.
            </p>
          </div>

          {/* 7 Road Steps in Horizontal Flow */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeWorkflowStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-between min-h-[160px] ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/30 scale-105 z-10'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div className={`text-base font-extrabold ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {step.step}
                  </div>
                  
                  <div className="font-bold text-xs sm:text-sm leading-tight my-1">
                    {step.title}
                  </div>

                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    Stage {step.step}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="mt-8 p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Selected Phase: Stage {workflowSteps[activeWorkflowStep].step}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {workflowSteps[activeWorkflowStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {workflowSteps[activeWorkflowStep].desc}
                </p>
              </div>

              <div className="shrink-0 bg-white/10 p-4 rounded-2xl border border-white/15 text-left text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-300">Automated Benefit</span>
                <div className="font-bold text-white">
                  {workflowSteps[activeWorkflowStep].highlight}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            Keep every stage connected so your sales team always knows what happens next.
          </p>

        </div>
      </section>

      {/* 8. BUILT FOR FIELD SALES TEAMS (MR & Area Managers) */}
      <section id="field-sales" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Phone Mock */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-xs bg-slate-900 rounded-[40px] p-4 shadow-2xl border-4 border-slate-700">
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />
                
                {/* Mobile Screen Mock */}
                <div className="bg-white rounded-3xl overflow-hidden p-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-bold text-slate-800">MR Daily Beat Plan</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">GPS Active</span>
                  </div>

                  {/* Visit 1 */}
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>Apex Hospital Procurement</span>
                      <span className="text-[10px] text-emerald-700">Checked-In</span>
                    </div>
                    <div className="text-[11px] text-slate-600">Sample Delivered: Linezolid 600mg (20 Boxes)</div>
                    <div className="text-[10px] text-slate-400">10:15 AM • Dr. Patel Approved</div>
                  </div>

                  {/* Visit 2 */}
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>Radhe Chem-Stockist</span>
                      <span className="text-[10px] text-blue-700">Next Visit</span>
                    </div>
                    <div className="text-[11px] text-slate-600">Monthly Stock Order: ₹ 3.20 Lakhs</div>
                    <div className="text-[10px] text-slate-400">Scheduled: 1:30 PM • Surat GIDC</div>
                  </div>

                  {/* Quick Action */}
                  <div className="p-2.5 bg-blue-600 text-white rounded-xl text-center font-bold">
                    + Log Doctor / Chemist Call
                  </div>
                </div>

                <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mt-4" />
              </div>
            </div>

            {/* Right Column Details */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>BUILT FOR THE FIELD</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Pharma CRM for <br />
                <span className="text-emerald-600">Field Sales Teams</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pharma sales representatives are constantly on the move, meeting stockists, distributors, formulation plant heads, and physicians. PharmaChemi helps field teams stay connected with CRM data, meetings, sample requests, and follow-ups while working outside the office.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Schedule Meetings & Route Beat Planning</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>GPS Geotagged Visit Verification</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Capture Meeting Details & Sample Orders</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Manage Follow-Ups On The Move</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Offline Mode for Industrial Zones & Plants</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-Tap Daily Call Report (DCR) Submission</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  Book Field Force Walkthrough
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 9. MANAGE DISTRIBUTOR & CUSTOMER RELATIONSHIPS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                <Building2 className="w-3.5 h-3.5 text-purple-600" />
                <span>CUSTOMERS + DISTRIBUTORS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Manage Distributor & <br />
                <span className="text-emerald-600">Customer Relationships</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Distributors and formulation customers are the foundation of pharmaceutical revenue. A centralized pharma CRM keeps important pricing agreements, Drug License numbers (Form 20B/21B), credit limits, and purchase cycles organized in one unified database.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Give your sales team full context: </strong>Never dial a client without knowing their pending sample approvals, overdue receivables, and previous batch sizes.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={launchCrmDemo}
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  Explore Distributor Management in CRM
                </button>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl shadow-xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-bold text-sm">Distributor Profile #DIST-804</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
                    Active Stockist
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-sm font-extrabold text-white">Gujarat Chem-Pharma Agency</div>
                  <div className="text-slate-400 text-2xs">Territory: Western Region • Drug License: DL-GJ-10924</div>
                  
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <span className="text-slate-400 text-2xs">Credit Limit</span>
                      <div className="font-bold text-white text-xs mt-0.5">₹ 25.0 Lakhs</div>
                    </div>
                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <span className="text-slate-400 text-2xs">Outstanding Due</span>
                      <div className="font-bold text-amber-400 text-xs mt-0.5">₹ 4.12 Lakhs (Normal)</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-2xs text-slate-300">
                  Last Order: 5,000 KG Paracetamol BP on Oct 14 • Automated replenishment triggered.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. A SMARTER WORKDAY (Automate Repetitive Pharma Tasks) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>A SMARTER WORKDAY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Automate Repetitive <br />
              <span className="text-emerald-600">Pharma Sales Tasks</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Your sales team should spend more time selling and less time managing repetitive CRM activities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">Automated Follow-Ups</h3>
              <p className="text-2xs sm:text-xs text-slate-600 mt-1">
                Keep important quotation actions moving without depending on manual calendar reminders.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">Lead Assignment</h3>
              <p className="text-2xs sm:text-xs text-slate-600 mt-1">
                Automatically distribute incoming buyer enquiries using your defined territory and category rules.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">WhatsApp & Email</h3>
              <p className="text-2xs sm:text-xs text-slate-600 mt-1">
                Send COA files, proforma invoices, and dispatch alerts directly from the CRM in 1 tap.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">Task Management</h3>
              <p className="text-2xs sm:text-xs text-slate-600 mt-1">
                Create and track high-priority next actions, sample testing deadlines, and QA approvals.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">Real-Time Alerts</h3>
              <p className="text-2xs sm:text-xs text-slate-600 mt-1">
                Keep the right managers informed when high-value purchase orders arrive or payment becomes due.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 11. MAKE THE SHIFT (Before vs. After Comparison) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <span>MAKE THE SHIFT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Manual Follow-Up to <br />
              <span className="text-emerald-600">Automated Sales Workflow</span>
            </h2>
          </div>

          {/* Comparison Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Before Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                  BEFORE
                </span>
                <span className="text-xs font-bold text-slate-500">Manual Disconnected Process</span>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Lead arrives scattered across personal WhatsApp or emails</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Sales rep checks only when free; delays of 24–48 hours</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Manual re-dispatch via phone call or forwarded messages</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Forgotten sample follow-ups and missed renewal dates</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Deals lost to faster chemical competitors</span>
                </div>
              </div>
            </div>

            {/* After Card */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-white border-2 border-emerald-500 rounded-3xl space-y-4 shadow-lg shadow-emerald-500/10">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/80 px-2.5 py-0.5 rounded">
                  AFTER
                </span>
                <span className="text-xs font-extrabold text-emerald-900">With PharmaChemi CRM</span>
              </div>

              <div className="space-y-2 text-xs text-slate-800">
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-emerald-200 shadow-xs">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold">Instant omni-channel capture in under 3 seconds</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-emerald-200 shadow-xs">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold">Automated lead routing by chemical category & zone</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-emerald-200 shadow-xs">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold">Automated follow-up triggered with COA & rate card</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-emerald-200 shadow-xs">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold">Field visits logged via GPS geotagged mobile app</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-emerald-200 shadow-xs">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-semibold">3x higher conversion rate and predictable reorders</span>
                </div>
              </div>
            </div>

          </div>

          <p className="text-center text-xs font-medium text-slate-500 mt-6">
            Less manual coordination. More consistent, compliant sales execution.
          </p>

        </div>
      </section>

      {/* 12. WHY CHOOSE PHARMACHEMI */}
      <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>WHY PHARMACHEMI</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose <span className="text-emerald-600">PharmaChemi CRM?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Purpose-built to connect the core activities that help pharmaceutical sales teams build momentum.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs hover:border-emerald-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Faster Follow-Ups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep sales opportunities moving with timely quotation follow-ups and automated client reminders.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs hover:border-emerald-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Better Lead Management</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep chemical enquiries, CAS numbers, mesh specs, and batches organized from first touch to delivery.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs hover:border-emerald-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Productive Sales Teams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reduce manual CRM data entry and give field representatives more face-to-face time with customers.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs hover:border-emerald-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Stronger Relationships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maintain complete historical purchase records, quality test reports (COA), and communication logs.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs hover:border-emerald-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Better Sales Visibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Give management real-time insight into field MR activities, pipeline forecasts, and revenue targets.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs hover:border-emerald-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">One Connected Platform</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage your complete sales process, customer directory, and compliance workflows through one system.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 13. PRICING PLANS */}
      <section id="pricing" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <span>TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Plans Built to <span className="text-emerald-600">Grow With Your Business</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Start with your current sales team size, upgrade seamlessly as you scale. 14-day free trial on all plans.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Plan */}
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col justify-between space-y-6 hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Starter</span>
                <h3 className="text-xl font-extrabold text-slate-900">Pharma Essentials</h3>
                <p className="text-xs text-slate-600">For boutique chemical traders and growing regional sales teams.</p>
                <div className="text-3xl font-extrabold text-slate-900">
                  ₹ 1,499 <span className="text-xs font-medium text-slate-500">/ user / month</span>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Up to 5 Sales Users</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Chemical Lead Management</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Quotation Generator</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Automated Follow-Up Reminders</div>
                </div>
              </div>
              <button
                onClick={() => setIsTrialModalOpen(true)}
                className="w-full py-3 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 shadow-xs transition-all"
              >
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Growth / Popular Plan */}
            <div className="p-8 bg-gradient-to-b from-slate-900 to-indigo-950 text-white rounded-3xl flex flex-col justify-between space-y-6 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                MOST POPULAR
              </span>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Professional</span>
                <h3 className="text-xl font-extrabold text-white">AION Autopilot Suite</h3>
                <p className="text-xs text-slate-300">Complete AI calling, WhatsApp bots, and field force management.</p>
                <div className="text-3xl font-extrabold text-white">
                  ₹ 2,999 <span className="text-xs font-medium text-slate-400">/ user / month</span>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-800 text-xs text-slate-200">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Sales & MR Users</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> AION Autonomous Calling & Qualification</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> WhatsApp AI Bot & Automated COA Dispatch</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> GPS Geotagged MR Beat Planning</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Distributor & Stockist Management</div>
                </div>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Book Priority Walkthrough
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col justify-between space-y-6 hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Enterprise</span>
                <h3 className="text-xl font-extrabold text-slate-900">Custom Multi-Plant</h3>
                <p className="text-xs text-slate-600">For multi-division pharmaceutical manufacturers and global exporters.</p>
                <div className="text-3xl font-extrabold text-slate-900">
                  Custom <span className="text-xs font-medium text-slate-500">Tier Pricing</span>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-700">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Dedicated Cloud Instance & Database Isolation</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> SAP, Tally, & Oracle ERP Integration</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 21 CFR Part 11 Electronic Signature Logs</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Dedicated Account Manager & SLA Guarantee</div>
                </div>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all"
              >
                Contact Enterprise Sales
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 14. FREQUENTLY ASKED QUESTIONS (FAQ Accordion) */}
      <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How is PharmaChemi different from generic CRMs like Salesforce or Zoho?',
                a: 'Generic CRMs lack native pharmaceutical workflows. PharmaChemi is pre-built with chemical CAS numbers, purity/mesh specifications, Certificate of Analysis (COA) document management, MR beat planning, and distributor drug license compliance out of the box.'
              },
              {
                q: 'Can field representatives use the CRM on their smartphones offline?',
                a: 'Yes! PharmaChemi offers a mobile-first interface optimized for field medical reps and area managers. They can log doctor visits, check sample inventory, and capture secondary distributor orders even in remote manufacturing zones without internet.'
              },
              {
                q: 'Does PharmaChemi integrate with WhatsApp and IndiaMART?',
                a: 'Yes, absolutely. Inbound RFQs from IndiaMART, Pharmabiz, ChemAnalyst, and WhatsApp business numbers are ingested automatically into your CRM pipeline with AI chemical spec extraction.'
              },
              {
                q: 'Is PharmaChemi compliant with pharmaceutical manufacturing standards?',
                a: 'Yes. PharmaChemi adheres to 21 CFR Part 11 requirements including timestamped audit trails, role-based access control, electronic sign-offs, and encrypted data storage.'
              },
              {
                q: 'How long does onboarding take?',
                a: 'Most pharmaceutical sales teams are fully onboarded and actively managing leads within 120 minutes. We provide pre-built product master catalogs and 1-click customer CSV imports.'
              }
            ].map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 15. READY TO BUILD A SMARTER PHARMA SALES FORCE (BOTTOM HERO CTA) */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Build a <br />
            <span className="text-emerald-400">Smarter Pharma Sales Force?</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bring your leads, sales activities, distributors, customer relationships, follow-ups, orders, and daily operations together with PharmaChemi for better control and accelerated growth.
          </p>

          <p className="text-xs sm:text-sm font-bold text-emerald-400">
            Smarter Sales Force. Better Sales Execution.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <span>Book Demo Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsTrialModalOpen(true)}
              className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all"
            >
              Start Free 14-Day Trial
            </button>

            <button
              onClick={launchCrmDemo}
              className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all"
            >
              Launch Live App Prototype
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-slate-400 text-2xs pt-2">
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ Ready in 120 minutes</span>
            <span>•</span>
            <span>✓ 21 CFR Part 11 compliant</span>
          </div>
        </div>
      </section>

      {/* 16. COMPREHENSIVE FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
            
            {/* Col 1: Brand Info */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
                  P
                </div>
                <span className="text-base font-extrabold text-white">
                  Pharma<span className="text-emerald-400">Chemi</span> CRM
                </span>
              </div>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
                Autonomous CRM software purpose-built for active pharmaceutical ingredient (API) manufacturers, bulk chemical producers, and distributor networks.
              </p>
              <div className="text-slate-300 text-2xs space-y-1">
                <div>Domain: <span className="text-emerald-400 font-mono">pharmachemi.com</span></div>
                <div>Support: <span className="text-slate-200">support@pharmachemi.com</span></div>
              </div>
            </div>

            {/* Col 2: Solutions */}
            <div className="space-y-3">
              <div className="font-bold text-white text-xs uppercase tracking-wider">Solutions</div>
              <ul className="space-y-2 text-2xs">
                <li><a href="#capabilities" className="hover:text-emerald-400 transition-colors">API Lead Management</a></li>
                <li><a href="#aion-ai" className="hover:text-emerald-400 transition-colors">AION AI Calling Agent</a></li>
                <li><a href="#field-sales" className="hover:text-emerald-400 transition-colors">Field MR Beat Planning</a></li>
                <li><a href="#capabilities" className="hover:text-emerald-400 transition-colors">Distributor Management</a></li>
                <li><a href="#capabilities" className="hover:text-emerald-400 transition-colors">Sales Reporting & BI</a></li>
              </ul>
            </div>

            {/* Col 3: Industries */}
            <div className="space-y-3">
              <div className="font-bold text-white text-xs uppercase tracking-wider">Industries</div>
              <ul className="space-y-2 text-2xs">
                <li><span className="text-slate-400">Active Pharma Ingredients (APIs)</span></li>
                <li><span className="text-slate-400">Bulk Drugs & Fine Chemicals</span></li>
                <li><span className="text-slate-400">Finished Formulations (FDF)</span></li>
                <li><span className="text-slate-400">Chemical Excipients & Solvents</span></li>
                <li><span className="text-slate-400">Pharmaceutical Stockists</span></li>
              </ul>
            </div>

            {/* Col 4: Platform */}
            <div className="space-y-3">
              <div className="font-bold text-white text-xs uppercase tracking-wider">Platform</div>
              <ul className="space-y-2 text-2xs">
                <li><button onClick={launchAuth} className="hover:text-emerald-400 transition-colors text-left">Sign In / Staff Portal</button></li>
                <li><button onClick={launchCrmDemo} className="hover:text-emerald-400 transition-colors text-left">Launch Live Sandbox</button></li>
                <li><button onClick={() => setIsDemoModalOpen(true)} className="hover:text-emerald-400 transition-colors text-left">Request Demo</button></li>
                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing & Plans</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Compliance Specs</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs text-slate-500">
            <div>
              © 2026 PharmaChemi Technologies. All rights reserved. Registered domain: <span className="text-slate-400">pharmachemi.com</span>
            </div>
            <div className="flex gap-4">
              <span className="hover:text-slate-300 cursor-pointer">Terms of Use</span>
              <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer">21 CFR Compliance</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
