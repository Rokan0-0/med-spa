import React from 'react';
import { Award, ShieldCheck, Lock, Banknote, CheckCircle2 } from './Icons';

export const TrustCredibility: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      num: '01',
      title: 'Board-Certified Specialists',
      subtitle: 'UK, US & European Trained Practitioners',
      description: 'Our clinical directors hold postgraduate surgical degrees and fellowships from King’s College London, NYU Dental, and European Aesthetic Academies. GMC, GDC, and NMCN licensed.',
      highlights: [
        'Over 14,000 completed aesthetic & ceramic cases',
        'Continuous clinical training in Zurich and Beverly Hills',
        'Strict ethical cosmetic restraint philosophy'
      ]
    },
    {
      icon: ShieldCheck,
      num: '02',
      title: '100% Pain-Free Digital Protocol',
      subtitle: 'Computer-Guided Anesthesia & German Melag Cleanrooms',
      description: 'Zero physical impression trays or painful needles. We utilize computerized Wand micro-delivery anesthesia, iTero 5D optical scanners, and German Melag Class-B autoclave sterilization.',
      highlights: [
        'Zero cross-contamination cleanroom protocol',
        'Optional certified anesthesiologist-supervised IV twilight sedation',
        'CEREC optical 3D digital precision fitting'
      ]
    },
    {
      icon: Lock,
      num: '03',
      title: 'Discrete VIP Architecture',
      subtitle: 'Engineered for High-Profile Figures, Diplomats & Executives',
      description: 'Complete privacy. Each clinic suite features private elevator access, soundproof consultation rooms, and discrete back-door departure entrances away from main lobbies.',
      highlights: [
        'Dedicated secure valet and subterranean parking',
        'Single-client private booking sessions upon request',
        'Non-disclosure confidentiality agreements standard'
      ]
    },
    {
      icon: Banknote,
      num: '04',
      title: 'Transparent Consultation Policy',
      subtitle: '₦35,000 Diagnostic Fee — 100% Credited to Treatment',
      description: 'No hidden surcharges or surprise billing. Your initial comprehensive 45-minute clinical diagnostic (₦35,000) is deducted entirely from any procedure performed or scheduled same-day.',
      highlights: [
        'Includes digital intraoral scans & skin diagnostics',
        'Transparent itemized written investment quote',
        'Zero pressure or upselling guarantee'
      ]
    }
  ];

  return (
    <section id="why-us" className="py-24 border-b border-[#EAE3D6] bg-[#F5F1E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#EAE3D6]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#997C52] font-semibold">
              Institutional Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111215] tracking-[-0.015em]">
              Clinical Standards Charter
            </h2>
          </div>

          <p className="text-xs text-[#5A564F] max-w-md">
            Where British clinical precision meets bespoke hospitality. 
            We reject commercialized aesthetic trends in favor of architectural facial harmony, biological safety, and complete discretion.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#EAE3D6] bg-white shadow-[0_2px_16px_-2px_rgba(35,30,20,0.04)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D6]">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-[#997C52]" />
                      <span className="text-xs font-mono uppercase tracking-widest text-[#75726B] font-medium">
                        Standard {pillar.num}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#9E9B93]">AURA CHARTER</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#111215]">
                      {pillar.title}
                    </h3>
                    <div className="text-xs text-[#997C52] mt-1 font-semibold">
                      {pillar.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#484642] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE3D6] space-y-2">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2 text-xs text-[#5A564F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certified Hardware Matrix */}
        <div className="p-8 rounded-2xl border border-[#EAE3D6] bg-white shadow-[0_2px_16px_-2px_rgba(35,30,20,0.04)] text-center space-y-6">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#75726B] font-semibold">
            Certified Medical Hardware &amp; Material Deployments
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
              <div className="font-mono text-xs text-[#997C52] font-semibold">01 / DENTAL OPTICS</div>
              <div className="font-serif text-base text-[#111215] mt-1">iTero Element 5D</div>
              <div className="text-[11px] text-[#75726B] mt-0.5">Near-Infrared Optical Scan</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
              <div className="font-mono text-xs text-[#997C52] font-semibold">02 / DERMAL RF</div>
              <div className="font-serif text-base text-[#111215] mt-1">InMode Morpheus8</div>
              <div className="text-[11px] text-[#75726B] mt-0.5">FDA Subdermal Remodeling</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
              <div className="font-mono text-xs text-[#997C52] font-semibold">03 / CERAMICS</div>
              <div className="font-serif text-base text-[#111215] mt-1">Ivoclar E-Max</div>
              <div className="text-[11px] text-[#75726B] mt-0.5">German Lithium Disilicate</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
              <div className="font-mono text-xs text-[#997C52] font-semibold">04 / STERILITY</div>
              <div className="font-serif text-base text-[#111215] mt-1">Melag Class-B</div>
              <div className="text-[11px] text-[#75726B] mt-0.5">Berlin Hospital Cleanroom</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
