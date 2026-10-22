import React, { useState, useMemo } from 'react';
import {
  FileText,
  Search,
  Download,
  IndianRupee,
  Clock,
  Calendar,
  Save,
  MessageCircle,
  Filter
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function AccountsPage() {
  const {
    invoices,
    updateInvoice,
    activeAccountsSubTab,
    setActiveAccountsSubTab,
    STAFF_LIST,
    showToast
  } = useCrm();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSalesman, setSelectedSalesman] = useState('All');

  // Ageing bucket calculations
  const totalOutstanding = useMemo(() => {
    return invoices.reduce((acc, curr) => acc + (curr.balance || 0), 0);
  }, [invoices]);

  const bucketTotals = useMemo(() => {
    const buckets = { '0-30': 0, '31-60': 0, '61-90': 0, '90+': 0 };
    invoices.forEach(inv => {
      if (buckets[inv.bucket] !== undefined) {
        buckets[inv.bucket] += inv.balance;
      }
    });
    return buckets;
  }, [invoices]);

  const filteredInvoices = useMemo(() => {
    return invoices.filter(inv => {
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const mCust = inv.customer.toLowerCase().includes(q);
        const mInv = inv.invoiceNo.toLowerCase().includes(q);
        if (!mCust && !mInv) return false;
      }
      if (selectedSalesman !== 'All' && inv.salesman !== selectedSalesman) {
        return false;
      }
      // If Due Invoices tab
      if (activeAccountsSubTab === 'Due Invoices' && inv.balance <= 0) {
        return false;
      }
      return true;
    });
  }, [invoices, searchTerm, selectedSalesman, activeAccountsSubTab]);

  return (
    <div className="space-y-3">
      
      {/* 1. Ageing Summary Metrics Banner */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4">
        <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-100 gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Ledger & Outstanding Portfolio</span>
            <div className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Total Outstanding: ₹ {totalOutstanding.toLocaleString()}</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                Overdue Attention
              </span>
            </div>
          </div>

          {/* Subtabs Pill Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
            {['Outstanding All', 'Outstanding Salesman', 'Due Invoices', 'Invoice List'].map(sub => (
              <button
                key={sub}
                onClick={() => setActiveAccountsSubTab(sub)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeAccountsSubTab === sub
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Ageing Buckets (0–30, 31–60, 61–90, 90+) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-lg">
            <span className="text-[11px] font-bold text-emerald-800 uppercase">0 – 30 Days (Current)</span>
            <div className="text-lg font-bold text-emerald-950 font-mono mt-0.5">
              ₹ {bucketTotals['0-30'].toLocaleString()}
            </div>
            <div className="text-[10px] text-emerald-700">Healthy billing cycle</div>
          </div>

          <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg">
            <span className="text-[11px] font-bold text-blue-800 uppercase">31 – 60 Days</span>
            <div className="text-lg font-bold text-blue-950 font-mono mt-0.5">
              ₹ {bucketTotals['31-60'].toLocaleString()}
            </div>
            <div className="text-[10px] text-blue-700">PDC under collection</div>
          </div>

          <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg">
            <span className="text-[11px] font-bold text-amber-800 uppercase">61 – 90 Days</span>
            <div className="text-lg font-bold text-amber-950 font-mono mt-0.5">
              ₹ {bucketTotals['61-90'].toLocaleString()}
            </div>
            <div className="text-[10px] text-amber-700">Second reminder stage</div>
          </div>

          <div className="p-3 bg-rose-50/60 border border-rose-200 rounded-lg">
            <span className="text-[11px] font-bold text-rose-800 uppercase">90+ Days (Critical)</span>
            <div className="text-lg font-bold text-rose-950 font-mono mt-0.5">
              ₹ {bucketTotals['90+'].toLocaleString()}
            </div>
            <div className="text-[10px] text-rose-700">Immediate recovery action</div>
          </div>
        </div>
      </div>

      {/* 2. Filters Bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search invoice number, customer..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {activeAccountsSubTab === 'Outstanding Salesman' && (
            <select
              value={selectedSalesman}
              onChange={(e) => setSelectedSalesman(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs font-semibold text-slate-700"
            >
              <option value="All">All Sales Representatives</option>
              {STAFF_LIST.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          )}

          <button
            onClick={() => showToast('Outstanding Ledger exported as Excel/CSV.', 'success')}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export Ageing Report</span>
          </button>
        </div>
      </div>

      {/* 3. Invoices & Ageing Table with Follow-up Date and Remark */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700 text-xs">
              <tr>
                <th className="w-32">Invoice No</th>
                <th className="w-24">Date</th>
                <th className="min-w-[200px]">Customer Name</th>
                <th className="w-24">Salesman</th>
                <th className="w-24 font-mono">Invoice (₹)</th>
                <th className="w-24 font-mono">Paid (₹)</th>
                <th className="w-24 font-mono text-rose-700">Balance (₹)</th>
                <th className="w-24 text-center">Ageing Bucket</th>
                <th className="w-28">Follow-up Date</th>
                <th className="min-w-[240px]">Follow-up Remark</th>
                <th className="w-20 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                  <td className="font-mono font-bold text-blue-700 text-xs">
                    {inv.invoiceNo}
                  </td>

                  <td className="font-mono text-slate-600 text-xs whitespace-nowrap">
                    {inv.date}
                  </td>

                  <td className="font-semibold text-slate-900 text-xs">
                    {inv.customer}
                  </td>

                  <td>
                    <span className="text-xs font-medium text-slate-700">{inv.salesman}</span>
                  </td>

                  <td className="font-mono text-xs text-slate-800">
                    ₹ {inv.amount.toLocaleString()}
                  </td>

                  <td className="font-mono text-xs text-emerald-700">
                    ₹ {inv.paid.toLocaleString()}
                  </td>

                  <td className="font-mono font-bold text-rose-600 text-xs whitespace-nowrap">
                    ₹ {inv.balance.toLocaleString()}
                  </td>

                  {/* Ageing Bucket */}
                  <td className="text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        inv.bucket === '0-30'
                          ? 'bg-emerald-100 text-emerald-800'
                          : inv.bucket === '31-60'
                          ? 'bg-blue-100 text-blue-800'
                          : inv.bucket === '61-90'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {inv.bucket} Days
                    </span>
                  </td>

                  {/* Follow-up Date (editable) */}
                  <td>
                    <input
                      type="text"
                      value={inv.followupDate}
                      onChange={(e) => updateInvoice(inv.id, { followupDate: e.target.value })}
                      className="w-24 text-xs font-mono py-1 px-1.5 border border-slate-200 rounded bg-white text-center"
                    />
                  </td>

                  {/* Follow-up Remark (editable) */}
                  <td>
                    <input
                      type="text"
                      value={inv.remark || ''}
                      onChange={(e) => updateInvoice(inv.id, { remark: e.target.value })}
                      className="w-full text-xs py-1 px-2 border border-slate-200 rounded bg-white"
                      placeholder="Add follow-up notes..."
                    />
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => showToast(`Payment reminder sent via WhatsApp to ${inv.customer}`, 'success')}
                      className="p-1 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded"
                      title="Send WhatsApp Reminder"
                    >
                      <MessageCircle className="w-4 h-4 mx-auto" />
                    </button>
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
