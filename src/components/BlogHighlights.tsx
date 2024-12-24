import ArticleImage1 from "../assets/blog/blog-1.png";
import ArticleImage2 from "../assets/blog/blog-2.png";
import ArticleImage3 from "../assets/blog/blog-3.png";
import ArticleHero from "../assets/blog/blog-hero.png";
import { cn } from "../util";

const sampleArticles = [
	{
		id: 1,
		title: "Demystifying Consensus Mechanism: A comprehensive Guide",
		content:
			"The consensus mechanism is a crucial concept in the world of blockchain technology, and it can vary widely depending on the specific use case or application.",
		author: "Franklin Ohaegbulam",
		date: "March 15, 2024",
		authorAvatar: "/api/placeholder/32/32",
		imageUrl: ArticleImage1,
		link: "/articles/future-web-development",
		bg: "bg-[#000000]",
	},
	{
		id: 2,
		title: "Why is the Hard Drive for Blockchain and Internet Known as IPFS",
		content:
			"Explore the hackathons, bounties, and events that have empowered African innovators, fostered connections, and driven Web 3 education and growth worldwide.",
		author: "Vinyl Davyl",
		date: "March 18, 2024",
		authorAvatar: "/api/placeholder/32/32",
		imageUrl: ArticleImage2,
		link: "/articles/mastering-tailwind",
		bg: "bg-[#EC9120]",
	},
	{
		id: 3,
		title: "A dive into the world of decentralized finance in Africa.",
		content:
			"Learn the essential best practices for building large-scale React applications that are maintainable, performant, and easy to test.",
		author: "Franklin Ohaegbulam",
		date: "March 20, 2024",
		authorAvatar: "/api/placeholder/32/32",
		imageUrl: ArticleImage3,
		link: "/articles/scalable-react-apps",
		bg: "bg-[#0C6E5F]",
	},
];

const BlogHighlights = () => {
	return (
		<section className="container mx-auto py-8">
			<div className="mb-12 grid grid-cols-9 gap-8 bg-[#FAFAFA] p-6 dark:bg-black">
				<div className="col-span-4">
					<div className="flex h-full flex-col justify-center overflow-hidden rounded-lg">
						<div className="px-6 pt-8">
							<span className="text-sm text-gray-500">December 20, 2024</span>
						</div>

						<div className="space-y-6 p-6">
							<h2 className="line-clamp-2 text-3xl text-gray-800 dark:text-white">
								Getting started with Solidity, All you need to know
							</h2>

							<p className="line-clamp-3 text-lg text-[#9E9E9E]">
								Solidity is a high-level programming language that is
								specifically used to write smart contracts on the Ethereum
								blockchain.
							</p>

							<div>
								<span className="text-sm text-[#9E9E9E]">Vinyl Davyl</span>
							</div>

							<button className="inline-block rounded-full border border-[#0C6E5F] px-8 py-3 text-[#0C6E5F] transition-colors duration-200 hover:bg-[#0C6E5F] hover:text-white">
								Read Article
							</button>
						</div>
					</div>
				</div>

				<div className="col-span-5 flex items-center justify-center bg-[#FCE4E5] py-12">
					<img
						src={ArticleHero}
						alt="Featured"
						className="max-w-[60%] rounded-lg object-cover"
					/>
				</div>
			</div>
			<div className="grid gap-6 md:grid-cols-3">
				{sampleArticles.map(article => (
					<div
						key={article.id}
						className="overflow-hidden rounded-lg bg-[#FAFAFA] dark:bg-black"
					>
						<div className={cn("relative w-full p-8 pl-10", article.bg)}>
							<img
								src={article.imageUrl}
								alt={article.title}
								className="h-full w-full object-cover"
							/>
						</div>

						<div className="px-6 pt-4">
							<span className="text-sm text-gray-500">{article.date}</span>
						</div>

						<div className="p-6">
							<h2 className="mb-3 line-clamp-2 text-[#5D5D5D] dark:text-white md:text-2xl">
								{article.title}
							</h2>

							<p className="mb-4 line-clamp-3 text-xs text-[#9E9E9E] md:text-sm">
								{article.content}
							</p>

							<div className="mb-4">
								<span className="text-sm text-[#5D5D5D]">{article.author}</span>
							</div>

							<a
								href={article.link}
								className="inline-block rounded-full border border-[#0C6E5F] px-6 py-2 text-sm text-[#0C6E5F] shadow-primary-green transition-colors duration-200 hover:bg-[#0C6E5F] hover:text-white"
							>
								Read Article
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BlogHighlights;
