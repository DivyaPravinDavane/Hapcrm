import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function NewPurchaseModal() {
  const { isNewPurchaseOpen, setIsNewPurchaseOpen, addPurchaseLead, items, MAKES_LIST } = useCrm();

  const [supplier, setSupplier] = useState('CALYX CHEMICALS & PHARMACEUTICALS');
  const [purchaseItem, setPurchaseItem] = useState('Linezolid IP');
  const [make, setMake] = useState('Kodel');
  const [qty, setQty] = useState(100);
  const [marketRate, setMarketRate] = useState(4800);
  const [purchaseRate, setPurchaseRate] = useState(4300);
  const [paymentTerms, setPaymentTerms] = useState('30 Days PDC');
  const [delivery, setDelivery] = useState('Ready Stock');
  const [info, setInfo] = useState('');

  if (!isNewPurchaseOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addPurchaseLead({
      supplier,
      purchaseItem,
      make,
      qty,
      marketRate,
      purchaseRate,
      paymentTerms,
      delivery,
      info
    });
    setIsNewPurchaseOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-100">
        
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-800">
              New Purchase Enquiry / Sourcing Rate
            </h3>
            <p className="text-[11px] text-slate-500">Log supplier quote or RFQ</p>
          </div>
          <button onClick={() => setIsNewPurchaseOpen(false)} className="text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Supplier / Manufacturer *</label>
            <input
              type="text"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 focus:ring-1 focus:ring-blue-500 font-medium"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Chemical Item</label>
              <select
                value={purchaseItem}
                onChange={(e) => setPurchaseItem(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-medium"
              >
                {items.map(i => (
                  <option key={i.id} value={i.description}>{i.description}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Make</label>
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
              >
                {MAKES_LIST.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Quantity (KG)</label>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-mono"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Market Rate (₹)</label>
              <input
                type="number"
                value={marketRate}
                onChange={(e) => setMarketRate(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Purchase Rate (₹)</label>
              <input
                type="number"
                value={purchaseRate}
                onChange={(e) => setPurchaseRate(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-mono font-bold text-blue-700"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Payment Terms</label>
              <input
                type="text"
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
                placeholder="e.g. 30 Days PDC, CAD"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Delivery Schedule</label>
              <input
                type="text"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
                placeholder="e.g. Ready Stock, 5-7 Days"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Sourcing Notes / Batch Specs</label>
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              rows={2}
              className="w-full text-xs border border-slate-300 rounded p-2"
              placeholder="e.g. Ready in Ankleshwar plant, assay 99.8%"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsNewPurchaseOpen(false)}
              className="px-3.5 py-1.5 border border-slate-300 hover:bg-slate-100 rounded text-xs text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow"
            >
              Save Purchase Lead
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
