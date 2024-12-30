import AboutOverview from "../components/AboutOverview";
import CommunitySection from "../components/Community";
import PurposeSection from "../components/PurposeSection";
import Stats from "../components/Stats";
import TeamSection from "../components/Team";
import Layout from "../layout";

export default function App() {
	return (
		<Layout>
			<AboutOverview />
			<Stats />
			<PurposeSection />
			<TeamSection />
			<CommunitySection />
		</Layout>
	);
}
