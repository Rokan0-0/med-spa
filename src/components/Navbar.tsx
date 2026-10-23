import React, { useState, useEffect } from 'react';
import { CLINIC_SUITES, type ClinicSuite } from '../data/suites';
import { MapPin, MessageSquare, Menu, X, ChevronDown, ShieldCheck } from './Icons';

interface NavbarProps {
  selectedSuite: ClinicSuite;
  onSelectSuite: (suite: ClinicSuite) => void;
  onOpenBooking: (prefillTreatment?: string) => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedSuite,
  onSelectSuite,
  onOpenBooking,
  onOpenQuiz
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [suiteDropdownOpen, setSuiteDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Porcelain Clinical Policy Bar */}
      <div className="bg-[#F5F1E9] border-b border-[#EAE3D6] text-[11px] text-[#6E6A63] py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center space-x-3">
            <span className="text-[#997C52] uppercase tracking-[0.16em] font-mono text-[10px] font-semibold">
              Clinical Policy
            </span>
            <span className="text-[#D0C8B8]">&bull;</span>
            <span className="text-[#2C2A26]">
              ₦35,000 Diagnostic Fee &mdash; <strong className="font-semibold text-[#111215]">100% Credited Toward Same-Day Treatment</strong>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-[11px]">
            <span className="flex items-center text-[#6E6A63]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5C] inline-block mr-2" />
              VI &bull; Lekki &bull; Ikeja GRA &bull; Maitama Abuja
            </span>
            <span className="text-[#D0C8B8]">&bull;</span>
            <a 
              href={`tel:${selectedSuite.phone}`} 
              className="text-[#997C52] hover:text-[#111215] transition-colors font-mono tracking-tight font-semibold"
            >
              {selectedSuite.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Porcelain Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 overflow-x-clip ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3D6] py-3 shadow-sm'
            : 'bg-[#FAF8F5] border-b border-[#EAE3D6] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-8">
            
