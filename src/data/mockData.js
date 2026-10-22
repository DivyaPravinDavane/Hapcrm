// Comprehensive Mock Data for HAP Enterprise CRM

export const STAFF_LIST = [
  { id: 'st-1', name: 'Eshwari', role: 'Sr. Sales & Sourcing Specialist', avatarBg: 'bg-indigo-600', leadsToday: 8 },
  { id: 'st-2', name: 'Aishwarya', role: 'Key Account Executive', avatarBg: 'bg-emerald-600', leadsToday: 6 },
  { id: 'st-3', name: 'Amisha', role: 'Commercial Sourcing Manager', avatarBg: 'bg-cyan-600', leadsToday: 5 },
  { id: 'st-4', name: 'Disha', role: 'Customer Relations Executive', avatarBg: 'bg-amber-600', leadsToday: 4 },
  { id: 'st-5', name: 'Akanksha', role: 'Operations & Quotation Lead', avatarBg: 'bg-rose-600', leadsToday: 3 },
];

export const MAKES_LIST = [
  'Kodel',
  'Lasons',
  'Vasudha',
  'Primeus',
  'Bioaltus',
  'Calyx',
  'Aarti Drugs',
  'Divis Labs',
  'Cadila'
];

export const STATUS_LIST = [
  'Sent',
  'Pending',
  'Reject',
  'Confirm',
  'NoOffer',
  'Junk',
  'WON'
];

