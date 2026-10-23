export interface Treatment {
  id: string;
  name: string;
  category: 'dentistry' | 'skin' | 'injectables';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  priceNaira: string;
  rawPrice: number;
  priceNote: string;
  duration: string;
  downtime: string;
  idealFor: string[];
  protocolSteps: string[];
  image: string;
  featured?: boolean;
}

export const TREATMENTS: Treatment[] = [
  // Cosmetic Dentistry
  {
    id: 'porcelain-veneers',
    name: 'Master-Crafted Porcelain Veneers',
    category: 'dentistry',
    categoryLabel: 'Cosmetic Dentistry',
    shortDescription: 'Ultra-thin, custom-sculpted E-max & feldspathic ceramic shells that completely redesign your smile architecture with lifelike translucency.',
    fullDescription: 'Our premier smile transformation service. Using 3D intraoral digital scans and German precision laboratory ceramists, each veneer is micro-engineered to match your facial symmetry, lip dynamics, and desired shade (from natural BL1 to subtle ivory glow). Zero staining, permanent luster, and 15–20+ year longevity.',
    priceNaira: '₦1,500,000+',
    rawPrice: 1500000,
    priceNote: 'Per arch / Custom smile design packages available',
    duration: '2 – 3 Bespoke Sessions',
    downtime: 'Zero downtime (Mild sensitivity 24–48h)',
    idealFor: [
      'Gaps, diastemas & crooked teeth',
      'Stubborn intrinsic tetracycline discoloration',
      'Chipped, worn, or uneven enamel',
      'High-profile red carpet & public appearance confidence'
    ],
    protocolSteps: [
      '3D Digital Smile Design (DSD) & intraoral optical scanning',
      'Trial smile preview (Mock-up placed directly in mouth for review)',
      'Minimal-prep micro-enamel refinement under 100% pain-free anesthesia',
      'Hand-layered ceramic bonding & occlusion calibration'
    ],
    image: '/images/smile-veneers.jpg',
    featured: true
  },
  {
    id: 'laser-whitening',
    name: 'Dual-Wave Laser Teeth Whitening',
    category: 'dentistry',
    categoryLabel: 'Cosmetic Dentistry',
    shortDescription: 'Medical-grade diode laser whitening delivering up to 8–10 shades of brilliant lift in a single 45-minute VIP suite session without enamel dehydration.',
    fullDescription: 'Utilizing specialized light wavelengths paired with pH-neutral, desensitizing peroxide formulation. Unlike high-street whitening, our German dental laser protects enamel integrity while eliminating coffee, wine, and deep chronological stains with zero post-treatment zingers.',
    priceNaira: '₦180,000',
    rawPrice: 180000,
    priceNote: 'Includes post-treatment enamel remineralization & home care kit',
    duration: '45 – 60 Minutes',
    downtime: 'Zero downtime (White-diet recommended 48h)',
    idealFor: [
      'Immediate glow for weddings, galas, and key photo shoots',
      'Stubborn tobacco, coffee, and spice staining',
      'Enamel-safe, instant shade boost with minimal sensitivity'
    ],
    protocolSteps: [
      'Gingival barrier protection application',
      'Application of medical-grade bioactive gel',
      '3 cycles of 12-minute dual-wave laser activation',
      'Fluoride & nano-hydroxyapatite gloss polish'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'composite-bonding',
    name: 'Artisan Composite Edge Bonding',
    category: 'dentistry',
    categoryLabel: 'Cosmetic Dentistry',
    shortDescription: 'Same-day artistic chairside enamel sculpting to repair chips, lengthen worn edges, and close gaps without drilling natural enamel.',
    fullDescription: 'A reversible, ultra-conservative smile enhancement performed directly by our certified cosmetic dentists in a single afternoon. Multi-shaded nanofilled composite resin is blended seamlessly to your natural tooth shade, cured, and diamond-polished for a glassy, natural finish.',
    priceNaira: '₦220,000',
    rawPrice: 220000,
    priceNote: 'Starting per tooth / Multi-tooth packages available',
    duration: '60 – 90 Minutes',
    downtime: 'Instant recovery / Eat immediately',
    idealFor: [
      'Minor gap closure and edge irregularities',
      'Chipped front teeth from sports or accidents',
      'Single-session budget-friendly smile transformation'
    ],
    protocolSteps: [
      'Color-mapping under polarized clinical lighting',
      'Gentle surface conditioning (no enamel removal)',
      'Artisanal freehand layering of multi-translucent resins',
      'High-gloss diamond polishing'
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'invisible-aligners',
    name: 'AURA Clear Invisible Orthodontics',
    category: 'dentistry',
    categoryLabel: 'Cosmetic Dentistry',
    shortDescription: 'Discreet, removable custom clear aligners powered by 3D predictive movement simulation for rapid, invisible tooth alignment.',
    fullDescription: 'Align your teeth without metal brackets. We map out your entire treatment trajectory digitally from day one so you can see your final smile before starting. Includes bi-weekly virtual progress monitoring and complimentary teeth whitening at treatment completion.',
    priceNaira: '₦850,000 – ₦1,400,000',
    rawPrice: 850000,
    priceNote: 'Full case including retainers & final laser whitening',
    duration: '4 – 9 Months (Worn 22h daily)',
    downtime: 'Zero downtime',
    idealFor: [
      'Crowding, overlapping, and rotated incisors',
      'Relapse after adolescent braces',
      'Discreet executive straightening without lifestyle disruption'
    ],
    protocolSteps: [
      'Digital 3D iTero intraoral scan & cephalometric analysis',
      'Custom 3D movement simulation plan',
      'Delivery of full medical-grade thermoplastic aligner series',
      'Final clear retention trays & whitening finishing'
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // Skin & Laser
  {
    id: 'morpheus8-microneedling',
    name: 'Morpheus8 RF & Deep Microneedling',
    category: 'skin',
    categoryLabel: 'Skin & Laser',
    shortDescription: 'FDA-cleared subdermal adipose remodeling device combining microneedling with radiofrequency to tighten jawlines, erase acne scars, and stimulate massive collagen.',
    fullDescription: 'The gold standard in non-surgical skin tightening. By delivering fractional radiofrequency energy up to 4mm deep into the dermis and subdermal fat layers, Morpheus8 remodels collagen fibers, sculpts the jawline and neck, and drastically refines pores and scars on all Fitzpatrick skin types (melanin-safe).',
    priceNaira: '₦380,000 – ₦650,000',
    rawPrice: 380000,
    priceNote: 'Per session / Full face, neck & submental contouring',
    duration: '75 Minutes',
    downtime: '24 – 48 Hours mild erythema & micro-crusts',
    idealFor: [
      'Jawline jowls, submental fullness & skin laxity',
      'Deep pitted acne scars & stubborn texture',
      'Enlarged pores, fine lines & collagen depletion'
    ],
    protocolSteps: [
      'Medical-grade compounded topical numbing (45 mins)',
      'Subdermal RF fractional energy delivery at targeted depths',
      'Cooling stem-cell serum infusion & peptide barrier mask',
      'Red light LED photo-modulation therapy'
    ],
    image: '/images/morpheus-jawline.jpg',
    featured: true
  },
  {
    id: 'hydrafacial-md',
    name: 'Hydrafacial MD® Deluxe Elite',
    category: 'skin',
    categoryLabel: 'Skin & Laser',
    shortDescription: 'Patented 4-step Vortex-Fusion technology that cleanses, extracts sebum, gently exfoliates, and deeply saturates the skin with antioxidants and hyaluronic peptides.',
    fullDescription: 'The ultimate medical red-carpet facial. Removes congested blackheads, dead corneocytes, and pollution buildup while simultaneously infusing targeted booster serums (Britenol for pigmentation or Murad Retinol for fine lines). Includes neck, décolleté, and medical LED therapy.',
    priceNaira: '₦120,000',
    rawPrice: 120000,
    priceNote: 'Includes custom booster ampoule & medical LED canopy',
    duration: '60 Minutes',
    downtime: 'Zero downtime (Instant camera-ready dewiness)',
    idealFor: [
      'Pre-event instant glass-skin radiance',
      'Congested pores, blackheads, and dull complexions',
      'Dehydrated, climate-stressed skin'
    ],
    protocolSteps: [
      'Vortex lymphatic drainage & cleansing',
      'Gentle glycolic/salicylic peel without irritation',
      'Painless vortex suction extraction of impurities',
      'Targeted booster infusion & blue/red LED light therapy'
    ],
    image: '/images/hydrafacial-glow.jpg',
    featured: true
  },
  {
    id: 'laser-resurfacing',
    name: 'Melanin-Safe Fractional Laser Resurfacing',
    category: 'skin',
    categoryLabel: 'Skin & Laser',
    shortDescription: 'Advanced non-ablative laser specifically tuned to safely treat hyperpigmentation, melasma, and texture on darker skin tones without PIH risk.',
    fullDescription: 'Engineered specifically for African and melanin-rich skin types. Traditional lasers carry high risks of hyperpigmentation (PIH); our dual-pulsed gentle fractional platform creates microscopic thermal zones that trigger rapid cellular renewal while preserving epidermal pigment integrity.',
    priceNaira: '₦260,000',
    rawPrice: 260000,
    priceNote: 'Includes soothing post-laser botanical calming pack',
    duration: '60 Minutes',
    downtime: '24 Hours light flushed appearance',
    idealFor: [
      'Post-acne dark marks & hyperpigmentation',
      'Melasma & uneven sun-induced tone',
      'Rough epidermal texture and stubborn tone disparity'
    ],
    protocolSteps: [
      'Digital skin analysis under polarized UV diagnostics',
      'Epidermal cooling application',
      'Fractional laser delivery calibrated to skin phototype',
      'Centella asiatica soothing infusion & mineral SPF 50 shield'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'medical-chemical-peels',
    name: 'Bespoke Bio-Repeel & Precision Peels',
    category: 'skin',
    categoryLabel: 'Skin & Laser',
    shortDescription: 'Biphasic TCA peel with zero shedding that bypasses the outer skin to stimulate dermal collagen and clarify blemish-prone complexions.',
    fullDescription: 'Forget painful peeling that forces you into hiding. Our Italian BioRePeelCl3 formulation works from the inside out: accelerating cellular turnover, dissolving acne comedones, and brightening pigmentation with zero visible peeling or downtime.',
    priceNaira: '₦95,000',
    rawPrice: 95000,
    priceNote: 'Course of 3 recommended for deep pigment clearing',
    duration: '45 Minutes',
    downtime: 'Zero to mild flaking (24h)',
    idealFor: [
      'Active breakouts, acne-prone skin & rough texture',
      'Dullness and loss of youthful luminosity',
      'Lunchtime aesthetic refresh with instant glow'
    ],
    protocolSteps: [
      'Deep double foam cleanse and lipid prep',
      'Application of biphasic amino-acid TCA serum',
      'Neutralization & epidermal cooling massage',
      'Hydrating growth factor finishing matrix'
    ],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // Wellness & Injectables
  {
    id: 'iv-nutrient-infusions',
    name: 'Custom IV Nutrient & Glutathione Cocktails',
    category: 'injectables',
    categoryLabel: 'Wellness & Injectables',
    shortDescription: 'Physician-compounded intravenous cocktails: High-dose Glutathione, Vitamin C, Myers Cocktail, and NAD+ for cellular energy and full-body glow.',
    fullDescription: '100% bioavailable nutrition delivered directly into the bloodstream in our private VIP leather recliners. Formulated by our aesthetic doctors for liver detox, cellular brightening, jet lag recovery, and radiant full-body skin luminosity.',
    priceNaira: '₦80,000 – ₦150,000',
    rawPrice: 80000,
    priceNote: 'Menu options: Royal Radiance, Executive Jet-Lag, Slim & Detox',
    duration: '45 Minutes',
    downtime: 'Zero downtime (Immediate vitality boost)',
    idealFor: [
      'Systemic skin brightening & free-radical scavenge',
      'Immune defense and fatigue from demanding travel',
      'Pre-wedding & red-carpet whole-body vitality'
    ],
    protocolSteps: [
      'Pre-infusion vitals & physician wellness check',
      'Custom compounding of pharmaceutical-grade nutrients',
      'Slow micro-infusion in private VIP suite with herbal tea service',
      'Post-infusion B12 booster shot option'
    ],
    image: '/images/iv-lounge.jpg',
    featured: true
  },
  {
    id: 'dermal-fillers',
    name: 'Sculpted Dermal Fillers (Lips, Jaw & Cheeks)',
    category: 'injectables',
    categoryLabel: 'Wellness & Injectables',
    shortDescription: 'European CE-marked hyaluronic acid fillers (Juvederm & Teosyal) administered with micro-cannulas for natural, elegant structural enhancement.',
    fullDescription: 'Architectural facial beautification with an emphasis on natural proportions. Whether enhancing lip hydration and contour, defining the jawline and chin, or restoring mid-face cheek volume, our injectors prioritize refined elegance over exaggerated volume.',
    priceNaira: '₦280,000 – ₦450,000',
    rawPrice: 280000,
    priceNote: 'Per 1.0ml syringe / Premium Juvederm Vycross / Restylane',
    duration: '45 Minutes',
    downtime: 'Mild swelling for 24–48 hours',
    idealFor: [
      'Thinning, dehydrated lips wanting natural fullness',
      'Recessed chin or soft jawline angles',
      'Tear troughs, under-eye hollowing, and smile lines'
    ],
    protocolSteps: [
      '3D facial harmony mapping and golden-ratio analysis',
      'Targeted topical anesthetic numbing',
      'Micro-cannula injection technique (reduces bruising by 90%)',
      'Symmetry check and Arnica post-care application'
    ],
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'anti-wrinkle-therapy',
    name: 'Precision Neuromodulators & Anti-Wrinkle',
    category: 'injectables',
    categoryLabel: 'Wellness & Injectables',
    shortDescription: 'Targeted botulinum toxin therapy for forehead smoothing, crow\'s feet, brow lifts, gummy smile correction, and masseter jaw slimming.',
    fullDescription: 'Our doctors practice the "Aesthetic Restraint" philosophy: smoothing expression lines while preserving full emotional facial expression. Specialized treatments also available for masseter teeth-grinding/slimming and gummy smile reduction.',
    priceNaira: '₦140,000 – ₦260,000',
    rawPrice: 140000,
    priceNote: 'Per area / 3-area package & masseter slimming options',
    duration: '30 Minutes',
    downtime: 'Zero downtime (No heavy exercise for 24h)',
    idealFor: [
      'Forehead horizontal lines & glabella frown 11s',
      'Gummy smile correction (lifts and balances upper lip display)',
      'Jaw clenching (bruxism) & lower face slimming'
    ],
    protocolSteps: [
      'Dynamic muscle movement evaluation',
      'Micro-droplet injection with ultra-fine gauge needle',
      'Post-treatment pressure calming protocol',
      'Complimentary 14-day touch-up review appointment'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];
