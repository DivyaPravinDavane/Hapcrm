import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Building2,
  Lock,
  ArrowRight,
  ExternalLink,
  Cpu,
  Boxes,
  FileCheck
} from 'lucide-react';
import { useCrm } from '../../context/CrmContext';

export default function WebsiteFooter() {
  const { navigateToWebsite, launchAuth, launchCrmDemo } = useCrm();

  return (
    <footer className="pt-16 pb-12 bg-slate-950 text-slate-400 text-xs border-t border-slate-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About Platform */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#004B9B] to-blue-600 text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                PC
              </div>
              <span className="text-lg font-extrabold text-white">
                Pharma <span className="text-cyan-400">Chemi</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              The dedicated enterprise software and sourcing platform engineered specifically for the pharmaceuticals and chemical industries. Complete with chemical inquiry CRM, item master stock matching, batch COA traceability, and global supplier workflows.
            </p>

            <div className="pt-2 text-[11px] space-y-1 text-slate-400">
              <div>Domain: <span className="font-mono text-cyan-300 font-bold">pharmachemi.com / hapenterprise.com</span></div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={launchCrmDemo}
                className="px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-[#004B9B] hover:from-blue-700 hover:to-[#003875] text-white rounded-lg text-2xs font-bold transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Live Software Demo</span>
                <ArrowRight className="w-3 h-3 text-cyan-200" />
              </button>

              <button
                onClick={launchAuth}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-2xs font-bold transition-colors inline-flex items-center gap-1"
              >
                <Lock className="w-3 h-3 text-cyan-400" />
                <span>Staff Login</span>
              </button>
            </div>
          </div>

          {/* Col 2: Software Modules Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Software Features</span>
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigateToWebsite('features')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Chemical Leads & Inquiries Pipeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('features')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  AI Document & PO Extractor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('features')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Multi-Currency Sourcing Desk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('features')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Batch Quality Vault & COA Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('features')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Chemical Accounts & Aging Analysis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('features')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Daily Workflows & Courier Dispatch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Industry Solutions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Boxes className="w-3.5 h-3.5 text-emerald-400" />
              <span>Explore Platform</span>
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigateToWebsite('catalog')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  150+ APIs Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('solutions')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Industry Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('about')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  About Pharma Chemi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToWebsite('contact')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Contact & Inquiry Form
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Headquarters & Plant</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EE1C25] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-tight">
                  <strong className="text-white block">Corporate Head Office:</strong>
                  Shop No. 4, Gorai Disha CHS ltd, L T Road, Gorai Plot No. 50, Borivali (West), Mumbai - 400 092 INDIA
                </span>
              </div>


              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-[#EE1C25] shrink-0" />
                <a href="mailto:inquiry@hapenterprise.com" className="text-cyan-300 hover:underline font-semibold">
                  inquiry@hapenterprise.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#004B9B] shrink-0" />
                <span className="font-semibold text-slate-200">+91 93234265877, 9324517446</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            &copy; 2026 Pharma Chemi. Dedicated Software & Platform for Pharmaceuticals & Chemical Industries. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>WHO-GMP Validated Nodes</span>
            <span>•</span>
            <button onClick={launchAuth} className="hover:text-white font-semibold">
              Staff Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
