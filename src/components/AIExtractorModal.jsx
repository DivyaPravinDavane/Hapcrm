import React, { useState, useEffect } from 'react';
import {
  X,
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Plus,
  Trash2,
  ExternalLink,
  Loader2,
  Building,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCrm } from '../context/CrmContext';
import { extractChemicals } from '../utils/aiExtractor';

export default function AIExtractorModal() {
  const {
    isExtractorOpen,
    setIsExtractorOpen,
    customers,
    STAFF_LIST,
    items,
    addItem,
    createLeadsFromExtracted,
    setActiveTab,
    showToast
  } = useCrm();

  // Steps: 1 (Upload) -> 2 (Processing) -> 3 (Review & Match) -> 4 (Success / Done)
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedSampleName, setSelectedSampleName] = useState('Enquiry_Zymeth_Requirement_RFQ.pdf');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [processingStatusText, setProcessingStatusText] = useState('Initializing OCR Vision model...');
  
  // Extracted records
  const [extractedRows, setExtractedRows] = useState([]);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  // Form selections
  const [selectedCustomer, setSelectedCustomer] = useState('ZYMETH PHARMACEUTICALS PVT LTD-492614');
  const [selectedStaff, setSelectedStaff] = useState('Eshwari');
  const [createdLeadsCount, setCreatedLeadsCount] = useState(0);

  // Reset when opening
  useEffect(() => {
    if (isExtractorOpen) {
      setStep(1);
      setSelectedFile(null);
      setProcessingProgress(0);
      setActiveHighlightIndex(0);
    }
  }, [isExtractorOpen]);

  if (!isExtractorOpen) return null;

  // Handle File Upload & start extraction
  const handleStartExtraction = async (fileName = 'Enquiry_Zymeth_Requirement_RFQ.pdf') => {
    setSelectedSampleName(fileName);
    setStep(2);
    setProcessingProgress(15);
    setProcessingStatusText('Reading document layout and structure...');

    // Progress updates
    const t1 = setTimeout(() => {
      setProcessingProgress(45);
      setProcessingStatusText('Detecting pharmaceutical chemical nomenclature & CAS numbers...');
    }, 600);

    const t2 = setTimeout(() => {
      setProcessingProgress(80);
      setProcessingStatusText('Fuzzy-matching against HAP Items Master catalog...');
    }, 1200);

    try {
      const results = await extractChemicals(fileName);
      setProcessingProgress(100);
      setProcessingStatusText('Extraction complete! Loading review screen...');
      setTimeout(() => {
        setExtractedRows(results);
        setStep(3);
      }, 400);
    } catch (err) {
      showToast('Error parsing document. Using standard pharma test set.', 'error');
      setStep(1);
    } finally {
      clearTimeout(t1);
      clearTimeout(t2);
    }
  };

  // Cell change handler
  const handleCellChange = (id, field, value) => {
    setExtractedRows(prev =>
      prev.map(row => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  // Toggle selection
  const handleToggleSelect = (id) => {
    setExtractedRows(prev =>
      prev.map(row => (row.id === id ? { ...row, selected: !row.selected } : row))
    );
  };

  // Delete row
  const handleDeleteRow = (id) => {
    setExtractedRows(prev => prev.filter(row => row.id !== id));
  };

  // Add empty row
  const handleAddRow = () => {
    const newId = `ext-${Date.now()}`;
    setExtractedRows(prev => [
      ...prev,
      {
        id: newId,
        selected: true,
        chemicalName: 'New Chemical',
        casNo: '',
        grade: 'IP',
        quantity: 50,
        unit: 'KG',
        purity: '99.0%',
        make: 'Kodel',
        confidence: 85,
        matchStatus: 'Possible match',
        suggestions: items.slice(0, 3)
      }
    ]);
  };

  // Create item in product master
  const handleCreateNewItem = (row) => {
    const created = addItem({
      description: row.chemicalName,
      casNo: row.casNo || '00-00-0',
      rate: 4500,
      make: row.make || 'Kodel',
      packing: '25 KG Drum',
      groupName: 'Extracted API'
    });

    // Update row match status
    setExtractedRows(prev =>
      prev.map(r =>
        r.id === row.id
          ? { ...r, matchStatus: 'Matched', matchedItem: created }
          : r
      )
    );
  };

  // Select suggestion for possible match
  const handleSelectSuggestion = (rowId, suggestedItem) => {
    setExtractedRows(prev =>
      prev.map(r =>
        r.id === rowId
          ? {
              ...r,
              chemicalName: suggestedItem.description,
              casNo: suggestedItem.casNo || r.casNo,
              matchStatus: 'Matched',
              matchedItem: suggestedItem
            }
          : r
      )
    );
  };

  // Final Action: Create Leads
  const handleCreateLeads = () => {
    const selectedRows = extractedRows.filter(r => r.selected);
    if (selectedRows.length === 0) {
      showToast('Please select at least one chemical to create leads.', 'error');
      return;
    }

    const created = createLeadsFromExtracted(selectedRows, selectedCustomer, selectedStaff);
    setCreatedLeadsCount(created.length);

    // Fire Confetti!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setStep(4);
  };

  const selectedCount = extractedRows.filter(r => r.selected).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-6xl max-h-[94vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                Extract Chemicals from Document (AI Vision & OCR)
                <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  v2.4 Intelligent Matcher
                </span>
              </h2>
              <p className="text-[11px] text-slate-500">
                Instantly parse scanned RFQ letters, specification sheets, and convert into sales enquiry leads.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsExtractorOpen(false)}
            className="w-7 h-7 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stepper Header */}
        <div className="px-6 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 font-medium ${step >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                1
              </span>
              <span>Upload Document</span>
            </div>
            <span className="text-slate-300">›</span>
            <div className={`flex items-center gap-1.5 font-medium ${step >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                2
              </span>
              <span>AI Processing</span>
            </div>
            <span className="text-slate-300">›</span>
            <div className={`flex items-center gap-1.5 font-medium ${step >= 3 ? 'text-blue-600' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                3
              </span>
              <span>Review & Match</span>
            </div>
            <span className="text-slate-300">›</span>
            <div className={`flex items-center gap-1.5 font-medium ${step >= 4 ? 'text-blue-600' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 4 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                4
              </span>
              <span>Create Leads</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500">
            Current Document: <strong className="text-slate-700">{selectedSampleName}</strong>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          
          {/* STEP 1: Upload */}
          {step === 1 && (
            <div className="max-w-2xl mx-auto py-6 space-y-6">
              <div
                onClick={() => handleStartExtraction('Enquiry_Zymeth_Requirement_RFQ.pdf')}
                className="border-2 border-dashed border-blue-300 hover:border-blue-500 rounded-xl p-8 text-center bg-blue-50/40 hover:bg-blue-50/70 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">
                  Click to browse or drag and drop enquiry document
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Supports scanned PDF, image (JPG, PNG), Word, Excel or COA letters. Max 15MB.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-md shadow hover:bg-blue-700">
                  Select File From Computer
                </div>
              </div>

              {/* Quick Sample Files to Test Immediately */}
              <div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span>Or test with pre-loaded pharma inquiry samples:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => handleStartExtraction('Enquiry_Zymeth_Requirement_RFQ.pdf')}
                    className="p-3 border border-slate-200 hover:border-blue-400 rounded-lg bg-white hover:bg-blue-50/30 cursor-pointer transition-all flex items-start gap-3 shadow-xs"
                  >
                    <div className="p-2 bg-rose-50 text-rose-600 rounded">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-slate-800">ZYMETH PHARMA RFQ.pdf</div>
                      <div className="text-[11px] text-slate-500">7 chemicals (Linezolid, Telmisartan, Domperidone...)</div>
                      <div className="text-[10px] text-blue-600 font-medium mt-1">Click to analyze →</div>
                    </div>
                  </div>

                  <div
                    onClick={() => handleStartExtraction('Mihika_Pharma_Bulk_Order_List.png')}
                    className="p-3 border border-slate-200 hover:border-blue-400 rounded-lg bg-white hover:bg-blue-50/30 cursor-pointer transition-all flex items-start gap-3 shadow-xs"
                  >
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-slate-800">Mihika_Bulk_Order.png</div>
                      <div className="text-[11px] text-slate-500">Scanned purchase requirement slip with CAS</div>
                      <div className="text-[10px] text-blue-600 font-medium mt-1">Click to analyze →</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Processing State (2s simulated OCR delay) */}
          {step === 2 && (
            <div className="py-16 max-w-md mx-auto text-center space-y-5">
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-pulse" />
                <div className="w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  AI Analyzing Chemical Document...
                </h3>
                <p className="text-xs text-slate-500 h-5">
                  {processingStatusText}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${processingProgress}%` }}
                />
              </div>

              <div className="text-[11px] text-slate-400">
                Running OCR vision models & Pharmacopoeial database fuzzy mapper...
              </div>
            </div>
          )}

          {/* STEP 3: Review Screen (Split View) */}
          {step === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
              
              {/* Left Column: Interactive Document Preview */}
              <div className="lg:col-span-4 bg-slate-50 rounded-lg border border-slate-200 p-3 flex flex-col">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                  <span className="font-bold text-xs text-slate-700 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    Original Document Preview
                  </span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">
                    1 / 1 Page
                  </span>
                </div>

                {/* Scanned Document Mockup Card */}
                <div className="flex-1 bg-white border border-slate-300 rounded shadow-inner p-4 relative font-serif text-[11px] leading-relaxed text-slate-800 select-none overflow-y-auto max-h-[460px]">
                  
                  {/* Document Header */}
                  <div className="text-center border-b pb-2 mb-3">
                    <div className="font-bold tracking-wide text-xs text-slate-900 uppercase">
                      ZYMETH PHARMACEUTICALS PVT LTD
                    </div>
                    <div className="text-[9px] text-slate-500 font-sans">
                      Plot C-14, MIDC Tarapur, Palghar - 401506 | GST: 27AABCZ1234F1Z8
                    </div>
                    <div className="text-[10px] font-bold text-slate-700 mt-1 uppercase underline font-sans">
                      ANNUAL REQUIREMENT & RFQ ENQUIRY
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-600 font-sans mb-3 flex justify-between">
                    <span>Ref: ZYM/PUR/2026-10/44</span>
                    <span>Date: 20-Oct-2026</span>
                  </div>

                  <p className="text-[10px] text-slate-700 mb-2">
                    To, <strong>HAP Enterprise</strong>,<br />
                    Dear Team, Please provide your best competitive rate for the following items with delivery schedule:
                  </p>

                  {/* Scanned Table with visual chemical highlight boxes */}
                  <div className="border border-slate-300 rounded text-[10px] mb-3">
                    <div className="grid grid-cols-12 bg-slate-100 font-bold p-1 border-b text-[9px] uppercase font-sans">
                      <div className="col-span-1">#</div>
                      <div className="col-span-7">Chemical / Specification</div>
                      <div className="col-span-4 text-right">Qty Req.</div>
                    </div>

                    {extractedRows.map((r, i) => {
                      const isHighlighted = activeHighlightIndex === i;
                      return (
                        <div
                          key={r.id}
                          onClick={() => setActiveHighlightIndex(i)}
                          className={`grid grid-cols-12 p-1.5 border-b border-slate-100 cursor-pointer transition-all ${
                            isHighlighted
                              ? 'bg-amber-100/90 font-bold border-l-4 border-l-amber-500 text-amber-950 scale-[1.01] shadow-xs'
                              : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className="col-span-1">{i + 1}.</div>
                          <div className="col-span-7">
                            <span className="font-semibold">{r.chemicalName}</span>
                            {r.casNo && <span className="text-[9px] text-slate-500 font-mono block">CAS: {r.casNo}</span>}
                          </div>
                          <div className="col-span-4 text-right font-mono font-semibold">
                            {r.quantity} {r.unit}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-[10px] text-slate-600 mt-2">
                    Terms: Material must be accompanied by Manufacturer COA & DMF compliance.
                  </div>

                  <div className="mt-4 pt-2 border-t flex justify-between text-[9px] text-slate-400 font-sans">
                    <span>Authorized Sourcing Signatory</span>
                    <span>Page 1 of 1</span>
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-slate-400 text-center">
                  💡 Tip: Click any row in the extracted table to highlight corresponding line on the left.
                </div>
              </div>

              {/* Right Column: Extracted Table & Matcher */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-800">
                        Extracted Chemicals ({extractedRows.length})
                      </span>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">
                        {selectedCount} selected for lead creation
                      </span>
                    </div>

                    <button
                      onClick={handleAddRow}
                      className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Row
                    </button>
                  </div>

                  {/* Dense Extracted Table */}
                  <div className="border border-slate-200 rounded-lg overflow-x-auto max-h-[380px] shadow-xs">
                    <table className="w-full text-left text-xs divide-y divide-slate-200">
                      <thead className="bg-slate-100/90 text-slate-600 sticky top-0 text-[11px] uppercase font-semibold">
                        <tr>
                          <th className="p-2 w-7">
                            <input
                              type="checkbox"
                              checked={extractedRows.length > 0 && extractedRows.every(r => r.selected)}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setExtractedRows(prev => prev.map(r => ({ ...r, selected: checked })));
                              }}
                              className="rounded text-blue-600"
                            />
                          </th>
                          <th className="p-2">Chemical Name</th>
                          <th className="p-2 w-28">CAS No</th>
                          <th className="p-2 w-16">Grade</th>
                          <th className="p-2 w-20">Qty/Unit</th>
                          <th className="p-2 w-24">Make</th>
                          <th className="p-2">Match Status</th>
                          <th className="p-2 w-14 text-center">Conf.</th>
                          <th className="p-2 w-10"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {extractedRows.map((row, index) => {
                          const isHighlighted = activeHighlightIndex === index;
                          return (
                            <tr
                              key={row.id}
                              onClick={() => setActiveHighlightIndex(index)}
                              className={`transition-colors ${
                                isHighlighted ? 'bg-blue-50/70 ring-1 ring-blue-300' : 'hover:bg-slate-50'
                              }`}
                            >
                              <td className="p-2" onClick={(e) => e.stopPropagation()}>
                                <input
                                  type="checkbox"
                                  checked={row.selected}
                                  onChange={() => handleToggleSelect(row.id)}
                                  className="rounded text-blue-600"
                                />
                              </td>

                              {/* Chemical Name */}
                              <td className="p-2">
                                <input
                                  type="text"
                                  value={row.chemicalName}
                                  onChange={(e) => handleCellChange(row.id, 'chemicalName', e.target.value)}
                                  className="w-full px-1.5 py-0.5 border border-slate-200 rounded text-xs font-semibold focus:ring-1 focus:ring-blue-400"
                                />
                              </td>

                              {/* CAS No */}
                              <td className="p-2">
                                <input
                                  type="text"
                                  value={row.casNo}
                                  onChange={(e) => handleCellChange(row.id, 'casNo', e.target.value)}
                                  className="w-full px-1.5 py-0.5 border border-slate-200 rounded text-[11px] font-mono focus:ring-1 focus:ring-blue-400"
                                  placeholder="e.g. 98-92-0"
                                />
                              </td>

                              {/* Grade */}
                              <td className="p-2">
                                <select
                                  value={row.grade}
                                  onChange={(e) => handleCellChange(row.id, 'grade', e.target.value)}
                                  className="px-1 py-0.5 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-blue-400"
                                >
                                  <option value="IP">IP</option>
                                  <option value="BP">BP</option>
                                  <option value="USP">USP</option>
                                  <option value="EP">EP</option>
                                  <option value="Technical">Tech</option>
                                </select>
                              </td>

                              {/* Qty & Unit */}
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center gap-1">
                                  <input
                                    type="number"
                                    value={row.quantity}
                                    onChange={(e) => handleCellChange(row.id, 'quantity', e.target.value)}
                                    className="w-12 px-1 py-0.5 border border-slate-200 rounded text-xs font-mono"
                                  />
                                  <span className="text-[10px] text-slate-500 font-bold">KG</span>
                                </div>
                              </td>

                              {/* Make */}
                              <td className="p-2">
                                <input
                                  type="text"
                                  value={row.make}
                                  onChange={(e) => handleCellChange(row.id, 'make', e.target.value)}
                                  className="w-full px-1.5 py-0.5 border border-slate-200 rounded text-xs"
                                />
                              </td>

                              {/* Match Status & Suggestions */}
                              <td className="p-2">
                                {row.matchStatus === 'Matched' && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    Matched
                                  </span>
                                )}

                                {row.matchStatus === 'Possible match' && (
                                  <div className="space-y-1">
                                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800">
                                      <AlertTriangle className="w-3 h-3 text-amber-600" />
                                      Possible match
                                    </span>
                                    {row.suggestions && row.suggestions.length > 0 && (
                                      <select
                                        onChange={(e) => {
                                          const item = row.suggestions.find(s => s.id === e.target.value);
                                          if (item) handleSelectSuggestion(row.id, item);
                                        }}
                                        defaultValue=""
                                        className="block w-full text-[10px] border border-amber-300 rounded bg-amber-50/50 py-0.5 px-1"
                                      >
                                        <option value="" disabled>Map to item...</option>
                                        {row.suggestions.map(sug => (
                                          <option key={sug.id} value={sug.id}>
                                            → {sug.description}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                  </div>
                                )}

                                {row.matchStatus === 'New item' && (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-100 text-purple-800">
                                      New item
                                    </span>
                                    <button
                                      onClick={() => handleCreateNewItem(row)}
                                      className="px-1.5 py-0.5 bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-semibold rounded shadow-xs"
                                    >
                                      + Create item
                                    </button>
                                  </div>
                                )}
                              </td>

                              {/* Confidence */}
                              <td className="p-2 text-center">
                                <div className="text-[11px] font-mono font-bold text-slate-700">
                                  {row.confidence}%
                                </div>
                                <div className="w-10 bg-slate-200 h-1 rounded-full mx-auto overflow-hidden">
                                  <div
                                    className={`h-full ${
                                      row.confidence > 90 ? 'bg-emerald-500' : row.confidence > 70 ? 'bg-amber-500' : 'bg-rose-500'
                                    }`}
                                    style={{ width: `${row.confidence}%` }}
                                  />
                                </div>
                              </td>

                              {/* Delete */}
                              <td className="p-2 text-center" onClick={(e) => e.stopPropagation()}>
                                <button
                                  onClick={() => handleDeleteRow(row.id)}
                                  className="text-slate-400 hover:text-rose-600 transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Bottom Bar: Customer & Staff Assignment & Action */}
                <div className="mt-4 pt-3 border-t border-slate-200 bg-slate-50 -mx-4 -mb-4 p-4 rounded-b-xl flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Customer Picker */}
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-slate-500" />
                      <label className="text-xs font-semibold text-slate-700">Customer:</label>
                      <select
                        value={selectedCustomer}
                        onChange={(e) => setSelectedCustomer(e.target.value)}
                        className="text-xs border border-slate-300 rounded px-2.5 py-1 bg-white font-medium focus:ring-1 focus:ring-blue-500"
                      >
                        {customers.map(c => (
                          <option key={c.id} value={c.company}>{c.company}</option>
                        ))}
                      </select>
                    </div>

                    {/* Staff Assignee */}
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-slate-500" />
                      <label className="text-xs font-semibold text-slate-700">Assign To:</label>
                      <select
                        value={selectedStaff}
                        onChange={(e) => setSelectedStaff(e.target.value)}
                        className="text-xs border border-slate-300 rounded px-2.5 py-1 bg-white font-medium focus:ring-1 focus:ring-blue-500"
                      >
                        {STAFF_LIST.map(s => (
                          <option key={s.id} value={s.name}>{s.name} ({s.role})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setIsExtractorOpen(false)}
                      className="px-3.5 py-1.5 border border-slate-300 hover:bg-slate-100 rounded text-xs font-medium text-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCreateLeads}
                      disabled={selectedCount === 0}
                      className="px-5 py-1.5 bg-black hover:bg-slate-900 disabled:opacity-50 text-white rounded text-xs font-bold shadow flex items-center gap-2 active:scale-95 transition-all"
                    >
                      <span>Create Leads ({selectedCount})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* STEP 4: Success / Done */}
          {step === 4 && (
            <div className="py-12 max-w-lg mx-auto text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800">
                  {createdLeadsCount} Sales Enquiry Leads Created Successfully!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Leads have been assigned to <strong>{selectedStaff}</strong> with status <strong>Pending</strong> for <strong>{selectedCustomer}</strong>.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-left text-xs text-emerald-900 space-y-1">
                <div className="font-semibold">Next recommended actions:</div>
                <ul className="list-disc list-inside text-emerald-800 space-y-0.5 text-[11px]">
                  <li>Check warehouse stock in Bhiwandi / Ankleshwar for immediate quotation.</li>
                  <li>Inquire current supplier rates in Purchase Leads tab for non-stock items.</li>
                  <li>Add rate quotation and dispatch delivery estimate.</li>
                </ul>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setIsExtractorOpen(false);
                    setActiveTab('My Leads');
                  }}
                  className="px-5 py-2 bg-black hover:bg-slate-800 text-white rounded font-bold text-xs flex items-center gap-2 shadow"
                >
                  <span>Go to My Leads</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleStartExtraction()}
                  className="px-4 py-2 border border-slate-300 hover:bg-slate-100 rounded font-medium text-xs text-slate-700"
                >
                  Extract Another Document
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
