import React, { useState } from 'react';
import {
  Lock,
  Mail,
  User,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowRight,
  Building
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function AuthPage() {
  const { login, STAFF_LIST, showToast } = useCrm();

  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('eshwari@hapenterprise.com');
  const [password, setPassword] = useState('admin123');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Sales & Sourcing Specialist');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Quick 1-click login preset profiles
  const quickStaffPresets = [
    { name: 'Eshwari', role: 'Sr. Sales & Sourcing Specialist', email: 'eshwari@hapenterprise.com', color: 'bg-indigo-600' },
    { name: 'Aishwarya', role: 'Key Account Executive', email: 'aishwarya@hapenterprise.com', color: 'bg-emerald-600' },
    { name: 'Amisha', role: 'Commercial Sourcing Manager', email: 'amisha@hapenterprise.com', color: 'bg-cyan-600' },
    { name: 'Disha', role: 'Customer Relations Executive', email: 'disha@hapenterprise.com', color: 'bg-amber-600' },
    { name: 'Akanksha', role: 'Operations & Quotation Lead', email: 'akanksha@hapenterprise.com', color: 'bg-rose-600' },
  ];

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Find matching staff preset or fallback to entered email/name
      const matched = quickStaffPresets.find(s => s.email.toLowerCase() === email.toLowerCase()) || {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        role: 'Staff Member',
        color: 'bg-blue-600'
      };

      login(matched);
      setIsLoading(false);
      showToast(`Welcome back, ${matched.name}!`, 'success');
    }, 400);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast('Please enter your full name.', 'error');
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      const newUser = {
        name: name,
        email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@hapenterprise.com`,
        role: role,
        color: 'bg-blue-700'
      };

      login(newUser);
      setIsLoading(false);
      showToast(`Account created for ${newUser.name}! Welcome to HAP CRM.`, 'success');
    }, 500);
  };

  const handleQuickLogin = (preset) => {
    setEmail(preset.email);
    setPassword('••••••••••');
    login(preset);
    showToast(`Signed in as ${preset.name} (${preset.role})`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#E3EEF8] flex flex-col justify-center items-center p-4 sm:p-6 font-sans relative overflow-hidden select-none">
      
      {/* Decorative background chemical elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden relative z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Navy Branding Header */}
        <div className="bg-[#3A3F9E] text-white p-6 text-center relative">
          <div className="w-12 h-12 rounded-xl bg-blue-500/30 border border-blue-400/40 mx-auto flex items-center justify-center mb-2 shadow-inner">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-cyan-300 stroke-current fill-none stroke-2">
              <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
              <circle cx="12" cy="12" r="3" fill="#38bdf8" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center justify-center gap-1.5">
            <span>HAP Enterprise</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-600/70 px-1.5 py-0.5 rounded text-blue-200">CRM</span>
          </h1>
          <p className="text-xs text-blue-200 mt-1">Pharma Chemicals & API Trading Platform</p>

          {/* Mode Switcher Tabs */}
          <div className="mt-5 bg-[#2D3282] p-1 rounded-lg grid grid-cols-2 text-xs font-semibold">
            <button
              onClick={() => setMode('signin')}
              className={`py-1.5 rounded-md transition-all ${
                mode === 'signin'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`py-1.5 rounded-md transition-all ${
                mode === 'signup'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {mode === 'signin' ? (
            /* --- SIGN IN FORM --- */
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Work Email / Staff ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eshwari@hapenterprise.com"
                    required
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => showToast('Password reset link sent to registered email.', 'info')}
                    className="text-[11px] text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    className="w-full pl-9 pr-10 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono bg-slate-50/50 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded text-blue-600 focus:ring-0"
                  />
                  <span>Keep me logged in</span>
                </label>
              </div>

              {/* Submit Black Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-black hover:bg-slate-900 text-white rounded-lg text-xs font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In to CRM Desk</span>
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* --- SIGN UP FORM --- */
            <form onSubmit={handleSignUp} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kulkarni"
                    required
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Official Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ramesh@hapenterprise.com"
                    required
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Department / Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Sr. Sales & Sourcing Specialist">Sales & Sourcing Specialist</option>
                  <option value="Key Account Executive">Key Account Executive</option>
                  <option value="Commercial Sourcing Manager">Commercial Sourcing Manager</option>
                  <option value="Customer Relations Executive">Customer Relations Executive</option>
                  <option value="Accounts & Finance Officer">Accounts & Finance Officer</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Create Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="password"
                    defaultValue="password123"
                    required
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-start gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>By signing up, you agree to HAP Enterprise internal trading compliance and NDA protocols.</span>
              </div>

              {/* Submit Black Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-black hover:bg-slate-900 text-white rounded-lg text-xs font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <span>Create Staff Account</span>
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>HAP Enterprise CRM v2.4</span>
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Server Online
          </span>
        </div>

      </div>

    </div>
  );
}
