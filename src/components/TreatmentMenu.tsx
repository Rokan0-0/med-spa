import React, { useState } from 'react';
import { TREATMENTS, type Treatment } from '../data/treatments';
import { 
  Clock, 
  Activity, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  MessageSquare, 
  Search, 
  SlidersHorizontal, 
  Info 
} from './Icons';

interface TreatmentMenuProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const TreatmentMenu: React.FC<TreatmentMenuProps> = ({ onSelectTreatment }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dentistry' | 'skin' | 'injectables'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<'NGN' | 'USD' | 'GBP'>('NGN');

  const fxRates = {
    NGN: 1,
    USD: 1 / 1550,
    GBP: 1 / 2000
  };

  const formatPrice = (rawNaira: number, baseLabel: string) => {
    if (selectedCurrency === 'NGN') return baseLabel;
    const converted = Math.round(rawNaira * fxRates[selectedCurrency]);
    const symbol = selectedCurrency === 'USD' ? '$' : '£';
    return `~ ${symbol}${converted.toLocaleString()} (${baseLabel})`;
  };

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="treatments" className="py-24 border-b border-[#EAE3D6] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#EAE3D6]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#997C52] font-semibold">
              Curated Clinical Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111215] tracking-[-0.015em]">
              The Treatment Ledger
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Currency Switcher */}
            <div className="flex items-center space-x-2 text-xs text-[#6E6A63]">
              <span>Currency:</span>
              <div className="inline-flex rounded-md bg-white p-1 border border-[#EAE3D6] text-[11px] font-mono shadow-sm">
                {(['NGN', 'USD', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      selectedCurrency === curr
                        ? 'bg-[#111215] text-white font-semibold'
                        : 'text-[#6E6A63] hover:text-[#111215]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#8C8880] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search procedures..."
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#EAE3D6] rounded-lg text-xs text-[#111215] placeholder-[#9E9B93] focus:outline-none focus:border-[#997C52] transition-colors shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Procedures' },
            { id: 'dentistry', label: 'Cosmetic Dentistry' },
            { id: 'skin', label: 'Skin & Laser' },
            { id: 'injectables', label: 'Wellness & Injectables' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#111215] text-white font-medium shadow-sm'
                  : 'bg-white text-[#6E6A63] hover:text-[#111215] border border-[#EAE3D6] shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Ledger Items */}
        <div className="space-y-4">
          {filteredTreatments.map((treatment) => {
            const isExpanded = expandedId === treatment.id;

            return (
              <div
                key={treatment.id}
                className="rounded-xl border border-[#EAE3D6] hover:border-[#D6CCC0] bg-white transition-all shadow-[0_2px_12px_-2px_rgba(35,30,20,0.03)] overflow-hidden"
              >
                {/* Primary Row */}
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Thumbnail & Title */}
                  <div className="md:col-span-5 flex items-center space-x-4">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0 border border-[#EAE3D6]"
                    />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#997C52] font-semibold">
                        {treatment.categoryLabel}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#111215]">
                        {treatment.name}
                      </h3>
                      <p className="text-xs text-[#5A564F] line-clamp-1 mt-0.5">
                        {treatment.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Clinical Parameters: Duration & Downtime */}
                  <div className="md:col-span-3 grid grid-cols-2 gap-2 text-xs text-[#6E6A63]">
                    <div>
                      <div className="text-[10px] text-[#8C8880] uppercase font-mono font-medium">Duration</div>
                      <div className="font-medium text-[#2C2A26] mt-0.5">{treatment.duration}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#8C8880] uppercase font-mono font-medium">Downtime</div>
                      <div className="font-medium text-[#2E7D5C] mt-0.5">{treatment.downtime.split('(')[0]}</div>
                    </div>
                  </div>

                  {/* Investment & Actions */}
                  <div className="md:col-span-4 flex items-center justify-between sm:justify-end space-x-4 border-t md:border-t-0 pt-4 md:pt-0 border-[#EAE3D6]">
                    <div className="text-left sm:text-right">
                      <div className="text-[10px] text-[#8C8880] uppercase font-mono font-medium">Investment</div>
                      <div className="text-base sm:text-lg font-mono font-bold text-[#111215]">
                        {formatPrice(treatment.rawPrice, treatment.priceNaira)}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(treatment.id)}
                        className="px-3 py-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F5F1E9] text-xs text-[#6E6A63] hover:text-[#111215] border border-[#EAE3D6] transition-colors"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectTreatment(treatment.name)}
                        className="px-4 py-2 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5 shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#E6D4B8]" />
                        <span>Reserve</span>
                      </button>
                    </div>
                  </div>

                </div>

                {/* Expanded Clinical Dossier Accordion */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-[#EAE3D6] bg-[#FAF8F5] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5A564F] animate-fadeIn">
                    <div className="space-y-1.5">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#997C52] font-semibold">
                        Clinical Overview
                      </div>
                      <p className="leading-relaxed text-[#484642]">
                        {treatment.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#997C52] font-semibold">
                        Ideal Candidate
                      </div>
                      <ul className="space-y-1">
                        {treatment.idealFor.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5 text-[#484642]">
                            <span className="text-[#997C52] mt-0.5">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#997C52] font-semibold">
                        Protocol Steps &amp; Policy
                      </div>
                      <ol className="space-y-1 list-decimal pl-4 text-[#484642] marker:text-[#997C52]">
                        {treatment.protocolSteps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                      <div className="pt-2 text-[11px] text-[#6E6A63] font-mono">
                        {treatment.priceNote}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
