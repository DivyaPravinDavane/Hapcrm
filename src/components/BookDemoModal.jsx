import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function BookDemoModal() {
  const { isDemoModalOpen, setIsDemoModalOpen, showToast } = useCrm();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    segment: 'Active Pharmaceutical Ingredients (APIs)',
    requirement: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isDemoModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      showToast('Please fill in required fields: Name, Email, and Mobile.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast('Demo request received! Our pharma specialist will reach out within 15 minutes.', 'success');
    }, 800);
  };

  const handleClose = () => {
    setIsDemoModalOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-800 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-emerald-200 border border-white/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Personalized 1-on-1 Walkthrough</span>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white">Book a Free Live Demo</h2>
          <p className="text-xs text-emerald-100/90 mt-1">
            See how PharmaChemi automates API inquiries, field MR reporting, and distributor sales.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Demo Scheduled Successfully!</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. A PharmaChemi solution architect will contact you at <span className="font-semibold text-slate-800">{formData.email}</span>.
              </p>

              <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>Next Steps:</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 pl-6">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Expect a calendar invite and WhatsApp confirmation shortly.</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="mt-6 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Formulations Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@apexpharma.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 12345"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Primary Business Segment
                </label>
                <select
                  value={formData.segment}
                  onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                >
                  <option>Active Pharmaceutical Ingredients (APIs)</option>
                  <option>Bulk Drugs & Fine Chemicals</option>
                  <option>Finished Dosage Formulations (FDF)</option>
                  <option>Excipients & Intermediates</option>
                  <option>Chemical Trading & Distribution</option>
                  <option>Contract Research & Manufacturing (CRAMS)</option>
                </select>
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Specific Requirements or Team Size
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to improve (e.g. 25 Field MRs, WhatsApp RFQ intake, faster quotation dispatch)..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Confirming Appointment...</span>
                  </span>
                ) : (
                  <>
                    <span>Confirm Free Demo Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No credit card required</span>
                </span>
                <span>•</span>
                <span>100% Private & Confidential</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
