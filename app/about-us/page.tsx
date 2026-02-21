import HeroPage from "../components/Home/Home";
import { HowItWorks } from "../components/how-it-works/howItWorks";
import { HowToSupport } from "../components/how-to-support/HowToSupport";
import { TrustedHomeCareServices } from "../components/trusted-home-care-services/trusted";
import { WhoWeHelp } from "../components/who-we-help";

const About = () => {
  return (
    <div>
      <HeroPage />
      <WhoWeHelp />
      <TrustedHomeCareServices />
      <HowItWorks />
      <HowToSupport />
    </div>
  );
};

export default About;
