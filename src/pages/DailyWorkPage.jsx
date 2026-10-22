import React, { useState } from 'react';
import {
  Calendar,
  Users,
  TrendingUp,
  ArrowRight,
  Clock,
  Filter,
  CheckCircle2,
  X
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function DailyWorkPage() {
  const { dailyWork, salesLeads, setActiveTab } = useCrm();

  const [selectedDate, setSelectedDate] = useState('21-10-2026');
  const [drillDownModal, setDrillDownModal] = useState(null);

  const handleDrillDown = (staff, metric, count) => {
    if (count === 0) return;

    // Filter leads matching this staff and status
    let statusFilter = null;
    if (metric === 'sent_lead') statusFilter = 'Sent';
    else if (metric === 'won_lead') statusFilter = 'WON';
    else if (metric === 'confirm_lead') statusFilter = 'Confirm';
    else if (metric === 'reject_lead') statusFilter = 'Reject';
    else if (metric === 'nooffer_lead') statusFilter = 'NoOffer';

    const matchingLeads = salesLeads.filter(l => {
      const matchStaff = l.staff.toLowerCase().includes(staff.toLowerCase());
      if (statusFilter) {
        return matchStaff && l.status === statusFilter;
      }
      return matchStaff;
    });

    setDrillDownModal({
      staff,
      metric,
      count,
      leads: matchingLeads
    });
  };

  return (
    <div className="space-y-3">
      
      {/* Header bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800">Daily Work & Staff Activity Matrix</h1>
            <p className="text-[11px] text-slate-500">Track enquiry sourcing, customer follow-ups and conversion performance per representative</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-300">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold text-slate-600">Date:</span>
            <input
              type="text"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-24 bg-transparent font-mono font-bold text-slate-900 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Staff Activity Matrix Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700 text-xs">
              <tr>
                <th className="min-w-[140px]">Staff Name</th>
                <th className="w-20 text-center text-blue-700">New Lead</th>
                <th className="w-20 text-center text-indigo-700">Sent Lead</th>
                <th className="w-20 text-center text-rose-700">Reject</th>
                <th className="w-20 text-center text-amber-700">No Offer</th>
                <th className="w-20 text-center text-purple-700">Confirm</th>
                <th className="w-20 text-center text-emerald-700 bg-emerald-50/50">Won Lead</th>
                <th className="w-20 text-center text-slate-500">Delete</th>
                <th className="w-20 text-center text-cyan-700">Reminders</th>
                <th className="w-20 text-center text-slate-700">Notes</th>
                <th className="w-36 text-center">Last Update</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {dailyWork.map((row) => (
                <tr key={row.staff} className="hover:bg-slate-50 transition-colors">
                  <td className="font-bold text-slate-900 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      <span>{row.staff}</span>
                    </div>
                  </td>

                  {/* new_lead */}
                  <td className="text-center">
                    <button
                      onClick={() => handleDrillDown(row.staff, 'new_lead', row.new_lead)}
                      className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 hover:underline"
                    >
                      {row.new_lead}
                    </button>
                  </td>

                  {/* sent_lead */}
                  <td className="text-center">
                    <button
                      onClick={() => handleDrillDown(row.staff, 'sent_lead', row.sent_lead)}
                      className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:underline"
                    >
                      {row.sent_lead}
                    </button>
                  </td>

                  {/* reject_lead */}
                  <td className="text-center">
                    <button
                      onClick={() => handleDrillDown(row.staff, 'reject_lead', row.reject_lead)}
                      className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-rose-50 text-rose-700 hover:bg-rose-100 hover:underline"
                    >
                      {row.reject_lead}
                    </button>
                  </td>

                  {/* nooffer_lead */}
                  <td className="text-center">
                    <button
                      onClick={() => handleDrillDown(row.staff, 'nooffer_lead', row.nooffer_lead)}
                      className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:underline"
                    >
                      {row.nooffer_lead}
                    </button>
                  </td>

                  {/* confirm_lead */}
                  <td className="text-center">
                    <button
                      onClick={() => handleDrillDown(row.staff, 'confirm_lead', row.confirm_lead)}
                      className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-purple-50 text-purple-700 hover:bg-purple-100 hover:underline"
                    >
                      {row.confirm_lead}
                    </button>
                  </td>

                  {/* won_lead */}
                  <td className="text-center bg-emerald-50/30">
                    <button
                      onClick={() => handleDrillDown(row.staff, 'won_lead', row.won_lead)}
                      className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:underline"
                    >
                      {row.won_lead}
                    </button>
                  </td>

                  {/* delete_lead */}
                  <td className="text-center font-mono text-xs text-slate-400">
                    {row.delete_lead}
                  </td>

                  {/* reminders */}
                  <td className="text-center font-mono text-xs text-cyan-700 font-semibold">
                    {row.reminders}
                  </td>

                  {/* notes */}
                  <td className="text-center font-mono text-xs text-slate-600 font-semibold">
                    {row.notes}
                  </td>

                  {/* last_update */}
                  <td className="text-center font-mono text-[11px] text-slate-500 whitespace-nowrap">
                    {row.last_update}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drill-down modal */}
      {drillDownModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  {drillDownModal.staff}'s Leads: {drillDownModal.metric.replace('_', ' ').toUpperCase()} ({drillDownModal.leads.length})
                </h3>
                <p className="text-[11px] text-slate-500">Drilled from Daily Activity Sheet</p>
              </div>
              <button onClick={() => setDrillDownModal(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 max-h-80 overflow-y-auto space-y-2">
              {drillDownModal.leads.map(lead => (
                <div key={lead.id} className="p-3 border rounded-lg bg-slate-50 hover:bg-blue-50/50 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{lead.customer}</div>
                    <div className="text-[11px] text-slate-600">{lead.item} · {lead.qty} {lead.unit} @ ₹{lead.rate.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">Created: {lead.createdTime}</div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                      {lead.status}
                    </span>
                    <div className="text-xs font-mono font-bold text-slate-800 mt-1">
                      ₹ {(lead.qty * lead.rate).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}

              {drillDownModal.leads.length === 0 && (
                <div className="p-6 text-center text-slate-400 text-xs">
                  No detailed records found for this counter.
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-50 border-t flex justify-end">
              <button
                onClick={() => {
                  setDrillDownModal(null);
                  setActiveTab('My Leads');
                }}
                className="px-4 py-1.5 bg-black text-white rounded text-xs font-bold shadow"
              >
                Open in My Leads Desk →
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
