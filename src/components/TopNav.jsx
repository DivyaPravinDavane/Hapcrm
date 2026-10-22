import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export const ACCOUNTS_DROPDOWN_ITEMS = [
  'Outstanding All',
  'Outstanding Salesman',
  'Due Invoices',
  'Invoice List',
  'Sales Report',
  'Stock Report',
  'Today Sale',
  'Finance',
  'Party List',
  'LR Upload',
  'Orders List',
  'Pending Order',
  'Pending Purchase',
  'Not Orders Customer',
  'OS Followup',
  'Followup List',
  'Outstanding Report',
  'PDC Upload'
];

export default function TopNav() {
  const {
    activeTab,
    setActiveTab,
    activeAccountsSubTab,
    setActiveAccountsSubTab,
    salesLeads
  } = useCrm();

  const [showAccountsDropdown, setShowAccountsDropdown] = useState(false);
  const accountsRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountsRef.current && !accountsRef.current.contains(event.target)) {
        setShowAccountsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Dashboard' },
    { name: 'My Leads', badge: salesLeads.length },
    { name: 'Purchase Leads' },
    { name: 'Customers' },
    { name: 'Items' },
    { name: 'Recent Updates' },
    { name: 'Company Items' },
    { name: 'Daily Work' },
    { name: 'Accounts', isDropdown: true },
    { name: 'Leads' },
    { name: 'Tasks' },
    { name: 'Sales' },
    { name: 'Mobile Leads' },
    { name: 'Planner' },
    { name: 'Expenses' },
    { name: 'Support' },
    { name: 'Utilities' },
    { name: 'Reports' },
    { name: 'Setup' }
  ];

  const handleNavClick = (item) => {
    if (item.isDropdown) {
      setShowAccountsDropdown(!showAccountsDropdown);
    } else {
      setActiveTab(item.name);
      setShowAccountsDropdown(false);
    }
  };

  const handleAccountsSubItemClick = (subItem) => {
    setActiveAccountsSubTab(subItem);
    setActiveTab('Accounts');
    setShowAccountsDropdown(false);
  };

  return (
    <nav className="bg-[#2D3282] border-t border-blue-900/40 text-slate-200 text-xs shadow-inner select-none relative z-30 overflow-x-auto scrollbar-none">
      <div className="max-w-[1920px] mx-auto px-2 flex items-center gap-0.5 whitespace-nowrap min-w-max">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;

          if (item.isDropdown) {
            const isAccountsActive = activeTab === 'Accounts';
            return (
              <div key={item.name} className="relative" ref={accountsRef}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-2 font-medium flex items-center gap-1 transition-colors relative ${
                    isAccountsActive
                      ? 'bg-[#3A3F9E] text-white shadow-sm font-semibold'
                      : 'hover:bg-blue-800/60 hover:text-white text-blue-100'
                  }`}
                >
                  <span>{item.name}</span>
                  {isAccountsActive && (
                    <span className="text-[10px] text-cyan-300">({activeAccountsSubTab})</span>
                  )}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${showAccountsDropdown ? 'rotate-180' : ''}`} />
                  {isAccountsActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {showAccountsDropdown && (
                  <div className="absolute left-0 top-full mt-0.5 w-64 bg-white text-slate-800 rounded-b-lg shadow-2xl border border-slate-200 py-1.5 z-50 grid grid-cols-1 divide-y divide-slate-100 text-xs max-h-96 overflow-y-auto">
                    <div className="px-3 py-1 bg-slate-50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Accounts & Ledgers
                    </div>
                    {ACCOUNTS_DROPDOWN_ITEMS.map((subItem) => {
                      const isSubActive = activeTab === 'Accounts' && activeAccountsSubTab === subItem;
                      return (
                        <button
                          key={subItem}
                          onClick={() => handleAccountsSubItemClick(subItem)}
                          className={`text-left px-3 py-1.5 hover:bg-blue-50 flex items-center justify-between transition-colors ${
                            isSubActive ? 'bg-blue-100/70 font-semibold text-blue-900' : 'text-slate-700'
                          }`}
                        >
                          <span>{subItem}</span>
                          {isSubActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`px-3 py-2 font-medium transition-colors relative flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#3A3F9E] text-white shadow-sm font-semibold'
                  : 'hover:bg-blue-800/60 hover:text-white text-blue-100'
              }`}
            >
              <span>{item.name}</span>
              {item.badge !== undefined && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-cyan-400 text-blue-950' : 'bg-blue-900/80 text-blue-200'
                }`}>
                  {item.badge}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
