import React from 'react';
import { CLINIC_SUITES, type ClinicSuite } from '../data/suites';
import { MapPin, Phone, MessageSquare, Clock, Check, Navigation, ShieldCheck } from './Icons';

interface ClinicSuitesProps {
  selectedSuite: ClinicSuite;
  onSelectSuite: (suite: ClinicSuite) => void;
  onBookAtSuite: (suiteNeighborhood: string) => void;
}

export const ClinicSuites: React.FC<ClinicSuitesProps> = ({
  selectedSuite,
  onSelectSuite,
  onBookAtSuite
}) => {
  return (
    <section id="suites" className="py-24 border-b border-[#EAE3D6] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#EAE3D6]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#997C52] font-semibold">
              Private Enclaves
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111215] tracking-[-0.015em]">
              The Clinic Suites
            </h2>
          </div>

          <p className="text-xs text-[#5A564F] max-w-md">
            Four private clinics across Lagos and Abuja. Built with dedicated subterranean parking, 
            private elevators, and discrete back-door security departures.
          </p>
        </div>

        {/* Suite Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CLINIC_SUITES.map((suite) => (
            <button
              key={suite.id}
              onClick={() => onSelectSuite(suite)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedSuite.id === suite.id
                  ? 'bg-[#FAF6EE] border-[#997C52] shadow-sm'
                  : 'bg-white border-[#EAE3D6] hover:border-[#D6CCC0]'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#997C52] font-semibold">
                {suite.city}
              </div>
              <div className="font-serif text-lg font-medium text-[#111215] mt-1">
                {suite.neighborhood}
              </div>
              <div className="text-[11px] text-[#75726B] truncate mt-0.5">
                {suite.name.split('Clinic')[0].split('Sanctuary')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Suite Dossier */}
        <div className="rounded-2xl border border-[#EAE3D6] bg-white p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_4px_24px_-4px_rgba(35,30,20,0.05)]">
          
          {/* Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#EAE3D6] h-[340px] sm:h-[420px]">
              <img
                src={selectedSuite.image}
                alt={selectedSuite.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {selectedSuite.hasPrivateBackEntrance && (
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#EAE3D6] text-xs text-[#111215] flex items-center space-x-2 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D5C]" />
                  <span className="font-medium">Discrete Back-Door VIP Departure</span>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-lg border border-[#EAE3D6] text-xs text-[#2C2A26] flex items-start space-x-2 shadow-sm">
                <MapPin className="w-4 h-4 text-[#997C52] shrink-0 mt-0.5" />
                <span className="leading-snug">{selectedSuite.address}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#997C52] font-semibold">
                {selectedSuite.city} Enclave
              </div>
              <h3 className="font-serif text-3xl font-normal text-[#111215] mt-1">
                {selectedSuite.name}
              </h3>
              <p className="text-xs text-[#6E6A63] mt-1 font-mono">
                {selectedSuite.tagline}
              </p>
            </div>

            {/* Hours & Hotline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#FAF8F5] p-5 rounded-xl border border-[#EAE3D6]">
              <div>
                <span className="text-[10px] text-[#75726B] uppercase font-mono font-medium block">Operating Hours</span>
                <span className="text-[#111215] font-semibold block mt-0.5">{selectedSuite.hours}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#75726B] uppercase font-mono font-medium block">Concierge Hotline</span>
                <a
                  href={`tel:${selectedSuite.phone}`}
                  className="text-[#997C52] font-mono font-semibold hover:underline block mt-0.5"
                >
                  {selectedSuite.displayPhone}
                </a>
              </div>
            </div>

            {/* Architectural Features */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#997C52] font-semibold">
                Suite Architectural &amp; Clinical Features
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#484642]">
                {selectedSuite.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#2E7D5C] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onBookAtSuite(selectedSuite.neighborhood)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#E6D4B8]" />
                <span>Book Suite at {selectedSuite.neighborhood}</span>
              </button>

              <a
                href={selectedSuite.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-white hover:bg-[#FAF8F5] text-xs text-[#5A564F] hover:text-[#111215] border border-[#EAE3D6] flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
