import { HeroPage } from "./components/Home/Home";
import { TrustedHomeCareServices } from "./components/trusted-home-care-services/trusted";
import { WhoWeHelp } from "./components/who-we-help";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroPage />
      <WhoWeHelp />
      <TrustedHomeCareServices />
    </div>
  );
}
