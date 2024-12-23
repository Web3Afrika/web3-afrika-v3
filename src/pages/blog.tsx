import BlogHighlights from "../components/BlogHighlights";
import DonateSection from "../components/Donate";
import Layout from "../layout";

export default function App() {
	return (
		<Layout>
			<section className="container mx-auto px-6 pt-16">
				<div className="text-start">
					<h2 className="text-4xl text-[#292929] dark:text-white">
						Learning the Decentralized Future One Step at A Time
					</h2>
				</div>
			</section>
			<BlogHighlights />
			<DonateSection />
		</Layout>
	);
}
