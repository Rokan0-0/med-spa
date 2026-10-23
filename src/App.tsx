import React, { useState } from 'react';
import { CLINIC_SUITES, type ClinicSuite } from './data/suites';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TreatmentMenu } from './components/TreatmentMenu';
import { AssessmentQuiz } from './components/AssessmentQuiz';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { TrustCredibility } from './components/TrustCredibility';
import { ClinicSuites } from './components/ClinicSuites';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { StickyConciergeBar } from './components/StickyConciergeBar';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';

export const App: React.FC = () => {
  const [selectedSuite, setSelectedSuite] = useState<ClinicSuite>(CLINIC_SUITES[0]);

  // WhatsApp Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefillTreatment, setPrefillTreatment] = useState<string | undefined>();
  const [prefillBranch, setPrefillBranch] = useState<string | undefined>();
  const [prefillProtocol, setPrefillProtocol] = useState<string | undefined>();

  const handleOpenBooking = (treatment?: string, branch?: string, protocol?: string) => {
    setPrefillTreatment(treatment);
    setPrefillBranch(branch || selectedSuite.neighborhood);
    setPrefillProtocol(protocol);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPrefillTreatment(undefined);
    setPrefillProtocol(undefined);
  };

  const handleScrollToQuiz = () => {
    const quizElem = document.getElementById('quiz');
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookFromQuiz = (protocolTitle: string, investmentTier: string) => {
    handleOpenBooking(undefined, selectedSuite.neighborhood, `${protocolTitle} (${investmentTier})`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111215] flex flex-col antialiased selection:bg-[#B5986D] selection:text-white overflow-x-hidden w-full">
      
      {/* 1. Header Navigation */}
      <Navbar
        selectedSuite={selectedSuite}
        onSelectSuite={setSelectedSuite}
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={handleScrollToQuiz}
      />

      {/* Main Content */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* 2. Architectural Hero Section */}
        <Hero
          selectedSuite={selectedSuite}
          onOpenBooking={() => handleOpenBooking()}
          onOpenQuiz={handleScrollToQuiz}
        />

        {/* 3. Interactive Treatment Ledger with Category Filtering */}
        <TreatmentMenu
          onSelectTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
        />

        {/* 4. Interactive 'Smile & Skin Goal Assessment Quiz' (3-Step Diagnostic) */}
        <AssessmentQuiz
          onBookProtocol={handleBookFromQuiz}
        />

        {/* 5. Interactive 'Before & After' Clinical Showcase with Split Slider */}
        <BeforeAfterShowcase
          onSelectCaseForConsult={(caseTitle) => handleOpenBooking(caseTitle)}
        />

        {/* 6. Institutional Standards Charter ('Why Choose Us') */}
        <TrustCredibility />

        {/* 7. Clinic Suites Dossier (Victoria Island, Lekki, Ikeja GRA, Maitama Abuja) */}
        <ClinicSuites
          selectedSuite={selectedSuite}
          onSelectSuite={setSelectedSuite}
          onBookAtSuite={(neighborhood) => handleOpenBooking(undefined, neighborhood)}
        />

        {/* 8. Clinical Disclosures & FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* 9. Editorial Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* 10. Minimalist Sticky VIP Concierge Bar */}
      <StickyConciergeBar
        selectedSuite={selectedSuite}
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={handleScrollToQuiz}
      />

      {/* 11. 1-Click WhatsApp VIP Concierge Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialTreatment={prefillTreatment}
        initialBranch={prefillBranch}
        initialProtocol={prefillProtocol}
      />

    </div>
  );
};

export default App;
