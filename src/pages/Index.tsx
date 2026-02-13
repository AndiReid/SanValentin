import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ProposalSection from "@/components/ProposalSection";
import TicketReward from "@/components/TicketReward";

const Index = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="min-h-screen bg-background">
        <TicketReward />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BentoGrid />
      <ProposalSection onAccept={() => setAccepted(true)} />
    </div>
  );
};

export default Index;