export const ITEMS_MASTER = [
  {
    id: 'itm-1',
    description: 'Linezolid IP',
    code: 'HAP-API-1021',
    casNo: '165800-06-6',
    rate: 4800,
    price5kg: 5200,
    price10kg: 5050,
    price25kg: 4900,
    price50kg: 4800,
    packing: '25 KG HDPE Drum',
    delivery: 'Ready Stock (Bhiwandi)',
    remark: 'Store below 25°C. Protected from light.',
    stock: 240,
    unit: 'KG',
    groupName: 'Oxazolidinone Antibiotic',
    make: 'Kodel'
  },
  {
    id: 'itm-2',
    description: 'Telmisartan USP',
    code: 'HAP-API-1022',
    casNo: '144701-48-4',
    rate: 3200,
    price5kg: 3500,
    price10kg: 3350,
    price25kg: 3250,
    price50kg: 3200,
    packing: '25 KG Fiber Drum',
    delivery: 'Ready Stock (Ankleshwar)',
    remark: 'Store in airtight containers.',
    stock: 180,
    unit: 'KG',
    groupName: 'Antihypertensive',
    make: 'Lasons'
  },
  {
    id: 'itm-3',
    description: 'Domperidone IP',
    code: 'HAP-API-1023',
    casNo: '57808-66-9',
    rate: 2950,
    price5kg: 3200,
    price10kg: 3100,
    price25kg: 3000,
    price50kg: 2950,
    packing: '25 KG HDPE Drum with double liner',
    delivery: 'Ready Stock (Bhiwandi)',
    remark: 'White to almost white powder, protect from light.',
    stock: 120,
    unit: 'KG',
    groupName: 'Antiemetic / Prokinetic',
    make: 'Vasudha'
  },
  {
    id: 'itm-4',
    description: 'Niacinamide IP/BP',
    code: 'HAP-API-1024',
    casNo: '98-92-0',
    rate: 3500,
    price5kg: 3800,
    price10kg: 3650,
    price25kg: 3550,
    price50kg: 3500,
    packing: '25 KG Corrugated Box',
    delivery: '3-4 Days Ex-Factory',
    remark: 'Purity > 99.5%, Soluble in water.',
    stock: 0,
    unit: 'KG',
    groupName: 'Vitamins (B-Complex)',
    make: 'Primeus'
  },
  {
    id: 'itm-5',
    description: 'Baclofen IP',
    code: 'HAP-API-1025',
    casNo: '1134-47-0',
    rate: 4200,
    price5kg: 4600,
    price10kg: 4400,
    price25kg: 4300,
    price50kg: 4200,
    packing: '20 KG Fiber Drum',
    delivery: 'Ready Stock (Bhiwandi)',
    remark: 'Muscle relaxant. Keep container tightly closed.',
    stock: 75,
    unit: 'KG',
    groupName: 'Skeletal Muscle Relaxant',
    make: 'Kodel'
  },
  {
    id: 'itm-6',
    description: 'Folic Acid IP',
    code: 'HAP-API-1026',
    casNo: '59-30-3',
    rate: 7800,
    price5kg: 8400,
    price10kg: 8100,
    price25kg: 7900,
    price50kg: 7800,
    packing: '10 KG / 25 KG Drum',
    delivery: 'Ready Stock',
    remark: 'Yellowish-orange microcrystalline powder.',
    stock: 40,
    unit: 'KG',
    groupName: 'Vitamins',
    make: 'Bioaltus'
  },
  {
    id: 'itm-7',
    description: 'Pregabalin BP',
    code: 'HAP-API-1027',
    casNo: '148553-50-8',
    rate: 5200,
    price5kg: 5600,
    price10kg: 5400,
    price25kg: 5300,
    price50kg: 5200,
    packing: '25 KG Drum',
    delivery: 'Ready Stock (Bhiwandi)',
    remark: 'Purity 99.8%. Controlled export grade.',
    stock: 95,
    unit: 'KG',
    groupName: 'Anticonvulsant / Neuropathic',
    make: 'Bioaltus'
  },
  {
    id: 'itm-8',
    description: 'Furosemide BP',
    code: 'HAP-API-1028',
    casNo: '54-31-9',
    rate: 3800,
    price5kg: 4100,
    price10kg: 3950,
    price25kg: 3850,
    price50kg: 3800,
    packing: '25 KG Drum',
    delivery: '2-3 Days',
    remark: 'Loop diuretic. Light sensitive.',
    stock: 150,
    unit: 'KG',
    groupName: 'Diuretic',
    make: 'Kodel'
  },
  {
    id: 'itm-9',
    description: 'Hydroxyzine Hydrochloride IP',
    code: 'HAP-API-1029',
    casNo: '68-88-2',
    rate: 3400,
    price5kg: 3700,
    price10kg: 3550,
    price25kg: 3450,
    price50kg: 3400,
    packing: '25 KG Drum',
    delivery: 'Ready Stock',
    remark: 'Antihistamine with anxiolytic properties.',
    stock: 60,
    unit: 'KG',
    groupName: 'Antihistamines',
    make: 'Calyx'
  },
  {
    id: 'itm-10',
    description: 'Metformin HCl IP',
    code: 'HAP-API-1030',
    casNo: '1115-70-4',
    rate: 420,
    price5kg: 490,
    price10kg: 460,
    price25kg: 440,
    price50kg: 420,
    packing: '50 KG Bag with Liner',
    delivery: 'Ready Stock (Bulk)',
    remark: 'High volume antidiabetic API.',
    stock: 1450,
    unit: 'KG',
    groupName: 'Antidiabetic',
    make: 'Aarti Drugs'
  },
  {
    id: 'itm-11',
    description: 'Montelukast Sodium IP',
    code: 'HAP-API-1031',
    casNo: '151767-02-1',
    rate: 16500,
    price5kg: 18000,
    price10kg: 17200,
    price25kg: 16800,
    price50kg: 16500,
    packing: '5 KG / 10 KG Aluminium Canister',
    delivery: 'Ready Stock',
    remark: 'Protect from light and heat. Nitrogen purged.',
    stock: 22,
    unit: 'KG',
    groupName: 'Leukotriene Receptor Antagonist',
    make: 'Divis Labs'
  },
  {
    id: 'itm-12',
    description: 'Aspirin IP (Acetylsalicylic Acid)',
    code: 'HAP-API-1032',
    casNo: '50-78-2',
    rate: 450,
    price5kg: 520,
    price10kg: 490,
    price25kg: 470,
    price50kg: 450,
    packing: '25 KG / 50 KG Fiber Drum',
    delivery: 'Ready Stock',
    remark: 'USP/BP standard compliance.',
    stock: 650,
    unit: 'KG',
    groupName: 'Analgesic / Antipyretic',
    make: 'Eshwari'
  }
];

