import React from 'react';
import { useCrm } from '../../context/CrmContext';
import WebsiteNavbar from './WebsiteNavbar';
import WebsiteFooter from './WebsiteFooter';
import HomePage from './HomePage';
import FeaturesPage from './FeaturesPage';
import CatalogPage from './CatalogPage';
import SolutionsPage from './SolutionsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

export default function WebsiteLayout() {
  const { websitePage } = useCrm();

  const renderCurrentPage = () => {
    switch (websitePage) {
      case 'features':
        return <FeaturesPage />;
      case 'catalog':
        return <CatalogPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-blue-200">
      {/* 1. Header & Navigation */}
      <WebsiteNavbar />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 3. Global Footer */}
      <WebsiteFooter />

      {/* 4. Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <a
          href="https://wa.me/919324265877?text=Hello%20Pharma%20Chemi%2C%20I%20am%20interested%20in%20sourcing%20Active%20Pharmaceutical%20Ingredients%20(APIs)%20and%20the%20Pharma%20Chemi%20Software."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all relative group"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.562 3.844 1.625 5.469L2 22l4.656-1.594A10.01 10.01 0 0 0 12.03 22c5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.781 0-3.469-.531-4.906-1.469l-.344-.219-3.625 1.25 1.25-3.531-.25-.375a8.232 8.232 0 0 1-1.375-4.656c0-4.562 3.719-8.281 8.281-8.281s8.281 3.719 8.281 8.281-3.719 8.281-8.281 8.281zm4.562-6.188c-.25-.125-1.469-.719-1.688-.812-.219-.094-.375-.125-.531.125-.156.25-.625.812-.781 1-.156.188-.312.188-.562.062-.25-.125-1.062-.375-2.031-1.25-.75-.656-1.25-1.469-1.406-1.719-.156-.25 0-.375.125-.5.125-.125.25-.312.375-.469.125-.156.156-.25.25-.438.094-.188.031-.344-.031-.469-.062-.125-.531-1.312-.75-1.781-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.438.062-.656.312-.219.25-.875.844-.875 2.062s.906 2.375 1.031 2.531c.125.156 1.781 2.719 4.312 3.812.594.25 1.062.406 1.438.531.625.188 1.188.156 1.625.094.5-.062 1.469-.594 1.688-1.188.219-.594.219-1.094.156-1.188-.063-.094-.219-.156-.469-.281z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
        </a>
      </div>
    </div>
  );
}
