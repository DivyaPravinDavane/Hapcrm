import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  FlaskConical
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function ContactPage() {
  const { showToast, launchCrmDemo } = useCrm();

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'API Sourcing RFQ',
    productName: '',
    casNumber: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Thank you! Your inquiry has been forwarded to the Pharma Chemi Sourcing Desk.', 'success');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. HERO HEADER */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-[#003875] via-[#004B9B] to-[#0A66C2] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold">
            <Mail className="w-4 h-4 text-cyan-300" />
            <span>COMMERCIAL SOURCING DESK & SOFTWARE DEMO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Contact Pharma Chemi <br />
            <span className="text-cyan-200">Commercial Sourcing & Technical Team</span>
          </h1>

          <p className="text-sm sm:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Submit your Active Pharmaceutical Ingredient (API) request, custom chemical synthesis requirement, or request a customized walkthrough of the Pharma Chemi platform.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919324265877?text=Hello%20Pharma%20Chemi%2C%20I%20am%20interested%20in%20sourcing%20Active%20Pharmaceutical%20Ingredients%20(APIs)."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-emerald-500/30 flex items-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 9324265877)</span>
            </a>

            <button
              onClick={launchCrmDemo}
              className="px-6 py-3.5 bg-slate-900 hover:bg-black text-cyan-300 text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Live CRM Sandbox</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 5 Cols: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Get in Touch Directly</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Our sourcing specialists in Mumbai and Gujarat respond to commercial inquiries within 2 hours.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Mumbai Office */}
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#EE1C25] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Corporate Head Office (Mumbai)</h4>
                    <p className="text-2xs text-slate-600 mt-0.5 leading-relaxed">
                      Shop No. 4, Gorai Disha CHS ltd, L T Road, Gorai Plot No. 50, Gorai, Borivali (West), Mumbai - 400 092 INDIA
                    </p>
                  </div>
                </div>

                {/* Gujarat Plant */}
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004B9B] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Manufacturing Unit (Lanco Industries)</h4>
                    <p className="text-2xs text-slate-600 mt-0.5 leading-relaxed">
                      Chemical Zone, GIDC, Gujarat, INDIA (Statutory Govt of Gujarat Clearances, Progressive WHO-GMP)
                    </p>
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Commercial Sourcing Desk</h4>
                    <a href="mailto:inquiry@hapenterprise.com" className="text-[#004B9B] hover:underline font-semibold block mt-0.5">
                      inquiry@hapenterprise.com
                    </a>
                    <span className="text-2xs text-slate-500 font-mono">Domain: pharmachemi.com / hapenterprise.com</span>
                  </div>
                </div>

                {/* Phone Contacts */}
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Direct Telephones</h4>
                    <p className="font-semibold text-slate-800 mt-0.5">
                      +91 93234265877 / +91 9324517446
                    </p>
                    <span className="text-2xs text-slate-500">Mon - Sat: 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Compliance Guarantee Box */}
            <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Quality & Regulatory Assurance</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Batch-specific Certificates of Analysis (COA), Open-Part Drug Master Files (DMF), Written Confirmations (WC), and MSDS sheets provided with each commercial batch.
              </p>
            </div>

          </div>

          {/* Right 7 Cols: Commercial RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
              
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#EE1C25] text-2xs font-extrabold uppercase">
                  <span>ONLINE RFQ DISPATCH</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Commercial Sourcing & Software Inquiry Form
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your chemical requirements below to receive formal quotations and COA specifications.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Inquiry Dispatched Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{form.name}</strong>. Our sourcing desk at Pharma Chemi has received your request and will contact you shortly at <span className="text-[#004B9B] font-mono">{form.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Shah"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Zydus Healthcare Ltd"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="purchase@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                        Contact Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                        Inquiry Purpose
                      </label>
                      <select
                        value={form.inquiryType}
                        onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium cursor-pointer"
                      >
                        <option value="API Sourcing RFQ">API Sourcing RFQ</option>
                        <option value="Lanco Custom Synthesis">Lanco Custom Synthesis</option>
                        <option value="Software CRM Demo">Software CRM Demo</option>
                        <option value="Regulatory / COA / DMF">Regulatory / COA / DMF</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                        Product / Chemical
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Paracetamol"
                        value={form.productName}
                        onChange={(e) => setForm({ ...form, productName: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                        Quantity (KG / MT)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 KG"
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Requirement Details / Specifications *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please specify target pharmacopeial grade (USP/BP/EP/IP), target delivery timeline, packing drum requirements, or any specific software inquiry."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Dispatching to Sourcing Desk...' : 'Submit Commercial RFQ'}</span>
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct encrypted dispatch to Pharma Chemi Commercial Desk.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
