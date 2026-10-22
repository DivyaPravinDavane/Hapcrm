import React, { useState } from 'react';
import {
  Users,
  Search,
  Plus,
  Upload,
  Download,
  Filter,
  Phone,
  Mail,
  DollarSign
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function GeneralLeadsPage() {
  const { generalLeads, setIsNewLeadOpen, setIsNewCustomerOpen, showToast } = useCrm();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = generalLeads.filter(l => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      l.company.toLowerCase().includes(q) ||
      l.name.toLowerCase().includes(q) ||
      l.source.toLowerCase().includes(q)
    );
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Won':
        return 'bg-emerald-100 text-emerald-800';
      case 'Quotation Sent':
        return 'bg-blue-100 text-blue-800';
      case 'In Discussion':
        return 'bg-purple-100 text-purple-800';
      case 'Followup':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-3">
      
      {/* Header & Action Bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search general CRM leads..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white"
            />
          </div>
        </div>

        {/* Buttons: New Lead / New Customer / Import buttons as requested */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Importing leads from IndiaMART / TradeIndia...', 'info')}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-xs"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Import</span>
          </button>

          <button
            onClick={() => setIsNewCustomerOpen(true)}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-xs"
          >
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>New Customer</span>
          </button>

          <button
            onClick={() => setIsNewLeadOpen(true)}
            className="px-3.5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5 active:scale-95"
          >
            <Plus className="w-4 h-4 text-cyan-300" />
            <span>New Lead</span>
          </button>
        </div>
      </div>

      {/* Table: #, Company, Name, Email, Phone, Assigned, Status, Source, Last Contact, Created, Value, Tags */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700 text-xs">
              <tr>
                <th className="w-10 text-center">#</th>
                <th className="min-w-[180px]">Company</th>
                <th className="min-w-[140px]">Contact Name</th>
                <th className="min-w-[160px]">Email</th>
                <th className="w-28">Phone</th>
                <th className="w-24">Assigned</th>
                <th className="w-28">Status</th>
                <th className="w-24">Source</th>
                <th className="w-24">Last Contact</th>
                <th className="w-24">Created</th>
                <th className="w-28 font-mono">Value (₹)</th>
                <th className="min-w-[130px]">Tags</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredLeads.map((lead, index) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="text-center font-mono text-slate-400 text-xs">
                    {index + 1}
                  </td>
                  <td className="font-bold text-slate-900 text-xs">
                    {lead.company}
                  </td>
                  <td className="text-slate-800 text-xs font-medium">
                    {lead.name}
                  </td>
                  <td className="text-slate-600 font-mono text-xs">
                    {lead.email}
                  </td>
                  <td className="text-slate-600 font-mono text-xs whitespace-nowrap">
                    {lead.phone}
                  </td>
                  <td>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {lead.assigned}
                    </span>
                  </td>
                  <td>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="text-slate-600 text-xs font-medium">
                    {lead.source}
                  </td>
                  <td className="font-mono text-slate-600 text-xs whitespace-nowrap">
                    {lead.lastContact}
                  </td>
                  <td className="font-mono text-slate-400 text-xs whitespace-nowrap">
                    {lead.created}
                  </td>
                  <td className="font-mono font-bold text-slate-900 text-xs whitespace-nowrap">
                    ₹ {Number(lead.value).toLocaleString()}
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {lead.tags.map(t => (
                        <span key={t} className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
