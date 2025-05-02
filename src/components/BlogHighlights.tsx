import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn, formatDate } from "../util"; // Assuming cn and formatDate are in util.ts
import { AnimatedText } from "./animated-text"; // Assuming AnimatedText component
import { FadeIn, FadeInStagger } from "./FadeIn"; // Assuming FadeIn/FadeInStagger components
import { ChevronRight } from "./icons"; // Assuming ChevronRight icon component

interface RSSItem {
	id: string;
	title: string;
	link: string;
	date: string;
	content: string;
	author?: string;
	imageUrl?: string;
}

const BlogHighlights = ({
	noDescription,
	partial,
}: {
	noDescription?: boolean;
	partial?: boolean;
}) => {
	const [articles, setArticles] = useState<RSSItem[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchRSS() {
			setIsLoading(true);
			setError(null);

			const apiUrl = "https://redesign-review.vercel.app/api/rss";

			try {
				const response = await fetch(apiUrl, {
					headers: {
						Accept: "application/json",
					},
					signal: AbortSignal.timeout(15000),
				});

				if (!response.ok) {
					let errorData;
					try {
						errorData = await response.json();
					} catch {
						errorData = { message: response.statusText };
					}
					throw new Error(
						`API route error! Status: ${response.status}. Message: ${errorData.message || "Unknown API error"}`,
					);
				}

				const articles = await response.json();

				if (articles.length === 0) {
					setError("No articles found in the RSS feed.");
				} else {
					setArticles(articles);
				}
			} catch (error) {
				console.error(`Error fetching or parsing RSS via API route: ${error}`); // Keep error log for fetch failures
				setError(
					error instanceof Error ? error.message : "Failed to fetch RSS feed",
				);
			} finally {
				setIsLoading(false);
			}
		}

		fetchRSS();
	}, []);

	// Show loading state
	if (isLoading) {
		return (
			<section className="container mx-auto w-11/12 py-8">
				{!noDescription && (
					<div className="mb-8 text-start">
						<AnimatedText
							text={["Insights and Updates"]}
							once
							className="text-4xl font-semibold text-[#292929] dark:text-white"
						/>
						<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E]">
							Loading the latest news and updates...
						</p>
					</div>
				)}
				<div className="grid h-64 place-items-center">
					<div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0C6E5F] border-t-transparent"></div>
				</div>
			</section>
		);
	}

	// Show error state
	if (error) {
		return (
			<section className="container mx-auto w-11/12 py-8">
				{!noDescription && (
					<div className="mb-8 text-start">
						<AnimatedText
							text={["Insights and Updates"]}
							once
							className="text-4xl font-semibold text-[#292929] dark:text-white"
						/>
						<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E]">
							Stay informed with the latest news, trends, and stories shaping
							Web3 innovation across Africa and the diaspora.
						</p>
						<Link
							to="/blog"
							className="mt-4 inline-flex items-center gap-2 text-[#141414] transition-colors hover:text-[#0C6E5F] dark:text-white dark:hover:text-[#469F92]"
						>
							<span>Enter Blog</span>
							<ChevronRight className="h-5 w-5" />
						</Link>
					</div>
				)}
				<div className="space-y-4 rounded-lg bg-red-50 p-6 py-16 text-center dark:bg-red-900/20">
					<p className="text-lg text-red-600 dark:text-red-400">
						Unable to load articles
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						<span>Please try again later or </span>{" "}
						<a
							href="https://blog.web3afrika.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							check the blog
						</a>{" "}
						<span>directly.</span>
					</p>
				</div>
			</section>
		);
	}

	// Show empty state
	if (!articles.length) {
		return (
			<section className="w-11/11 container mx-auto py-8">
				{!noDescription && (
					<div className="mb-8 text-start">
						<AnimatedText
							text={["Insights and Updates"]}
							once
							className="text-4xl font-semibold text-[#292929] dark:text-white"
						/>
						<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E]">
							Stay informed with the latest news, trends, and stories shaping
							Web3 innovation across Africa and the diaspora.
						</p>
						<Link
							to="/blog"
							className="mt-4 inline-flex items-center gap-2 text-[#141414] transition-colors hover:text-[#0C6E5F] dark:text-white dark:hover:text-[#469F92]"
						>
							<span>Enter Blog</span>
							<ChevronRight className="h-5 w-5" />{" "}
						</Link>
					</div>
				)}
				<div className="rounded-lg bg-[#FAFAFA] p-6 text-center dark:bg-[#121212]">
					<p className="text-[#9E9E9E]">No recent articles found.</p>
					<Link
						to="/blog" // Link to the full blog page
						className="mt-4 inline-block text-[#0C6E5F] hover:underline"
					>
						Visit the Blog
					</Link>
				</div>
			</section>
		);
	}

	// --- Render Articles ---
	const displayArticles = partial ? articles.slice(0, 5) : articles;
	const featuredArticle =
		displayArticles.length > 0 ? displayArticles[0] : null;
	const otherArticles = displayArticles.slice(1);

	return (
		<section className="container mx-auto w-11/12 py-8">
			{!noDescription && (
				<div className="mb-8 text-start">
					<AnimatedText
						text={["Insights and Updates"]}
						once
						className="text-4xl font-semibold text-[#292929] dark:text-white"
					/>
					<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E]">
						Stay informed with the latest news, trends, and stories shaping Web3
						innovation across Africa and the diaspora.
					</p>
					<Link
						to="/blog"
						className="mt-4 inline-flex items-center gap-2 text-[#141414] transition-colors hover:text-[#0C6E5F] dark:text-white dark:hover:text-[#469F92]"
					>
						<span>Enter Blog</span>
						<ChevronRight className="h-5 w-5" />
					</Link>
				</div>
			)}

			<FadeInStagger className="grid gap-6 md:gap-8">
				{featuredArticle && (
					<FadeIn className="grid grid-cols-1 gap-6 rounded-lg bg-[#FAFAFA] p-6 dark:bg-[#121212] md:col-span-3 md:grid-cols-9 md:gap-8 md:p-8">
						<div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg md:col-span-5 md:aspect-auto">
							<img
								src={
									featuredArticle.imageUrl ||
									"https://via.placeholder.com/600x400?text=Web3+Afrika"
								}
								alt={featuredArticle.title}
								className="h-full w-full object-cover"
								loading="lazy"
								onError={e => {
									const target = e.target as HTMLImageElement;
									target.src =
										"https://via.placeholder.com/600x400?text=Image+Error";
									target.alt =
										"Error loading image for " + featuredArticle.title;
								}}
							/>
						</div>
						<div className="flex flex-col justify-center md:col-span-4">
							<span className="mb-2 text-sm text-[#9E9E9E] md:text-base">
								{formatDate(featuredArticle.date)}
							</span>
							<h2 className="mb-3 text-xl font-semibold leading-tight text-[#5D5D5D] dark:text-white md:text-2xl">
								<a
									href={featuredArticle.link}
									target="_blank"
									rel="noopener noreferrer"
									className="transition-colors hover:text-[#0C6E5F] dark:hover:text-[#469F92]"
								>
									{featuredArticle.title}
								</a>
							</h2>
							<p className="mb-4 line-clamp-3 text-sm text-[#9E9E9E] md:text-base">
								{featuredArticle.content}
							</p>
							<span className="mb-5 block text-xs text-[#5D5D5D] dark:text-gray-400 md:text-sm">
								By {featuredArticle.author}
							</span>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={featuredArticle.link}
								className="inline-block w-fit rounded-full border border-[#0C6E5F] px-5 py-2 text-sm font-medium text-[#0C6E5F] shadow-md shadow-[#469F92]/20 transition-all duration-200 hover:bg-[#0C6E5F] hover:text-white hover:shadow-lg active:scale-95"
							>
								Read Article
							</a>
						</div>
					</FadeIn>
				)}
				{otherArticles.length > 0 && (
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-3 md:grid-cols-1 lg:grid-cols-2">
						{otherArticles.map(article => (
							<FadeIn
								key={article.id}
								className="flex flex-col overflow-hidden rounded-lg bg-[#FAFAFA] p-6 dark:bg-[#121212] md:p-8"
							>
								<div
									className={cn(
										"relative mb-4 box-border block aspect-video w-full overflow-hidden rounded-lg",
									)}
								>
									<img
										src={
											article.imageUrl ||
											"https://via.placeholder.com/400x225?text=Web3+Afrika"
										}
										alt={article.title}
										className="absolute left-0 top-0 h-full w-full object-cover"
										loading="lazy"
										onError={e => {
											const target = e.target as HTMLImageElement;
											target.src =
												"https://via.placeholder.com/400x225?text=Image+Error";
											target.alt = "Error loading image for " + article.title;
										}}
									/>
								</div>

								<span className="mb-2 text-sm text-[#9E9E9E]">
									{formatDate(article.date)}
								</span>

								<div className="flex flex-grow flex-col">
									<div className="flex-grow">
										<h2 className="mb-2 text-lg font-semibold leading-tight text-[#5D5D5D] dark:text-white md:text-xl">
											<a
												href={article.link}
												target="_blank"
												rel="noopener noreferrer"
												className="line-clamp-3 transition-colors hover:text-[#0C6E5F] dark:hover:text-[#469F92]"
											>
												{article.title}
											</a>
										</h2>
										<p className="mb-3 line-clamp-2 text-xs text-[#9E9E9E] md:text-sm">
											{article.content}
										</p>
									</div>

									<span className="mb-4 mt-auto block text-xs text-[#5D5D5D] dark:text-gray-400 md:text-sm">
										By {article.author}
									</span>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={article.link}
										className="mt-auto inline-block w-fit rounded-full border border-[#0C6E5F] px-5 py-2 text-sm font-medium text-[#0C6E5F] shadow-md shadow-[#469F92]/20 transition-all duration-200 hover:bg-[#0C6E5F] hover:text-white hover:shadow-lg active:scale-95"
									>
										Read Article
									</a>
								</div>
							</FadeIn>
						))}
					</div>
				)}
			</FadeInStagger>
		</section>
	);
};

export default BlogHighlights;
