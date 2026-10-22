import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function NewLeadModal() {
  const {
    isNewLeadOpen,
    setIsNewLeadOpen,
    customers,
    items,
    MAKES_LIST,
    STAFF_LIST,
    addSalesLead,
    setIsExtractorOpen
  } = useCrm();

  const [customer, setCustomer] = useState(customers[0]?.company || '');
  const [item, setItem] = useState(items[0]?.description || '');
  const [make, setMake] = useState('Kodel');
  const [qty, setQty] = useState(50);
  const [unit, setUnit] = useState('KG');
  const [rate, setRate] = useState(4800);
  const [status, setStatus] = useState('Pending');
  const [staff, setStaff] = useState('Eshwari');
  const [stock, setStock] = useState('In Stock');
  const [info, setInfo] = useState('');

  if (!isNewLeadOpen) return null;

  const handleItemSelect = (e) => {
    const selectedDesc = e.target.value;
    setItem(selectedDesc);
    const matched = items.find(i => i.description === selectedDesc);
    if (matched) {
      setRate(matched.rate);
      setMake(matched.make || 'Kodel');
      setStock(matched.stock > 0 ? 'In Stock' : 'No Stock');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSalesLead({
      customer,
      item,
      make,
      qty,
      unit,
      rate,
      status,
      staff,
      stock,
      info
    });
    setIsNewLeadOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-100">
        
        {/* Header */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-800">
              Create New Sales Enquiry (Lead)
            </h3>
            <p className="text-[11px] text-slate-500">Record direct phone enquiry or verbal requirement</p>
          </div>
          <button
            onClick={() => setIsNewLeadOpen(false)}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick doc extractor prompt */}
        <div className="px-5 py-2 bg-purple-50 border-b border-purple-100 flex items-center justify-between text-xs">
          <span className="text-purple-800 text-[11px]">Have an RFQ PDF or WhatsApp image with multiple chemicals?</span>
          <button
            onClick={() => {
              setIsNewLeadOpen(false);
              setIsExtractorOpen(true);
            }}
            className="text-[11px] font-bold text-purple-700 hover:text-purple-900 underline flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-purple-600" />
            Use AI Extractor
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Customer / Pharma Company *</label>
            <select
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 focus:ring-1 focus:ring-blue-500 font-medium"
              required
            >
              {customers.map(c => (
                <option key={c.id} value={c.company}>{c.company}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Chemical Item *</label>
              <select
                value={item}
                onChange={handleItemSelect}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 focus:ring-1 focus:ring-blue-500 font-medium"
              >
                {items.map(i => (
                  <option key={i.id} value={i.description}>{i.description}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Make / Sourcing *</label>
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 focus:ring-1 focus:ring-blue-500"
              >
                {MAKES_LIST.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Quantity</label>
              <div className="flex">
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-l px-2.5 py-1.5 font-mono"
                  min="1"
                  required
                />
                <span className="bg-slate-100 border border-l-0 border-slate-300 px-2 py-1.5 text-xs text-slate-600 font-bold rounded-r">
                  KG
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Rate (₹ / KG)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-mono"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Total Amount (₹)</label>
              <div className="text-xs font-mono font-bold text-slate-800 bg-slate-100 border border-slate-200 rounded px-2.5 py-2">
                ₹ {((Number(qty) || 0) * (Number(rate) || 0)).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2 py-1.5"
              >
                <option value="Pending">Pending</option>
                <option value="Sent">Sent</option>
                <option value="Confirm">Confirm</option>
                <option value="WON">WON</option>
                <option value="NoOffer">NoOffer</option>
                <option value="Reject">Reject</option>
                <option value="Junk">Junk</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Staff Assigned</label>
              <select
                value={staff}
                onChange={(e) => setStaff(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2 py-1.5"
              >
                {STAFF_LIST.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Stock Availability</label>
              <select
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2 py-1.5 font-semibold text-emerald-700"
              >
                <option value="In Stock">In Stock</option>
                <option value="No Stock">No Stock</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Notes / Specific Requirements</label>
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              rows={2}
              placeholder="e.g. Needs immediate dispatch, client asking for 21 days credit terms."
              className="w-full text-xs border border-slate-300 rounded p-2 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsNewLeadOpen(false)}
              className="px-3.5 py-1.5 border border-slate-300 hover:bg-slate-100 rounded text-xs text-slate-700 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Create Lead</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
