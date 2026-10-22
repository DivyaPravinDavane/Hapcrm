import React, { useState } from 'react';
import { X, Package } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function NewItemModal() {
  const { isNewItemOpen, setIsNewItemOpen, addItem, MAKES_LIST } = useCrm();

  const [description, setDescription] = useState('');
  const [casNo, setCasNo] = useState('');
  const [rate, setRate] = useState(3500);
  const [stock, setStock] = useState(100);
  const [make, setMake] = useState('Kodel');
  const [groupName, setGroupName] = useState('Active Pharmaceutical Ingredients (API)');
  const [packing, setPacking] = useState('25 KG HDPE Drum');
  const [delivery, setDelivery] = useState('Ready Stock');
  const [remark, setRemark] = useState('Store below 25°C. Protected from light.');

  if (!isNewItemOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    addItem({
      description,
      casNo,
      rate,
      stock,
      make,
      groupName,
      packing,
      delivery,
      remark
    });
    setIsNewItemOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-100">
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-purple-600" />
            <h3 className="text-xs font-bold text-slate-800">Add New Item to Product Master</h3>
          </div>
          <button onClick={() => setIsNewItemOpen(false)} className="text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Chemical / API Description *</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Linezolid IP"
              className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 focus:ring-1 focus:ring-blue-500 font-semibold"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">CAS Number</label>
              <input
                type="text"
                value={casNo}
                onChange={(e) => setCasNo(e.target.value)}
                placeholder="165800-06-6"
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-mono"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Primary Make / Sourcing</label>
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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Base Rate (₹ / KG)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-mono font-bold text-blue-700"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Initial Stock (KG)</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Standard Packing</label>
              <input
                type="text"
                value={packing}
                onChange={(e) => setPacking(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Delivery Location / Hub</label>
              <input
                type="text"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Therapeutic Group / Category</label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Storage & Handling Remarks</label>
            <textarea
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              rows={2}
              className="w-full text-xs border border-slate-300 rounded p-2"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsNewItemOpen(false)}
              className="px-3.5 py-1.5 border border-slate-300 hover:bg-slate-100 rounded text-xs text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow"
            >
              Save Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
