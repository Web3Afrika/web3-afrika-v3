import BlogHighlights from "../components/BlogHighlights";
import CommunityVoice from "../components/CommunityVoice";
import DonateSection from "../components/Donate";
import Hackathon from "../components/Hackathon";
import HeroDetails from "../components/HeroDetails";
import HomeStats from "../components/HomeStats";
import Partners from "../components/Partners";
import Layout from "../layout";

export default function Home() {
	return (
		<Layout>
			<HeroDetails />
			<HomeStats />
			<Hackathon />
			<Partners />
			<CommunityVoice />
			<BlogHighlights />
			<DonateSection />
		</Layout>
	);
}
