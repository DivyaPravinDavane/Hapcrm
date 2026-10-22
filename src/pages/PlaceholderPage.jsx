import React from 'react';
import { Layers, ArrowLeft, ArrowRight, Sparkles, Building, FileText, CheckCircle2 } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function PlaceholderPage({ title }) {
  const { setActiveTab } = useCrm();

  const moduleDescriptions = {
    'Sales': 'Commercial Sales Invoicing, Dispatch LR Management & Consignment Tracking.',
    'Mobile Leads': 'Field sales representative lead capture app sync & GPS check-in logs.',
    'Planner': 'Annual Chemical Procurement & Sales Target Forecasting Calendar.',
    'Expenses': 'Sales executive travel allowance, sample courier & client entertaining accounts.',
    'Support': 'Product COA requests, Technical DMF queries & Quality Assurance tickets.',
    'Utilities': 'Bulk SMS sender, WhatsApp template automation & Document batch converter.',
    'Reports': 'MIS Financial Turnover, Monthly Product Performance & Customer Sales Matrix.',
    'Setup': 'Master configurations, Drug License rules, GST tax groups & Staff privileges.'
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-8 max-w-3xl mx-auto my-6 text-center space-y-5">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center shadow-inner">
        <Layers className="w-8 h-8" />
      </div>

      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">
          HAP Enterprise CRM Module
        </span>
        <h2 className="text-xl font-bold text-slate-800 mt-2">{title}</h2>
        <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
          {moduleDescriptions[title] || 'This section is fully configured in the core database and operational for HAP staff.'}
        </p>
      </div>

      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 text-left space-y-2">
        <div className="font-bold text-slate-900 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Active Functional Desk Quick Links</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => setActiveTab('My Leads')}
            className="p-2.5 bg-white border rounded hover:border-blue-400 text-left font-medium text-blue-900 flex items-center justify-between shadow-2xs"
          >
            <span>My Leads (Sales Enquiries)</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </button>
          <button
            onClick={() => setActiveTab('Purchase Leads')}
            className="p-2.5 bg-white border rounded hover:border-blue-400 text-left font-medium text-emerald-900 flex items-center justify-between shadow-2xs"
          >
            <span>Purchase Leads (Suppliers)</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
          </button>
          <button
            onClick={() => setActiveTab('Company Items')}
            className="p-2.5 bg-white border rounded hover:border-blue-400 text-left font-medium text-purple-900 flex items-center justify-between shadow-2xs"
          >
            <span>Company Items (20k Grid)</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
          </button>
          <button
            onClick={() => setActiveTab('Accounts')}
            className="p-2.5 bg-white border rounded hover:border-blue-400 text-left font-medium text-amber-900 flex items-center justify-between shadow-2xs"
          >
            <span>Accounts & Ageing Ledgers</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
          </button>
        </div>
      </div>

      <div>
        <button
          onClick={() => setActiveTab('Dashboard')}
          className="px-4 py-2 bg-black hover:bg-slate-900 text-white rounded-lg text-xs font-bold shadow inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Dashboard</span>
        </button>
      </div>
    </div>
  );
}