export const CUSTOMERS_DATA = [
  {
    id: 'cust-1',
    company: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    primaryContact: 'Mr. Rajesh Shah',
    primaryEmail: 'purchase@zymethpharma.com',
    phone: '+91 98201 44521',
    active: true,
    groups: ['API Buyer', 'Formulation', 'Direct Pharma'],
    dateCreated: '14-02-2024',
    rating: 5,
    gstin: '27AABCZ1234F1Z8',
    creditLimit: '₹ 25,00,000',
    outstanding: '₹ 3,45,200',
    address: 'Plot No. C-14, MIDC Tarapur, Palghar, Maharashtra - 401506',
    drugLicense: '20B/21B-PLG-492614',
    paymentTerms: '30 Days Credit against PDC'
  },
  {
    id: 'cust-2',
    company: 'MIHIKA PHARMACEUTICALS-492075',
    primaryContact: 'Dr. Ketan Parikh',
    primaryEmail: 'sourcing@mihikapharma.in',
    phone: '+91 98791 22340',
    active: true,
    groups: ['Formulation', 'Wholesaler'],
    dateCreated: '22-04-2024',
    rating: 4,
    gstin: '24AAECM5542E1Z2',
    creditLimit: '₹ 15,00,000',
    outstanding: '₹ 1,84,500',
    address: 'Phase-IV, GIDC Vatva, Ahmedabad, Gujarat - 382445',
    drugLicense: '20B/21B-AHM-492075',
    paymentTerms: '21 Days PDC'
  },
  {
    id: 'cust-3',
    company: 'R K LIFE SCIENCES',
    primaryContact: 'Mr. Venkat Rao',
    primaryEmail: 'procure@rklifesciences.co.in',
    phone: '+91 94401 88910',
    active: true,
    groups: ['API Buyer', 'Pellet Manufacturer'],
    dateCreated: '10-06-2024',
    rating: 5,
    gstin: '36AABCR9912K1ZT',
    creditLimit: '₹ 30,00,000',
    outstanding: '₹ 2,21,250',
    address: 'IDA Mallapur, Hyderabad, Telangana - 500076',
    drugLicense: '20B/21B-HYD-102941',
    paymentTerms: '30 Days CAD'
  },
  {
    id: 'cust-4',
    company: 'GLOBAL PHARMA CHEM',
    primaryContact: 'Mr. Amit Patel',
    primaryEmail: 'amit@globalpharmachem.com',
    phone: '+91 98250 67123',
    active: true,
    groups: ['Trader', 'Wholesaler'],
    dateCreated: '05-08-2024',
    rating: 4,
    gstin: '24AADFG4123R1ZX',
    creditLimit: '₹ 10,00,000',
    outstanding: '₹ 94,280',
    address: 'GIDC Estate, Ankleshwar, Bharuch, Gujarat - 393002',
    drugLicense: '20B/21B-ANK-55421',
    paymentTerms: 'Immediate RTGS / 7 Days'
  },
  {
    id: 'cust-5',
    company: 'SUNCARE FORMULATIONS LTD',
    primaryContact: 'Mr. Rohit Verma',
    primaryEmail: 'rohit.v@suncare.in',
    phone: '+91 98160 55412',
    active: true,
    groups: ['Direct Pharma', 'Formulation'],
    dateCreated: '18-09-2024',
    rating: 5,
    gstin: '02AABCS8841M1ZF',
    creditLimit: '₹ 20,00,000',
    outstanding: '₹ 0',
    address: 'EPIP Phase-1, Jharmajri, Baddi, Solan, HP - 173205',
    drugLicense: '20B/21B-BDD-88219',
    paymentTerms: '15 Days Credit'
  },
  {
    id: 'cust-6',
    company: 'APEX REMEDIES PVT LTD',
    primaryContact: 'Mr. Sunil Joshi',
    primaryEmail: 'sunil@apexremedies.com',
    phone: '+91 97274 33219',
    active: false,
    groups: ['API Buyer'],
    dateCreated: '12-11-2024',
    rating: 3,
    gstin: '25AABCA3314L1Z1',
    creditLimit: '₹ 5,00,000',
    outstanding: '₹ 0',
    address: 'Somnath Industrial Area, Daman - 396210',
    drugLicense: '20B/21B-DMN-1204',
    paymentTerms: 'Advance 100%'
  }
];

