import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Download,
  Plus,
  Save,
  MessageSquare,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Building,
  RotateCcw
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function MyLeadsPage() {
  const {
    salesLeads,
    updateSalesLead,
    saveSalesLead,
    bulkUpdateLeadsStatus,
    setIsNewLeadOpen,
    setActiveCommentLead,
    exportLeadsCSV,
    STAFF_LIST,
    MAKES_LIST,
    STATUS_LIST,
    setSelectedCustomerForDetail,
    setActiveTab
  } = useCrm();

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('01-10-2026');
  const [toDate, setToDate] = useState('21-10-2026');
  const [selectedFilterStatus, setSelectedFilterStatus] = useState('All');
  const [selectedFilterStaff, setSelectedFilterStaff] = useState('All');

  // Active status tab
  const [activeStatusTab, setActiveStatusTab] = useState('All');

  // Bulk selection
  const [selectedLeadIds, setSelectedLeadIds] = useState([]);
  const [bulkStatusToApply, setBulkStatusToApply] = useState('Pending');

  // Pagination & Page Size
  const [pageSize, setPageSize] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  // Status Tab Counts
  const counts = useMemo(() => {
    return {
      Sent: salesLeads.filter(l => l.status === 'Sent').length,
      Pending: salesLeads.filter(l => l.status === 'Pending').length,
      Reject: salesLeads.filter(l => l.status === 'Reject').length,
      Confirm: salesLeads.filter(l => l.status === 'Confirm').length,
      NoOffer: salesLeads.filter(l => l.status === 'NoOffer').length,
      Junk: salesLeads.filter(l => l.status === 'Junk').length,
      WON: salesLeads.filter(l => l.status === 'WON').length,
      All: salesLeads.length
    };
  }, [salesLeads]);

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return salesLeads.filter(lead => {
      // Search filter (Item or Customer)
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchCustomer = lead.customer.toLowerCase().includes(q);
        const matchItem = lead.item.toLowerCase().includes(q);
        const matchMake = lead.make.toLowerCase().includes(q);
        if (!matchCustomer && !matchItem && !matchMake) return false;
      }

      // Status Tab filter
      if (activeStatusTab !== 'All' && lead.status !== activeStatusTab) {
        return false;
      }

      // Filter bar status
      if (selectedFilterStatus !== 'All' && lead.status !== selectedFilterStatus) {
        return false;
      }

      // Staff filter
      if (selectedFilterStaff !== 'All' && lead.staff !== selectedFilterStaff) {
        return false;
      }

      return true;
    });
  }, [salesLeads, searchTerm, activeStatusTab, selectedFilterStatus, selectedFilterStaff]);

  // Paginated slice
  const paginatedLeads = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredLeads.slice(startIndex, startIndex + pageSize);
  }, [filteredLeads, currentPage, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filteredLeads.length / pageSize));

  // Toggle selection
  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedLeadIds(paginatedLeads.map(l => l.id));
    } else {
      setSelectedLeadIds([]);
    }
  };

  const handleToggleLead = (id) => {
    setSelectedLeadIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Bulk Apply
  const handleApplyBulkStatus = () => {
    if (selectedLeadIds.length === 0) return;
    bulkUpdateLeadsStatus(selectedLeadIds, bulkStatusToApply);
    setSelectedLeadIds([]);
  };

  // Status Badge Colors
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'WON':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Confirm':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Sent':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Pending':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'NoOffer':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Reject':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'Junk':
        return 'bg-slate-200 text-slate-700 border-slate-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedFilterStatus('All');
    setSelectedFilterStaff('All');
    setActiveStatusTab('All');
  };

  return (
    <div className="space-y-3">
      
      {/* 1. Filter Bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 flex-1">
          
          {/* Text search */}
          <div className="relative min-w-[200px] flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search item or customer..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* From Date */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-semibold text-[11px]">From:</span>
            <input
              type="text"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-24 px-2 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs text-center font-mono"
            />
          </div>

          {/* To Date */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-semibold text-[11px]">To:</span>
            <input
              type="text"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-24 px-2 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs text-center font-mono"
            />
          </div>

          {/* Status Dropdown */}
          <select
            value={selectedFilterStatus}
            onChange={(e) => setSelectedFilterStatus(e.target.value)}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs font-medium text-slate-700"
          >
            <option value="All">All Status</option>
            {STATUS_LIST.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          {/* Staff Dropdown */}
          <select
            value={selectedFilterStaff}
            onChange={(e) => setSelectedFilterStaff(e.target.value)}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs font-medium text-slate-700"
          >
            <option value="All">All Staff</option>
            {STAFF_LIST.map(s => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>

          {/* Reset button */}
          <button
            onClick={handleResetFilters}
            title="Reset Filters"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportLeadsCSV(filteredLeads)}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export</span>
          </button>

          {/* Page Size */}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="px-2 py-1.5 border border-slate-300 rounded text-xs font-medium bg-white"
          >
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={250}>250</option>
          </select>

          {/* + New Lead Button (Black primary) */}
          <button
            onClick={() => setIsNewLeadOpen(true)}
            className="px-3.5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 text-cyan-300" />
            <span>+ New Lead</span>
          </button>
        </div>
      </div>

      {/* 2. Status Tabs with Live Counts */}
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
          const isActive = activeStatusTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => {
                setActiveStatusTab(tab.key);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
                isActive
                  ? 'bg-white shadow-sm border-slate-300 text-slate-900 ring-2 ring-blue-500/30'
                  : 'bg-white/80 border-slate-200/80 text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <span>{tab.key}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono text-white ${tab.color}`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Bulk Action Bar (when rows are selected) */}
      {selectedLeadIds.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 flex items-center justify-between text-xs text-blue-900 animate-in fade-in duration-100">
          <div className="flex items-center gap-3">
            <span className="font-bold text-blue-950">
              {selectedLeadIds.length} lead{selectedLeadIds.length > 1 ? 's' : ''} selected
            </span>
            <div className="h-4 w-px bg-blue-200" />
            <div className="flex items-center gap-2">
              <span className="text-slate-600 font-semibold text-[11px]">Update Status to:</span>
              <select
                value={bulkStatusToApply}
                onChange={(e) => setBulkStatusToApply(e.target.value)}
                className="bg-white border border-blue-300 rounded px-2 py-1 text-xs font-medium"
              >
                {STATUS_LIST.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
              <button
                onClick={handleApplyBulkStatus}
                className="px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded font-bold text-xs shadow-xs"
              >
                Apply
              </button>
            </div>
          </div>

          <button
            onClick={() => setSelectedLeadIds([])}
            className="text-xs text-blue-700 hover:text-blue-900 font-medium"
          >
            Clear Selection
          </button>
        </div>
      )}

      {/* 4. Dense Sales Leads Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700">
              <tr>
                <th className="w-7 text-center">
                  <input
                    type="checkbox"
                    checked={paginatedLeads.length > 0 && paginatedLeads.every(l => selectedLeadIds.includes(l.id))}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-0"
                  />
                </th>
                <th className="w-20">Date</th>
                <th className="min-w-[180px]">Customer (Created)</th>
                <th className="min-w-[130px]">Item</th>
                <th className="w-24">Make</th>
                <th className="w-28">Quantity + Unit</th>
                <th className="w-24">Rate (₹)</th>
                <th className="w-24">Amount (₹)</th>
                <th className="w-24">Status</th>
                <th className="min-w-[160px]">Info</th>
                <th className="w-20">Staff</th>
                <th className="w-20">Stock</th>
                <th className="w-24 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {paginatedLeads.map((lead) => {
                const isWon = lead.status === 'WON';
                const isSelected = selectedLeadIds.includes(lead.id);
                const totalAmount = (Number(lead.qty) || 0) * (Number(lead.rate) || 0);

                return (
                  <tr
                    key={lead.id}
                    className={`transition-colors ${
                      isWon
                        ? 'bg-[#e8f5e9]/90 hover:bg-[#dff0e0]'
                        : isSelected
                        ? 'bg-blue-50/70 hover:bg-blue-50'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleToggleLead(lead.id)}
                        className="rounded text-blue-600 focus:ring-0"
                      />
                    </td>

                    {/* Date */}
                    <td className="font-mono text-[11px] text-slate-600 whitespace-nowrap">
                      {lead.date}
                    </td>

                    {/* Customer + created timestamp */}
                    <td>
                      <div
                        onClick={() => {
                          setSelectedCustomerForDetail(lead.customer);
                          setActiveTab('Customers');
                        }}
                        className="font-semibold text-slate-900 hover:text-blue-600 cursor-pointer text-xs truncate max-w-[220px]"
                        title={lead.customer}
                      >
                        {lead.customer}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        ({lead.createdTime})
                      </div>
                    </td>

                    {/* Item */}
                    <td className="font-medium text-slate-800 whitespace-nowrap">
                      {lead.item}
                    </td>

                    {/* Make (editable dropdown) */}
                    <td>
                      <select
                        value={lead.make}
                        onChange={(e) => updateSalesLead(lead.id, { make: e.target.value })}
                        className="w-full text-xs py-1 px-1.5 border border-slate-200 rounded bg-white hover:border-slate-300 focus:border-blue-500 focus:ring-0"
                      >
                        {MAKES_LIST.map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </td>

                    {/* Quantity + Unit (KG) */}
                    <td>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={lead.qty}
                          onChange={(e) => updateSalesLead(lead.id, { qty: Number(e.target.value) })}
                          className="w-14 text-xs font-mono py-1 px-1.5 border border-slate-200 rounded text-center bg-white"
                          min="1"
                        />
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1 py-1 rounded">
                          {lead.unit}
                        </span>
                      </div>
                    </td>

                    {/* Rate (editable) */}
                    <td>
                      <input
                        type="number"
                        value={lead.rate}
                        onChange={(e) => updateSalesLead(lead.id, { rate: Number(e.target.value) })}
                        className="w-18 text-xs font-mono font-medium py-1 px-1.5 border border-slate-200 rounded bg-white"
                      />
                    </td>

                    {/* Amount (auto = qty x rate) */}
                    <td className="font-mono font-bold text-slate-800 whitespace-nowrap">
                      ₹ {totalAmount.toLocaleString()}
                    </td>

                    {/* Status (dropdown with pill styling) */}
                    <td>
                      <select
                        value={lead.status}
                        onChange={(e) => updateSalesLead(lead.id, { status: e.target.value })}
                        className={`text-xs font-semibold py-0.5 px-2 rounded-md border text-center shadow-2xs focus:ring-0 ${getStatusBadgeStyle(lead.status)}`}
                      >
                        {STATUS_LIST.map(st => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </td>

                    {/* Info (editable note input) */}
                    <td>
                      <input
                        type="text"
                        value={lead.info || ''}
                        onChange={(e) => updateSalesLead(lead.id, { info: e.target.value })}
                        placeholder="Add note..."
                        className="w-full text-xs py-1 px-1.5 border border-slate-200 rounded bg-white truncate"
                        title={lead.info}
                      />
                    </td>

                    {/* Staff */}
                    <td className="text-slate-700 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="text-xs font-medium">{lead.staff}</span>
                      </span>
                    </td>

                    {/* Stock (In Stock / No Stock) */}
                    <td>
                      <span
                        className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          lead.stock === 'In Stock'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {lead.stock}
                      </span>
                    </td>

                    {/* Action: Red Save Button + Add Comment Link */}
                    <td className="text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        {/* Red Save Button as specified */}
                        <button
                          onClick={() => saveSalesLead(lead.id)}
                          className="px-2 py-0.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded text-[11px] shadow-xs active:scale-95 transition-transform"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => setActiveCommentLead(lead)}
                          className="text-blue-600 hover:text-blue-800 text-[11px] font-medium hover:underline flex items-center gap-0.5"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Add Comment</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {paginatedLeads.length === 0 && (
                <tr>
                  <td colSpan={13} className="py-12 text-center text-slate-400">
                    No sales leads match your filters. Try clearing search or status filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 5. Pagination & Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 border border-slate-300 rounded disabled:opacity-40 hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`w-7 h-7 rounded text-xs font-semibold ${
                  currentPage === pageNumber
                    ? 'bg-blue-600 text-white font-bold'
                    : 'border border-slate-300 hover:bg-white text-slate-700'
                }`}
              >
                {pageNumber}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1 border border-slate-300 rounded disabled:opacity-40 hover:bg-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-slate-500 font-medium">
            Showing {filteredLeads.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} -{' '}
            {Math.min(currentPage * pageSize, filteredLeads.length)} of {filteredLeads.length} leads
          </div>
        </div>

      </div>

    </div>
  );
}
