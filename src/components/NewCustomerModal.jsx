import React, { useState } from 'react';
import { X, Building } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function NewCustomerModal() {
  const { isNewCustomerOpen, setIsNewCustomerOpen, addCustomer } = useCrm();

  const [company, setCompany] = useState('');
  const [primaryContact, setPrimaryContact] = useState('');
  const [primaryEmail, setPrimaryEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gstin, setGstin] = useState('');
  const [address, setAddress] = useState('');
  const [group, setGroup] = useState('API Buyer');

  if (!isNewCustomerOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company) return;
    addCustomer({
      company,
      primaryContact: primaryContact || 'Purchase Head',
      primaryEmail: primaryEmail || 'purchase@company.com',
      phone: phone || '+91 98000 00000',
      gstin: gstin || '27AABCZ0000F1Z1',
      address,
      groups: [group, 'Formulation']
    });
    setIsNewCustomerOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-100">
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold text-slate-800">Add New Customer</h3>
          </div>
          <button onClick={() => setIsNewCustomerOpen(false)} className="text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Company Name *</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. ZYMETH PHARMACEUTICALS PVT LTD-492614"
              className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 focus:ring-1 focus:ring-blue-500 font-semibold"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Primary Contact Person</label>
              <input
                type="text"
                value={primaryContact}
                onChange={(e) => setPrimaryContact(e.target.value)}
                placeholder="Mr. Rajesh Shah"
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Phone / Mobile</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98201 00000"
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Email</label>
              <input
                type="email"
                value={primaryEmail}
                onChange={(e) => setPrimaryEmail(e.target.value)}
                placeholder="purchase@pharma.com"
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">GSTIN Number</label>
              <input
                type="text"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
                placeholder="27AABCZ1234F1Z8"
                className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5 uppercase font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Customer Group Category</label>
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full text-xs border border-slate-300 rounded px-2.5 py-1.5"
            >
              <option value="API Buyer">API Buyer</option>
              <option value="Formulation">Formulation Plant</option>
              <option value="Direct Pharma">Direct Pharma Manufacturer</option>
              <option value="Wholesaler">Wholesaler / Stockist</option>
              <option value="Trader">Trader</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Factory / Office Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={2}
              placeholder="MIDC Tarapur, Palghar, Maharashtra"
              className="w-full text-xs border border-slate-300 rounded p-2"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsNewCustomerOpen(false)}
              className="px-3.5 py-1.5 border border-slate-300 hover:bg-slate-100 rounded text-xs text-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow"
            >
              Create Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