export const INITIAL_SALES_LEADS = [
  {
    id: 'lead-101',
    date: '20-10-2026',
    customer: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    createdTime: '20-10-2026 10:15 AM',
    item: 'Linezolid IP',
    make: 'Kodel',
    qty: 50,
    unit: 'KG',
    rate: 4800,
    status: 'Pending',
    info: 'Urgent requirement. Please quote best rate for immediate dispatch.',
    staff: 'Eshwari',
    stock: 'In Stock',
    comments: [
      { id: 'c-1', date: '20-10-2026 10:45 AM', author: 'Eshwari', text: 'Checked with Kodel warehouse, 50kg ready in Bhiwandi.' },
      { id: 'c-2', date: '20-10-2026 11:30 AM', author: 'Eshwari', text: 'Quote sent: 4800 + GST. Client asked if 4700 possible.' }
    ]
  },
  {
    id: 'lead-102',
    date: '19-10-2026',
    customer: 'MIHIKA PHARMACEUTICALS-492075',
    createdTime: '19-10-2026 02:32 PM',
    item: 'Telmisartan USP',
    make: 'Lasons',
    qty: 100,
    unit: 'KG',
    rate: 3200,
    status: 'WON',
    info: 'Customer confirmed PO. Ready for delivery scheduling.',
    staff: 'Aishwarya',
    stock: 'In Stock',
    comments: [
      { id: 'c-3', date: '19-10-2026 04:15 PM', author: 'Aishwarya', text: 'CONFIRMED - 3200 LASONS. PO #MP-2026-99 received.' }
    ]
  },
  {
    id: 'lead-103',
    date: '18-10-2026',
    customer: 'R K LIFE SCIENCES',
    createdTime: '18-10-2026 11:20 AM',
    item: 'Domperidone IP',
    make: 'Vasudha',
    qty: 75,
    unit: 'KG',
    rate: 2950,
    status: 'WON',
    info: 'Confirmed order. Generate commercial invoice.',
    staff: 'Amisha',
    stock: 'In Stock',
    comments: [
      { id: 'c-4', date: '18-10-2026 01:10 PM', author: 'Amisha', text: 'Payment terms 30 days CAD accepted. Material allocated.' }
    ]
  },
  {
    id: 'lead-104',
    date: '17-10-2026',
    customer: 'GLOBAL PHARMA CHEM',
    createdTime: '17-10-2026 04:05 PM',
    item: 'Niacinamide IP/BP',
    make: 'Primeus',
    qty: 20,
    unit: 'KG',
    rate: 3500,
    status: 'Pending',
    info: 'Need technical data sheet and COA before purchase order.',
    staff: 'Disha',
    stock: 'No Stock',
    comments: [
      { id: 'c-5', date: '17-10-2026 04:40 PM', author: 'Disha', text: 'COA emailed to Amit Patel. Awaiting approval.' }
    ]
  },
  {
    id: 'lead-105',
    date: '16-10-2026',
    customer: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    createdTime: '16-10-2026 09:40 AM',
    item: 'Pregabalin BP',
    make: 'Bioaltus',
    qty: 60,
    unit: 'KG',
    rate: 5200,
    status: 'Sent',
    info: 'Quotation sent via email. Awaiting management confirmation.',
    staff: 'Eshwari',
    stock: 'In Stock',
    comments: [
      { id: 'c-6', date: '16-10-2026 11:00 AM', author: 'Eshwari', text: 'Followup scheduled for Thursday.' }
    ]
  },
  {
    id: 'lead-106',
    date: '15-10-2026',
    customer: 'MIHIKA PHARMACEUTICALS-492075',
    createdTime: '15-10-2026 01:12 PM',
    item: 'Furosemide BP',
    make: 'Kodel',
    qty: 30,
    unit: 'KG',
    rate: 3800,
    status: 'NoOffer',
    info: 'Higher rate expectation. Customer not ready for current market price.',
    staff: 'Aishwarya',
    stock: 'In Stock',
    comments: [
      { id: 'c-7', date: '15-10-2026 02:30 PM', author: 'Aishwarya', text: 'Market rate jumped from 3400 to 3800. Customer put enquiry on hold.' }
    ]
  },
  {
    id: 'lead-107',
    date: '15-10-2026',
    customer: 'SUNCARE FORMULATIONS LTD',
    createdTime: '15-10-2026 03:25 PM',
    item: 'Baclofen IP',
    make: 'Kodel',
    qty: 25,
    unit: 'KG',
    rate: 4200,
    status: 'Confirm',
    info: 'Customer approved price. Sourcing team verifying batch testing.',
    staff: 'Amisha',
    stock: 'In Stock',
    comments: [
      { id: 'c-8', date: '15-10-2026 04:00 PM', author: 'Amisha', text: 'Sample passed solubility & assay tests.' }
    ]
  },
  {
    id: 'lead-108',
    date: '14-10-2026',
    customer: 'APEX REMEDIES PVT LTD',
    createdTime: '14-10-2026 11:50 AM',
    item: 'Folic Acid IP',
    make: 'Bioaltus',
    qty: 15,
    unit: 'KG',
    rate: 7800,
    status: 'Reject',
    info: 'Target price ₹ 7100. Supplier not agreeing.',
    staff: 'Akanksha',
    stock: 'In Stock',
    comments: [
      { id: 'c-9', date: '14-10-2026 01:00 PM', author: 'Akanksha', text: 'Supplier floor price is 7600+. Margin impossible.' }
    ]
  },
  {
    id: 'lead-109',
    date: '13-10-2026',
    customer: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    createdTime: '13-10-2026 10:10 AM',
    item: 'Hydroxyzine Hydrochloride IP',
    make: 'Calyx',
    qty: 40,
    unit: 'KG',
    rate: 3400,
    status: 'Sent',
    info: 'Quote sent: 3400/KG + GST. Validity 3 days.',
    staff: 'Eshwari',
    stock: 'In Stock',
    comments: []
  },
  {
    id: 'lead-110',
    date: '12-10-2026',
    customer: 'R K LIFE SCIENCES',
    createdTime: '12-10-2026 04:55 PM',
    item: 'Montelukast Sodium IP',
    make: 'Divis Labs',
    qty: 10,
    unit: 'KG',
    rate: 16500,
    status: 'Confirm',
    info: 'High-value API. Approved by purchase head.',
    staff: 'Amisha',
    stock: 'In Stock',
    comments: []
  },
  {
    id: 'lead-111',
    date: '11-10-2026',
    customer: 'GLOBAL PHARMA CHEM',
    createdTime: '11-10-2026 09:30 AM',
    item: 'Metformin HCl IP',
    make: 'Aarti Drugs',
    qty: 500,
    unit: 'KG',
    rate: 420,
    status: 'WON',
    info: 'Bulk volume deal closed. 10 drums to dispatch via V-Trans.',
    staff: 'Disha',
    stock: 'In Stock',
    comments: []
  },
  {
    id: 'lead-112',
    date: '10-10-2026',
    customer: 'SUNCARE FORMULATIONS LTD',
    createdTime: '10-10-2026 02:40 PM',
    item: 'Linezolid IP',
    make: 'Kodel',
    qty: 25,
    unit: 'KG',
    rate: 4850,
    status: 'Sent',
    info: 'Quoted 4850 including door delivery Baddi.',
    staff: 'Eshwari',
    stock: 'In Stock',
    comments: []
  },
  {
    id: 'lead-113',
    date: '09-10-2026',
    customer: 'MIHIKA PHARMACEUTICALS-492075',
    createdTime: '09-10-2026 11:15 AM',
    item: 'Domperidone IP',
    make: 'Vasudha',
    qty: 50,
    unit: 'KG',
    rate: 2950,
    status: 'Pending',
    info: 'Customer comparing with China source offer.',
    staff: 'Aishwarya',
    stock: 'In Stock',
    comments: []
  },
  {
    id: 'lead-114',
    date: '08-10-2026',
    customer: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    createdTime: '08-10-2026 03:00 PM',
    item: 'Telmisartan USP',
    make: 'Lasons',
    qty: 50,
    unit: 'KG',
    rate: 3200,
    status: 'Junk',
    info: 'Duplicate inquiry sent by junior intern.',
    staff: 'Eshwari',
    stock: 'In Stock',
    comments: []
  },
  {
    id: 'lead-115',
    date: '08-10-2026',
    customer: 'APEX REMEDIES PVT LTD',
    createdTime: '08-10-2026 04:10 PM',
    item: 'Aspirin IP (Acetylsalicylic Acid)',
    make: 'Eshwari',
    qty: 100,
    unit: 'KG',
    rate: 450,
    status: 'WON',
    info: 'Dispatched from Bhiwandi hub.',
    staff: 'Akanksha',
    stock: 'In Stock',
    comments: []
  }
];