            {/* Brand Identity: Architecturally Stacked Logomark */}
            <a href="#" className="flex flex-col shrink-0 group">
              <span className="font-serif text-2xl sm:text-[26px] tracking-[0.2em] uppercase text-[#111215] font-normal leading-tight group-hover:text-[#997C52] transition-colors">
                AURA <span className="font-light tracking-[0.28em] text-[#997C52]">ATELIER</span>
              </span>
              <span className="text-[8px] sm:text-[8.5px] font-mono tracking-[0.24em] text-[#75726B] uppercase leading-none mt-1">
                Dentistry &bull; Aesthetics &bull; Med-Spa
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[11px] font-medium uppercase tracking-[0.16em] text-[#5A564F]">
              <a href="#treatments" className="hover:text-[#111215] transition-colors whitespace-nowrap">
                Treatments
              </a>
              <button 
                onClick={onOpenQuiz} 
                className="hover:text-[#111215] transition-colors text-[#997C52] flex items-center gap-1.5 whitespace-nowrap uppercase tracking-[0.16em] font-medium"
              >
                <span>Diagnostic Quiz</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#997C52]" />
              </button>
              <a href="#showcase" className="hover:text-[#111215] transition-colors whitespace-nowrap">
                Outcomes
              </a>
              <a href="#why-us" className="hover:text-[#111215] transition-colors whitespace-nowrap">
                Standards
              </a>
              <a href="#suites" className="hover:text-[#111215] transition-colors whitespace-nowrap">
                Clinic Suites
              </a>
              <a href="#faq" className="hover:text-[#111215] transition-colors whitespace-nowrap">
                Disclosures
              </a>
            </nav>

            {/* Suite Selector & VIP CTA: strictly hidden on mobile/tablet, visible on desktop lg+ */}
            <div className="hidden lg:flex items-center space-x-3 shrink-0">
              
              {/* Suite Switcher */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSuiteDropdownOpen(!suiteDropdownOpen)}
                  className="flex items-center space-x-2 text-xs text-[#2C2A26] bg-white hover:bg-[#F5F1E9] border border-[#EAE3D6] px-3 py-2 rounded-lg transition-all shadow-sm focus:outline-none whitespace-nowrap"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#997C52] shrink-0" />
                  <span className="font-medium">{selectedSuite.neighborhood}</span>
                  <ChevronDown className={`w-3 h-3 text-[#75726B] transition-transform duration-200 ${suiteDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {suiteDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-[#EAE3D6] rounded-xl shadow-[0_10px_30px_-5px_rgba(35,30,20,0.1)] p-2 z-50 animate-fadeIn">
                    <div className="px-3 py-2 text-[10px] font-mono tracking-widest text-[#997C52] uppercase border-b border-[#EAE3D6] font-semibold">
                      Select Clinic Suite
                    </div>
                    {CLINIC_SUITES.map((suite) => (
                      <button
                        key={suite.id}
                        onClick={() => {
                          onSelectSuite(suite);
                          setSuiteDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-xs flex items-start space-x-2.5 transition-all ${
                          selectedSuite.id === suite.id
                            ? 'bg-[#FAF6EE] text-[#997C52] font-semibold border border-[#EAE3D6]'
                            : 'text-[#484642] hover:bg-[#FAF8F5]'
                        }`}
                      >
                        <MapPin className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${selectedSuite.id === suite.id ? 'text-[#997C52]' : 'text-[#75726B]'}`} />
                        <div>
                          <div className="font-medium text-[#111215]">{suite.neighborhood}, {suite.city}</div>
                          <div className="text-[10px] text-[#75726B] truncate">{suite.tagline}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Consultation Booking Button */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-4 sm:px-5 py-2.5 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center space-x-2 whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#E6D4B8]" />
                <span>Reserve Consultation</span>
              </button>

            </div>

            {/* Mobile / Tablet Compact Action: strictly visible on < lg */}
            <div className="flex lg:hidden items-center space-x-2 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-3.5 py-2 text-xs font-medium rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white uppercase tracking-wider transition-colors shadow-sm flex items-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#E6D4B8]" />
                <span>Reserve</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#111215] p-2 hover:bg-[#F5F1E9] rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#FAF8F5] border-b border-[#EAE3D6] px-4 pt-3 pb-6 space-y-4 animate-fadeIn">
            <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#EAE3D6] shadow-sm">
              <div className="text-xs text-[#80653E] font-medium mb-2">Preferred Clinic Suite:</div>
              <div className="grid grid-cols-2 gap-1.5">
                {CLINIC_SUITES.map((suite) => (
                  <button
                    key={suite.id}
                    onClick={() => onSelectSuite(suite)}
                    className={`text-left px-2.5 py-2 rounded-lg text-xs font-medium ${
                      selectedSuite.id === suite.id
                        ? 'bg-[#F5EFE4] text-[#80653E] border border-[#DECDB3]'
                        : 'text-[#55524B] bg-[#F9F7F2]'
                    }`}
                  >
                    {suite.neighborhood}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2 text-xs uppercase tracking-wider text-[#3C3A35]">
              <a
                href="#treatments"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#EAE3D6] hover:text-[#111215]"
              >
                Treatment Ledger
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="py-2.5 text-left border-b border-[#EAE3D6] text-bronze-600 font-medium flex items-center justify-between"
              >
                <span>Smile &amp; Skin Diagnostic</span>
                <span className="text-[9px] bg-[#F3ECE0] px-2 py-0.5 rounded text-[#80653E]">3-Step</span>
              </button>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#EAE3D6] hover:text-[#111215]"
              >
                Clinical Outcomes
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#EAE3D6] hover:text-[#111215]"
              >
                Clinical Standards
              </a>
              <a
                href="#suites"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#EAE3D6] hover:text-[#111215]"
              >
                Clinic Suites
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#EAE3D6] hover:text-[#111215]"
              >
                Disclosures
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-lg bg-[#B5986D] text-white font-bold text-xs uppercase tracking-widest shadow-sm flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Book WhatsApp Concierge</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};
