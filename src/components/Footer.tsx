import React from 'react';
import { MessageSquare, ShieldCheck } from './Icons';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE3D6] text-[#6E6A63] text-xs pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#EAE3D6]">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.18em] uppercase text-[#111215] font-normal block">
              AURA <span className="font-light tracking-[0.25em] text-[#997C52]">ATELIER</span>
            </span>

            <p className="text-[#5A564F] font-light leading-relaxed max-w-sm text-xs">
              Elite Restorative Dentistry, Advanced Dermatology &amp; Private Suites. 
              Pioneering 100% pain-free digital smile makeovers, Morpheus8 subdermal remodeling, and diplomatic-grade discretion in Lagos and Abuja.
            </p>

            <div className="inline-flex items-center space-x-2 text-[11px] text-[#997C52] font-mono bg-white px-3.5 py-1.5 rounded-lg border border-[#EAE3D6] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#997C52] shrink-0" />
              <span>₦35,000 Consultation fee 100% credited to same-day treatment</span>
            </div>
          </div>

          {/* Treatments */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#111215] font-semibold">
              Procedures
            </div>
            <ul className="space-y-2 text-xs text-[#6E6A63]">
              <li><a href="#treatments" className="hover:text-[#111215] transition-colors">Porcelain Veneers (₦1.5M+)</a></li>
              <li><a href="#treatments" className="hover:text-[#111215] transition-colors">Laser Teeth Whitening (₦180k)</a></li>
              <li><a href="#treatments" className="hover:text-[#111215] transition-colors">Morpheus8 RF Needling</a></li>
              <li><a href="#treatments" className="hover:text-[#111215] transition-colors">Hydrafacial MD® Deluxe</a></li>
              <li><a href="#treatments" className="hover:text-[#111215] transition-colors">Custom IV Nutrient Infusions</a></li>
              <li><a href="#treatments" className="hover:text-[#111215] transition-colors">Artisan Edge Bonding</a></li>
            </ul>
          </div>

          {/* Suites */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#111215] font-semibold">
              Clinic Suites
            </div>
            <ul className="space-y-2.5 text-xs text-[#6E6A63]">
              <li>
                <span className="text-[#111215] font-medium block">Victoria Island</span>
                <span className="text-[11px] text-[#75726B]">Adeola Odeku Penthouse Suite</span>
              </li>
              <li>
                <span className="text-[#111215] font-medium block">Lekki Phase 1</span>
                <span className="text-[11px] text-[#75726B]">Admiralty Way Waterfront Enclave</span>
              </li>
              <li>
                <span className="text-[#111215] font-medium block">Ikeja GRA</span>
                <span className="text-[11px] text-[#75726B]">Isaac John Private Sanctuary</span>
              </li>
              <li>
                <span className="text-[#111215] font-medium block">Maitama, Abuja</span>
                <span className="text-[11px] text-[#75726B]">Gana Street Diplomatic Enclave</span>
              </li>
            </ul>
          </div>

          {/* Concierge */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#111215] font-semibold">
              VIP Liaison
            </div>
            <div className="space-y-2 text-xs text-[#6E6A63]">
              <div>
                Hours: Mon – Sat (8:30am – 7:30pm)
              </div>
              <a
                href="tel:+2348039000101"
                className="text-[#997C52] hover:underline font-mono font-semibold block transition-colors"
              >
                +234 (0) 803 900 0101
              </a>
              <button
                type="button"
                onClick={onOpenBooking}
                className="mt-2 w-full py-2.5 px-3 rounded-lg bg-white hover:bg-[#F5F1E9] text-xs font-semibold text-[#111215] border border-[#EAE3D6] transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#997C52]" />
                <span>Open WhatsApp Ticket</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#75726B] gap-4">
          <div>
            &copy; {new Date().getFullYear()} AURA Atelier Aesthetics &amp; Dental Surgery Ltd.
          </div>

          <div className="text-center md:text-right max-w-xl text-[10px] leading-relaxed text-[#8C8880]">
            Visible results from professional aesthetic care. Individual outcomes depend on baseline dental and skin conditions. 
            Licensed by Medical and Dental Council of Nigeria (MDCN).
          </div>
        </div>

      </div>
    </footer>
  );
};
