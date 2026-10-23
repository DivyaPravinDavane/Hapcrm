import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Zap, Building2, User, Phone, Mail } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function FreeTrialModal() {
  const { isTrialModalOpen, setIsTrialModalOpen, launchCrmDemo, showToast } = useCrm();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isTrialModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      showToast('Please fill all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast('14-Day Free Sandbox workspace provisioned!', 'success');
    }, 700);
  };

  const handleClose = () => {
    setIsTrialModalOpen(false);
    setIsSuccess(false);
  };

  const handleEnterWorkspace = () => {
    handleClose();
    launchCrmDemo();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>14-Day Full Access Trial</span>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white">Start Your Free Sandbox</h2>
          <p className="text-xs text-slate-300 mt-1">
            Experience complete Pharma Chemi CRM capabilities without any credit card.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Your Sandbox is Ready!</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                Welcome aboard, <span className="font-semibold text-slate-800">{formData.name}</span>. You can test drive the full CRM interface immediately.
              </p>

              <button
                onClick={handleEnterWorkspace}
                className="mt-6 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Launch Interactive Workspace Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Contact Person *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Company Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your pharma / chemical company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Work Email ID *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 Mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Provisioning Trial...</span>
                  </span>
                ) : (
                  <>
                    <span>Start Free Trial Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No card needed</span>
                </span>
                <span>•</span>
                <span>Instant 2-minute setup</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
