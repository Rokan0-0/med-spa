import React, { useState } from 'react';
import { CASE_STUDIES, MEDICAL_DISCLAIMER_TEXT } from '../data/caseStudies';
import { AlertCircle, ArrowLeftRight, User, MapPin, Stethoscope, ChevronRight } from './Icons';

interface BeforeAfterShowcaseProps {
  onSelectCaseForConsult: (caseTitle: string) => void;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onSelectCaseForConsult }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const activeCase = CASE_STUDIES[activeCaseIndex];

  return (
    <section id="showcase" className="py-24 border-b border-[#EAE3D6] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#EAE3D6]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#997C52] font-semibold">
              Documented Transformations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111215] tracking-[-0.015em]">
              Clinical Case Exhibition
            </h2>
          </div>

          <p className="text-xs text-[#5A564F] max-w-md">
            Drag the dividing line horizontally to evaluate baseline pre-operative dental &amp; dermatological 
            conditions versus completed restorative outcomes.
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-medium transition-all ${
                activeCaseIndex === idx
                  ? 'bg-[#111215] text-white shadow-sm font-semibold'
                  : 'bg-white text-[#6E6A63] hover:text-[#111215] border border-[#EAE3D6] shadow-sm'
              }`}
            >
              <span>Case 0{idx + 1}:</span>{' '}
              <span className="opacity-90">{cs.title.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Main Exhibition Card */}
        <div className="rounded-2xl border border-[#EAE3D6] bg-white p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_4px_24px_-4px_rgba(35,30,20,0.05)]">
          
          {/* Left Column: Interactive Split Comparison Viewer */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden select-none bg-[#FAF8F5] border border-[#EAE3D6] h-[360px] sm:h-[460px]">
              
              {/* After Image */}
              <img
                src={activeCase.afterImage}
                alt="After Outcome"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt="Before Baseline"
                  className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[15%]"
                />
              </div>

              {/* Dividing Hairline */}
              <div
                className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle Badge */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#111215] shadow-lg border border-[#EAE3D6] flex items-center justify-center">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-[#111215]" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-[#111215] border border-[#EAE3D6] shadow-sm">
                Pre-Treatment Baseline
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-[#997C52] border border-[#EAE3D6] font-semibold shadow-sm">
                Clinical Outcome
              </div>

              {/* Input Range Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="Comparison slider"
                className="comparison-slider absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>
          </div>

          {/* Right Column: Case Dossier & Clinical Disclaimer */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#997C52] font-semibold">
                {activeCase.categoryLabel} &bull; Case 0{activeCaseIndex + 1}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111215] mt-1">
                {activeCase.title}
              </h3>
              <p className="text-xs text-[#6E6A63] font-medium mt-1">
                {activeCase.tagline}
              </p>
            </div>

            {/* Case Dossier */}
            <div className="space-y-3 text-xs bg-[#FAF8F5] p-5 rounded-xl border border-[#EAE3D6]">
              <div>
                <div className="text-[10px] text-[#75726B] uppercase font-mono font-medium">Patient Baseline</div>
                <div className="text-[#2C2A26] mt-0.5">{activeCase.patientProfile}</div>
              </div>

              <div>
                <div className="text-[10px] text-[#75726B] uppercase font-mono font-medium">Primary Concern</div>
                <div className="text-[#2C2A26] mt-0.5">{activeCase.concern}</div>
              </div>

              <div>
                <div className="text-[10px] text-[#75726B] uppercase font-mono font-medium">Protocol Executed</div>
                <div className="text-[#2C2A26] mt-0.5">{activeCase.clinicalSolution}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#EAE3D6] text-[11px] text-[#6E6A63]">
                <div>
                  <span className="text-[#75726B] block">Location:</span>
                  <span className="text-[#111215] font-semibold">{activeCase.location.split('(')[0]}</span>
                </div>
                <div>
                  <span className="text-[#75726B] block">Clinician:</span>
                  <span className="text-[#111215] font-semibold">{activeCase.clinician.split('(')[0]}</span>
                </div>
              </div>
            </div>

            {/* Prominent Medical Disclaimer Badge */}
            <div className="p-4 rounded-xl bg-[#F5F1E9] border border-[#EAE3D6] flex items-start space-x-3 text-xs text-[#5A564F]">
              <AlertCircle className="w-4 h-4 text-[#997C52] shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed italic text-[#484642]">
                &ldquo;{MEDICAL_DISCLAIMER_TEXT}&rdquo;
              </p>
            </div>

            {/* Consult Button */}
            <button
              type="button"
              onClick={() => onSelectCaseForConsult(activeCase.title)}
              className="w-full py-3.5 px-5 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Consult on Similar Case</span>
              <ChevronRight className="w-4 h-4 text-[#E6D4B8]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
