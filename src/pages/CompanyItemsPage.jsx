import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  Filter,
  Download,
  Database,
  ArrowRight,
  Layers,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { generateCompanyItems } from '../data/mockData';
import { useCrm } from '../context/CrmContext';

// Generate 20,000 mock items once
const ALL_CATALOGUE_ITEMS = generateCompanyItems(20000);
const ROW_HEIGHT = 36;
const CONTAINER_HEIGHT = 560;

export default function CompanyItemsPage() {
  const { addSalesLead, setActiveTab, showToast } = useCrm();

  const [activeCategory, setActiveCategory] = useState('All');
  
  // Column-level filters (Every column has a filter as requested!)
  const [filters, setFilters] = useState({
    date: '',
    company: '',
    item: '',
    make: '',
    type: '',
    strength: '',
    casNo: ''
  });

  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const categories = [
    'All',
    'KSM and Intermediates',
    'Pyridine Derivatives',
    'Active Pharmaceutical Ingredients (API)',
    'Pellets & Granules',
    'Excipients & Solvents'
  ];

  const handleFilterChange = (column, value) => {
    setFilters(prev => ({ ...prev, [column]: value.toLowerCase() }));
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  // Filter 20,000 items
  const filteredItems = useMemo(() => {
    return ALL_CATALOGUE_ITEMS.filter(row => {
      // Category tab
      if (activeCategory !== 'All' && row.category !== activeCategory) {
        return false;
      }
      // Column filters
      if (filters.date && !row.date.toLowerCase().includes(filters.date)) return false;
      if (filters.company && !row.company.toLowerCase().includes(filters.company)) return false;
      if (filters.item && !row.item.toLowerCase().includes(filters.item)) return false;
      if (filters.make && !row.make.toLowerCase().includes(filters.make)) return false;
      if (filters.type && !row.type.toLowerCase().includes(filters.type)) return false;
      if (filters.strength && !row.strength.toLowerCase().includes(filters.strength)) return false;
      if (filters.casNo && !row.casNo.toLowerCase().includes(filters.casNo)) return false;

      return true;
    });
  }, [activeCategory, filters]);

  // Virtualization calculations
  const totalRows = filteredItems.length;
  const totalHeight = totalRows * ROW_HEIGHT;
  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 5);
  const endIndex = Math.min(totalRows, Math.floor((scrollTop + CONTAINER_HEIGHT) / ROW_HEIGHT) + 10);
  const visibleRows = filteredItems.slice(startIndex, endIndex);

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const handleCreateLeadFromItem = (item) => {
    addSalesLead({
      customer: item.company,
      item: item.item,
      make: item.make,
      qty: 50,
      rate: item.price,
      info: `Generated from Supplier Catalogue. Type: ${item.type}, Code: ${item.casNo}`
    });
    setActiveTab('My Leads');
  };

  return (
    <div className="space-y-3">
      
      {/* Header bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-slate-800">Company Items & Supplier Global Catalogue</h1>
              <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-mono">
                {totalRows.toLocaleString()} / 20,000 Records
              </span>
            </div>
            <p className="text-[11px] text-slate-500">Virtualised high-speed spreadsheet engine with real-time column-level indexing</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setFilters({
                date: '',
                company: '',
                item: '',
                make: '',
                type: '',
                strength: '',
                casNo: ''
              });
              setActiveCategory('All');
            }}
            className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold text-slate-700 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3 h-3 text-slate-500" />
            <span>Reset All Filters</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              if (containerRef.current) containerRef.current.scrollTop = 0;
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === cat
                ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Virtualized Spreadsheet Grid */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        
        {/* Table Header with Column Filters */}
        <div className="border-b border-slate-200 bg-[#f8fafc]">
          {/* Column Titles */}
          <div className="grid grid-cols-12 text-[11px] font-bold text-slate-700 uppercase tracking-wider p-2">
            <div className="col-span-1">Date</div>
            <div className="col-span-3">Customer / Supplier</div>
            <div className="col-span-2">Item Description</div>
            <div className="col-span-1">Make</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-1">Strength</div>
            <div className="col-span-2">Item Code / HSN</div>
            <div className="col-span-1 text-center">Action</div>
          </div>

          {/* Column Filters Row (Column filter on EVERY column as requested) */}
          <div className="grid grid-cols-12 gap-1.5 px-2 pb-2 bg-slate-100/70 border-t border-slate-200 text-xs">
            <div className="col-span-1">
              <input
                type="text"
                placeholder="Filter date..."
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                className="w-full text-[11px] py-1 px-1.5 border border-slate-300 rounded bg-white"
              />
            </div>
            <div className="col-span-3">
              <input
                type="text"
                placeholder="Filter company..."
                value={filters.company}
                onChange={(e) => handleFilterChange('company', e.target.value)}
                className="w-full text-[11px] py-1 px-1.5 border border-slate-300 rounded bg-white"
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Filter chemical item..."
                value={filters.item}
                onChange={(e) => handleFilterChange('item', e.target.value)}
                className="w-full text-[11px] py-1 px-1.5 border border-slate-300 rounded bg-white font-medium"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                placeholder="Filter make..."
                value={filters.make}
                onChange={(e) => handleFilterChange('make', e.target.value)}
                className="w-full text-[11px] py-1 px-1.5 border border-slate-300 rounded bg-white"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                placeholder="Type..."
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full text-[11px] py-1 px-1.5 border border-slate-300 rounded bg-white"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                placeholder="Strength..."
                value={filters.strength}
                onChange={(e) => handleFilterChange('strength', e.target.value)}
                className="w-full text-[11px] py-1 px-1.5 border border-slate-300 rounded bg-white"
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Item / HSN..."
                value={filters.casNo}
                onChange={(e) => handleFilterChange('casNo', e.target.value)}
                className="w-full text-[11px] py-1 px-1.5 border border-slate-300 rounded bg-white font-mono"
              />
            </div>
            <div className="col-span-1 text-center text-[10px] text-slate-400 self-center font-semibold">
              Live Filter
            </div>
          </div>
        </div>

        {/* Virtualized Scroll Viewport */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          style={{ height: CONTAINER_HEIGHT }}
          className="overflow-y-auto relative divide-y divide-slate-100"
        >
          <div style={{ height: totalHeight, position: 'relative' }}>
            {visibleRows.map((row, index) => {
              const actualIndex = startIndex + index;
              const topOffset = actualIndex * ROW_HEIGHT;

              return (
                <div
                  key={row.id}
                  style={{
                    position: 'absolute',
                    top: topOffset,
                    left: 0,
                    right: 0,
                    height: ROW_HEIGHT
                  }}
                  className="grid grid-cols-12 items-center px-2 hover:bg-blue-50/70 border-b border-slate-100 text-xs transition-colors"
                >
                  <div className="col-span-1 font-mono text-[11px] text-slate-500 truncate">
                    {row.date}
                  </div>
                  <div className="col-span-3 font-semibold text-slate-800 truncate" title={row.company}>
                    {row.company}
                  </div>
                  <div className="col-span-2 font-medium text-slate-900 truncate" title={row.item}>
                    {row.item}
                  </div>
                  <div className="col-span-1 text-slate-600 truncate">
                    {row.make}
                  </div>
                  <div className="col-span-1">
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {row.type}
                    </span>
                  </div>
                  <div className="col-span-1 font-mono text-[11px] text-slate-600">
                    {row.strength}
                  </div>
                  <div className="col-span-2 font-mono text-slate-700 text-[11px] truncate">
                    {row.casNo}
                  </div>
                  <div className="col-span-1 text-center">
                    <button
                      onClick={() => handleCreateLeadFromItem(row)}
                      className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-[10px] font-bold shadow-2xs active:scale-95 transition-all"
                    >
                      + Lead
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info bar */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div>
            Showing <strong className="text-slate-900">{totalRows.toLocaleString()}</strong> catalog items matching filters (from 20,000 dataset)
          </div>
          <div className="text-[11px] text-slate-400">
            Virtual Windowing: {startIndex + 1} - {Math.min(totalRows, endIndex)} rendered in DOM
          </div>
        </div>

      </div>

    </div>
  );
}