export const INITIAL_PURCHASE_LEADS = [
  {
    id: 'pur-1',
    date: '20-10-2026',
    supplier: 'CALYX CHEMICALS & PHARMACEUTICALS',
    purchaseItem: 'Hydroxyzine Hydrochloride IP',
    make: 'Calyx',
    qty: 100,
    unit: 'KG',
    marketRate: 3500,
    purchaseRate: 3150,
    amount: 315000,
    status: 'Confirm',
    info: 'Batch COA provided. Assay 99.8%. Ready for pickup.',
    paymentTerms: '30 Days PDC',
    delivery: '5-7 Days Ex-Factory'
  },
  {
    id: 'pur-2',
    date: '19-10-2026',
    supplier: 'LASONS COMMODITIES PVT LTD',
    purchaseItem: 'Niacinamide IP/BP',
    make: 'Lasons',
    qty: 150,
    unit: 'KG',
    marketRate: 3600,
    purchaseRate: 3350,
    amount: 502500,
    status: 'Confirm',
    info: 'Manufacturer price lock for Q4 procurement.',
    paymentTerms: '15 Days LC',
    delivery: 'Immediate (Taloja Unit)'
  },
  {
    id: 'pur-3',
    date: '18-10-2026',
    supplier: 'VASUDHA PHARMA CHEM LTD',
    purchaseItem: 'Domperidone IP',
    make: 'Vasudha',
    qty: 80,
    unit: 'KG',
    marketRate: 3100,
    purchaseRate: 2800,
    amount: 224000,
    status: 'Pending',
    info: 'Negotiation ongoing for 100kg batch booking.',
    paymentTerms: 'CAD',
    delivery: 'Within 10 Days'
  },
  {
    id: 'pur-4',
    date: '17-10-2026',
    supplier: 'KODEL LIFESCIENCES',
    purchaseItem: 'Linezolid IP',
    make: 'Kodel',
    qty: 60,
    unit: 'KG',
    marketRate: 5000,
    purchaseRate: 4500,
    amount: 270000,
    status: 'Sent',
    info: 'RFQ submitted for 60kg lot with DMF requirement.',
    paymentTerms: 'Advance 100%',
    delivery: '3-5 Days'
  },
  {
    id: 'pur-5',
    date: '16-10-2026',
    supplier: 'BIOALTUS PHARMACEUTICALS',
    purchaseItem: 'Pregabalin BP',
    make: 'Bioaltus',
    qty: 120,
    unit: 'KG',
    marketRate: 5400,
    purchaseRate: 4900,
    amount: 588000,
    status: 'Pending',
    info: 'Awaiting manufacturing schedule confirmation.',
    paymentTerms: '30 Days PDC',
    delivery: '7-10 Days'
  },
  {
    id: 'pur-6',
    date: '15-10-2026',
    supplier: 'AARTI DRUGS LTD',
    purchaseItem: 'Metformin HCl IP',
    make: 'Aarti Drugs',
    qty: 200,
    unit: 'KG',
    marketRate: 440,
    purchaseRate: 395,
    amount: 79000,
    status: 'Confirm',
    info: 'Direct from Tarapur manufacturing site.',
    paymentTerms: 'Immediate',
    delivery: 'Ready Stock'
  }
];

