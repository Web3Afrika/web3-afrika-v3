import BlogHighlights from "../components/BlogHighlights";
import Layout from "../layout";

export default function App() {
	return (
		<Layout>
			<section className="container mx-auto mt-4 w-11/12 transition-all duration-300 md:mt-40">
				<div className="text-start">
					<h2 className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-3xl md:text-5xl">
						Learning the Decentralized Future One Step at A Time
					</h2>
				</div>
			</section>
			<BlogHighlights minimal />
		</Layout>
	);
}
