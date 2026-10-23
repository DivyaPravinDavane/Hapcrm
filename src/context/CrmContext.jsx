import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import {
  INITIAL_SALES_LEADS,
  INITIAL_PURCHASE_LEADS,
  CUSTOMERS_DATA,
  ITEMS_MASTER,
  INITIAL_COMMENTS_FEED,
  INITIAL_TASKS,
  GENERAL_LEADS,
  ACCOUNTS_INVOICES,
  DAILY_WORK_DATA,
  STAFF_LIST,
  MAKES_LIST,
  STATUS_LIST
} from '../data/mockData';

const CrmContext = createContext(null);

export function CrmProvider({ children }) {
  // View Mode: 'website' (Informative Product Site) | 'crm' (Internal App) | 'auth' (Sign-in / Register)
  const [viewMode, setViewMode] = useState('website');
  const [websitePage, setWebsitePage] = useState('home');

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Eshwari',
    email: 'eshwari@chemipharma.com',
    role: 'Sr. Sales & Sourcing Specialist',
    color: 'bg-indigo-600'
  });

  // Demo & Free Trial Modals
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const login = (user) => {
    setCurrentUser(user || {
      name: 'Eshwari',
      email: 'eshwari@chemipharma.com',
      role: 'Sr. Sales Specialist',
      color: 'bg-indigo-600'
    });
    setIsAuthenticated(true);
    setViewMode('crm');
    setActiveTab('Dashboard');
  };

  const launchCrmDemo = () => {
    setCurrentUser({
      name: 'Demo Admin',
      email: 'demo@pharmachemi.com',
      role: 'Director of Pharma Sales',
      color: 'bg-emerald-600'
    });
    setIsAuthenticated(true);
    setViewMode('crm');
    setActiveTab('Dashboard');
    showToast('Launched Pharma Chemi CRM Live Demo Workspace!', 'success');
  };

  const launchAuth = () => {
    setViewMode('auth');
  };

  const navigateToWebsite = (page = 'home') => {
    setViewMode('website');
    setWebsitePage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToWebsite = () => {
    navigateToWebsite('home');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigateToWebsite('home');
    showToast('Signed out. Returned to Pharma Chemi website.', 'info');
  };

  // Sync hash on initial load and on popstate/hashchange
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      const validPages = ['home', 'features', 'catalog', 'solutions', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setWebsitePage(hash);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // Navigation
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [activeAccountsSubTab, setActiveAccountsSubTab] = useState('Outstanding All');
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Core Data in Local State
  const [salesLeads, setSalesLeads] = useState(INITIAL_SALES_LEADS);
  const [purchaseLeads, setPurchaseLeads] = useState(INITIAL_PURCHASE_LEADS);
  const [customers, setCustomers] = useState(CUSTOMERS_DATA);
  const [items, setItems] = useState(ITEMS_MASTER);
  const [commentsFeed, setCommentsFeed] = useState(INITIAL_COMMENTS_FEED);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [generalLeads, setGeneralLeads] = useState(GENERAL_LEADS);
  const [invoices, setInvoices] = useState(ACCOUNTS_INVOICES);
  const [dailyWork, setDailyWork] = useState(DAILY_WORK_DATA);

  // Modals & UI State
  const [isExtractorOpen, setIsExtractorOpen] = useState(false);
  const [isNewLeadOpen, setIsNewLeadOpen] = useState(false);
  const [isNewPurchaseOpen, setIsNewPurchaseOpen] = useState(false);
  const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false);
  const [isNewItemOpen, setIsNewItemOpen] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeCommentLead, setActiveCommentLead] = useState(null);
  const [selectedCustomerForDetail, setSelectedCustomerForDetail] = useState(null);

  // Toasts
  const [toasts, setToasts] = useState([]);
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // --- Lead Operations ---
  const updateSalesLead = (id, updates) => {
    setSalesLeads(prev =>
      prev.map(l => (l.id === id ? { ...l, ...updates } : l))
    );
  };

  const saveSalesLead = (id) => {
    showToast(`Lead #${id} saved successfully!`, 'success');
  };

  const bulkUpdateLeadsStatus = (ids, newStatus) => {
    setSalesLeads(prev =>
      prev.map(l => (ids.includes(l.id) ? { ...l, status: newStatus } : l))
    );
    showToast(`Updated status to "${newStatus}" for ${ids.length} leads.`, 'success');
  };

  const addSalesLead = (newLead) => {
    const lead = {
      id: `lead-${Date.now().toString().slice(-4)}`,
      date: newLead.date || '21-10-2026',
      createdTime: '21-10-2026 04:30 PM',
      customer: newLead.customer,
      item: newLead.item,
      make: newLead.make || 'Kodel',
      qty: Number(newLead.qty) || 50,
      unit: newLead.unit || 'KG',
      rate: Number(newLead.rate) || 4500,
      status: newLead.status || 'Pending',
      info: newLead.info || '',
      staff: newLead.staff || 'Eshwari',
      stock: newLead.stock || 'In Stock',
      comments: []
    };
    setSalesLeads(prev => [lead, ...prev]);
    showToast(`New Sales Enquiry Lead #${lead.id} created!`, 'success');
    return lead;
  };

  const addCommentToLead = (leadId, text, staffName = 'Eshwari') => {
    const now = '21-10-2026 ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newComment = {
      id: `cmt-${Date.now()}`,
      date: now,
      author: staffName,
      text
    };

    setSalesLeads(prev =>
      prev.map(l => {
        if (l.id === leadId) {
          return {
            ...l,
            comments: [newComment, ...(l.comments || [])]
          };
        }
        return l;
      })
    );

    // Also push to Recent Updates Feed
    const lead = salesLeads.find(l => l.id === leadId);
    if (lead) {
      setCommentsFeed(prev => [
        {
          id: `feed-${Date.now()}`,
          date: now,
          createBy: staffName,
          company: lead.customer,
          item: lead.item,
          comment: text,
          assignTo: lead.staff,
          done: false
        },
        ...prev
      ]);
    }

    showToast('Comment added and synced to Recent Updates feed.', 'success');
  };

  // --- Purchase Lead Operations ---
  const updatePurchaseLead = (id, updates) => {
    setPurchaseLeads(prev =>
      prev.map(p => {
        if (p.id === id) {
          const updated = { ...p, ...updates };
          if (updates.qty !== undefined || updates.purchaseRate !== undefined) {
            updated.amount = (Number(updated.qty) || 0) * (Number(updated.purchaseRate) || 0);
          }
          return updated;
        }
        return p;
      })
    );
  };

  const addPurchaseLead = (data) => {
    const newPur = {
      id: `pur-${Date.now().toString().slice(-4)}`,
      date: '21-10-2026',
      supplier: data.supplier,
      purchaseItem: data.purchaseItem,
      make: data.make || 'Kodel',
      qty: Number(data.qty) || 50,
      unit: 'KG',
      marketRate: Number(data.marketRate) || 3500,
      purchaseRate: Number(data.purchaseRate) || 3200,
      amount: (Number(data.qty) || 50) * (Number(data.purchaseRate) || 3200),
      status: data.status || 'Pending',
      info: data.info || '',
      paymentTerms: data.paymentTerms || '30 Days PDC',
      delivery: data.delivery || '3-5 Days'
    };
    setPurchaseLeads(prev => [newPur, ...prev]);
    showToast('Purchase Lead created successfully!', 'success');
  };

  // --- Recent Updates Comments Feed Operations ---
  const toggleCommentDone = (id) => {
    setCommentsFeed(prev =>
      prev.map(c => (c.id === id ? { ...c, done: !c.done } : c))
    );
  };

  // --- Customers Operations ---
  const toggleCustomerActive = (id) => {
    setCustomers(prev =>
      prev.map(c => (c.id === id ? { ...c, active: !c.active } : c))
    );
  };

  const addCustomer = (customerData) => {
    const newCust = {
      id: `cust-${Date.now().toString().slice(-4)}`,
      company: customerData.company,
      primaryContact: customerData.primaryContact,
      primaryEmail: customerData.primaryEmail,
      phone: customerData.phone,
      active: true,
      groups: customerData.groups || ['API Buyer'],
      dateCreated: '21-10-2026',
      rating: 5,
      gstin: customerData.gstin || '27AABCZ9999F1Z1',
      creditLimit: '₹ 15,00,000',
      outstanding: '₹ 0',
      address: customerData.address || 'GIDC Industrial Area',
      drugLicense: '20B/21B-NEW-2026',
      paymentTerms: '30 Days PDC'
    };
    setCustomers(prev => [newCust, ...prev]);
    showToast(`Customer "${newCust.company}" added!`, 'success');
  };

  // --- Items Master Operations ---
  const addItem = (itemData) => {
    const newItem = {
      id: `itm-${Date.now().toString().slice(-4)}`,
      description: itemData.description,
      code: itemData.code || `CP-API-${Math.floor(1000 + Math.random() * 9000)}`,
      casNo: itemData.casNo || '00-00-0',
      rate: Number(itemData.rate) || 4000,
      price5kg: Number(itemData.rate) ? Number(itemData.rate) * 1.1 : 4400,
      price10kg: Number(itemData.rate) ? Number(itemData.rate) * 1.05 : 4200,
      price25kg: Number(itemData.rate) || 4000,
      price50kg: Number(itemData.rate) ? Number(itemData.rate) * 0.98 : 3920,
      packing: itemData.packing || '25 KG Drum',
      delivery: itemData.delivery || 'Ready Stock',
      remark: itemData.remark || 'Standard pharmaceutical grade.',
      stock: Number(itemData.stock) || 100,
      unit: 'KG',
      groupName: itemData.groupName || 'API',
      make: itemData.make || 'Kodel'
    };
    setItems(prev => [newItem, ...prev]);
    showToast(`Chemical Item "${newItem.description}" added to Product Master!`, 'success');
    return newItem;
  };

  // --- Tasks Operations ---
  const updateTaskStatus = (id, newStatus) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const addTask = (taskData) => {
    const newTask = {
      id: `tsk-${Date.now().toString().slice(-4)}`,
      name: taskData.name,
      customer: taskData.customer || 'General',
      status: taskData.status || 'Not Started',
      startDate: '21-10-2026',
      dueDate: taskData.dueDate || '28-10-2026',
      assignee: taskData.assignee || 'Eshwari',
      tag: taskData.tag || 'Followup',
      priority: taskData.priority || 'Medium'
    };
    setTasks(prev => [newTask, ...prev]);
    showToast('New Task created!', 'success');
  };

  // --- Accounts Invoices Operations ---
  const updateInvoice = (id, updates) => {
    setInvoices(prev =>
      prev.map(inv => (inv.id === id ? { ...inv, ...updates } : inv))
    );
    showToast('Invoice follow-up remarks updated.', 'success');
  };

  // --- Create Leads from AI Extraction ---
  const createLeadsFromExtracted = (extractedChemicals, customerName, staffName) => {
    const newLeads = extractedChemicals
      .filter(c => c.selected !== false)
      .map((c, index) => {
        // Find or fallback rate from items master
        const matchedItem = items.find(i => i.description.toLowerCase() === c.chemicalName.toLowerCase());
        const rate = matchedItem ? matchedItem.rate : 4500;

        return {
          id: `lead-${Date.now().toString().slice(-4)}${index}`,
          date: '21-10-2026',
          createdTime: '21-10-2026 ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          customer: customerName || 'ZYMETH PHARMACEUTICALS PVT LTD-492614',
          item: c.chemicalName,
          make: c.make || 'Kodel',
          qty: Number(c.quantity) || 50,
          unit: c.unit || 'KG',
          rate: rate,
          status: 'Pending',
          info: `Extracted from RFQ doc. CAS: ${c.casNo || 'N/A'}. Grade: ${c.grade || 'IP'}. Purity: ${c.purity || 'Standard'}.`,
          staff: staffName || 'Eshwari',
          stock: matchedItem && matchedItem.stock > 0 ? 'In Stock' : 'No Stock',
          comments: [
            {
              id: `cmt-ai-${Date.now()}-${index}`,
              date: '21-10-2026 ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              author: 'AI Extractor',
              text: `Auto-extracted from customer document with ${c.confidence}% confidence score.`
            }
          ]
        };
      });

    setSalesLeads(prev => [...newLeads, ...prev]);
    return newLeads;
  };

  // Export Leads to CSV
  const exportLeadsCSV = (leadsToExport) => {
    const headers = ['ID', 'Date', 'Customer', 'Item', 'Make', 'Qty (KG)', 'Rate (INR)', 'Amount (INR)', 'Status', 'Staff', 'Stock', 'Info'];
    const rows = leadsToExport.map(l => [
      l.id,
      l.date,
      `"${l.customer}"`,
      `"${l.item}"`,
      l.make,
      l.qty,
      l.rate,
      l.qty * l.rate,
      l.status,
      l.staff,
      l.stock,
      `"${(l.info || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `CHEMI_PHARMA_Sales_Leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Leads exported successfully as CSV!', 'success');
  };

  const value = {
    viewMode,
    setViewMode,
    websitePage,
    setWebsitePage,
    navigateToWebsite,
    isDemoModalOpen,
    setIsDemoModalOpen,
    isTrialModalOpen,
    setIsTrialModalOpen,
    launchCrmDemo,
    launchAuth,
    goToWebsite,
    isAuthenticated,
    setIsAuthenticated,
    currentUser,
    login,
    logout,
    activeTab,
    setActiveTab,
    activeAccountsSubTab,
    setActiveAccountsSubTab,
    globalSearchQuery,
    setGlobalSearchQuery,
    salesLeads,
    purchaseLeads,
    customers,
    items,
    commentsFeed,
    tasks,
    generalLeads,
    invoices,
    dailyWork,
    STAFF_LIST,
    MAKES_LIST,
    STATUS_LIST,
    // Modals
    isExtractorOpen,
    setIsExtractorOpen,
    isNewLeadOpen,
    setIsNewLeadOpen,
    isNewPurchaseOpen,
    setIsNewPurchaseOpen,
    isNewCustomerOpen,
    setIsNewCustomerOpen,
    isNewItemOpen,
    setIsNewItemOpen,
    isQuickAddOpen,
    setIsQuickAddOpen,
    isSettingsOpen,
    setIsSettingsOpen,
    activeCommentLead,
    setActiveCommentLead,
    selectedCustomerForDetail,
    setSelectedCustomerForDetail,
    // Actions
    updateSalesLead,
    saveSalesLead,
    bulkUpdateLeadsStatus,
    addSalesLead,
    addCommentToLead,
    updatePurchaseLead,
    addPurchaseLead,
    toggleCommentDone,
    toggleCustomerActive,
    addCustomer,
    addItem,
    updateTaskStatus,
    addTask,
    updateInvoice,
    createLeadsFromExtracted,
    exportLeadsCSV,
    showToast,
    toasts
  };

  return (
    <CrmContext.Provider value={value}>
      {children}
    </CrmContext.Provider>
  );
}

export function useCrm() {
  const context = useContext(CrmContext);
  if (!context) {
    throw new Error('useCrm must be used within a CrmProvider');
  }
  return context;
}
