import AboutOverview from "../components/AboutOverview";
import CommunitySection from "../components/Community";
import Faq from "../components/Faq";
import FounderImpact from "../components/FounderImpact";
import JsonLd from "../components/JsonLd";
import PurposeSection from "../components/PurposeSection";
import Seo from "../components/Seo";
import Stats from "../components/Stats";
import TeamSection from "../components/Team";
import { faqs } from "../data/faqs";
import Layout from "../layout";
import { breadcrumbSchema, faqSchema } from "../lib/schema";

export default function About() {
	return (
		<Layout>
			<Seo
				title="About Web3 Afrika & Founder Idris Olubisi"
				description="Meet the team behind Web3 Afrika, led by founder Idris Olubisi. Learn our mission to make Web3 education open, practical, and inclusive across Africa."
				path="/about"
			/>
			<JsonLd
				data={[
					faqSchema(faqs),
					breadcrumbSchema([
						{ name: "Home", path: "/" },
						{ name: "About", path: "/about" },
					]),
				]}
			/>
			<AboutOverview />
			<Stats />
			<FounderImpact />
			<PurposeSection />
			<TeamSection />
			<Faq />
			<CommunitySection />
		</Layout>
	);
}
