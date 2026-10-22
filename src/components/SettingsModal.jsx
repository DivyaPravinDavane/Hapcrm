import React, { useState } from 'react';
import { X, Sliders, Check } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function SettingsModal() {
  const { isSettingsOpen, setIsSettingsOpen, showToast } = useCrm();

  const [defaultStaff, setDefaultStaff] = useState('Eshwari');
  const [defaultGst, setDefaultGst] = useState('18% GST');
  const [hubLocation, setHubLocation] = useState('Bhiwandi Central Hub, MH');
  const [autoConfetti, setAutoConfetti] = useState(true);

  if (!isSettingsOpen) return null;

  const handleSave = () => {
    setIsSettingsOpen(false);
    showToast('CRM Settings saved successfully!', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-100">
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold text-slate-800">HAP Enterprise CRM Settings</h3>
          </div>
          <button onClick={() => setIsSettingsOpen(false)} className="text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Default Logged-in Staff Member</label>
            <select
              value={defaultStaff}
              onChange={(e) => setDefaultStaff(e.target.value)}
              className="w-full border border-slate-300 rounded p-2 text-xs"
            >
              <option value="Eshwari">Eshwari (Sr. Sales Specialist)</option>
              <option value="Aishwarya">Aishwarya (Key Accounts)</option>
              <option value="Amisha">Amisha (Sourcing Head)</option>
              <option value="Disha">Disha (Operations)</option>
              <option value="Akanksha">Akanksha (Quotations)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Default Tax & Quotation Terms</label>
            <input
              type="text"
              value={defaultGst}
              onChange={(e) => setDefaultGst(e.target.value)}
              className="w-full border border-slate-300 rounded p-2 text-xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Primary Warehouse Location</label>
            <input
              type="text"
              value={hubLocation}
              onChange={(e) => setHubLocation(e.target.value)}
              className="w-full border border-slate-300 rounded p-2 text-xs"
            />
          </div>

          <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
            <div>
              <div className="font-semibold text-slate-800">Celebration Effects</div>
              <div className="text-[11px] text-slate-500">Trigger confetti on WON deals & Lead creation</div>
            </div>
            <input
              type="checkbox"
              checked={autoConfetti}
              onChange={(e) => setAutoConfetti(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="px-3.5 py-1.5 border border-slate-300 hover:bg-slate-100 rounded text-xs text-slate-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Preferences</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
