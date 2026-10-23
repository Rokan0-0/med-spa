import React from 'react';
import { MessageSquare, Phone, ArrowRight } from './Icons';
import type { ClinicSuite } from '../data/suites';

interface StickyConciergeBarProps {
  selectedSuite: ClinicSuite;
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const StickyConciergeBar: React.FC<StickyConciergeBarProps> = ({
  selectedSuite,
  onOpenBooking,
  onOpenQuiz
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE3D6] py-3 px-4 shadow-[0_-4px_20px_rgba(35,30,20,0.06)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Suite info */}
        <div className="hidden md:flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5C]" />
            <span className="text-[#111215] font-medium">{selectedSuite.neighborhood} Suite</span>
            <span className="text-[#C4BDB0]">&bull;</span>
            <span className="text-[#6E6A63]">Concierge Active</span>
          </div>

          <div className="hidden lg:flex items-center text-[#75726B] text-[11px] border-l border-[#EAE3D6] pl-3">
            <span>₦35,000 consult fee credited 100% to same-day treatment</span>
          </div>
        </div>

        {/* Center: Quiz shortcut */}
        <div className="hidden sm:block">
          <button
            onClick={onOpenQuiz}
            className="text-xs text-[#5A564F] hover:text-[#111215] flex items-center gap-1.5 transition-colors"
          >
            <span>Unsure which treatment? Take the 60-Sec Diagnostic Quiz</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#997C52]" />
          </button>
        </div>

        {/* Right Action */}
        <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
          <a
            href={`tel:${selectedSuite.phone}`}
            className="p-2.5 rounded-lg bg-white border border-[#EAE3D6] text-[#997C52] hover:text-[#111215] transition-colors shadow-sm"
            title="Call Concierge"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="flex-1 md:flex-none py-2.5 px-5 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#E6D4B8]" />
            <span>WhatsApp Concierge</span>
          </button>
        </div>

      </div>
    </div>
  );
};
