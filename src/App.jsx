import React from 'react';
import { CrmProvider, useCrm } from './context/CrmContext';
import Header from './components/Header';
import TopNav from './components/TopNav';
import DashboardPage from './pages/DashboardPage';
import MyLeadsPage from './pages/MyLeadsPage';
import PurchaseLeadsPage from './pages/PurchaseLeadsPage';
import CustomersPage from './pages/CustomersPage';
import ItemsPage from './pages/ItemsPage';
import RecentUpdatesPage from './pages/RecentUpdatesPage';
import CompanyItemsPage from './pages/CompanyItemsPage';
import DailyWorkPage from './pages/DailyWorkPage';
import TasksPage from './pages/TasksPage';
import GeneralLeadsPage from './pages/GeneralLeadsPage';
import AccountsPage from './pages/AccountsPage';
import PlaceholderPage from './pages/PlaceholderPage';
import AuthPage from './pages/AuthPage';
import WebsiteLayout from './pages/website/WebsiteLayout';

// Modals
import AIExtractorModal from './components/AIExtractorModal';
import AddCommentModal from './components/AddCommentModal';
import NewLeadModal from './components/NewLeadModal';
import NewPurchaseModal from './components/NewPurchaseModal';
import NewCustomerModal from './components/NewCustomerModal';
import NewItemModal from './components/NewItemModal';
import SettingsModal from './components/SettingsModal';
import BookDemoModal from './components/BookDemoModal';
import FreeTrialModal from './components/FreeTrialModal';
import Toasts from './components/Toasts';

function MainLayout() {
  const { activeTab, isAuthenticated, viewMode } = useCrm();

  // 1. Informative Multi-Page Website for Pharma Chemi Software & Sourcing
  if (viewMode === 'website') {
    return (
      <>
        <WebsiteLayout />
        <BookDemoModal />
        <FreeTrialModal />
        <Toasts />
      </>
    );
  }

  // 2. Authentication view for login/registration
  if (viewMode === 'auth' || !isAuthenticated) {
    return (
      <>
        <AuthPage />
        <Toasts />
      </>
    );
  }

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'My Leads':
        return <MyLeadsPage />;
      case 'Purchase Leads':
        return <PurchaseLeadsPage />;
      case 'Customers':
        return <CustomersPage />;
      case 'Items':
        return <ItemsPage />;
      case 'Recent Updates':
        return <RecentUpdatesPage />;
      case 'Company Items':
        return <CompanyItemsPage />;
      case 'Daily Work':
        return <DailyWorkPage />;
      case 'Tasks':
        return <TasksPage />;
      case 'Leads':
        return <GeneralLeadsPage />;
      case 'Accounts':
        return <AccountsPage />;
      default:
        return <PlaceholderPage title={activeTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#E3EEF8] flex flex-col antialiased text-slate-800">
      {/* 1. Header (Dark navy #3A3F9E) */}
      <Header />

      {/* 2. Top Navigation Bar */}
      <TopNav />

      {/* 3. Main Workspace Area */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto p-3 sm:p-4">
        {renderActiveScreen()}
      </main>

      {/* Global Modals */}
      <AIExtractorModal />
      <AddCommentModal />
      <NewLeadModal />
      <NewPurchaseModal />
      <NewCustomerModal />
      <NewItemModal />
      <SettingsModal />
      <BookDemoModal />
      <FreeTrialModal />
      <Toasts />
    </div>
  );
}

export default function App() {
  return (
    <CrmProvider>
      <MainLayout />
    </CrmProvider>
  );
}
