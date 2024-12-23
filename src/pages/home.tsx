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
			<section className="container mx-auto px-6 py-2">
				<div className="text-start">
					<h2 className="text-4xl text-[#292929] dark:text-white">
						Insights and Updates
					</h2>
					<p className="max-w-4xl text-[#666666] dark:text-gray-300">
						Stay informed with the latest news, trends, and stories shaping Web
						3 innovation across Africa and the diaspora
					</p>
					<p className="mt-4 text-[#141414] dark:text-white">Enter Blog &gt;</p>
				</div>
			</section>
			<BlogHighlights />
			<DonateSection />
		</Layout>
	);
}
