import BlogHighlights from "../components/BlogHighlights";
import CommunityVoice from "../components/CommunityVoice";
import Hackathon from "../components/Hackathon";
import HeroDetails from "../components/HeroDetails";
import HomeStats from "../components/HomeStats";
import JsonLd from "../components/JsonLd";
import Partners from "../components/Partners";
import Seo from "../components/Seo";
import Layout from "../layout";
import { breadcrumbSchema } from "../lib/schema";

export default function Home() {
	return (
		<Layout>
			<Seo
				title="Web3 Afrika — Africa's Leading Web3 Builder Community"
				description="Web3 Afrika is a pan-African community empowering the next wave of Web3 builders through education, hackathons, mentorship, and events. Founded by Idris Olubisi."
				path="/"
			/>
			<JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }])]} />
			<HeroDetails />
			<HomeStats />
			<Hackathon />
			<Partners />
			<CommunityVoice />
			<BlogHighlights partial />
		</Layout>
	);
}
