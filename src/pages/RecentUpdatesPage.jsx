import React, { useState, useMemo } from 'react';
import {
  MessageSquare,
  CheckCircle2,
  Clock,
  Search,
  Check,
  RotateCcw,
  Building,
  Package
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function RecentUpdatesPage() {
  const {
    commentsFeed,
    toggleCommentDone,
    setSelectedCustomerForDetail,
    setActiveTab,
    showToast
  } = useCrm();

  const [activeTab, setActiveTabState] = useState('Comments');
  const [searchTerm, setSearchTerm] = useState('');

  const commentsCount = commentsFeed.filter(c => !c.done).length;
  const doneCount = commentsFeed.filter(c => c.done).length;

  const filteredComments = useMemo(() => {
    return commentsFeed
      .filter(c => (activeTab === 'Comments' ? !c.done : c.done))
      .filter(c => {
        if (!searchTerm.trim()) return true;
        const q = searchTerm.toLowerCase();
        return (
          c.comment.toLowerCase().includes(q) ||
          c.company.toLowerCase().includes(q) ||
          c.item.toLowerCase().includes(q) ||
          c.createBy.toLowerCase().includes(q)
        );
      });
  }, [commentsFeed, activeTab, searchTerm]);

  return (
    <div className="space-y-3">
      
      {/* Header bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800">Recent Updates & Quotation Stream</h1>
            <p className="text-[11px] text-slate-500">Live operational remarks, manufacturer quotes and dispatch updates</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search comments, rates, makes..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Tabs: "Comments" and "Done Comments" */}
      <div className="flex items-center gap-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTabState('Comments')}
          className={`px-4 py-2 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === 'Comments'
              ? 'border-blue-600 text-blue-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Active Comments</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 text-blue-800 font-mono">
            {commentsCount}
          </span>
        </button>

        <button
          onClick={() => setActiveTabState('Done Comments')}
          className={`px-4 py-2 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors ${
            activeTab === 'Done Comments'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Done Comments</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-mono">
            {doneCount}
          </span>
        </button>
      </div>

      {/* Comments Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700 text-xs">
              <tr>
                <th className="w-12 text-center">No</th>
                <th className="w-28">Date</th>
                <th className="w-28">CreateBy</th>
                <th className="min-w-[180px]">Company</th>
                <th className="min-w-[140px]">Item</th>
                <th className="min-w-[260px]">Comment / Quoted Specs</th>
                <th className="w-24">AssignTo</th>
                <th className="w-24 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredComments.map((c, index) => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="text-center font-mono text-slate-400 text-xs">
                    #{index + 1}
                  </td>
                  <td className="text-slate-600 font-mono text-[11px] whitespace-nowrap">
                    {c.date}
                  </td>
                  <td>
                    <span className="font-semibold text-slate-800 text-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      {c.createBy}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setSelectedCustomerForDetail(c.company);
                        setActiveTab('Customers');
                      }}
                      className="text-blue-700 hover:text-blue-900 font-semibold hover:underline text-left text-xs"
                    >
                      {c.company}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => setActiveTab('Items')}
                      className="text-slate-800 hover:text-blue-600 font-medium hover:underline text-left text-xs"
                    >
                      {c.item}
                    </button>
                  </td>
                  <td>
                    <div className="text-slate-900 font-mono text-xs bg-slate-50 p-1.5 rounded border border-slate-100">
                      {c.comment}
                    </div>
                  </td>
                  <td className="text-slate-600 text-xs font-medium">
                    {c.assignTo}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => toggleCommentDone(c.id)}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all shadow-2xs ${
                        c.done
                          ? 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {c.done ? 'Undo Done' : 'Mark Done'}
                    </button>
                  </td>
                </tr>
              ))}

              {filteredComments.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    No comments found in this view.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
