import { CallToAction } from "./components/call-to-action/CallToAction";
import { HeroPage } from "./components/Home/Home";
import { HowItWorks } from "./components/how-it-works/howItWorks";
import { HowToSupport } from "./components/how-to-support/HowToSupport";
import { JoinOurCareTeam } from "./components/join-our-care/JoinOurCare";
import { TrustedHomeCareServices } from "./components/trusted-home-care-services/trusted";
import { WhoWeHelp } from "./components/who-we-help";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroPage />
      <WhoWeHelp />
      <TrustedHomeCareServices />
      <HowItWorks />
      <CallToAction />
      <JoinOurCareTeam />
      <HowToSupport />
    </div>
  );
}