export const INITIAL_COMMENTS_FEED = [
  {
    id: 'cmt-1',
    date: '20-10-2026 14:10',
    createBy: 'Eshwari',
    company: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    item: 'Linezolid IP',
    comment: 'QUOTE - 4800+ KODEL 3-5 DAYS DEL. Client requested sample COA.',
    assignTo: 'Eshwari',
    done: false
  },
  {
    id: 'cmt-2',
    date: '20-10-2026 12:45',
    createBy: 'Amisha',
    company: 'MIHIKA PHARMACEUTICALS-492075',
    item: 'Hydroxyzine Hydrochloride IP',
    comment: 'QUOTE - 3975+ CALYX CHEMICALS 5-7 DAYS DEL',
    assignTo: 'Aishwarya',
    done: false
  },
  {
    id: 'cmt-3',
    date: '19-10-2026 17:30',
    createBy: 'Aishwarya',
    company: 'MIHIKA PHARMACEUTICALS-492075',
    item: 'Telmisartan USP',
    comment: 'Order confirmed - Telmisartan USP 100KG @ 3200. PO shared with accounts.',
    assignTo: 'Aishwarya',
    done: true
  },
  {
    id: 'cmt-4',
    date: '19-10-2026 11:20',
    createBy: 'Disha',
    company: 'GLOBAL PHARMA CHEM',
    item: 'Niacinamide IP/BP',
    comment: 'Technical spec query resolved. Customer asked for pricing breakdown on 50kg.',
    assignTo: 'Disha',
    done: false
  },
  {
    id: 'cmt-5',
    date: '18-10-2026 15:50',
    createBy: 'Akanksha',
    company: 'APEX REMEDIES PVT LTD',
    item: 'Folic Acid IP',
    comment: 'Supplier counter-offered 7650/KG. Not viable for customer target.',
    assignTo: 'Akanksha',
    done: true
  }
];

export const INITIAL_TASKS = [
  {
    id: 'tsk-1',
    name: 'Sample Approval for Linezolid IP Batch #LN-26-88',
    customer: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    status: 'In Progress',
    startDate: '19-10-2026',
    dueDate: '23-10-2026',
    assignee: 'Eshwari',
    tag: 'Sample Approval',
    priority: 'High'
  },
  {
    id: 'tsk-2',
    name: 'Follow up on Overdue Invoice #INV-1022 (₹ 1,84,500)',
    customer: 'MIHIKA PHARMACEUTICALS-492075',
    status: 'Not Started',
    startDate: '20-10-2026',
    dueDate: '22-10-2026',
    assignee: 'Aishwarya',
    tag: 'Payment Followup',
    priority: 'High'
  },
  {
    id: 'tsk-3',
    name: 'Collect and verify COA & Drug License for R K Life Sciences',
    customer: 'R K LIFE SCIENCES',
    status: 'Awaiting Feedback',
    startDate: '16-10-2026',
    dueDate: '24-10-2026',
    assignee: 'Amisha',
    tag: 'Documentation',
    priority: 'Medium'
  },
  {
    id: 'tsk-4',
    name: 'Arrange V-Trans dispatch for Metformin 500KG lot',
    customer: 'GLOBAL PHARMA CHEM',
    status: 'Testing',
    startDate: '18-10-2026',
    dueDate: '21-10-2026',
    assignee: 'Disha',
    tag: 'Dispatch Logistics',
    priority: 'Medium'
  },
  {
    id: 'tsk-5',
    name: 'Price renegotiation with Calyx for Hydroxyzine HCl bulk contract',
    customer: 'HAP Sourcing',
    status: 'Complete',
    startDate: '14-10-2026',
    dueDate: '19-10-2026',
    assignee: 'Amisha',
    tag: 'Price Renegotiation',
    priority: 'High'
  }
];

