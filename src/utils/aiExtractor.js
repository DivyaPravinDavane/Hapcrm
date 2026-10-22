// AI Chemical Extractor Utility
// Simulates OCR / LLM extraction of chemical names, CAS, grades, quantities from documents

import { ITEMS_MASTER } from '../data/mockData';

// Levenshtein / fuzzy string similarity helper
export function calculateSimilarity(s1, s2) {
  const str1 = (s1 || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const str2 = (s2 || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  if (str1 === str2) return 1.0;
  if (!str1 || !str2) return 0;
  if (str1.includes(str2) || str2.includes(str1)) return 0.85;

  // Simple token overlap
  const tokens1 = (s1 || '').toLowerCase().split(/\s+/);
  const tokens2 = (s2 || '').toLowerCase().split(/\s+/);
  const matches = tokens1.filter(t => tokens2.includes(t));
  if (matches.length > 0) {
    return Math.min(0.9, matches.length / Math.max(tokens1.length, tokens2.length));
  }

  return 0.3;
}

// Function to match extracted chemical name against Items Master
export function matchChemicalToItems(rawName, rawCas) {
  if (!rawName) return { status: 'New item', matchedItem: null, suggestions: [] };

  const cleanName = rawName.trim().toLowerCase();

  // 1. Direct CAS match
  if (rawCas) {
    const casMatch = ITEMS_MASTER.find(item => item.casNo === rawCas);
    if (casMatch) {
      return {
        status: 'Matched',
        matchedItem: casMatch,
        suggestions: [casMatch]
      };
    }
  }

  // 2. Exact or very close name match
  const exactMatch = ITEMS_MASTER.find(item => 
    item.description.toLowerCase() === cleanName ||
    cleanName.includes(item.description.toLowerCase()) ||
    item.description.toLowerCase().includes(cleanName)
  );

  // Check specific common pharma aliases
  if (cleanName.includes('hydroxyzine hcl') || cleanName.includes('hydroxyzine hydrochloride')) {
    const hydroItem = ITEMS_MASTER.find(i => i.casNo === '68-88-2');
    return {
      status: 'Possible match',
      matchedItem: hydroItem,
      suggestions: [
        hydroItem,
        ...ITEMS_MASTER.filter(i => i.groupName.includes('Antihistamine') && i.id !== hydroItem?.id)
      ]
    };
  }

  if (exactMatch) {
    // If exact description match
    if (exactMatch.description.toLowerCase() === cleanName) {
      return {
        status: 'Matched',
        matchedItem: exactMatch,
        suggestions: [exactMatch]
      };
    } else {
      return {
        status: 'Possible match',
        matchedItem: exactMatch,
        suggestions: [exactMatch, ...ITEMS_MASTER.slice(0, 3)]
      };
    }
  }

  // 3. Fuzzy search for suggestions
  const ranked = ITEMS_MASTER.map(item => ({
    item,
    score: calculateSimilarity(rawName, item.description)
  })).sort((a, b) => b.score - a.score);

  if (ranked[0] && ranked[0].score >= 0.7) {
    return {
      status: 'Possible match',
      matchedItem: ranked[0].item,
      suggestions: ranked.slice(0, 3).map(r => r.item)
    };
  }

  // 4. Truly unknown / unmatched chemical
  return {
    status: 'New item',
    matchedItem: null,
    suggestions: ranked.slice(0, 3).map(r => r.item)
  };
}

/**
 * Isolated function: extractChemicals(file)
 * Can be swapped with real vision/LLM API call (e.g. Gemini 1.5 Pro / Flash Vision)
 */
export async function extractChemicals(fileOrSample) {
  // Simulate 2-second extraction / OCR delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Believable mock result of 7 pharma chemicals
  const extractedRaw = [
    {
      id: 'ext-1',
      chemicalName: 'Linezolid IP',
      casNo: '165800-06-6',
      grade: 'IP',
      quantity: 50,
      unit: 'KG',
      purity: '99.5%',
      make: 'Kodel',
      confidence: 98,
      docHighlightBox: { top: '24%', left: '12%', width: '45%', height: '5%' }
    },
    {
      id: 'ext-2',
      chemicalName: 'Telmisartan USP',
      casNo: '144701-48-4',
      grade: 'USP',
      quantity: 100,
      unit: 'KG',
      purity: '99.2%',
      make: 'Lasons',
      confidence: 96,
      docHighlightBox: { top: '30%', left: '12%', width: '45%', height: '5%' }
    },
    {
      id: 'ext-3',
      chemicalName: 'Domperidone IP',
      casNo: '57808-66-9',
      grade: 'IP',
      quantity: 75,
      unit: 'KG',
      purity: '99.0%',
      make: 'Vasudha',
      confidence: 94,
      docHighlightBox: { top: '36%', left: '12%', width: '45%', height: '5%' }
    },
    {
      id: 'ext-4',
      chemicalName: 'Niacinamide IP',
      casNo: '98-92-0',
      grade: 'IP/BP',
      quantity: 20,
      unit: 'KG',
      purity: '99.6%',
      make: 'Primeus',
      confidence: 91,
      docHighlightBox: { top: '42%', left: '12%', width: '45%', height: '5%' }
    },
    {
      id: 'ext-5',
      chemicalName: 'HYDROXYZINE HCL', // spelling variant for fuzzy match testing
      casNo: '68-88-2',
      grade: 'BP',
      quantity: 40,
      unit: 'KG',
      purity: '98.5%',
      make: 'Bioaltus',
      confidence: 76, // low confidence
      docHighlightBox: { top: '48%', left: '12%', width: '45%', height: '5%' }
    },
    {
      id: 'ext-6',
      chemicalName: 'Folic Acid IP',
      casNo: '59-30-3',
      grade: 'IP',
      quantity: 30,
      unit: 'KG',
      purity: '99.1%',
      make: 'Positron',
      confidence: 91,
      docHighlightBox: { top: '54%', left: '12%', width: '45%', height: '5%' }
    },
    {
      id: 'ext-7',
      chemicalName: 'Sofosbuvir Intermediate 2-Fluoro', // Unmatched new item
      casNo: '1334513-02-8',
      grade: 'Technical',
      quantity: 15,
      unit: 'KG',
      purity: '97.5%',
      make: 'Unknown Maker',
      confidence: 52, // low confidence
      docHighlightBox: { top: '60%', left: '12%', width: '55%', height: '5%' }
    }
  ];

  // Process and compute match status with Items Master
  return extractedRaw.map(item => {
    const matchResult = matchChemicalToItems(item.chemicalName, item.casNo);
    return {
      ...item,
      selected: true,
      matchStatus: matchResult.status, // 'Matched' | 'Possible match' | 'New item'
      matchedItem: matchResult.matchedItem,
      suggestions: matchResult.suggestions || []
    };
  });
}
