import React, { useState, useMemo } from 'react';
import {
  Users,
  UserCheck,
  UserX,
  Star,
  Search,
  Plus,
  Upload,
  Download,
  Filter,
  Eye,
  Trash2,
  Phone,
  Mail,
  Building,
  ArrowLeft,
  Calendar,
  FileText,
  CreditCard,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function CustomersPage() {
  const {
    customers,
    toggleCustomerActive,
    setIsNewCustomerOpen,
    selectedCustomerForDetail,
    setSelectedCustomerForDetail,
    salesLeads,
    invoices,
    tasks,
    showToast
  } = useCrm();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [activeDetailTab, setActiveDetailTab] = useState('Profile');

  // Stat metrics
  const totalCustomers = customers.length;
  const activeCount = customers.filter(c => c.active).length;
  const inactiveCount = customers.filter(c => !c.active).length;
  const activeContacts = 312;
  const inactiveContacts = 18;
  const contactsLoggedInToday = 47;

  // Filtered customer list
  const filteredCustomers = useMemo(() => {
    return customers.filter(c => {
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const mComp = c.company.toLowerCase().includes(q);
        const mCont = c.primaryContact.toLowerCase().includes(q);
        const mEmail = c.primaryEmail.toLowerCase().includes(q);
        const mPhone = c.phone.toLowerCase().includes(q);
        if (!mComp && !mCont && !mEmail && !mPhone) return false;
      }
      if (selectedGroup !== 'All' && !c.groups.includes(selectedGroup)) {
        return false;
      }
      return true;
    });
  }, [customers, searchTerm, selectedGroup]);

  // Selected customer for detail
  const currentDetailCustomer = useMemo(() => {
    if (!selectedCustomerForDetail) return null;
    return (
      customers.find(c => c.company === selectedCustomerForDetail) ||
      customers.find(c => c.id === selectedCustomerForDetail) ||
      customers[0]
    );
  }, [selectedCustomerForDetail, customers]);

  // If customer detail view is open
  if (currentDetailCustomer) {
    const custLeads = salesLeads.filter(l => l.customer === currentDetailCustomer.company);
    const custInvoices = invoices.filter(inv => inv.customer === currentDetailCustomer.company);
    const custTasks = tasks.filter(t => t.customer === currentDetailCustomer.company);

    return (
      <div className="space-y-4 animate-in fade-in duration-150">
        
        {/* Back navigation */}
        <button
          onClick={() => setSelectedCustomerForDetail(null)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Customers Master</span>
        </button>

        {/* Customer Header Card */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-slate-900">{currentDetailCustomer.company}</h1>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  currentDetailCustomer.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                }`}>
                  {currentDetailCustomer.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="text-xs text-slate-500 flex flex-wrap gap-3 mt-1">
                <span>GST: <strong className="text-slate-700">{currentDetailCustomer.gstin}</strong></span>
                <span>Drug Lic: <strong className="text-slate-700">{currentDetailCustomer.drugLicense}</strong></span>
                <span>Contact: <strong className="text-slate-700">{currentDetailCustomer.primaryContact}</strong> ({currentDetailCustomer.phone})</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-right">
            <div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Credit Limit</div>
              <div className="text-sm font-bold text-slate-800">{currentDetailCustomer.creditLimit}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Outstanding</div>
              <div className="text-sm font-bold text-rose-600">{currentDetailCustomer.outstanding}</div>
            </div>
          </div>
        </div>

        {/* 8 Customer Detail Tabs: Profile, Contacts, Leads, Orders, Invoices, Outstanding, Notes, Tasks */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <div className="flex items-center gap-1 border-b border-slate-200 px-4 bg-slate-50 overflow-x-auto text-xs">
            {['Profile', 'Contacts', 'Leads', 'Orders', 'Invoices', 'Outstanding', 'Notes', 'Tasks'].map(t => (
              <button
                key={t}
                onClick={() => setActiveDetailTab(t)}
                className={`py-3 px-3 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeDetailTab === t
                    ? 'border-blue-600 text-blue-700 font-bold bg-white'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="p-5">
            {/* 1. Profile */}
            {activeDetailTab === 'Profile' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Billing & Legal Information</h4>
                  <div><span className="text-slate-500">Registered Name:</span> <strong className="text-slate-800">{currentDetailCustomer.company}</strong></div>
                  <div><span className="text-slate-500">GSTIN:</span> <strong className="text-slate-800 font-mono">{currentDetailCustomer.gstin}</strong></div>
                  <div><span className="text-slate-500">Drug License:</span> <strong className="text-slate-800">{currentDetailCustomer.drugLicense}</strong></div>
                  <div><span className="text-slate-500">Factory / Billing Address:</span> <span className="text-slate-800 block mt-0.5">{currentDetailCustomer.address}</span></div>
                </div>

                <div className="space-y-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Commercial & Credit Terms</h4>
                  <div><span className="text-slate-500">Payment Terms:</span> <strong className="text-slate-800">{currentDetailCustomer.paymentTerms}</strong></div>
                  <div><span className="text-slate-500">Approved Credit Limit:</span> <strong className="text-slate-800">{currentDetailCustomer.creditLimit}</strong></div>
                  <div><span className="text-slate-500">Customer Segments:</span> 
                    <div className="flex gap-1 mt-1">
                      {currentDetailCustomer.groups.map(g => (
                        <span key={g} className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-semibold">{g}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Contacts */}
            {activeDetailTab === 'Contacts' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-800">Authorized Company Representatives</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg bg-slate-50 space-y-1 text-xs">
                    <div className="font-bold text-slate-900">{currentDetailCustomer.primaryContact}</div>
                    <div className="text-slate-500">Designation: Head of Procurement & Commercial API</div>
                    <div className="text-slate-600">Email: {currentDetailCustomer.primaryEmail}</div>
                    <div className="text-slate-600">Mobile: {currentDetailCustomer.phone}</div>
                  </div>
                  <div className="p-3 border rounded-lg bg-slate-50 space-y-1 text-xs">
                    <div className="font-bold text-slate-900">QA / QC Desk</div>
                    <div className="text-slate-500">Designation: Quality Assurance Manager</div>
                    <div className="text-slate-600">Email: qa@{currentDetailCustomer.primaryEmail.split('@')[1] || 'pharma.com'}</div>
                    <div className="text-slate-600">Mobile: +91 98200 11994</div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Leads */}
            {activeDetailTab === 'Leads' && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-800">Active Sales Enquiries ({custLeads.length})</div>
                {custLeads.map(l => (
                  <div key={l.id} className="p-2.5 border rounded-lg flex items-center justify-between text-xs hover:bg-slate-50">
                    <div>
                      <span className="font-semibold text-slate-900">{l.item}</span>
                      <span className="text-slate-500 text-[11px] ml-2">({l.qty} {l.unit} @ ₹{l.rate})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-slate-700">₹ {(l.qty * l.rate).toLocaleString()}</span>
                      <span className="px-2 py-0.5 rounded font-semibold text-[10px] bg-blue-100 text-blue-800">{l.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Orders */}
            {activeDetailTab === 'Orders' && (
              <div className="text-xs space-y-2">
                <div className="font-bold text-slate-800">Sales Order History</div>
                <div className="p-3 border rounded bg-slate-50 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">PO #PO-ZYM-2026-88 · Telmisartan USP 100 KG</div>
                    <div className="text-slate-500 text-[11px]">Dispatched via V-Trans Bhiwandi (LR #449210)</div>
                  </div>
                  <span className="font-mono font-bold text-emerald-700">₹ 3,20,000 · Delivered</span>
                </div>
              </div>
            )}

            {/* 5. Invoices & Outstanding */}
            {(activeDetailTab === 'Invoices' || activeDetailTab === 'Outstanding') && (
              <div className="text-xs space-y-3">
                <div className="font-bold text-slate-800">Invoices & Outstanding Ledger</div>
                {custInvoices.map(inv => (
                  <div key={inv.id} className="p-3 border rounded-lg bg-slate-50 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">{inv.invoiceNo} · Date: {inv.date}</div>
                      <div className="text-slate-500 text-[11px]">Follow-up: {inv.followupDate} | Remark: {inv.remark}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-rose-600 font-mono">₹ {inv.balance.toLocaleString()}</div>
                      <div className="text-[10px] text-slate-500">Ageing: {inv.bucket} Days</div>
                    </div>
                  </div>
                ))}
                {custInvoices.length === 0 && (
                  <div className="text-slate-400 py-4 text-center">No outstanding invoices for this account.</div>
                )}
              </div>
            )}

            {/* 7. Notes & 8. Tasks */}
            {activeDetailTab === 'Notes' && (
              <div className="text-xs space-y-2">
                <div className="font-bold text-slate-800">Internal Account Notes</div>
                <div className="p-3 bg-yellow-50/70 border border-yellow-200 rounded text-slate-800">
                  Customer has strict requirement for WHO-GMP approved makes. Prefer Kodel or Lasons. Always confirm solvent residual limit before dispatch.
                </div>
              </div>
            )}

            {activeDetailTab === 'Tasks' && (
              <div className="text-xs space-y-2">
                <div className="font-bold text-slate-800">Pending Tasks for Account</div>
                {custTasks.map(t => (
                  <div key={t.id} className="p-2.5 border rounded flex items-center justify-between">
                    <span className="font-medium text-slate-800">{t.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">{t.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="space-y-3">
      
      {/* 1. Stat Cards (Total Customers, Active, Inactive, Active Contacts, Inactive Contacts, Contacts Logged In Today) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500">Total Customers</div>
          <div className="text-xl font-bold text-slate-800 mt-1">{totalCustomers}</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-emerald-200 bg-emerald-50/20 shadow-xs">
          <div className="text-[11px] font-semibold text-emerald-700">Active Customers</div>
          <div className="text-xl font-bold text-emerald-700 mt-1">{activeCount}</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500">Inactive Customers</div>
          <div className="text-xl font-bold text-slate-600 mt-1">{inactiveCount}</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500">Active Contacts</div>
          <div className="text-xl font-bold text-blue-700 mt-1">{activeContacts}</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500">Inactive Contacts</div>
          <div className="text-xl font-bold text-slate-500 mt-1">{inactiveContacts}</div>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500">Logged In Today</div>
          <div className="text-xl font-bold text-purple-700 mt-1">{contactsLoggedInToday}</div>
        </div>
      </div>

      {/* 2. Action & Filter Bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 flex-1">
          <div className="relative min-w-[220px] max-w-xs flex-1">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search company, contact, phone, GST..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white"
            />
          </div>

          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700"
          >
            <option value="All">All Groups</option>
            <option value="API Buyer">API Buyer</option>
            <option value="Formulation">Formulation</option>
            <option value="Direct Pharma">Direct Pharma</option>
            <option value="Wholesaler">Wholesaler</option>
          </select>
        </div>

        {/* Buttons: New Customer, Import Customers (CSV), Export, Bulk Actions, Filters */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Import CSV wizard opened.', 'info')}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Import Customers</span>
          </button>

          <button
            onClick={() => showToast('Customer database exported as CSV.', 'success')}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export</span>
          </button>

          <button
            onClick={() => setIsNewCustomerOpen(true)}
            className="px-3.5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5 active:scale-95"
          >
            <Plus className="w-4 h-4 text-cyan-300" />
            <span>New Customer</span>
          </button>
        </div>
      </div>

      {/* 3. Customers Table with Row Hover actions (View | Contacts | Delete) */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700 text-xs">
              <tr>
                <th className="w-8 text-center">#</th>
                <th className="min-w-[200px]">Company</th>
                <th className="min-w-[140px]">Primary Contact</th>
                <th className="min-w-[160px]">Primary Email</th>
                <th className="w-28">Phone</th>
                <th className="w-20 text-center">Active</th>
                <th className="min-w-[150px]">Groups</th>
                <th className="w-24">Date Created</th>
                <th className="w-24 text-center">Rating</th>
                <th className="w-24 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredCustomers.map((cust, idx) => (
                <tr key={cust.id} className="hover:bg-slate-50 group transition-colors">
                  <td className="text-center font-mono text-slate-400 text-xs">
                    {idx + 1}
                  </td>
                  <td>
                    <div
                      onClick={() => setSelectedCustomerForDetail(cust.company)}
                      className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer text-xs"
                    >
                      {cust.company}
                    </div>
                    {/* Row hover action links: View | Contacts | Delete */}
                    <div className="flex items-center gap-2 text-[10px] text-blue-600 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setSelectedCustomerForDetail(cust.company)}
                        className="hover:underline font-semibold"
                      >
                        View
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={() => {
                          setSelectedCustomerForDetail(cust.company);
                          setActiveDetailTab('Contacts');
                        }}
                        className="hover:underline"
                      >
                        Contacts
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={() => showToast(`Cannot delete customer with active ledgers.`, 'error')}
                        className="text-rose-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                  <td className="text-slate-800 text-xs font-medium">
                    {cust.primaryContact}
                  </td>

                  <td className="text-slate-600 text-xs font-mono">
                    {cust.primaryEmail}
                  </td>

                  <td className="text-slate-600 text-xs font-mono whitespace-nowrap">
                    {cust.phone}
                  </td>

                  {/* Active toggle switch */}
                  <td className="text-center">
                    <button
                      onClick={() => toggleCustomerActive(cust.id)}
                      className={`w-8 h-4 rounded-full transition-colors relative inline-block ${
                        cust.active ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${
                          cust.active ? 'left-4' : 'left-0.5'
                        }`}
                      />
                    </button>
                  </td>

                  {/* Groups Chips */}
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {cust.groups.map(g => (
                        <span key={g} className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-100">
                          {g}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="text-slate-500 text-xs font-mono whitespace-nowrap">
                    {cust.dateCreated}
                  </td>

                  {/* Rating Stars */}
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < cust.rating ? 'fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
                        />
                      ))}
                    </div>
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => setSelectedCustomerForDetail(cust.company)}
                      className="px-2 py-1 bg-slate-100 hover:bg-blue-50 text-blue-700 rounded text-xs font-semibold"
                    >
                      View Card
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