export const GENERAL_LEADS = [
  {
    id: 'gld-1',
    company: 'Cadila Healthcare Ltd',
    name: 'Dr. Praveen Saxena',
    email: 'praveen.s@cadila.com',
    phone: '+91 98980 11200',
    assigned: 'Eshwari',
    status: 'Quotation Sent',
    source: 'TradeIndia',
    lastContact: '20-10-2026',
    created: '15-10-2026',
    value: 850000,
    tags: ['Bulk Buyer', 'API']
  },
  {
    id: 'gld-2',
    company: 'Unichem Laboratories',
    name: 'Mr. Arvind Gupta',
    email: 'arvind.g@unichem.com',
    phone: '+91 98212 99014',
    assigned: 'Aishwarya',
    status: 'In Discussion',
    source: 'IndiaMART',
    lastContact: '19-10-2026',
    created: '14-10-2026',
    value: 420000,
    tags: ['Cardio API']
  },
  {
    id: 'gld-3',
    company: 'Macleods Pharmaceuticals',
    name: 'Mr. Deepak Sharma',
    email: 'deepak.s@macleods.com',
    phone: '+91 99300 45678',
    assigned: 'Amisha',
    status: 'Followup',
    source: 'Direct Call',
    lastContact: '18-10-2026',
    created: '10-10-2026',
    value: 1200000,
    tags: ['Antibiotics', 'Urgent']
  },
  {
    id: 'gld-4',
    company: 'FDC Limited',
    name: 'Ms. Neha Kulkarni',
    email: 'neha.k@fdcindia.com',
    phone: '+91 98205 77651',
    assigned: 'Disha',
    status: 'Won',
    source: 'Website',
    lastContact: '17-10-2026',
    created: '08-10-2026',
    value: 360000,
    tags: ['Formulation']
  }
];

export const ACCOUNTS_INVOICES = [
  {
    id: 'inv-1021',
    invoiceNo: 'HAP/26-27/1021',
    date: '10-09-2026',
    customer: 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
    salesman: 'Eshwari',
    amount: 345200,
    paid: 100000,
    balance: 245200,
    bucket: '31-60',
    dueDate: '10-10-2026',
    followupDate: '24-10-2026',
    remark: 'Spoke with accounts manager Mr. Joshi. Balance cheque promised on 25th Oct.'
  },
  {
    id: 'inv-1022',
    invoiceNo: 'HAP/26-27/1022',
    date: '18-08-2026',
    customer: 'MIHIKA PHARMACEUTICALS-492075',
    salesman: 'Aishwarya',
    amount: 184500,
    paid: 0,
    balance: 184500,
    bucket: '61-90',
    dueDate: '18-09-2026',
    followupDate: '22-10-2026',
    remark: 'PDC cheque under clearance, expected credit tomorrow.'
  },
  {
    id: 'inv-1023',
    invoiceNo: 'HAP/26-27/1023',
    date: '02-10-2026',
    customer: 'R K LIFE SCIENCES',
    salesman: 'Amisha',
    amount: 221250,
    paid: 0,
    balance: 221250,
    bucket: '0-30',
    dueDate: '02-11-2026',
    followupDate: '28-10-2026',
    remark: 'Standard 30 days CAD terms. Payment on track.'
  },
  {
    id: 'inv-1024',
    invoiceNo: 'HAP/26-27/1024',
    date: '15-06-2026',
    customer: 'GLOBAL PHARMA CHEM',
    salesman: 'Disha',
    amount: 94280,
    paid: 0,
    balance: 94280,
    bucket: '90+',
    dueDate: '15-07-2026',
    followupDate: '23-10-2026',
    remark: 'Reminder letter sent. Mr. Amit Patel agreed to settle in 2 tranches.'
  },
  {
    id: 'inv-1025',
    invoiceNo: 'HAP/26-27/1025',
    date: '12-10-2026',
    customer: 'SUNCARE FORMULATIONS LTD',
    salesman: 'Eshwari',
    amount: 100000,
    paid: 0,
    balance: 100000,
    bucket: '0-30',
    dueDate: '27-10-2026',
    followupDate: '26-10-2026',
    remark: 'Invoice acknowledged. Material received at Baddi plant.'
  }
];

