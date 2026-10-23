import React, { useState } from 'react';
import { ChevronDown } from './Icons';

export const FaqAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does your ₦35,000 consultation fee policy work?',
      a: 'We operate with total transparency. Your initial 45-minute comprehensive clinical diagnostic (₦35,000) includes full 3D intraoral digital scans, photographic analysis, and a personalized treatment roadmap designed by our specialist dentists or aesthetic physicians. If you proceed with or schedule your treatment on the same day, 100% of the ₦35,000 fee is credited directly toward your procedure cost.'
    },
    {
      q: 'How do you guarantee 100% pain-free digital dentistry?',
      a: 'We have eliminated traditional syringe needles and gag-inducing physical impressions. We use computerized Wand micro-delivery anesthesia that numbs individual teeth without numbness spreading to your entire face or tongue. For anxious patients or extensive smile redesigns, we also offer certified anesthesiologist-supervised IV twilight sedation.'
    },
    {
      q: 'How long do your Master-Crafted Porcelain Veneers last?',
      a: 'Our E-max and feldspathic ceramic veneers are precision-milled and hand-layered in partnership with top German master ceramic laboratories. With routine clinical maintenance and hygiene visits, our veneers boast a proven clinical longevity of 15 to 20+ years. They are completely impervious to stains from coffee, red wine, or rich West African spices.'
    },
    {
      q: 'Are your laser and Morpheus8 RF treatments safe for darker, melanin-rich skin?',
      a: 'Yes, absolutely. Melanin safety is one of AURA Atelier’s founding clinical specialties. Traditional high-street lasers often trigger severe Post-Inflammatory Hyperpigmentation (PIH) on Fitzpatrick IV–VI skin tones. Our physicians utilize dual-pulsed non-ablative fractional lasers with epidermal cooling and customized pulse durations specifically engineered for dark skin, as well as Teflon-insulated Morpheus8 microneedling pins that deliver energy strictly beneath the pigment layer.'
    },
    {
      q: 'How do your discrete VIP suites and private back-door access work?',
      a: 'We cater extensively to public figures, senior executives, and diplomatic personnel. When booking with our VIP Concierge, simply indicate your preference for discretion. You will receive private subterranean parking instructions and direct elevator access to our sealed VIP recovery suite, allowing you to enter and depart via a private exit without passing through the public reception lounge.'
    },
    {
      q: 'What payment options and foreign currencies do you accept?',
      a: 'We accept direct Nigerian Naira electronic bank transfers, major Nigerian debit cards, and corporate accounts. For international visitors and diaspora returnees, we also accept major international debit/credit cards (Visa, Mastercard, Amex) and direct foreign currency settlements in US Dollars ($) and British Pounds (£).'
    }
  ];

  return (
    <section id="faq" className="py-24 border-b border-[#EAE3D6] bg-[#F5F1E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#EAE3D6]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#997C52] font-semibold">
              Institutional Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111215] tracking-[-0.015em]">
              Clinical Disclosures &amp; FAQ
            </h2>
          </div>

          <p className="text-xs text-[#5A564F] max-w-sm">
            Everything you need to know regarding clinical safety, discrete protocols, and financial policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#EAE3D6] bg-white shadow-[0_2px_12px_-2px_rgba(35,30,20,0.03)] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#111215] font-normal">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-md bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center shrink-0 text-[#75726B] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#111215] bg-[#F5F1E9]' : ''}`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-[#484642] text-xs sm:text-sm font-light leading-relaxed border-t border-[#EAE3D6] animate-fadeIn">
                    {faq.a}
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
