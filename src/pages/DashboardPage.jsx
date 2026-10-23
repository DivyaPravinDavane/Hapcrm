import React from 'react';
import {
  Users,
  Send,
  Trophy,
  Clock,
  IndianRupee,
  CheckCircle2,
  Upload,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  FileText,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function DashboardPage() {
  const {
    salesLeads,
    commentsFeed,
    setIsExtractorOpen,
    setActiveTab,
    STAFF_LIST
  } = useCrm();

  // Status counts
  const sentCount = salesLeads.filter(l => l.status === 'Sent').length;
  const pendingCount = salesLeads.filter(l => l.status === 'Pending').length;
  const wonCount = salesLeads.filter(l => l.status === 'WON').length;
  const confirmCount = salesLeads.filter(l => l.status === 'Confirm').length;
  const rejectCount = salesLeads.filter(l => l.status === 'Reject').length;
  const noOfferCount = salesLeads.filter(l => l.status === 'NoOffer').length;
  const junkCount = salesLeads.filter(l => l.status === 'Junk').length;
  const totalLeads = salesLeads.length;

  const statusDistribution = [
    { label: 'Sent', count: sentCount, color: '#3b82f6', percent: totalLeads ? Math.round((sentCount / totalLeads) * 100) : 0 },
    { label: 'Pending', count: pendingCount, color: '#f59e0b', percent: totalLeads ? Math.round((pendingCount / totalLeads) * 100) : 0 },
    { label: 'Reject', count: rejectCount, color: '#ef4444', percent: totalLeads ? Math.round((rejectCount / totalLeads) * 100) : 0 },
    { label: 'Confirm', count: confirmCount, color: '#8b5cf6', percent: totalLeads ? Math.round((confirmCount / totalLeads) * 100) : 0 },
    { label: 'NoOffer', count: noOfferCount, color: '#eab308', percent: totalLeads ? Math.round((noOfferCount / totalLeads) * 100) : 0 },
    { label: 'Junk', count: junkCount, color: '#64748b', percent: totalLeads ? Math.round((junkCount / totalLeads) * 100) : 0 },
    { label: 'WON', count: wonCount, color: '#10b981', percent: totalLeads ? Math.round((wonCount / totalLeads) * 100) : 0 },
  ];

  const staffLeadsData = [
    { name: 'Eshwari', count: 8, color: 'bg-blue-600' },
    { name: 'Aishwarya', count: 6, color: 'bg-purple-600' },
    { name: 'Amisha', count: 5, color: 'bg-teal-500' },
    { name: 'Disha', count: 4, color: 'bg-orange-500' },
    { name: 'Akanksha', count: 3, color: 'bg-rose-500' },
  ];

  return (
    <div className="space-y-4">
      
      {/* Top Banner & Actions */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-800 tracking-tight">Dashboard Overview</h1>
            <p className="text-xs text-slate-500">Welcome to Pharma Chemi CRM · Pharma Chemicals & API Desk</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Today: 21-10-2026</span>
          </div>

          <button
            onClick={() => setIsExtractorOpen(true)}
            className="px-4 py-2 bg-black hover:bg-slate-900 text-white rounded-lg text-xs font-bold shadow-md flex items-center gap-2 active:scale-95 transition-all"
          >
            <Upload className="w-4 h-4 text-cyan-300" />
            <span>Upload Enquiry / Paper</span>
          </button>
        </div>
      </div>

      {/* 6 Key Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        
        {/* Today's New Leads */}
        <div 
          onClick={() => setActiveTab('My Leads')}
          className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500">Today's New Leads</span>
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 tracking-tight">12</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+3 vs yesterday</span>
          </div>
        </div>

        {/* Sent Leads */}
        <div 
          onClick={() => setActiveTab('My Leads')}
          className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500">Sent Leads</span>
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform">
              <Send className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 tracking-tight">{sentCount}</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+5 vs yesterday</span>
          </div>
        </div>

        {/* Won Leads */}
        <div 
          onClick={() => setActiveTab('My Leads')}
          className="bg-white p-3.5 rounded-xl shadow-xs border border-emerald-200 bg-emerald-50/20 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500">Won Leads</span>
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-700 tracking-tight">{wonCount}</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+2 vs yesterday</span>
          </div>
        </div>

        {/* Pending Leads */}
        <div 
          onClick={() => setActiveTab('My Leads')}
          className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500">Pending Leads</span>
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 tracking-tight">{pendingCount}</div>
          <div className="flex items-center gap-1 text-[10px] text-amber-600 font-semibold mt-1">
            <ArrowDownRight className="w-3 h-3" />
            <span>-4 vs yesterday</span>
          </div>
        </div>

        {/* Total Outstanding */}
        <div 
          onClick={() => setActiveTab('Accounts')}
          className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500">Total Outstanding</span>
            <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 group-hover:scale-110 transition-transform">
              <IndianRupee className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-slate-800 tracking-tight">₹ 8,45,230</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>↑ 12% vs last week</span>
          </div>
        </div>

        {/* Tasks Due */}
        <div 
          onClick={() => setActiveTab('Tasks')}
          className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500">Tasks Due</span>
            <div className="p-1.5 rounded-lg bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 tracking-tight">9</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+2 vs yesterday</span>
          </div>
        </div>

      </div>

      {/* Middle Row: Charts & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Leads by Status (Donut Representation & Stats) */}
        <div className="lg:col-span-4 bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Leads by Status</h3>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              Total: {totalLeads}
            </span>
          </div>

          <div className="flex items-center justify-center my-3">
            {/* Visual Donut representation */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                <circle
                  cx="18" cy="18" r="15.915" fill="none"
                  stroke="#3b82f6" strokeWidth="4"
                  strokeDasharray={`${Math.max(5, (sentCount / totalLeads) * 100)} 100`}
                  strokeDashoffset="0"
                />
                <circle
                  cx="18" cy="18" r="15.915" fill="none"
                  stroke="#f59e0b" strokeWidth="4"
                  strokeDasharray={`${Math.max(5, (pendingCount / totalLeads) * 100)} 100`}
                  strokeDashoffset={`-${(sentCount / totalLeads) * 100}`}
                />
                <circle
                  cx="18" cy="18" r="15.915" fill="none"
                  stroke="#10b981" strokeWidth="4"
                  strokeDasharray={`${Math.max(5, (wonCount / totalLeads) * 100)} 100`}
                  strokeDashoffset={`-${((sentCount + pendingCount) / totalLeads) * 100}`}
                />
                <circle
                  cx="18" cy="18" r="15.915" fill="none"
                  stroke="#8b5cf6" strokeWidth="4"
                  strokeDasharray={`${Math.max(5, (confirmCount / totalLeads) * 100)} 100`}
                  strokeDashoffset={`-${((sentCount + pendingCount + wonCount) / totalLeads) * 100}`}
                />
              </svg>
              <div className="absolute text-center">
                <div className="text-xs text-slate-400 font-semibold uppercase">Total</div>
                <div className="text-xl font-bold text-slate-800">{totalLeads}</div>
              </div>
            </div>
          </div>

          {/* Legend Grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs pt-2 border-t border-slate-100">
            {statusDistribution.map(item => (
              <div 
                key={item.label}
                onClick={() => setActiveTab('My Leads')}
                className="flex items-center justify-between hover:bg-slate-50 px-1 py-0.5 rounded cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-600 text-[11px]">{item.label}</span>
                </div>
                <div className="font-semibold text-slate-700 text-[11px]">
                  {item.count} <span className="text-[10px] text-slate-400 font-normal">({item.percent}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leads per Staff Member Today (Bar Chart) */}
        <div className="lg:col-span-5 bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Leads per Staff Member (Today)
            </h3>
            <button
              onClick={() => setActiveTab('Daily Work')}
              className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold"
            >
              Daily Matrix →
            </button>
          </div>

          {/* Clean Bar Chart */}
          <div className="h-48 flex items-end justify-between gap-4 px-4 pt-6 pb-2 border-b border-slate-100">
            {staffLeadsData.map((staff) => {
              const maxLeads = 10;
              const heightPercent = Math.round((staff.count / maxLeads) * 100);
              return (
                <div
                  key={staff.name}
                  onClick={() => setActiveTab('Daily Work')}
                  className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="text-xs font-bold text-slate-700 group-hover:text-blue-600">
                    {staff.count}
                  </div>
                  <div className="w-full bg-slate-100 rounded-t h-32 flex items-end overflow-hidden">
                    <div
                      className={`w-full ${staff.color} rounded-t transition-all duration-500 group-hover:brightness-110 shadow-xs`}
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 truncate max-w-[65px] text-center">
                    {staff.name}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Staff Activity tracked from 09:30 AM to 06:30 PM</span>
            <span className="font-semibold text-blue-700">Top performer: Eshwari (8 leads)</span>
          </div>
        </div>

        {/* Recent Activity / Updates Feed */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Recent Updates
            </h3>
            <button
              onClick={() => setActiveTab('Recent Updates')}
              className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All
            </button>
          </div>

          <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
            {commentsFeed.slice(0, 4).map((feed) => (
              <div
                key={feed.id}
                onClick={() => setActiveTab('Recent Updates')}
                className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50/60 border border-slate-100 transition-colors cursor-pointer text-xs"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                  <span className="font-bold text-slate-700">{feed.createBy}</span>
                  <span>{feed.date}</span>
                </div>
                <div className="font-medium text-slate-800 line-clamp-2 text-[11px]">
                  {feed.comment}
                </div>
                <div className="text-[10px] text-blue-600 mt-1 font-semibold truncate">
                  {feed.company} · {feed.item}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setActiveTab('Recent Updates')}
            className="w-full mt-2 py-1.5 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Open Comments Stream</span>
          </button>
        </div>

      </div>

      {/* Quick Launch Banner to My Leads Main Workspace */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl p-4 text-white shadow-md flex items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm tracking-tight text-white flex items-center gap-2">
            <span>Sales Enquiries & Lead Desk Active</span>
            <span className="text-[10px] font-bold bg-cyan-400 text-blue-950 px-2 py-0.5 rounded-full uppercase">
              {salesLeads.length} Total Enquiries
            </span>
          </h4>
          <p className="text-xs text-blue-100 mt-0.5">
            Handle customer enquiries, quote chemical rates, track stock availability, and manage status transitions.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('My Leads')}
          className="px-4 py-2 bg-white hover:bg-blue-50 text-blue-900 rounded-lg text-xs font-bold shadow flex items-center gap-1.5 shrink-0 transition-transform active:scale-95"
        >
          <span>Open My Leads Desk</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
