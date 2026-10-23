import React from 'react';
import { ArrowRight, ShieldCheck, Award, Lock, CheckCircle2, MessageSquare } from './Icons';
import type { ClinicSuite } from '../data/suites';

interface HeroProps {
  selectedSuite: ClinicSuite;
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedSuite,
  onOpenBooking,
  onOpenQuiz
}) => {
  return (
    <section className="relative pt-12 pb-20 border-b border-[#EAE3D6] bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimalist Location Label */}
        <div className="pb-5 mb-8 sm:mb-10 border-b border-[#EAE3D6]">
          {/* Mobile View (< sm): Clean, Balanced Dual Rows */}
          <div className="sm:hidden space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#2E7D5C] shrink-0" />
                <span className="text-[#111215] font-medium tracking-wide">
                  Flagship: {selectedSuite.neighborhood}
                </span>
                <span className="text-[#C4BDB0]">&bull;</span>
                <span className="text-[#6E6A63]">{selectedSuite.city}</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#997C52] font-semibold bg-[#FAF6EE] px-2 py-0.5 rounded border border-[#EAE3D6]">
                Suite Open
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6A63] pt-0.5">
              <span>Tier I – III Restorative Care</span>
              <span className="text-[#997C52] font-semibold">₦80,000 – ₦1.5M+</span>
            </div>
          </div>

          {/* Desktop & Tablet View (>= sm): Refined Single Ledger Line */}
          <div className="hidden sm:flex items-center justify-between text-xs text-[#6E6A63]">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#2E7D5C] shrink-0" />
              <span className="text-[#111215] font-medium tracking-wide">
                Flagship Suite: {selectedSuite.name}
              </span>
              <span className="text-[#C4BDB0]">&bull;</span>
              <span className="text-[#6E6A63]">{selectedSuite.neighborhood}, {selectedSuite.city}</span>
            </div>

            <div className="flex items-center space-x-4 font-mono text-[11px] text-[#6E6A63]">
              <span>Tier I to III Restorative Care</span>
              <span className="text-[#C4BDB0]">&bull;</span>
              <span className="text-[#997C52] font-semibold">From ₦80,000 to ₦1.5M+</span>
            </div>
          </div>
        </div>

        {/* Grand Editorial Headline & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#111215] tracking-[-0.025em] leading-[1.05]">
              Where Surgical Precision Meets Architectural Beauty.
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="text-sm sm:text-base text-[#484642] font-light leading-relaxed">
              Nigeria’s discreet restorative sanctuary. Specializing in master-crafted ceramic veneers, 
              melanin-safe laser resurfacing, Morpheus8 subdermal remodeling, and physician-compounded cellular infusions.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-[#E6D4B8]" />
                <span>Reserve Consultation</span>
              </button>

              <button
                type="button"
                onClick={onOpenQuiz}
                className="px-5 py-3.5 rounded-lg bg-white hover:bg-[#F5F1E9] text-[#111215] border border-[#EAE3D6] text-xs font-medium transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Diagnostic Quiz</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#997C52]" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Architectural Visual Montage */}
        <div className="relative rounded-2xl overflow-hidden border border-[#EAE3D6] bg-white shadow-[0_4px_24px_-4px_rgba(35,30,20,0.06)] mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Main Wide Visual: Generated Luxury Suite */}
            <div className="md:col-span-8 relative h-[380px] sm:h-[480px]">
              <img
                src="/images/hero-suite.jpg"
                alt="AURA Atelier Victoria Island Suite"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-white/95 backdrop-blur-md border border-[#EAE3D6] text-[11px] text-[#2C2A26] flex items-center space-x-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#997C52]" />
                <span className="font-medium">Victoria Island Penthouse Suite &bull; Lagos Lagoon Daylight</span>
              </div>
            </div>

            {/* Side Clinical Precision Story */}
            <div className="md:col-span-4 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#EAE3D6] bg-white">
              <div className="space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#997C52] font-semibold">
                  Clinical Standards
                </div>
                <h3 className="font-serif text-2xl text-[#111215] font-normal leading-snug">
                  100% Pain-Free Digital Dentistry &amp; German Sterility
                </h3>
                <p className="text-xs text-[#5A564F] leading-relaxed">
                  We have eliminated physical impressions and invasive syringes. Using intraoral 3D optical scanning, 
                  computer-delivered Wand micro-anesthesia, and Class-B hospital cleanroom autoclaves.
                </p>
              </div>

              <div className="pt-6 border-t border-[#EAE3D6] space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] text-[#75726B] uppercase tracking-wider font-medium">Consultation Policy</span>
                  <span className="text-sm font-mono font-bold text-[#111215]">₦35,000</span>
                </div>
                <p className="text-[11px] text-[#6E6A63] leading-snug">
                  Credited 100% toward any treatment performed or scheduled on the same day.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Column Clinical Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2 text-xs text-[#6E6A63]">
          <div className="p-5 rounded-xl bg-white border border-[#EAE3D6] shadow-[0_2px_12px_-2px_rgba(35,30,20,0.03)] space-y-2">
            <div className="flex items-center space-x-2.5 text-[#111215] font-medium">
              <Award className="w-4 h-4 text-[#997C52] shrink-0" />
              <span>Board-Certified Specialists</span>
            </div>
            <p className="text-[11px] text-[#5A564F] leading-relaxed">
              UK, US &amp; European trained cosmetic dentists and aesthetic physicians.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#EAE3D6] shadow-[0_2px_12px_-2px_rgba(35,30,20,0.03)] space-y-2">
            <div className="flex items-center space-x-2.5 text-[#111215] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#997C52] shrink-0" />
              <span>100% Pain-Free Protocols</span>
            </div>
            <p className="text-[11px] text-[#5A564F] leading-relaxed">
              Computerized micro-anesthesia and optional twilight conscious IV sedation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#EAE3D6] shadow-[0_2px_12px_-2px_rgba(35,30,20,0.03)] space-y-2">
            <div className="flex items-center space-x-2.5 text-[#111215] font-medium">
              <Lock className="w-4 h-4 text-[#997C52] shrink-0" />
              <span>Discreet VIP Architecture</span>
            </div>
            <p className="text-[11px] text-[#5A564F] leading-relaxed">
              Private subterranean elevators and discrete back-door security departures.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#EAE3D6] shadow-[0_2px_12px_-2px_rgba(35,30,20,0.03)] space-y-2">
            <div className="flex items-center space-x-2.5 text-[#111215] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#997C52] shrink-0" />
              <span>₦35,000 Consultation Credit</span>
            </div>
            <p className="text-[11px] text-[#5A564F] leading-relaxed">
              Full itemized diagnostic scan credited toward same-day procedure costs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
