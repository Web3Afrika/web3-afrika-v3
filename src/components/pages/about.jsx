import Navbar from "../Navbar";
import AboutOverview from "../AboutOverview";
import Stats from "../Stats";
import PurposeSection from "../PurposeSection";
import TeamSection from "../Team";
import CommunitySection from "../Community";
import DonateSection from "../Donate";
import Footer from "../Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <AboutOverview />
      <Stats />
      <PurposeSection />
      <TeamSection />
      <CommunitySection />
      <DonateSection />
      <Footer />
    </>
  );
}
