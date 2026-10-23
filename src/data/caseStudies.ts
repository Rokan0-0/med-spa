export interface CaseStudy {
  id: string;
  title: string;
  category: 'dentistry' | 'skin';
  categoryLabel: string;
  tagline: string;
  beforeImage: string;
  afterImage: string;
  patientProfile: string;
  concern: string;
  clinicalSolution: string;
  sessions: string;
  location: string;
  clinician: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-veneers',
    title: 'Full Arch Ceramic Porcelain Makeover (10 Units)',
    category: 'dentistry',
    categoryLabel: 'Cosmetic Dentistry',
    tagline: 'Diastema Closure, Incisal Lengthening & Shade BL1 Translucent Polish',
    // High-resolution before & after dental makeover imagery
    beforeImage: 'https://images.unsplash.com/photo-1593054988226-0e31102919d7?auto=format&fit=crop&w=800&q=80',
    afterImage: '/images/smile-veneers.jpg',
    patientProfile: 'Executive Managing Director, 34 yrs (Victoria Island Suite)',
    concern: 'Midline gap (diastema), asymmetric worn incisal edges from bruxism, and deep chronological yellowing.',
    clinicalSolution: 'Digital Smile Design (DSD) preview, 10 custom E-Max ultra-thin ceramic veneers, laser gingivectomy for gum contour symmetry.',
    sessions: '2 Sessions (Trial mock-up + Final hand-layered bonding)',
    location: 'Victoria Island Penthouse Clinic',
    clinician: 'Dr. Adebayo-Vanderbilt (BDS, MSc London - UK Board Certified)'
  },
  {
    id: 'case-whitening',
    title: 'Dual-Wave In-Office Laser Teeth Whitening',
    category: 'dentistry',
    categoryLabel: 'Cosmetic Dentistry',
    tagline: 'Lifted 9 Shades from A3.5 to B1 in a Single 45-Minute VIP Session',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    afterImage: '/images/smile-veneers.jpg',
    patientProfile: 'Media Host & Bride-to-Be, 28 yrs (Lekki Phase 1 Suite)',
    concern: 'Heavy staining from espresso and dark tea, prior sensitivity from over-the-counter strips.',
    clinicalSolution: 'Gingival dam isolation, cold diode laser dual-wave activation with neutral-pH desensitizing formula and nano-hydroxyapatite seal.',
    sessions: '1 Single 45-Minute Express Session',
    location: 'Lekki Admiralty Way Suite',
    clinician: 'Dr. Evelyn Peters (DDS - European Certified Aesthetic Dentist)'
  },
  {
    id: 'case-skin-laser',
    title: 'Melanin-Safe Skin Resurfacing & PIH Clearance',
    category: 'skin',
    categoryLabel: 'Skin & Laser',
    tagline: 'Reversal of Post-Inflammatory Hyperpigmentation & Textural Reset',
    beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    afterImage: '/images/morpheus-jawline.jpg',
    patientProfile: 'Entrepreneur, 31 yrs (Maitama Abuja Suite)',
    concern: 'Stubborn post-inflammatory hyperpigmentation (PIH) and uneven cheek texture on Fitzpatrick Type V skin.',
    clinicalSolution: 'Dual-pulsed fractional laser calibrated for melanin preservation, coupled with BioRePeel and tranexamic acid infusion.',
    sessions: '3 Sessions spaced 4 weeks apart',
    location: 'Maitama Luxury Wellness Suite, Abuja',
    clinician: 'Dr. Tariq Bello (FWACS, Aesthetic Dermatology Specialist)'
  },
  {
    id: 'case-morpheus8',
    title: 'Morpheus8 Subdermal Jawline & Submental Sculpting',
    category: 'skin',
    categoryLabel: 'Skin & Laser',
    tagline: 'High-Definition Non-Surgical Jawline Contouring & Pore Tightening',
    beforeImage: 'https://images.unsplash.com/photo-1512290900672-1f02e0a09e3b?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    patientProfile: 'Senior Partner, 42 yrs (Ikeja GRA Suite)',
    concern: 'Early lower face skin laxity, softening of the jawline contour, and enlarged t-zone pores.',
    clinicalSolution: 'Subdermal fractional radiofrequency microneedling at 3.5mm–4mm depths with exosome post-treatment healing matrix.',
    sessions: '2 Sessions (Results captured at 8 weeks post-treatment)',
    location: 'Isaac John Private Sanctuary, Ikeja GRA',
    clinician: 'Dr. Claire St. John (MRCP Aesthetic Physician - London Trained)'
  }
];

export const MEDICAL_DISCLAIMER_TEXT =
  'Visible Results from Professional Aesthetic Care. Every client is different — individual outcomes depend on baseline skin/dental condition, lifestyle, and personalized clinician assessment.';
