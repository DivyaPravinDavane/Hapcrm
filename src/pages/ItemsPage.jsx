import React, { useState, useMemo } from 'react';
import {
  Package,
  Search,
  Plus,
  Upload,
  Download,
  Edit2,
  Copy,
  Trash2,
  Layers,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { useCrm } from '../context/CrmContext';

export default function ItemsPage() {
  const { items, setIsNewItemOpen, addItem, showToast } = useCrm();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [editingStockId, setEditingStockId] = useState(null);
  const [tempStockValue, setTempStockValue] = useState(0);

  const groups = useMemo(() => {
    const set = new Set(items.map(i => i.groupName));
    return ['All', ...Array.from(set)];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const mDesc = item.description.toLowerCase().includes(q);
        const mCode = (item.code || '').toLowerCase().includes(q);
        const mCas = (item.casNo || '').toLowerCase().includes(q);
        if (!mDesc && !mCode && !mCas) return false;
      }
      if (selectedGroup !== 'All' && item.groupName !== selectedGroup) {
        return false;
      }
      return true;
    });
  }, [items, searchTerm, selectedGroup]);

  const handleCopyItem = (item) => {
    addItem({
      ...item,
      description: `${item.description} (Copy)`,
      code: `CP-API-${Math.floor(2000 + Math.random() * 8000)}`
    });
  };

  return (
    <div className="space-y-3">
      
      {/* Header & Filter Bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 flex-1">
          <div className="relative min-w-[240px] max-w-xs flex-1">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product description, CAS, code..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs focus:bg-white"
            />
          </div>

          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-700"
          >
            {groups.map(g => (
              <option key={g} value={g}>{g === 'All' ? 'All Product Groups' : g}</option>
            ))}
          </select>
        </div>

        {/* Action Buttons: New Item, Import Items, Groups */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Opening Product Groups Master...', 'info')}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-slate-500" />
            <span>Groups</span>
          </button>

          <button
            onClick={() => showToast('Bulk Product Master CSV Import wizard ready.', 'info')}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Import Items</span>
          </button>

          <button
            onClick={() => setIsNewItemOpen(true)}
            className="px-3.5 py-1.5 bg-black hover:bg-slate-900 text-white rounded text-xs font-bold shadow flex items-center gap-1.5 active:scale-95"
          >
            <Plus className="w-4 h-4 text-cyan-300" />
            <span>New Item</span>
          </button>
        </div>
      </div>

      {/* Product Master Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left dense-table divide-y divide-slate-200">
            <thead className="bg-[#f8fafc] text-slate-700 text-xs">
              <tr>
                <th className="min-w-[160px]">Description</th>
                <th className="w-28">Item Code / CAS</th>
                <th className="w-20">Rate (₹)</th>
                <th className="w-18">5KG</th>
                <th className="w-18">10KG</th>
                <th className="w-18">25KG</th>
                <th className="w-18">50KG</th>
                <th className="w-28">Packing</th>
                <th className="w-28">Delivery</th>
                <th className="min-w-[150px]">Remark</th>
                <th className="w-20 text-center">Stock (KG)</th>
                <th className="w-12 text-center">Unit</th>
                <th className="min-w-[130px]">Group Name</th>
                <th className="w-28 text-center">Row Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  {/* Description */}
                  <td>
                    <div className="font-bold text-slate-900 text-xs">{item.description}</div>
                    <div className="text-[10px] text-slate-500">Make: {item.make}</div>
                  </td>

                  {/* Code & CAS */}
                  <td>
                    <div className="font-mono text-slate-700 text-[11px] font-semibold">{item.code}</div>
                    <div className="font-mono text-[10px] text-slate-400">CAS: {item.casNo}</div>
                  </td>

                  {/* Rate */}
                  <td className="font-mono font-bold text-blue-700 text-xs">
                    ₹ {Number(item.rate).toLocaleString()}
                  </td>

                  {/* Price tiers: 5KG / 10KG / 25KG / 50KG */}
                  <td className="font-mono text-slate-600 text-xs">₹ {item.price5kg?.toLocaleString()}</td>
                  <td className="font-mono text-slate-600 text-xs">₹ {item.price10kg?.toLocaleString()}</td>
                  <td className="font-mono text-slate-600 text-xs">₹ {item.price25kg?.toLocaleString()}</td>
                  <td className="font-mono text-slate-600 text-xs">₹ {item.price50kg?.toLocaleString()}</td>

                  {/* Packing */}
                  <td className="text-slate-700 text-xs whitespace-nowrap">{item.packing}</td>

                  {/* Delivery */}
                  <td className="text-slate-600 text-xs whitespace-nowrap">{item.delivery}</td>

                  {/* Remark */}
                  <td className="text-slate-500 text-[11px] max-w-[180px] truncate" title={item.remark}>
                    {item.remark}
                  </td>

                  {/* Stock */}
                  <td className="text-center font-mono">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        item.stock > 0
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.stock}
                    </span>
                  </td>

                  {/* Unit */}
                  <td className="text-center font-bold text-slate-500 text-[10px]">
                    {item.unit}
                  </td>

                  {/* Group Name */}
                  <td>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-50 text-purple-800 border border-purple-100">
                      {item.groupName}
                    </span>
                  </td>

                  {/* Row actions: Edit | Stock | Delete | Copy */}
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[11px]">
                      <button
                        onClick={() => showToast(`Edit master for ${item.description}`, 'info')}
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        Edit
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={() => showToast(`Stock log for ${item.description}: ${item.stock} KG ready in warehouse.`, 'info')}
                        className="text-emerald-600 hover:text-emerald-800 hover:underline font-medium"
                      >
                        Stock
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={() => handleCopyItem(item)}
                        className="text-slate-600 hover:text-slate-800 hover:underline font-medium"
                      >
                        Copy
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={() => showToast(`Cannot delete active catalog master.`, 'error')}
                        className="text-rose-600 hover:text-rose-800 hover:underline font-medium"
                      >
                        Delete
                      </button>
                    </div>
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
