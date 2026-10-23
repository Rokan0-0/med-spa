import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Layers 
} from './Icons';

interface QuizState {
  step: number;
  focus: 'smile' | 'skin' | 'glow' | null;
  outcome: string | null;
  timeline: 'express' | 'multi' | null;
}

interface AssessmentQuizProps {
  onBookProtocol: (protocolTitle: string, investmentTier: string) => void;
}

export const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({ onBookProtocol }) => {
  const [quiz, setQuiz] = useState<QuizState>({
    step: 1,
    focus: null,
    outcome: null,
    timeline: null,
  });

  const focusOptions = [
    {
      id: 'smile',
      number: '01',
      title: 'Smile Architecture & Aesthetics',
      subtitle: 'Master Porcelain Veneers, Diode Laser Whitening, Clear Aligners, Edge Sculpting'
    },
    {
      id: 'skin',
      number: '02',
      title: 'Advanced Skin Renewal & Tightening',
      subtitle: 'Morpheus8 Subdermal RF, Melanin-Safe Resurfacing, Hydrafacial MD, Precision Peels'
    },
    {
      id: 'glow',
      number: '03',
      title: 'Full Body Longevity & Facial Harmonics',
      subtitle: 'Physician-Formulated IV Nutrients, Sculpted Dermal Fillers, Anti-Wrinkle Therapy'
    }
  ];

  const getOutcomeOptions = () => {
    switch (quiz.focus) {
      case 'smile':
        return [
          {
            id: 'smile-event',
            title: 'Instant Brightening & Edge Refinement (Event-Ready)',
            desc: 'Dual-wave laser teeth whitening and artisan composite contouring with zero downtime.',
            tierBadge: 'Express Radiance'
          },
          {
            id: 'smile-veneers',
            title: 'Long-Term Structural Alignment & Master Porcelain Veneers',
            desc: 'Permanent transformation of shade, symmetry, length, and diastema closure with German ceramic artistry.',
            tierBadge: 'Permanent Architecture'
          },
          {
            id: 'smile-aligners',
            title: 'Discreet Orthodontic Straightening (Clear Aligners)',
            desc: 'Clear 3D predictive aligners to correct crowding and rotation without brackets.',
            tierBadge: 'Structural Alignment'
          }
        ];
      case 'skin':
        return [
          {
            id: 'skin-hydra',
            title: 'Immediate Glass-Skin Dewiness & Deep Pore Clarification',
            desc: 'Hydrafacial MD® Deluxe with custom lymphatic drainage and antioxidant boosters.',
            tierBadge: 'Cellular Hydration'
          },
          {
            id: 'skin-morpheus',
            title: 'Deep Collagen Remodeling & Jawline Definition',
            desc: 'Morpheus8 subdermal radiofrequency microneedling at 4mm depths for laxity and scar refinement.',
            tierBadge: 'Subdermal Sculpting'
          },
          {
            id: 'skin-pih',
            title: 'Melanin-Safe Pigmentation & Melasma Clearance',
            desc: 'Fractional laser specifically calibrated for dark skin tones to safely dissolve hyperpigmentation.',
            tierBadge: 'Pigment Restoration'
          }
        ];
      case 'glow':
      default:
        return [
          {
            id: 'glow-iv',
            title: 'High-Dose Cellular Radiance & Jet-Lag Reset',
            desc: 'Intravenous Glutathione, Vitamin C, and NAD+ for systemic vitality and skin brightening.',
            tierBadge: 'Cellular Vitality'
          },
          {
            id: 'glow-harmonic',
            title: 'Natural Facial Contouring & Expression Softening',
            desc: 'Micro-cannula hyaluronic acid dermal sculpting and precision neuromodulators for rested elegance.',
            tierBadge: 'Facial Balance'
          },
          {
            id: 'glow-synergy',
            title: 'The Total AURA Synergy Protocol (Face + Body + Smile)',
            desc: 'Comprehensive multi-disciplinary package combining dental laser polish, Hydrafacial, and IV infusion.',
            tierBadge: 'Complete Atelier Protocol'
          }
        ];
    }
  };

  const timelineOptions = [
    {
      id: 'express',
      number: '01',
      title: 'VIP Express (1–2 Rapid Turnaround Sessions)',
      desc: 'Optimized for international visitors, executives, and clients with imminent calendar commitments.'
    },
    {
      id: 'multi',
      number: '02',
      title: 'Curated Multi-Session Progressive Plan (3–6 Weeks)',
      desc: 'Phased structural remodeling ensuring biological adaptation, stability, and maximum longevity.'
    }
  ];

  const getDiagnosticResult = () => {
    if (quiz.focus === 'smile') {
      if (quiz.outcome === 'smile-veneers') {
        return {
          title: 'The Royal Arch Porcelain Makeover Protocol',
          tier: 'Tier III: Masterpiece Smile Architecture',
          investment: '₦1,500,000 – ₦3,800,000',
          timeline: quiz.timeline === 'express' ? 'Expedited 7-Day Digital Turnaround' : '2–3 Bespoke Appointments (2 Weeks)',
          summary: 'A definitive, high-translucency smile reconstruction utilizing 3D Digital Smile Design, minimal enamel preparation, and handcrafted German E-Max ceramics.',
          included: [
            '3D Intraoral digital scan & live smile mock-up preview',
            'Full arch custom ceramic veneers (6 to 10 units)',
            'Laser gingival contouring for gum symmetry',
            'Post-treatment enamel protective nightguard'
          ]
        };
      } else if (quiz.outcome === 'smile-aligners') {
        return {
          title: 'AURA Clear Orthodontic Alignment Protocol',
          tier: 'Tier II: Structural Precision Alignment',
          investment: '₦850,000 – ₦1,400,000',
          timeline: '4–8 Months (Clear Removable Trays)',
          summary: 'Discreet invisible alignment engineered with 3D biomechanical software. Smoothly straightens crowded or rotated teeth without metal hardware.',
          included: [
            'Digital cephalometric & intraoral 3D scans',
            'Complete medical-grade thermoplastic aligner series',
            'Virtual bi-weekly progress monitoring',
            'Complimentary laser teeth whitening upon completion'
          ]
        };
      } else {
        return {
          title: 'The Red-Carpet Smile Glow & Edge Contour',
          tier: 'Tier I: Rapid Luminescence Protocol',
          investment: '₦180,000 – ₦380,000',
          timeline: 'Single Same-Day VIP Session (60–90 Mins)',
          summary: 'In-office dual-wave diode laser whitening paired with micro-composite edge bonding to repair incisal chips and brighten enamel by 8–10 shades.',
          included: [
            'Professional ultrasonic scaling and airflow polish',
            'Dual-wave laser whitening with zero-sensitivity barrier',
            'Artisan composite smoothing of jagged edges',
            'Home enamel remineralization booster kit'
          ]
        };
      }
    } else if (quiz.focus === 'skin') {
      if (quiz.outcome === 'skin-morpheus') {
        return {
          title: 'The Subdermal Jawline & Collagen Remodeling Protocol',
          tier: 'Tier II: Advanced Regenerative Tightening',
          investment: '₦380,000 – ₦750,000',
          timeline: quiz.timeline === 'express' ? 'Single High-Intensity Session' : 'Course of 2–3 Sessions (6 Weeks)',
          summary: 'FDA-cleared Morpheus8 radiofrequency microneedling at 4mm depths, targeting submental laxity, deep acne scarring, and lower-face definition.',
          included: [
            'Medical-grade compounded topical anesthesia (zero discomfort)',
            'Full face & submental fractional radiofrequency pass',
            'Exosome stem-cell soothing serum infusion',
            'Medical LED photo-modulation to accelerate healing'
          ]
        };
      } else if (quiz.outcome === 'skin-pih') {
        return {
          title: 'Melanin-Safe Pigment Eraser & Clarifying Protocol',
          tier: 'Tier II: Specialized Dermatological Protocol',
          investment: '₦260,000 – ₦520,000',
          timeline: '2–3 Sessions spaced 3 weeks apart',
          summary: 'Calibrated non-ablative fractional laser engineered specifically for African skin phototypes to dissolve post-acne marks and hormonal melasma safely.',
          included: [
            'Polarized UV digital pigment mapping',
            'Melanin-safe gentle fractional laser treatment',
            'BioRePeel biphasic clarifying enzyme application',
            'Post-procedure antioxidant barrier recovery regimen'
          ]
        };
      } else {
        return {
          title: 'The Hydrafacial MD® Deluxe Glass-Skin Protocol',
          tier: 'Tier I: Cellular Dermal Hydration',
          investment: '₦120,000 – ₦220,000',
          timeline: 'Single VIP Session (60 Mins) / Pre-Event',
          summary: 'Patented 4-step vortex extraction and antioxidant saturation that clears congestion and delivers immediate camera-ready luminosity with zero downtime.',
          included: [
            'Vortex deep lymphatic drainage & sebum extraction',
            'Gentle non-irritating glycolic fruit acid exfoliation',
            'Targeted peptide & hyaluronic acid infusion ampoule',
            'Collagen-stimulating red light LED therapy canopy'
          ]
        };
      }
    } else {
      return {
        title: 'The Executive Radiance & Longevity Protocol',
        tier: 'Tier I – II: Cellular Vitality & Harmonization',
        investment: '₦140,000 – ₦450,000',
        timeline: quiz.timeline === 'express' ? 'Single Same-Day Lounge Session' : 'Monthly Curated Wellness Membership',
        summary: 'Synergistic combination of physician-formulated intravenous Glutathione + Vitamin C cocktails with micro-cannula hyaluronic acid facial refinement.',
        included: [
          'Pre-infusion biomarker & medical health assessment',
          'High-potency Royal Radiance Glutathione IV drip in private VIP pod',
          'Precision anti-wrinkle or lip hydration contouring',
          'Herbal antioxidant tea service and recovery lounge access'
        ]
      };
    }
  };

  const diagnostic = getDiagnosticResult();

  return (
    <section id="quiz" className="py-24 border-b border-[#EAE3D6] bg-[#F5F1E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#997C52] font-semibold">
            Interactive Diagnostic Protocol
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111215] tracking-[-0.015em]">
            Smile &amp; Skin Assessment
          </h2>
          <p className="text-xs sm:text-sm text-[#5A564F] max-w-xl mx-auto">
            Answer 3 strategic diagnostic questions to formulate your tailored treatment trajectory and estimated investment tier.
          </p>

          {/* Progress Steps */}
          {quiz.step <= 3 && (
            <div className="flex items-center justify-center space-x-6 pt-6 font-mono text-[11px]">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center space-x-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold transition-colors ${
                      quiz.step === stepNum
                        ? 'bg-[#111215] text-white'
                        : quiz.step > stepNum
                        ? 'bg-[#EAE3D6] text-[#997C52]'
                        : 'bg-[#E2DDD3] text-[#75726B]'
                    }`}
                  >
                    {stepNum}
                  </span>
                  <span className={`${quiz.step === stepNum ? 'text-[#111215] font-semibold' : 'text-[#75726B]'} hidden sm:inline`}>
                    {stepNum === 1 ? 'Focus' : stepNum === 2 ? 'Outcome' : 'Timeline'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Diagnostic Studio Container */}
        <div className="rounded-2xl border border-[#EAE3D6] bg-white p-6 sm:p-10 shadow-[0_4px_24px_-4px_rgba(35,30,20,0.05)]">
          
          {/* STEP 1 */}
          {quiz.step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#997C52] font-semibold">Question 01 of 03</span>
                <h3 className="font-serif text-2xl text-[#111215] font-normal mt-1">
                  Select Your Primary Aesthetic Focus
                </h3>
              </div>

              <div className="space-y-3">
                {focusOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuiz((prev) => ({ ...prev, focus: opt.id as any, outcome: null }))}
                    className={`w-full text-left p-5 rounded-xl border transition-all flex items-start space-x-4 ${
                      quiz.focus === opt.id
                        ? 'border-[#997C52] bg-[#FAF6EE] shadow-sm'
                        : 'border-[#EAE3D6] hover:border-[#D6CCC0] bg-white'
                    }`}
                  >
                    <span className="font-mono text-xs text-[#997C52] font-bold shrink-0 mt-0.5">
                      {opt.number}
                    </span>
                    <div className="flex-1">
                      <div className="text-[#111215] font-medium text-base">{opt.title}</div>
                      <div className="text-xs text-[#5A564F] mt-1">{opt.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  disabled={!quiz.focus}
                  onClick={() => setQuiz((prev) => ({ ...prev, step: 2 }))}
                  className={`px-6 py-3 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors flex items-center space-x-2 ${
                    quiz.focus
                      ? 'bg-[#111215] hover:bg-[#2A2825] text-white shadow-sm'
                      : 'bg-[#EAE3D6] text-[#9E9B93] cursor-not-allowed'
                  }`}
                >
                  <span>Continue to Outcome</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {quiz.step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#997C52] font-semibold">Question 02 of 03</span>
                <h3 className="font-serif text-2xl text-[#111215] font-normal mt-1">
                  Select Your Target Outcome
                </h3>
              </div>

              <div className="space-y-3">
                {getOutcomeOptions().map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuiz((prev) => ({ ...prev, outcome: opt.id }))}
                    className={`w-full text-left p-5 rounded-xl border transition-all ${
                      quiz.outcome === opt.id
                        ? 'border-[#997C52] bg-[#FAF6EE] shadow-sm'
                        : 'border-[#EAE3D6] hover:border-[#D6CCC0] bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#111215] font-medium text-base">{opt.title}</span>
                      <span className="text-[10px] font-mono text-[#997C52] font-semibold uppercase tracking-wider px-2 py-0.5 bg-white rounded border border-[#EAE3D6]">
                        {opt.tierBadge}
                      </span>
                    </div>
                    <div className="text-xs text-[#5A564F] leading-relaxed">{opt.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setQuiz((prev) => ({ ...prev, step: 1 }))}
                  className="px-4 py-2.5 rounded-lg text-xs text-[#5A564F] hover:text-[#111215] bg-white border border-[#EAE3D6] flex items-center space-x-1.5 shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  disabled={!quiz.outcome}
                  onClick={() => setQuiz((prev) => ({ ...prev, step: 3 }))}
                  className={`px-6 py-3 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors flex items-center space-x-2 ${
                    quiz.outcome
                      ? 'bg-[#111215] hover:bg-[#2A2825] text-white shadow-sm'
                      : 'bg-[#EAE3D6] text-[#9E9B93] cursor-not-allowed'
                  }`}
                >
                  <span>Continue to Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {quiz.step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#997C52] font-semibold">Question 03 of 03</span>
                <h3 className="font-serif text-2xl text-[#111215] font-normal mt-1">
                  Select Your Preferred Timeline
                </h3>
              </div>

              <div className="space-y-3">
                {timelineOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuiz((prev) => ({ ...prev, timeline: opt.id as any }))}
                    className={`w-full text-left p-5 rounded-xl border transition-all flex items-start space-x-4 ${
                      quiz.timeline === opt.id
                        ? 'border-[#997C52] bg-[#FAF6EE] shadow-sm'
                        : 'border-[#EAE3D6] hover:border-[#D6CCC0] bg-white'
                    }`}
                  >
                    <span className="font-mono text-xs text-[#997C52] font-bold shrink-0 mt-0.5">
                      {opt.number}
                    </span>
                    <div className="flex-1">
                      <div className="text-[#111215] font-medium text-base">{opt.title}</div>
                      <div className="text-xs text-[#5A564F] mt-1 leading-relaxed">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setQuiz((prev) => ({ ...prev, step: 2 }))}
                  className="px-4 py-2.5 rounded-lg text-xs text-[#5A564F] hover:text-[#111215] bg-white border border-[#EAE3D6] flex items-center space-x-1.5 shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  disabled={!quiz.timeline}
                  onClick={() => setQuiz((prev) => ({ ...prev, step: 4 }))}
                  className={`px-7 py-3 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors flex items-center space-x-2 ${
                    quiz.timeline
                      ? 'bg-[#111215] hover:bg-[#2A2825] text-white shadow-sm'
                      : 'bg-[#EAE3D6] text-[#9E9B93] cursor-not-allowed'
                  }`}
                >
                  <span>Synthesize Prescription</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Prescription Result */}
          {quiz.step === 4 && (
            <div className="space-y-6">
              <div className="border-b border-[#EAE3D6] pb-6 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#997C52] font-semibold">
                  {diagnostic.tier}
                </div>
                <h3 className="font-serif text-3xl text-[#111215] font-normal">
                  {diagnostic.title}
                </h3>
                <p className="text-xs text-[#484642] leading-relaxed">
                  {diagnostic.summary}
                </p>
              </div>

              {/* Financial & Timeline Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
                  <div className="text-[10px] font-mono uppercase text-[#75726B] font-medium">
                    Estimated Investment Tier
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#111215] mt-1">
                    {diagnostic.investment}
                  </div>
                  <div className="text-[11px] text-[#6E6A63] mt-1">
                    ₦35,000 consultation credited 100% on treatment day
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
                  <div className="text-[10px] font-mono uppercase text-[#75726B] font-medium">
                    Clinical Timeline
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#997C52] mt-1">
                    {diagnostic.timeline}
                  </div>
                  <div className="text-[11px] text-[#6E6A63] mt-1">
                    Available in VI, Lekki, Ikeja GRA &amp; Maitama
                  </div>
                </div>
              </div>

              {/* Included Milestones */}
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#997C52] font-semibold">
                  Included Clinical Milestones
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#484642]">
                  {diagnostic.included.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-[#997C52] mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onBookProtocol(diagnostic.title, diagnostic.tier)}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#E6D4B8]" />
                  <span>Reserve This Protocol via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQuiz({ step: 1, focus: null, outcome: null, timeline: null })}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-white hover:bg-[#FAF8F5] text-xs text-[#5A564F] hover:text-[#111215] border border-[#EAE3D6] flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Diagnostic</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
