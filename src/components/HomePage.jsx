import Navbar from "./Navbar";
import HeroDetails from "./HeroDetails";
import HomeStats from "./HomeStats";
import Hackathon from "./Hackathon";
import Partners from "./Partners";
import CommunityVoice from "./CommunityVoice";
import BlogHighlights from "./BlogHighlights";
import DonateSection from "./Donate";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroDetails />
      <HomeStats />
      <Hackathon />
      <Partners />
      <CommunityVoice />
      <section className="container mx-auto px-6 py-2 font-archivo">
        <div className="text-start">
          <h2 className="text-4xl text-[#292929] dark:text-white">Insights and Updates</h2>
          <p className="text-[#666666] dark:text-gray-300 max-w-4xl">
            Stay informed with the latest news, trends, and stories shaping Web
            3 innovation across Africa and the diaspora
          </p>
          <p className="text-[#141414] dark:text-white mt-4">Enter Blog &gt;</p>
        </div>
      </section>
      <BlogHighlights />
      <DonateSection />
      <Footer />
    </>
  );
}