import React, { useState, useMemo } from 'react';
import {
  CheckSquare,
  Search,
  Plus,
  Calendar,
  Clock,
  User,
  Tag,
  AlertCircle
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function TasksPage() {
  const { tasks, updateTaskStatus, addTask, STAFF_LIST, showToast } = useCrm();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilterStatus, setActiveFilterStatus] = useState('All');
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  // New task form state
  const [taskName, setTaskName] = useState('');
  const [customer, setCustomer] = useState('ZYMETH PHARMACEUTICALS PVT LTD-492614');
  const [assignee, setAssignee] = useState('Eshwari');
  const [priority, setPriority] = useState('High');
  const [dueDate, setDueDate] = useState('25-10-2026');
  const [tag, setTag] = useState('Sample Approval');

  const taskStatuses = ['Not Started', 'In Progress', 'Testing', 'Awaiting Feedback', 'Complete'];

  // Status counts
  const counts = useMemo(() => {
    return {
      'Not Started': tasks.filter(t => t.status === 'Not Started').length,
      'In Progress': tasks.filter(t => t.status === 'In Progress').length,
      'Testing': tasks.filter(t => t.status === 'Testing').length,
      'Awaiting Feedback': tasks.filter(t => t.status === 'Awaiting Feedback').length,
      'Complete': tasks.filter(t => t.status === 'Complete').length,
    };
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(t => {
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        if (!t.name.toLowerCase().includes(q) && !t.customer.toLowerCase().includes(q)) {
          return false;
        }
      }
      if (activeFilterStatus !== 'All' && t.status !== activeFilterStatus) {
        return false;
      }
      return true;
    });
  }, [tasks, searchTerm, activeFilterStatus]);

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!taskName) return;
    addTask({
      name: taskName,
      customer,
      assignee,
      priority,
      dueDate,
      tag
    });
    setTaskName('');
    setIsNewTaskOpen(false);
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-3">
      
      {/* 1. Status Cards: Not Started, In Progress, Testing, Awaiting Feedback, Complete with My Tasks count */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {taskStatuses.map((st) => {
          const isSelected = activeFilterStatus === st;
          return (
            <div
              key={st}
              onClick={() => setActiveFilterStatus(isSelected ? 'All' : st)}
              className={`bg-white p-3.5 rounded-xl border transition-all cursor-pointer shadow-xs ${
                isSelected
                  ? 'border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">{st}</span>
                <span className="w-2 h-2 rounded-full bg-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-800 tracking-tight">
                {counts[st]}
              </div>
              <div className="text-[10px] text-slate-500 font-semibold mt-1">
                My Tasks: {tasks.filter(t => t.status === st && t.assignee === 'Eshwari').length}
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Action Bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search task or customer..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {activeFilterStatus !== 'All' && (
            <button
              onClick={() => setActiveFilterStatus('All')}
              className="text-xs text-blue-600 hover:underline font-semibold mr-2"
            >
              Clear Filter ({activeFilterStatus})
            </button>
          )}

          <button
            onClick={() => setIsNewTaskOpen(true)}
            className="px-3.5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5 active:scale-95"
          >
            <Plus className="w-4 h-4 text-cyan-300" />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {/* 3. Tasks Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700 text-xs">
              <tr>
                <th className="w-12 text-center">#</th>
                <th className="min-w-[260px]">Task Name & Account</th>
                <th className="w-36">Status</th>
                <th className="w-24">Start Date</th>
                <th className="w-24">Due Date</th>
                <th className="w-28">Assignee</th>
                <th className="min-w-[140px]">Tags</th>
                <th className="w-24 text-center">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredTasks.map((t, index) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                  <td className="text-center font-mono text-slate-400 text-xs">
                    {index + 1}
                  </td>

                  <td>
                    <div className="font-bold text-slate-900 text-xs">{t.name}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{t.customer}</div>
                  </td>

                  {/* Status Dropdown */}
                  <td>
                    <select
                      value={t.status}
                      onChange={(e) => updateTaskStatus(t.id, e.target.value)}
                      className="w-full text-xs py-1 px-2 border border-slate-200 rounded font-semibold bg-white"
                    >
                      {taskStatuses.map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </td>

                  <td className="font-mono text-slate-600 text-xs whitespace-nowrap">
                    {t.startDate}
                  </td>

                  <td className="font-mono text-slate-800 text-xs whitespace-nowrap font-medium">
                    {t.dueDate}
                  </td>

                  {/* Assignee Avatar */}
                  <td>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                        {t.assignee[0]}
                      </div>
                      <span className="text-xs text-slate-700 font-medium">{t.assignee}</span>
                    </div>
                  </td>

                  {/* Tags */}
                  <td>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                      {t.tag}
                    </span>
                  </td>

                  {/* Priority */}
                  <td className="text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getPriorityStyle(t.priority)}`}>
                      {t.priority}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredTasks.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    No tasks match current filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Task Modal */}
      {isNewTaskOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-800">Add New CRM Task</h3>
              <button onClick={() => setIsNewTaskOpen(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>

            <form onSubmit={handleCreateTask} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Task Title *</label>
                <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  placeholder="e.g. Sample Approval for Baclofen IP"
                  className="w-full border border-slate-300 rounded p-2 focus:ring-1 focus:ring-blue-500 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Associated Customer</label>
                <input
                  type="text"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  className="w-full border border-slate-300 rounded p-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Assignee</label>
                  <select
                    value={assignee}
                    onChange={(e) => setAssignee(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2"
                  >
                    {STAFF_LIST.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Due Date</label>
                  <input
                    type="text"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Workflow Tag</label>
                  <select
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="w-full border border-slate-300 rounded p-2"
                  >
                    <option value="Sample Approval">Sample Approval</option>
                    <option value="Payment Followup">Payment Followup</option>
                    <option value="Documentation">Documentation / COA</option>
                    <option value="Price Renegotiation">Price Renegotiation</option>
                    <option value="Dispatch Logistics">Dispatch Logistics</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsNewTaskOpen(false)}
                  className="px-3.5 py-1.5 border border-slate-300 hover:bg-slate-100 rounded font-medium text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-1.5 bg-black hover:bg-slate-900 text-white rounded font-bold shadow"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