export const DAILY_WORK_DATA = [
  {
    staff: 'Eshwari',
    new_lead: 8,
    sent_lead: 6,
    reject_lead: 1,
    nooffer_lead: 0,
    confirm_lead: 3,
    won_lead: 2,
    delete_lead: 0,
    reminders: 7,
    notes: 12,
    last_update: '21-10-2026 16:20'
  },
  {
    staff: 'Aishwarya',
    new_lead: 6,
    sent_lead: 4,
    reject_lead: 1,
    nooffer_lead: 1,
    confirm_lead: 2,
    won_lead: 1,
    delete_lead: 0,
    reminders: 5,
    notes: 9,
    last_update: '21-10-2026 16:05'
  },
  {
    staff: 'Amisha',
    new_lead: 5,
    sent_lead: 3,
    reject_lead: 0,
    nooffer_lead: 1,
    confirm_lead: 2,
    won_lead: 1,
    delete_lead: 0,
    reminders: 4,
    notes: 8,
    last_update: '21-10-2026 15:40'
  },
  {
    staff: 'Disha',
    new_lead: 4,
    sent_lead: 3,
    reject_lead: 1,
    nooffer_lead: 0,
    confirm_lead: 1,
    won_lead: 1,
    delete_lead: 0,
    reminders: 6,
    notes: 5,
    last_update: '21-10-2026 15:15'
  },
  {
    staff: 'Akanksha',
    new_lead: 3,
    sent_lead: 2,
    reject_lead: 0,
    nooffer_lead: 0,
    confirm_lead: 1,
    won_lead: 1,
    delete_lead: 0,
    reminders: 3,
    notes: 4,
    last_update: '21-10-2026 14:50'
  }
];

// Generator for 20,000 Company Items (Virtualised grid)
export const generateCompanyItems = (count = 20000) => {
  const categories = [
    'KSM and Intermediates',
    'Pyridine Derivatives',
    'Active Pharmaceutical Ingredients (API)',
    'Pellets & Granules',
    'Excipients & Solvents',
    'Steroids & Hormones',
    'Peptides & Oncology'
  ];

  const makes = ['Kodel', 'Lasons', 'Vasudha', 'Primeus', 'Bioaltus', 'Calyx', 'Aarti Drugs', 'Cadila', 'Divis', 'Neuland'];
  const companies = [
    'ZYMETH PHARMACEUTICALS PVT LTD',
    'MIHIKA PHARMACEUTICALS',
    'R K LIFE SCIENCES',
    'GLOBAL PHARMA CHEM',
    'SUNCARE FORMULATIONS',
    'CALYX CHEMICALS',
    'LASONS COMMODITIES',
    'VASUDHA PHARMA',
    'PRIMEUS LIFESCIENCES'
  ];

  const chemicalPrefixes = [
    '4-Chloro', '2-Amino', '5-Bromo', '3-Methyl', '6-Hydroxy', 'N-Acetyl', '2,4-Dichloro',
    'Trifluoromethyl', 'Benzyl', 'Ethyl', 'Isobutyl', 'Nitro', 'Sulfonyl'
  ];

  const chemicalCores = [
    'pyridine', 'pyrimidine', 'oxazolidinone', 'imidazole', 'piperazine',
    'quinoline', 'indole', 'thiophene', 'benzofuran', 'thiazole', 'aniline', 'piperidine'
  ];

  const types = ['Raw Material', 'Intermediate', 'Finished API', 'Standard', 'Impurity'];
  const strengths = ['98.0% Min', '99.0% Min', '99.5% Min', '99.8% Min', '100% (Assay)'];

  const items = [];
  const baseDate = new Date('2026-10-20');

  for (let i = 1; i <= count; i++) {
    const category = categories[i % categories.length];
    const make = makes[i % makes.length];
    const company = companies[i % companies.length];
    const prefix = chemicalPrefixes[i % chemicalPrefixes.length];
    const core = chemicalCores[(i * 3) % chemicalCores.length];
    const itemName = `${prefix}-${core} ${category.includes('Pyridine') ? 'HCl' : 'Technical'}`;
    const casPart1 = 10000 + (i * 7) % 89999;
    const casPart2 = 10 + (i * 3) % 89;
    const casPart3 = (i % 9) + 1;
    const casNo = `${casPart1}-${casPart2}-${casPart3}`;
    
    // date staggered
    const itemDate = new Date(baseDate.getTime() - (i % 300) * 86400000);
    const day = String(itemDate.getDate()).padStart(2, '0');
    const month = String(itemDate.getMonth() + 1).padStart(2, '0');
    const year = itemDate.getFullYear();

    items.push({
      id: `ci-${i}`,
      index: i,
      date: `${day}-${month}-${year}`,
      company,
      item: itemName,
      make,
      type: types[i % types.length],
      strength: strengths[i % strengths.length],
      casNo,
      category,
      price: 1500 + ((i * 137) % 8500)
    });
  }

  return items;
};
