import React, { useState } from 'react';
import { X, MessageSquare, Send } from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function AddCommentModal() {
  const { activeCommentLead, setActiveCommentLead, addCommentToLead } = useCrm();
  const [commentText, setCommentText] = useState('QUOTE - 4800+ KODEL 3-5 DAYS DEL');
  const [authorStaff, setAuthorStaff] = useState('Eshwari');

  if (!activeCommentLead) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addCommentToLead(activeCommentLead.id, commentText, authorStaff);
    setActiveCommentLead(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-100">
        
        {/* Header */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold text-slate-800">
              Add Comment / Internal Quote
            </h3>
          </div>
          <button
            onClick={() => setActiveCommentLead(null)}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="bg-blue-50/60 p-2.5 rounded-lg border border-blue-100 text-xs">
            <div className="font-bold text-blue-900">{activeCommentLead.customer}</div>
            <div className="text-[11px] text-blue-700">
              {activeCommentLead.item} · {activeCommentLead.qty} {activeCommentLead.unit} @ ₹{activeCommentLead.rate.toLocaleString()}
            </div>
          </div>

          {/* Past Comments */}
          {activeCommentLead.comments && activeCommentLead.comments.length > 0 && (
            <div className="max-h-36 overflow-y-auto space-y-2 pr-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Comment History:
              </span>
              {activeCommentLead.comments.map(c => (
                <div key={c.id} className="text-xs p-2 bg-slate-50 border border-slate-200 rounded">
                  <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                    <strong className="text-slate-700">{c.author}</strong>
                    <span>{c.date}</span>
                  </div>
                  <div className="text-slate-700 text-[11px]">{c.text}</div>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 pt-1">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                New Comment / Quoted Terms:
              </label>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={3}
                placeholder="e.g. QUOTE - 3975+ CALYX CHEMICALS 5-7 DAYS DEL"
                className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveCommentLead(null)}
                className="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 rounded text-xs text-slate-700 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Save Comment</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
