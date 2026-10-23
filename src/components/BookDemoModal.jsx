import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, FlaskConical, FileText, Send, Building2, User, Phone, Mail } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function BookDemoModal() {
  const { isDemoModalOpen, setIsDemoModalOpen, showToast } = useCrm();

  const [formData, setFormData] = useState({
    product_name: 'PARACETAMOL',
    category_name: 'Analgesic / NSAID',
    customer_name: '',
    customer_email: '',
    company_name: '',
    customer_phone: '',
    target_quantity: '',
    incoterm: 'Ex-Warehouse (Mumbai / Gujarat)',
    docs: ['Batch COA', 'GMP Certificate'],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Listen for custom open events with product details
  useEffect(() => {
    const handleSetInquiryProduct = (e) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          product_name: e.detail.product || prev.product_name,
          category_name: e.detail.category || prev.category_name
        }));
      }
    };
    window.addEventListener('setInquiryProduct', handleSetInquiryProduct);
    return () => window.removeEventListener('setInquiryProduct', handleSetInquiryProduct);
  }, []);

  if (!isDemoModalOpen) return null;

  const handleDocToggle = (docName) => {
    setFormData((prev) => {
      const exists = prev.docs.includes(docName);
      return {
        ...prev,
        docs: exists ? prev.docs.filter(d => d !== docName) : [...prev.docs, docName]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customer_name || !formData.customer_email || !formData.company_name || !formData.customer_phone) {
      showToast('Please complete all required fields (*).', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast(`RFQ dispatched to HAP Enterprise Desk for ${formData.product_name}!`, 'success');
    }, 700);
  };

  const handleClose = () => {
    setIsDemoModalOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (HAP Gradient: Royal Blue #004B9B to HAP Red #EE1C25) */}
        <div className="bg-gradient-to-r from-[#004B9B] via-[#003875] to-[#EE1C25] text-white p-5 sm:p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white text-[#EE1C25] font-extrabold text-base flex items-center justify-center shadow-md">
              H
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                Commercial Sourcing Inquiry & COA
              </h2>
              <p className="text-2xs sm:text-xs text-blue-100 font-medium">
                HAP Enterprise • Sourcing & Sourcing Expert Desk
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Commercial RFQ Received!</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.customer_name}</span> ({formData.company_name}). Your sourcing inquiry for <span className="font-bold text-[#004B9B]">{formData.product_name}</span> has been logged with our regulatory and commercial sourcing team.
              </p>

              <div className="mt-5 p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <div className="flex items-center justify-between text-slate-900 font-semibold border-b pb-2">
                  <span>Requested Quality Packets:</span>
                  <span className="text-emerald-700">{formData.docs.join(', ') || 'Batch COA'}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Target Batch Volume:</span>
                  <span className="font-bold text-slate-800">{formData.target_quantity || 'Commercial Batch'}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Delivery Term:</span>
                  <span className="font-bold text-slate-800">{formData.incoterm}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:inquiry@hapenterprise.com?subject=RFQ Inquiry for ${encodeURIComponent(formData.product_name)} - ${encodeURIComponent(formData.company_name)}&body=Product: ${encodeURIComponent(formData.product_name)}%0D%0ACustomer: ${encodeURIComponent(formData.customer_name)}%0D%0ACompany: ${encodeURIComponent(formData.company_name)}%0D%0APhone: ${encodeURIComponent(formData.customer_phone)}%0D%0AVolume: ${encodeURIComponent(formData.target_quantity)}`}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email to Desk</span>
                </a>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product and Category Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3 bg-blue-50/60 rounded-xl border border-blue-200/80">
                <div className="sm:col-span-7">
                  <label className="block text-2xs font-bold uppercase tracking-wider text-[#004B9B] mb-1">
                    Selected Active Ingredient (API) *
                  </label>
                  <div className="relative">
                    <FlaskConical className="w-4 h-4 text-[#004B9B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.product_name}
                      onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                      placeholder="e.g. Paracetamol, Metformin HCL, Febuxostat"
                      className="w-full text-xs font-bold text-[#004B9B] pl-9 pr-3 py-2 bg-white border border-blue-300 rounded-lg focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Therapeutic Class
                  </label>
                  <input
                    type="text"
                    value={formData.category_name}
                    onChange={(e) => setFormData({ ...formData, category_name: e.target.value })}
                    placeholder="e.g. Analgesic / NSAID"
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 outline-none"
                  />
                </div>
              </div>

              {/* Buyer Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Mr. / Ms. Full Name"
                      value={formData.customer_name}
                      onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                      className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="purchase@formulations-corp.com"
                      value={formData.customer_email}
                      onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                      className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Company / Manufacturing Plant *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Pharma Laboratories Ltd."
                      value={formData.company_name}
                      onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                      className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.customer_phone}
                      onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                      className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity and Delivery Terms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Target Batch Volume
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 500 KG / 2 MT / Sample Pack"
                    value={formData.target_quantity}
                    onChange={(e) => setFormData({ ...formData, target_quantity: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Required Delivery Term
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all"
                  >
                    <option>Ex-Warehouse (Mumbai / Gujarat)</option>
                    <option>FOB Indian Port</option>
                    <option>CIF Destination Seaport / Airport</option>
                    <option>Door Delivery (PAN India)</option>
                  </select>
                </div>
              </div>

              {/* Requested Quality Packets */}
              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Requested Quality Packets
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  {['Batch COA', 'GMP Certificate', 'Open Part DMF', 'MSDS / Tech Data'].map((doc) => {
                    const isChecked = formData.docs.includes(doc);
                    return (
                      <label key={doc} className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-700">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleDocToggle(doc)}
                          className="w-4 h-4 text-[#EE1C25] rounded focus:ring-[#EE1C25]"
                        />
                        <span className="font-medium">{doc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Compendial Standard & Additional Notes */}
              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Compendial Standard & Additional Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify USP / BP / EP / IP compendia, mesh size, required delivery date, or destination country..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct Encrypted Dispatch to HAP Sourcing Desk</span>
                </span>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs font-bold rounded-xl shadow-md shadow-red-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Dispatching RFQ...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send RFQ to Desk</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
