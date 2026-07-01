import { AnimatedText } from "../components/animated-text";
import BlogHighlights from "../components/BlogHighlights";
import JsonLd from "../components/JsonLd";
import Seo from "../components/Seo";
import blogFeed from "../data/blog-feed.json";
import Layout from "../layout";
import { blogListSchema, breadcrumbSchema } from "../lib/schema";

export default function Blog() {
	return (
		<Layout>
			<Seo
				title="Web3 Afrika Blog — Web3 & Blockchain Insights for Africa"
				description="Tutorials, guides, and insights on Web3, blockchain, and smart-contract development from the Web3 Afrika community."
				path="/blog"
			/>
			<JsonLd
				data={[
					blogListSchema(blogFeed.items),
					breadcrumbSchema([
						{ name: "Home", path: "/" },
						{ name: "Blog", path: "/blog" },
					]),
				]}
			/>
			<section className="container mx-auto mt-4 w-11/12 transition-all duration-300 md:mt-40">
				<div className="text-start">
					<AnimatedText
						text={["Learning the Decentralized", "Future One Step at A Time"]}
						once
						className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-3xl md:text-5xl"
					/>
					{/* <h2 className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-3xl md:text-5xl">
						Learning the Decentralized Future One Step at A Time
					</h2> */}
				</div>
			</section>
			<BlogHighlights noDescription />
		</Layout>
	);
}
