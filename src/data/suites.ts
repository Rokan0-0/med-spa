export interface ClinicSuite {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  tagline: string;
  address: string;
  googleMapsUrl: string;
  phone: string;
  whatsappNumber: string; // e.g. international format without + for wa.link
  displayPhone: string;
  hours: string;
  features: string[];
  image: string;
  hasPrivateBackEntrance: boolean;
  valetParking: boolean;
}

export const CLINIC_SUITES: ClinicSuite[] = [
  {
    id: 'victoria-island',
    name: 'Victoria Island Penthouse Clinic',
    city: 'Lagos',
    neighborhood: 'Victoria Island',
    tagline: 'Flagship Aesthetic Sanctuary & Digital Smile Studio',
    address: 'Penthouse Level, 14A Adeola Odeku / Karimu Kotun, Victoria Island, Lagos',
    googleMapsUrl: 'https://maps.google.com/?q=Victoria+Island+Lagos',
    phone: '+2348039000101',
    whatsappNumber: '2348039000101',
    displayPhone: '+234 (0) 803 900 0101',
    hours: 'Mon – Sat: 9:00 AM – 7:30 PM | Sun: VIP By Prior Arrangement',
    features: [
      'Private elevator & discrete back-door security access',
      'Panoramic Atlantic ocean & Lagos lagoon views',
      'Full 3D digital dental lab & CEREC milling on-site',
      'Champagne & organic botanical recovery lounge'
    ],
    image: '/images/hero-suite.jpg',
    hasPrivateBackEntrance: true,
    valetParking: true
  },
  {
    id: 'lekki-phase-1',
    name: 'Lekki Admiralty Aesthetic Pavilion',
    city: 'Lagos',
    neighborhood: 'Lekki Phase 1',
    tagline: 'Coastal Modernism & Advanced Laser Pavilion',
    address: '22A Admiralty Way (Waterfront Enclave), Lekki Phase 1, Lagos',
    googleMapsUrl: 'https://maps.google.com/?q=Admiralty+Way+Lekki+Phase+1',
    phone: '+2348039000102',
    whatsappNumber: '2348039000102',
    displayPhone: '+234 (0) 803 900 0102',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM | Sun: 12:00 PM – 5:00 PM',
    features: [
      'Morpheus8 & Hydrafacial MD dual treatment suites',
      'Secure VIP underground reserved parking',
      'Dedicated IV nutrient infusion sensory pod',
      'High-speed clinical sedation dentistry suites'
    ],
    image: '/images/iv-lounge.jpg',
    hasPrivateBackEntrance: true,
    valetParking: true
  },
  {
    id: 'ikeja-gra',
    name: 'Ikeja GRA Private Dental Sanctuary',
    city: 'Lagos',
    neighborhood: 'Ikeja GRA',
    tagline: 'Colonial Elegance & German Sterilization Excellence',
    address: '8 Isaac John Street, Private Gated Court, Ikeja GRA, Lagos',
    googleMapsUrl: 'https://maps.google.com/?q=Isaac+John+Street+Ikeja+GRA',
    phone: '+2348039000103',
    whatsappNumber: '2348039000103',
    displayPhone: '+234 (0) 803 900 0103',
    hours: 'Mon – Sat: 8:30 AM – 6:30 PM | Sun: Closed',
    features: [
      'Gated residential serenity 12 mins from MMA Airport',
      'Discrete VIP recovery suites with private exit gate',
      'German Melag Class-B sterile hospital cleanroom',
      'Pediatric & adult sedation cosmetic dentistry'
    ],
    image: '/images/hero-suite.jpg',
    hasPrivateBackEntrance: true,
    valetParking: true
  },
  {
    id: 'maitama-abuja',
    name: 'Maitama Luxury Wellness Suite',
    city: 'Abuja (FCT)',
    neighborhood: 'Maitama',
    tagline: 'Diplomatic Enclave & Ultra-Discreet Med-Spa',
    address: '42 Gana Street (Adjoining Diplomatic Boulevard), Maitama, Abuja',
    googleMapsUrl: 'https://maps.google.com/?q=Gana+Street+Maitama+Abuja',
    phone: '+2348039000104',
    whatsappNumber: '2348039000104',
    displayPhone: '+234 (0) 803 900 0104',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM | Sun: By VIP Protocol Request',
    features: [
      'Full diplomatic-grade privacy & shielded perimeter',
      'Dedicated presidential recovery suite with private garden',
      'Bio-identical IV wellness & Longevity medicine bar',
      'Ceramic laboratory direct-courier courier network'
    ],
    image: '/images/abuja-suite.jpg',
    hasPrivateBackEntrance: true,
    valetParking: true
  }
];
