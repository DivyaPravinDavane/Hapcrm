import React, { useState, useMemo } from 'react';
import {
  Search,
  Plus,
  Download,
  Filter,
  Layers,
  UserPlus,
  RotateCcw
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function PurchaseLeadsPage() {
  const {
    purchaseLeads,
    updatePurchaseLead,
    setIsNewPurchaseOpen,
    setIsNewCustomerOpen,
    MAKES_LIST,
    STATUS_LIST,
    showToast
  } = useCrm();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [fromDate, setFromDate] = useState('01-10-2026');
  const [toDate, setToDate] = useState('21-10-2026');

  // Counts for tabs
  const counts = useMemo(() => {
    return {
      Sent: purchaseLeads.filter(l => l.status === 'Sent').length,
      Pending: purchaseLeads.filter(l => l.status === 'Pending').length,
      Reject: purchaseLeads.filter(l => l.status === 'Reject').length,
      Confirm: purchaseLeads.filter(l => l.status === 'Confirm').length,
      NoOffer: purchaseLeads.filter(l => l.status === 'NoOffer').length,
      Junk: purchaseLeads.filter(l => l.status === 'Junk').length,
      WON: purchaseLeads.filter(l => l.status === 'WON').length,
      All: purchaseLeads.length
    };
  }, [purchaseLeads]);

  const filteredLeads = useMemo(() => {
    return purchaseLeads.filter(l => {
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const mSup = l.supplier.toLowerCase().includes(q);
        const mItm = l.purchaseItem.toLowerCase().includes(q);
        if (!mSup && !mItm) return false;
      }
      if (activeTab !== 'All' && l.status !== activeTab) return false;
      return true;
    });
  }, [purchaseLeads, searchTerm, activeTab]);

  // Amount color coding helper:
  // Orange for large (> ₹3,00,000), Yellow for medium (> ₹1,00,000), Slate for normal
  const getAmountColorClass = (amount) => {
    if (amount >= 300000) {
      return 'bg-amber-100 text-amber-900 border border-amber-300 font-bold';
    } else if (amount >= 100000) {
      return 'bg-yellow-50 text-yellow-800 border border-yellow-200 font-bold';
    }
    return 'bg-slate-50 text-slate-800 border border-slate-200';
  };

  return (
    <div className="space-y-3">
      
      {/* 1. Filter Bar with + Purchase & + New Party Lead */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 flex-1">
          <div className="relative min-w-[220px] max-w-xs flex-1">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search supplier or item..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-semibold text-[11px]">From:</span>
            <input
              type="text"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-24 px-2 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs text-center font-mono"
            />
          </div>

          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-semibold text-[11px]">To:</span>
            <input
              type="text"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-24 px-2 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs text-center font-mono"
            />
          </div>

          <button
            onClick={() => {
              setSearchTerm('');
              setActiveTab('All');
            }}
            title="Reset Filters"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons: + Purchase & + New Party Lead */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsNewCustomerOpen(true)}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-xs"
          >
            <UserPlus className="w-3.5 h-3.5 text-blue-600" />
            <span>+ New Party Lead</span>
          </button>

          <button
            onClick={() => setIsNewPurchaseOpen(true)}
            className="px-3.5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            <span>+ Purchase</span>
          </button>
        </div>
      </div>

      {/* 2. Status Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
        {[
          { key: 'Sent', count: counts.Sent, color: 'bg-blue-600' },
          { key: 'Pending', count: counts.Pending, color: 'bg-amber-500' },
          { key: 'Reject', count: counts.Reject, color: 'bg-rose-500' },
          { key: 'Confirm', count: counts.Confirm, color: 'bg-purple-600' },
          { key: 'NoOffer', count: counts.NoOffer, color: 'bg-yellow-500' },
          { key: 'Junk', count: counts.Junk, color: 'bg-slate-500' },
          { key: 'WON', count: counts.WON, color: 'bg-emerald-600' },
          { key: 'All', count: counts.All, color: 'bg-slate-800' },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
                isActive
                  ? 'bg-white shadow-sm border-slate-300 text-slate-900 ring-2 ring-blue-500/30'
                  : 'bg-white/80 border-slate-200/80 text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <span>{tab.key}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono text-white ${tab.color}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Purchase Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700">
              <tr>
                <th className="w-20">Date</th>
                <th className="min-w-[180px]">Supplier / Manufacturer</th>
                <th className="min-w-[140px]">Purchase Item</th>
                <th className="w-24">Make</th>
                <th className="w-24">Quantity (KG)</th>
                <th className="w-24">Market Rate (₹)</th>
                <th className="w-24">Purchase Rate (₹)</th>
                <th className="w-28">Amount (₹)</th>
                <th className="w-24">Status</th>
                <th className="min-w-[140px]">Info</th>
                <th className="w-28">Payment Terms</th>
                <th className="w-28">Delivery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredLeads.map((p) => {
                const isConfirmed = p.status === 'Confirm' || p.status === 'WON';
                const totalAmount = (Number(p.qty) || 0) * (Number(p.purchaseRate) || 0);

                return (
                  <tr
                    key={p.id}
                    className={`transition-colors ${
                      isConfirmed
                        ? 'bg-[#e8f5e9]/90 hover:bg-[#dff0e0]'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Date */}
                    <td className="font-mono text-[11px] text-slate-600 whitespace-nowrap">
                      {p.date}
                    </td>

                    {/* Supplier */}
                    <td className="font-semibold text-slate-900 text-xs">
                      {p.supplier}
                    </td>

                    {/* Purchase Item */}
                    <td className="font-medium text-slate-800">
                      {p.purchaseItem}
                    </td>

                    {/* Make */}
                    <td>
                      <select
                        value={p.make}
                        onChange={(e) => updatePurchaseLead(p.id, { make: e.target.value })}
                        className="w-full text-xs py-1 px-1.5 border border-slate-200 rounded bg-white"
                      >
                        {MAKES_LIST.map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </td>

                    {/* Quantity */}
                    <td>
                      <input
                        type="number"
                        value={p.qty}
                        onChange={(e) => updatePurchaseLead(p.id, { qty: Number(e.target.value) })}
                        className="w-16 text-xs font-mono py-1 px-1.5 border border-slate-200 rounded text-center bg-white"
                      />
                    </td>

                    {/* Market Rate */}
                    <td className="font-mono text-xs text-slate-500">
                      ₹ {Number(p.marketRate || 0).toLocaleString()}
                    </td>

                    {/* Purchase Rate (editable) */}
                    <td>
                      <input
                        type="number"
                        value={p.purchaseRate}
                        onChange={(e) => updatePurchaseLead(p.id, { purchaseRate: Number(e.target.value) })}
                        className="w-20 text-xs font-mono font-bold text-blue-700 py-1 px-1.5 border border-slate-200 rounded bg-white"
                      />
                    </td>

                    {/* Amount cell: color coded (orange for large, yellow for medium) */}
                    <td>
                      <div className={`px-2 py-0.5 rounded text-xs text-center font-mono whitespace-nowrap ${getAmountColorClass(totalAmount)}`}>
                        ₹ {totalAmount.toLocaleString()}
                      </div>
                    </td>

                    {/* Status */}
                    <td>
                      <select
                        value={p.status}
                        onChange={(e) => updatePurchaseLead(p.id, { status: e.target.value })}
                        className="text-xs font-semibold py-0.5 px-2 rounded-md border text-center bg-white border-slate-300"
                      >
                        {STATUS_LIST.map(st => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </td>

                    {/* Info */}
                    <td>
                      <input
                        type="text"
                        value={p.info || ''}
                        onChange={(e) => updatePurchaseLead(p.id, { info: e.target.value })}
                        className="w-full text-xs py-1 px-1.5 border border-slate-200 rounded bg-white"
                      />
                    </td>

                    {/* Payment Terms */}
                    <td className="text-xs font-medium text-slate-700 whitespace-nowrap">
                      {p.paymentTerms}
                    </td>

                    {/* Delivery */}
                    <td className="text-xs text-slate-600 whitespace-nowrap">
                      {p.delivery}
                    </td>
                  </tr>
                );
              })}

              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={12} className="py-10 text-center text-slate-400">
                    No purchase leads found matching filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
