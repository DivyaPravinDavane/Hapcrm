import React, { useState, useMemo } from 'react';
import {
  FlaskConical,
  Search,
  Filter,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Send,
  Building2,
  Layers,
  FileText,
  Download
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';
import { HAP_PRODUCTS } from '../../data/hapProducts';

export default function CatalogPage() {
  const { setIsDemoModalOpen, launchCrmDemo, navigateToWebsite } = useCrm();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set();
    HAP_PRODUCTS.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set).sort();
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return HAP_PRODUCTS.filter((prod) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        prod.name.toLowerCase().includes(q) ||
        prod.category.toLowerCase().includes(q) ||
        (prod.cas && prod.cas.toLowerCase().includes(q));

      const matchesCategory =
        !selectedCategory || prod.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredProducts.slice(start, start + rowsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setCurrentPage(1);
  };

  const handleOpenInquiry = (productName, category) => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* 1. HERO HEADER */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-[#003875] via-[#004B9B] to-[#0A66C2] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold">
            <FlaskConical className="w-4 h-4 text-cyan-300" />
            <span>STANDARDIZED COMPENDIAL CHEMICAL DATABASE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            150+ Active Pharmaceutical Ingredients <br />
            <span className="text-cyan-200">& Chemical Raw Materials</span>
          </h1>

          <p className="text-sm sm:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Every product in the Pharma Chemi catalog conforms to international pharmacopeial standards (USP, BP, EP, IP). Search by chemical name, CAS registry number, or filter by therapeutic classification.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleOpenInquiry()}
              className="px-6 py-3.5 bg-[#EE1C25] hover:bg-[#d61921] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-500/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Inquire Commercial RFQ & Batch COA</span>
            </button>

            <button
              onClick={launchCrmDemo}
              className="px-6 py-3.5 bg-slate-900 hover:bg-black text-cyan-300 text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Manage In CRM Item Master</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. CATALOG CONTROLS & TABLE SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Search & Category Filter Controls */}
        <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-end">
            
            {/* Keyword Search */}
            <div className="md:col-span-6">
              <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                Search API Name / CAS Number
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="e.g. Paracetamol, Metformin, 50-78-2..."
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-4">
              <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                Therapeutic Classification
              </label>
              <div className="relative">
                <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#004B9B] focus:ring-1 focus:ring-[#004B9B] outline-none transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="">All Categories ({HAP_PRODUCTS.length} Products)</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reset Button */}
            <div className="md:col-span-2">
              <button
                onClick={handleResetFilters}
                className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

          </div>

          {/* Active Filter Indicators */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <div>
              Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of{' '}
              <span className="font-semibold">{HAP_PRODUCTS.length}</span> Active Pharmaceutical Ingredients
            </div>
            <div className="text-2xs text-slate-500">
              Page <strong className="text-slate-900">{currentPage}</strong> of <strong>{totalPages}</strong>
            </div>
          </div>
        </div>

        {/* 3. PRODUCTS DATA TABLE */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#004B9B] text-white text-[11px] uppercase tracking-wider font-extrabold select-none">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4">Chemical / API Product Name</th>
                  <th className="py-3 px-4">CAS Registry No.</th>
                  <th className="py-3 px-4">Therapeutic Category</th>
                  <th className="py-3 px-4">Pharmacopeia</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedProducts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-500">
                      <FlaskConical className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                      <div className="font-bold text-sm">No chemicals match your criteria</div>
                      <p className="text-xs text-slate-400 mt-1">Try resetting search filters or keywords.</p>
                      <button
                        onClick={handleResetFilters}
                        className="mt-3 px-3 py-1.5 bg-[#004B9B] text-white rounded-lg text-xs font-bold inline-flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset Filters</span>
                      </button>
                    </td>
                  </tr>
                ) : (
                  paginatedProducts.map((prod, index) => {
                    const globalIndex = (currentPage - 1) * rowsPerPage + index + 1;
                    return (
                      <tr 
                        key={prod.id || index} 
                        className="hover:bg-blue-50/40 transition-colors group"
                      >
                        <td className="py-3.5 px-4 text-center font-mono text-slate-400 text-2xs">
                          {globalIndex}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900 group-hover:text-[#004B9B] transition-colors">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                            <span>{prod.name}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs text-slate-600">
                          {prod.cas ? (
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700 border border-slate-200">
                              {prod.cas}
                            </span>
                          ) : (
                            <span className="text-slate-400 italic">Available on Request</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-[#004B9B] rounded-full text-2xs font-bold border border-blue-100">
                            {prod.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" />
                            <span>USP / BP / EP / IP</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => handleOpenInquiry(prod.name, prod.category)}
                            className="px-3 py-1.5 bg-[#EE1C25] hover:bg-[#d61921] text-white font-bold text-2xs rounded-lg shadow-xs flex items-center justify-center gap-1 mx-auto transition-all active:scale-95 cursor-pointer"
                          >
                            <Send className="w-3 h-3" />
                            <span>Inquire RFQ</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-100 transition-colors disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-7 h-7 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-[#004B9B] text-white shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                {totalPages > 7 && <span className="text-slate-400 px-1">...</span>}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-100 transition-colors disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

      </section>

      {/* 4. SISTER CONCERN HIGHLIGHT */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-50 to-red-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EE1C25]/10 text-[#EE1C25] text-2xs font-extrabold uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>MANUFACTURING PARTNER</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Looking for Custom Synthesis or Intermediate Synthesis?
              </h3>
              <p className="text-xs text-slate-600 max-w-xl">
                Explore our sister concern manufacturing plant <strong>Lanco Industries</strong> located in Gujarat Chemical Zone with statutory clearances from the Government of Gujarat and progressive WHO-GMP accreditation.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateToWebsite('manufacturing')}
                className="px-5 py-2.5 bg-[#004B9B] hover:bg-[#003875] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Inspect Lanco Factory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
