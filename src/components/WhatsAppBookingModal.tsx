import React, { useState, useEffect } from 'react';
import { CLINIC_SUITES, type ClinicSuite } from '../data/suites';
import { 
  X, 
  MessageSquare, 
  ShieldCheck, 
  Lock, 
  Check, 
  Copy, 
  ExternalLink 
} from './Icons';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
  initialBranch?: string;
  initialProtocol?: string;
}

export const WhatsAppBookingModal: React.FC<WhatsAppBookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
  initialBranch,
  initialProtocol
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('Victoria Island');
  const [selectedTreatment, setSelectedTreatment] = useState(
    initialProtocol || initialTreatment || 'Master-Crafted Porcelain Veneers'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning VIP (10:00 AM – 1:00 PM)');
  const [requestPrivateBackDoor, setRequestPrivateBackDoor] = useState(true);
  const [specialNotes, setSpecialNotes] = useState('');
  const [copiedTicket, setCopiedTicket] = useState(false);

  useEffect(() => {
    if (initialTreatment) setSelectedTreatment(initialTreatment);
    else if (initialProtocol) setSelectedTreatment(initialProtocol);
    if (initialBranch) setSelectedBranch(initialBranch);
  }, [initialTreatment, initialProtocol, initialBranch]);

  if (!isOpen) return null;

  const currentSuite =
    CLINIC_SUITES.find((s) => s.neighborhood.toLowerCase().includes(selectedBranch.toLowerCase())) ||
    CLINIC_SUITES[0];

  const formattedTicket = `✨ *AURA ATELIER — VIP CONCIERGE BOOKING TICKET* ✨
----------------------------------------
*Patient Name:* ${fullName || '[Guest Client]'}
*Contact:* ${phoneNumber || '[Via WhatsApp]'}
*Preferred Clinic Suite:* ${selectedBranch} Suite (${currentSuite.city})
*Service / Diagnostic Protocol:* ${selectedTreatment}
*Requested Date:* ${preferredDate || 'Earliest Available VIP Slot'}
*Time Slot:* ${preferredSlot}
*Discretion Protocol:* ${requestPrivateBackDoor ? 'YES — Request Discrete Back-Door Access & Private Suite' : 'Standard Suite Arrival'}
${specialNotes ? `*Special Notes / Aesthetic Goals:* ${specialNotes}` : ''}
----------------------------------------
*Consultation Fee Policy:* ₦35,000 VIP Consultation (Credited 100% toward treatment on the day)
*Concierge Reference:* AURA-VIP-${Math.floor(1000 + Math.random() * 9000)}`;

  const encodedWhatsAppUrl = `https://wa.me/${currentSuite.whatsappNumber}?text=${encodeURIComponent(
    formattedTicket
  )}`;

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(encodedWhatsAppUrl, '_blank');
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(formattedTicket);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111215]/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-[#EAE3D6] rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-[#EAE3D6] flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#997C52] font-semibold">
              Direct Concierge Link
            </span>
            <h3 className="font-serif text-2xl text-[#111215] font-normal">
              VIP WhatsApp Consultation Booking
            </h3>
            <p className="text-xs text-[#5A564F]">
              Encodes your clinical preferences into a discreet booking ticket for instant confirmation.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[#75726B] hover:text-[#111215] p-1.5 rounded-lg hover:bg-[#FAF8F5] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleLaunchWhatsApp} className="p-6 sm:p-7 space-y-5 text-left">
          
          {/* Policy Banner */}
          <div className="p-3.5 rounded-xl bg-[#FAF6EE] border border-[#EAE3D6] text-xs text-[#484642] flex items-start space-x-3">
            <ShieldCheck className="w-4 h-4 text-[#997C52] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-[#111215]">Transparent Clinical Fee:</strong> ₦35,000 comprehensive consultation fee is <strong className="text-[#997C52]">100% credited toward treatment</strong> on the same day.
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#6E6A63] mb-1.5">
                Full Name / Alias:
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Dr. / Chief / Mrs. Adebayo"
                className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#997C52] rounded-lg text-xs text-[#111215] placeholder-[#9E9B93] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#6E6A63] mb-1.5">
                WhatsApp Phone Number:
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+234 803 000 0000"
                className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#997C52] rounded-lg text-xs text-[#111215] placeholder-[#9E9B93] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Preferred Suite */}
          <div>
            <label className="block text-xs font-mono text-[#6E6A63] mb-1.5 flex items-center justify-between">
              <span>Preferred Clinic Suite:</span>
              <span className="text-[#997C52] font-mono text-[10px] font-semibold">Targeting {currentSuite.neighborhood} Concierge</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Victoria Island', 'Lekki Phase 1', 'Ikeja GRA', 'Maitama, Abuja'].map((branch) => (
                <button
                  type="button"
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                    selectedBranch.toLowerCase().includes(branch.toLowerCase().split(',')[0].trim())
                      ? 'bg-[#111215] text-white font-medium border-[#111215] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#6E6A63] border-[#EAE3D6] hover:text-[#111215]'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>

          {/* Treatment or Protocol */}
          <div>
            <label className="block text-xs font-mono text-[#6E6A63] mb-1.5">
              Selected Procedure or Prescribed Protocol:
            </label>
            <select
              value={selectedTreatment}
              onChange={(e) => setSelectedTreatment(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#997C52] rounded-lg text-xs text-[#111215] focus:outline-none transition-colors"
            >
              <optgroup label="Cosmetic Dentistry">
                <option value="Master-Crafted Porcelain Veneers">Master-Crafted Porcelain Veneers (₦1.5M+)</option>
                <option value="Dual-Wave Laser Teeth Whitening">Dual-Wave Laser Teeth Whitening (₦180,000)</option>
                <option value="Artisan Composite Edge Bonding">Artisan Composite Edge Bonding (₦220,000)</option>
                <option value="AURA Clear Invisible Orthodontics">AURA Clear Invisible Orthodontics (₦850k – ₦1.4M)</option>
              </optgroup>
              <optgroup label="Skin & Laser">
                <option value="Morpheus8 RF & Deep Microneedling">Morpheus8 RF &amp; Deep Microneedling (₦380k – ₦650k)</option>
                <option value="Hydrafacial MD® Deluxe Elite">Hydrafacial MD® Deluxe Elite (₦120,000)</option>
                <option value="Melanin-Safe Fractional Laser Resurfacing">Melanin-Safe Laser Resurfacing (₦260,000)</option>
                <option value="Bespoke Bio-Repeel & Precision Peels">Bio-Repeel &amp; Precision Peels (₦95,000)</option>
              </optgroup>
              <optgroup label="Wellness & Injectables">
                <option value="Custom IV Nutrient & Glutathione Cocktails">Custom IV Nutrient Cocktails (₦80,000 – ₦150k)</option>
                <option value="Sculpted Dermal Fillers (Lips, Jaw, Cheeks)">Sculpted Dermal Fillers (₦280k – ₦450k)</option>
                <option value="Precision Neuromodulators & Anti-Wrinkle">Precision Neuromodulators &amp; Anti-Wrinkle (₦140k – ₦260k)</option>
              </optgroup>
              <optgroup label="Prescribed Protocols">
                <option value="The Royal Arch Porcelain Makeover Protocol">The Royal Arch Porcelain Makeover Protocol</option>
                <option value="The Subdermal Jawline & Collagen Protocol">The Subdermal Jawline &amp; Collagen Protocol</option>
                <option value="The Red-Carpet Smile Glow & Edge Contour">The Red-Carpet Smile Glow &amp; Edge Contour</option>
                <option value="The Executive Radiance & Longevity Protocol">The Executive Radiance &amp; Longevity Protocol</option>
              </optgroup>
            </select>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#6E6A63] mb-1.5">
                Preferred Consultation Date:
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#997C52] rounded-lg text-xs text-[#111215] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#6E6A63] mb-1.5">
                Preferred Time Slot:
              </label>
              <select
                value={preferredSlot}
                onChange={(e) => setPreferredSlot(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#997C52] rounded-lg text-xs text-[#111215] focus:outline-none transition-colors"
              >
                <option value="Morning VIP (10:00 AM – 1:00 PM)">Morning VIP (10:00 AM – 1:00 PM)</option>
                <option value="Afternoon Session (1:00 PM – 4:30 PM)">Afternoon Session (1:00 PM – 4:30 PM)</option>
                <option value="Evening Private Lounge (5:00 PM – 7:30 PM)">Evening Private Lounge (5:00 PM – 7:30 PM)</option>
              </select>
            </div>
          </div>

          {/* Discretion Checkbox */}
          <div className="flex items-center space-x-3 p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE3D6]">
            <input
              type="checkbox"
              id="backdoor-checkbox"
              checked={requestPrivateBackDoor}
              onChange={(e) => setRequestPrivateBackDoor(e.target.checked)}
              className="w-4 h-4 rounded text-[#997C52] focus:ring-[#997C52] bg-white border-[#EAE3D6]"
            />
            <label htmlFor="backdoor-checkbox" className="text-xs text-[#2C2A26] cursor-pointer flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#997C52]" />
              <span className="font-medium">Request Discreet Back-Door VIP Arrival &amp; Departure</span>
            </label>
          </div>

          {/* Ticket Preview */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-[#75726B] font-mono">
              <span>Discreet WhatsApp Ticket Preview:</span>
              <button
                type="button"
                onClick={handleCopyTicket}
                className="text-[#997C52] hover:text-[#111215] flex items-center gap-1 focus:outline-none font-semibold"
              >
                {copiedTicket ? (
                  <>
                    <Check className="w-3 h-3 text-[#2E7D5C]" />
                    <span className="text-[#2E7D5C] font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 bg-[#FAF8F5] border border-[#EAE3D6] rounded-lg text-[10px] text-[#484642] font-mono whitespace-pre-wrap max-h-24 overflow-y-auto leading-relaxed">
              {formattedTicket}
            </pre>
          </div>

          {/* Launch Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-lg bg-[#111215] hover:bg-[#2A2825] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#E6D4B8]" />
              <span>Launch WhatsApp VIP Concierge</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </button>
            <div className="text-center text-[10px] text-[#75726B] mt-2 font-mono">
              Direct response from our Medical Liaison during operating hours.
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
