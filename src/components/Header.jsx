import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Plus,
  Settings,
  LogOut,
  Share2,
  CheckSquare,
  Clock,
  Bell,
  ChevronDown,
  FileText,
  Users,
  Package,
  Layers,
  Globe,
  X
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function Header() {
  const {
    globalSearchQuery,
    setGlobalSearchQuery,
    salesLeads,
    customers,
    items,
    setIsExtractorOpen,
    setIsNewLeadOpen,
    setIsNewPurchaseOpen,
    setIsNewCustomerOpen,
    setIsNewItemOpen,
    setIsSettingsOpen,
    setActiveTab,
    showToast,
    currentUser,
    logout,
    goToWebsite
  } = useCrm();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(4520);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchRef = useRef(null);
  const notifRef = useRef(null);
  const quickAddRef = useRef(null);

  // Timer interval
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Close popovers when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (quickAddRef.current && !quickAddRef.current.contains(event.target)) {
        setShowQuickAdd(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered global search results
  const searchResults = React.useMemo(() => {
    if (!globalSearchQuery || globalSearchQuery.trim().length < 2) return null;
    const q = globalSearchQuery.toLowerCase();
    const matchingLeads = salesLeads.filter(
      l => l.customer.toLowerCase().includes(q) || l.item.toLowerCase().includes(q)
    ).slice(0, 4);
    const matchingCustomers = customers.filter(
      c => c.company.toLowerCase().includes(q) || c.primaryContact.toLowerCase().includes(q)
    ).slice(0, 3);
    const matchingItems = items.filter(
      i => i.description.toLowerCase().includes(q) || i.casNo.toLowerCase().includes(q)
    ).slice(0, 3);

    return { leads: matchingLeads, customers: matchingCustomers, items: matchingItems };
  }, [globalSearchQuery, salesLeads, customers, items]);

  return (
    <header className="bg-[#3A3F9E] text-white shadow-md relative z-40">
      <div className="max-w-[1920px] mx-auto px-4 py-2 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div 
          onClick={() => setActiveTab('Dashboard')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500/30 border border-blue-400/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-cyan-300 stroke-current fill-none stroke-2">
              <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
              <circle cx="12" cy="12" r="3" fill="#38bdf8" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white">PHARMA CHEMI</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-600/60 px-1.5 py-0.5 rounded text-blue-200">CRM</span>
            </div>
            <p className="text-[10px] text-blue-200 -mt-0.5 tracking-tight hidden sm:block">Software for Pharmaceuticals & Chemical Industries</p>
          </div>
        </div>

        {/* Center: Global Search Box */}
        <div className="flex-1 max-w-xl relative" ref={searchRef}>
          <div className="relative">
            <Search className="w-4 h-4 text-blue-300 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={globalSearchQuery}
              onChange={(e) => {
                setGlobalSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              placeholder="Search customer, item, supplier, item code..."
              className="w-full bg-white text-slate-800 placeholder-slate-400 pl-9 pr-8 py-1.5 rounded-md text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            {globalSearchQuery && (
              <button 
                onClick={() => setGlobalSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Live Search Dropdown */}
          {showSearchResults && searchResults && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white text-slate-800 rounded-lg shadow-2xl border border-slate-200 overflow-hidden z-50 text-xs">
              <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                <span>Search Results for "{globalSearchQuery}"</span>
                <span className="text-[10px] text-slate-400">Esc to close</span>
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                {/* Leads */}
                {searchResults.leads.length > 0 && (
                  <div className="p-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">Sales Leads</span>
                    {searchResults.leads.map(lead => (
                      <div
                        key={lead.id}
                        onClick={() => {
                          setActiveTab('My Leads');
                          setShowSearchResults(false);
                        }}
                        className="p-1.5 hover:bg-blue-50 rounded flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-800">{lead.customer}</div>
                          <div className="text-[11px] text-slate-500">{lead.item} · {lead.qty} {lead.unit} @ ₹{lead.rate.toLocaleString()}</div>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-slate-100 text-slate-700">
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Customers */}
                {searchResults.customers.length > 0 && (
                  <div className="p-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">Customers</span>
                    {searchResults.customers.map(c => (
                      <div
                        key={c.id}
                        onClick={() => {
                          setActiveTab('Customers');
                          setShowSearchResults(false);
                        }}
                        className="p-1.5 hover:bg-emerald-50 rounded flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-800">{c.company}</div>
                          <div className="text-[11px] text-slate-500">{c.primaryContact} · {c.phone}</div>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-emerald-100 text-emerald-800">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items */}
                {searchResults.items.length > 0 && (
                  <div className="p-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 block mb-1">Products Master</span>
                    {searchResults.items.map(i => (
                      <div
                        key={i.id}
                        onClick={() => {
                          setActiveTab('Items');
                          setShowSearchResults(false);
                        }}
                        className="p-1.5 hover:bg-purple-50 rounded flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-slate-800">{i.description}</div>
                          <div className="text-[11px] text-slate-500">Code: {i.code || i.casNo} · Rate: ₹{i.rate.toLocaleString()}/KG</div>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-purple-100 text-purple-800">
                          Stock: {i.stock} KG
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {searchResults.leads.length === 0 && searchResults.customers.length === 0 && searchResults.items.length === 0 && (
                  <div className="p-4 text-center text-slate-400">
                    No matching records found.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right: Actions, Quick Add, Icons */}
        <div className="flex items-center gap-2">
          
          {/* Round Blue Quick Add Button */}
          <div className="relative" ref={quickAddRef}>
            <button
              onClick={() => setShowQuickAdd(!showQuickAdd)}
              title="Quick Add Lead / Item / Customer"
              className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-400 text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
            >
              <Plus className={`w-5 h-5 transition-transform duration-200 ${showQuickAdd ? 'rotate-45' : ''}`} />
            </button>

            {/* Quick Add Menu */}
            {showQuickAdd && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-1.5 z-50 text-xs">
                <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Quick Actions
                </div>
                <button
                  onClick={() => {
                    setShowQuickAdd(false);
                    setIsNewLeadOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 flex items-center gap-2.5 font-medium text-slate-700"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>+ New Sales Enquiry (Lead)</span>
                </button>
                <button
                  onClick={() => {
                    setShowQuickAdd(false);
                    setIsExtractorOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-purple-50 flex items-center gap-2.5 font-medium text-purple-700 bg-purple-50/50"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                  <span className="font-semibold">AI Extract Chemicals from Doc</span>
                </button>
                <button
                  onClick={() => {
                    setShowQuickAdd(false);
                    setIsNewPurchaseOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 flex items-center gap-2.5 font-medium text-slate-700"
                >
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>+ New Purchase Enquiry</span>
                </button>
                <button
                  onClick={() => {
                    setShowQuickAdd(false);
                    setIsNewCustomerOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 flex items-center gap-2.5 font-medium text-slate-700"
                >
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>+ New Customer</span>
                </button>
                <button
                  onClick={() => {
                    setShowQuickAdd(false);
                    setIsNewItemOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 flex items-center gap-2.5 font-medium text-slate-700"
                >
                  <Package className="w-4 h-4 text-indigo-600" />
                  <span>+ New Chemical Item</span>
                </button>
              </div>
            )}
          </div>

          <div className="h-5 w-px bg-blue-400/40 mx-1" />

          {/* Share Button */}
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
              }
              showToast('Link copied to clipboard!', 'info');
            }}
            title="Share Dashboard"
            className="p-1.5 text-blue-200 hover:text-white hover:bg-blue-600/30 rounded-md transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Tasks Icon */}
          <button
            onClick={() => setActiveTab('Tasks')}
            title="My Tasks (5 pending)"
            className="p-1.5 text-blue-200 hover:text-white hover:bg-blue-600/30 rounded-md transition-colors relative"
          >
            <CheckSquare className="w-4 h-4" />
            <span className="absolute 0 top-1 right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </button>

          {/* Timer Icon & Tracker */}
          <div className="relative">
            <button
              onClick={() => setShowTimer(!showTimer)}
              title="Staff Daily Work Timer"
              className="flex items-center gap-1.5 px-2 py-1 text-xs bg-blue-800/60 hover:bg-blue-700/60 border border-blue-400/30 rounded-md transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-cyan-300" />
              <span className="font-mono text-[11px] text-cyan-100">{formatTimer(timerSeconds)}</span>
            </button>

            {showTimer && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 p-3 z-50 text-xs">
                <div className="font-semibold text-slate-800 mb-1">Staff Session Timer</div>
                <div className="text-[11px] text-slate-500 mb-3">Logged in as: <strong className="text-slate-700">Eshwari</strong></div>
                <div className="text-lg font-mono font-bold text-center text-blue-600 py-1 bg-blue-50 rounded mb-3">
                  {formatTimer(timerSeconds)}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className={`flex-1 py-1 rounded font-medium text-white text-xs ${isTimerRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
                  >
                    {isTimerRunning ? 'Pause' : 'Resume'}
                  </button>
                  <button
                    onClick={() => {
                      setTimerSeconds(0);
                      setIsTimerRunning(false);
                      setShowTimer(false);
                      showToast('Work day session logged.', 'info');
                    }}
                    className="flex-1 py-1 rounded font-medium bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Notification Bell with Badge 3 */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              title="Notifications"
              className="p-1.5 text-blue-200 hover:text-white hover:bg-blue-600/30 rounded-md transition-colors relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                3
              </span>
            </button>

            {/* Notification Popover */}
            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white text-slate-800 rounded-lg shadow-2xl border border-slate-200 py-2 z-50 text-xs">
                <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-800">Notifications</span>
                  <span className="text-[10px] text-blue-600 hover:underline cursor-pointer">Mark all as read</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                  <div className="p-2.5 hover:bg-blue-50/60 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-blue-700 text-[11px]">New Lead Sourced</span>
                      <span className="text-[10px] text-slate-400">10m ago</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">ZYMETH PHARMA sent inquiry for 50 KG Linezolid IP.</p>
                  </div>

                  <div className="p-2.5 hover:bg-emerald-50/60 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-emerald-700 text-[11px]">Order WON (₹ 3,20,000)</span>
                      <span className="text-[10px] text-slate-400">2h ago</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">Mihika Pharma confirmed PO for Telmisartan USP 100KG.</p>
                  </div>

                  <div className="p-2.5 hover:bg-amber-50/60 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-amber-700 text-[11px]">Payment Followup Due</span>
                      <span className="text-[10px] text-slate-400">Today</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">Overdue invoice #INV-1022 for ₹ 1,84,500 due for call.</p>
                  </div>
                </div>
                <div className="pt-2 px-3 border-t border-slate-100 text-center">
                  <button 
                    onClick={() => {
                      setActiveTab('Recent Updates');
                      setShowNotifications(false);
                    }}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View All Activity Feed →
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="h-5 w-px bg-blue-400/40 mx-1" />

          {/* Back to Pharma Chemi Website */}
          <button
            onClick={goToWebsite}
            title="View Pharma Chemi Public Website"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-emerald-100 hover:text-white bg-emerald-600/50 hover:bg-emerald-500/70 border border-emerald-400/40 rounded-md transition-colors shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-200" />
            <span className="hidden sm:inline">Pharma Chemi Web</span>
          </button>

          {/* Settings Button */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            title="System Settings"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-blue-100 hover:text-white hover:bg-blue-600/30 rounded-md transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Settings</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={logout}
            title="Sign Out"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-rose-200 hover:text-white hover:bg-rose-600/40 rounded-md transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>

          {/* Staff Profile Avatar */}
          <div className="flex items-center gap-2 pl-1">
            <div className={`w-7 h-7 rounded-full ${currentUser?.color || 'bg-indigo-600'} border border-white/40 flex items-center justify-center font-bold text-xs text-white shadow`}>
              {currentUser?.name ? currentUser.name[0] : 'E'}
            </div>
            <div className="hidden lg:block text-left text-xs leading-tight">
              <div className="font-semibold text-white truncate max-w-[100px]">{currentUser?.name || 'Eshwari'}</div>
              <div className="text-[10px] text-blue-200 truncate max-w-[100px]">{currentUser?.role || 'Sr. Specialist'}</div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
