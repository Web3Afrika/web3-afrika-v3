import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn, formatDate } from "../util";
import { AnimatedText } from "./animated-text";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { ChevronRight } from "./icons";

interface RSSItem {
	id: string;
	title: string;
	link: string;
	date: string;
	content: string;
	author?: string;
	imageUrl?: string;
}

// Helper function to parse RSS feed using string manipulation
// This is more reliable across browsers than DOMParser for complex XML
const parseRssFeed = (xmlString: string): RSSItem[] => {
	try {
		// Function to extract content between tags
		const extractContent = (xml: string, tag: string): string => {
			const regex = new RegExp(`<${tag}[^>]*>(.*?)<\\/${tag}>`, "is");
			const match = xml.match(regex);
			return match ? match[1].trim() : "";
		};

		// Function to extract CDATA content
		const extractCDATA = (content: string): string => {
			if (content.includes("<![CDATA[")) {
				return content.replace("<![CDATA[", "").replace("]]>", "").trim();
			}
			return content.trim();
		};

		// Function to extract HTML content
		const extractHTML = (html: string): string => {
			// Basic approach to strip HTML tags
			return html
				.replace(/<[^>]*>/g, " ")
				.replace(/\s+/g, " ")
				.trim();
		};

		// Function to extract image URL from HTML content
		const extractImageUrl = (html: string): string => {
			const imgRegex = /<img[^>]+src="([^">]+)"/i;
			const match = html.match(imgRegex);
			return match ? match[1] : "";
		};

		// Find all <item> tags
		const itemRegex = /<item>([\s\S]*?)<\/item>/g;
		const items: RSSItem[] = [];
		let match;

		while ((match = itemRegex.exec(xmlString)) !== null) {
			const itemContent = match[1];

			// Extract title
			const titleRaw = extractContent(itemContent, "title");
			const title = extractCDATA(titleRaw);

			// Extract link and guid
			const link = extractContent(itemContent, "link");
			const guid = extractContent(itemContent, "guid");

			// Extract date
			const pubDate = extractContent(itemContent, "pubDate");

			// Extract author (using dc:creator tag)
			const creatorRaw = extractContent(itemContent, "dc:creator");
			const author = extractCDATA(creatorRaw);

			// Extract content
			const contentRaw =
				extractContent(itemContent, "content:encoded") ||
				extractContent(itemContent, "description");
			const contentCDATA = extractCDATA(contentRaw);
			const content = extractHTML(contentCDATA);

			// Extract image URL
			const imageUrl = extractImageUrl(contentCDATA);

			// Create item object
			items.push({
				id: guid || link,
				title,
				link,
				date: pubDate,
				content: content.substring(0, 200) + "...",
				author,
				imageUrl,
			});
		}

		return items;
	} catch (error) {
		console.error("Error parsing RSS feed:", error);
		return [];
	}
};

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
		console.log("Sending fetch request to the RSS feed");
		async function fetchRSS() {
			setIsLoading(true);
			setError(null);

			try {
				// Direct request to the RSS feed
				const directUrl = "https://blog.web3afrika.com/rss.xml";

				const response = await fetch(directUrl, {
					headers: {
						Accept: "application/xml, application/rss+xml, text/xml",
					},
					// Adding a timeout using AbortController
					signal: AbortSignal.timeout(15000), // 15 second timeout
				});

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				// Get the XML content as text
				const xmlText = await response.text();

				// Parse the RSS feed using our custom parsing function
				const parsedArticles = parseRssFeed(xmlText);

				if (parsedArticles.length === 0) {
					throw new Error("No articles found in the RSS feed");
				}

				setArticles(parsedArticles);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching RSS feed:", error);
				setError(
					error instanceof Error ? error.message : "Unknown error occurred",
				);
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
					<div className="text-start">
						<AnimatedText
							text={["Insights and Updates"]}
							once
							className="text-4xl text-[#292929] dark:text-white"
						/>
						<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E] dark:text-[#9E9E9E]">
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
					<div className="text-start">
						<AnimatedText
							text={["Insights and Updates"]}
							once
							className="text-4xl text-[#292929] dark:text-white"
						/>
						<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E] dark:text-[#9E9E9E]">
							Stay informed with the latest news, trends, and stories shaping
							Web3 innovation across Africa and the diaspora
						</p>
					</div>
				)}
				<div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
					<p className="text-center text-red-600 dark:text-red-400">
						Unable to load articles: {error}
					</p>
					<button
						onClick={() => window.location.reload()}
						className="mx-auto mt-4 block rounded-full border border-red-600 px-6 py-2 text-sm text-red-600 transition-colors hover:bg-red-600 hover:text-white dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-black"
					>
						Try Again
					</button>
				</div>
			</section>
		);
	}

	// Show empty state
	if (!articles.length) {
		return (
			<section className="container mx-auto w-11/12 py-8">
				{!noDescription && (
					<div className="text-start">
						<AnimatedText
							text={["Insights and Updates"]}
							once
							className="text-4xl text-[#292929] dark:text-white"
						/>
						<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E] dark:text-[#9E9E9E]">
							Stay informed with the latest news, trends, and stories shaping
							Web3 innovation across Africa and the diaspora
						</p>
						<Link
							to="/blog"
							className="mb-4 mt-4 flex items-center gap-2 text-[#141414] dark:text-white"
						>
							<span>Enter Blog</span>
							<ChevronRight />
						</Link>
					</div>
				)}
				<div className="rounded-lg bg-[#FAFAFA] p-6 dark:bg-[#121212]">
					<p className="text-center text-[#9E9E9E]">No articles found</p>
				</div>
			</section>
		);
	}

	// Show content when articles are available
	return (
		<section className="container mx-auto w-11/12 py-8">
			{!noDescription && (
				<div className="text-start">
					<AnimatedText
						text={["Insights and Updates"]}
						once
						className="text-4xl text-[#292929] dark:text-white"
					/>
					<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E] dark:text-[#9E9E9E]">
						Stay informed with the latest news, trends, and stories shaping Web3
						innovation across Africa and the diaspora
					</p>
					<Link
						to="/blog"
						className="mb-4 mt-4 flex items-center gap-2 text-[#141414] dark:text-white"
					>
						<span>Enter Blog</span>
						<ChevronRight />
					</Link>
				</div>
			)}

			<div className="grid gap-6 md:grid-cols-3">
				{articles.length > 0 && (
					<FadeIn className="col-span-full flex flex-col-reverse bg-[#FAFAFA] p-6 dark:bg-[#121212] md:grid md:grid-cols-9 md:gap-8 md:rounded-lg md:p-8">
						<div className="col-span-4">
							<div className="flex h-full flex-col justify-center overflow-hidden rounded-lg">
								<div className="my-4 md:my-auto md:px-6">
									<span className="text-lg text-[#9E9E9E]">
										{formatDate(articles[0].date)}
									</span>
								</div>

								<div className="max-w-md space-y-6 md:p-6">
									<h2 className="text-base text-[#5D5D5D] dark:text-white md:text-3xl">
										{articles[0].title}
									</h2>

									<p className="line-clamp-3 text-xs text-[#9E9E9E] md:text-xl">
										{articles[0].content}
									</p>

									<span className="block text-sm text-[#5D5D5D] md:text-base">
										{articles[0].author}
									</span>

									<a
										target="_blank"
										rel="noreferrer"
										href={articles[0].link}
										className="inline-block rounded-full border border-[#0C6E5F] px-6 py-2 text-sm text-[#0C6E5F] shadow-lg shadow-[#469F9214] transition-colors duration-200 hover:bg-[#0C6E5F] hover:text-white"
									>
										Read Article
									</a>
								</div>
							</div>
						</div>

						<div className="col-span-5 flex items-center justify-center overflow-hidden rounded">
							<img
								src={
									articles[0].imageUrl ||
									"https://via.placeholder.com/600x400?text=Web3+Afrika"
								}
								alt="Featured"
								className="max-w-full object-cover"
								onError={e => {
									const target = e.target as HTMLImageElement;
									target.src =
										"https://via.placeholder.com/600x400?text=Web3+Afrika";
								}}
							/>
						</div>
					</FadeIn>
				)}
				<FadeInStagger className="col-span-full grid gap-6 md:grid-cols-3">
					{(partial ? articles.slice(1, 4) : articles.slice(1)).map(article => (
						<FadeIn
							key={article.id}
							className="flex flex-col overflow-hidden bg-[#FAFAFA] p-6 dark:bg-[#121212] md:rounded-lg md:p-8"
						>
							<div
								className={cn("box-border block", "relative w-full")}
								style={{
									width: "initial",
									height: "initial",
									padding: "52.5% 0 0",
								}}
							>
								<img
									src={
										article.imageUrl ||
										"https://via.placeholder.com/600x400?text=Web3+Afrika"
									}
									alt={article.title}
									className="absolute left-0 top-0 h-full w-full rounded-lg object-cover md:rounded"
									onError={e => {
										const target = e.target as HTMLImageElement;
										target.src =
											"https://via.placeholder.com/600x400?text=Web3+Afrika";
									}}
								/>
							</div>

							<div className="my-4">
								<span className="text-lg text-[#9E9E9E]">
									{formatDate(article.date)}
								</span>
							</div>

							<div className="flex h-full flex-col">
								<div className="flex-grow">
									<h2 className="mb-4 text-[#5D5D5D] dark:text-white md:text-2xl">
										{article.title}
									</h2>

									<p className="mb-4 text-xs text-[#9E9E9E] md:text-sm">
										{article.content}
									</p>

									<span className="mb-4 block text-sm text-[#5D5D5D] md:text-base">
										{article.author}
									</span>
								</div>

								<a
									target="_blank"
									rel="noreferrer"
									href={article.link}
									className="inline-block w-fit rounded-full border border-[#0C6E5F] px-6 py-2 text-sm text-[#0C6E5F] shadow-lg shadow-[#469F9214] transition-colors duration-200 hover:bg-[#0C6E5F] hover:text-white"
								>
									Read Article
								</a>
							</div>
						</FadeIn>
					))}
				</FadeInStagger>
			</div>
		</section>
	);
};

export default BlogHighlights;
