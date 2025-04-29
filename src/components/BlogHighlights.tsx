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
				return content.replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1").trim();
			}
			return content.trim();
		};

		// Function to extract HTML content
		const extractHTML = (html: string): string => {
			// Basic approach to strip HTML tags but keep the content
			return html
				.replace(/<[^>]*>/g, " ")
				.replace(/\s+/g, " ")
				.trim();
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
			const creatorRaw = extractContent(itemContent, "dc\\:creator");
			const author = extractCDATA(creatorRaw);

			// Extract content from content:encoded or description
			const contentRaw =
				extractContent(itemContent, "content\\:encoded") ||
				extractContent(itemContent, "description");
			const contentCleaned = extractCDATA(contentRaw);

			// Clean and truncate content for preview
			const content = extractHTML(contentCleaned).substring(0, 200) + "...";

			// Look for coverImage in hashnode data
			let imageUrl = "";

			// Try to get image URL from hashnode:coverImage tag (specific to Hashnode blogs)
			const coverImageTag = extractContent(
				itemContent,
				"hashnode\\:coverImage",
			);
			if (coverImageTag) {
				imageUrl = coverImageTag;
			} else {
				// Fallback: Extract image from content if available
				const imgMatch = contentCleaned.match(/<img[^>]+src="([^">]+)"/i);
				if (imgMatch && imgMatch[1]) {
					imageUrl = imgMatch[1];
				}
			}

			// Create item object
			items.push({
				id: guid || link,
				title,
				link,
				date: pubDate,
				content,
				author: author || "Unknown Author",
				imageUrl,
			});
		}

		return items;
	} catch (error) {
		console.error("Error parsing RSS feed:", error);
		return [];
	}
};

/**
 * Simple but effective HTML cleaner
 */
const cleanHtml = (content: string) => {
	if (!content) return "";

	// First decode common HTML entities
	const decoded = content
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&amp;/g, "&")
		.replace(/&nbsp;/g, " ");

	// Then remove all HTML tags
	let cleaned = decoded.replace(/<[^>]+>/g, " ");

	// Clean up whitespace
	cleaned = cleaned.replace(/\s+/g, " ").trim();

	return cleaned;
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

			// Create an array of proxy services to try
			const proxies = [
				// AllOrigins is a common CORS proxy
				(url: string) =>
					`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
				// // Cors-Anywhere (needs header)
				// (url: string) => `https://cors-anywhere.herokuapp.com/${url}`,
				// // Alternative proxies
				// (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
				(url: string) => `https://thingproxy.freeboard.io/fetch/${url}`,
				// Direct (for environments where CORS isn't an issue)
				(url: string) => url,
			];

			const targetUrl = "https://blog.web3afrika.com/rss.xml";
			let lastError = null;

			// Try each proxy in order until one works
			for (const proxyFn of proxies) {
				try {
					const proxyUrl = proxyFn(targetUrl);
					console.log(`Trying to fetch RSS from: ${proxyUrl}`);

					const response = await fetch(proxyUrl, {
						headers: {
							Accept:
								"application/xml, application/rss+xml, text/xml, text/html",
							"X-Requested-With": "XMLHttpRequest", // Required by some proxies
						},
						// Adding a timeout using AbortController
						signal: AbortSignal.timeout(10000), // 10 second timeout
					});

					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}

					// Get the content as text
					const text = await response.text();

					// Verify it's an actual RSS feed by checking for basic RSS elements
					if (!text.includes("<rss") && !text.includes("<channel")) {
						throw new Error("Response doesn't appear to be an RSS feed");
					}

					// Parse the RSS feed
					const parsedArticles = parseRssFeed(text);

					if (parsedArticles.length === 0) {
						throw new Error("No articles found in the RSS feed");
					}

					// Success! Store the articles and exit the loop
					setArticles(parsedArticles);
					setIsLoading(false);
					return;
				} catch (error) {
					console.error(`Error with proxy: ${error}`);
					lastError = error;
					// Continue to next proxy
				}
			}

			// If we get here, all proxies failed
			setError(
				lastError instanceof Error
					? lastError.message
					: "Failed to fetch RSS feed with all available proxies",
			);
			setIsLoading(false);
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
										{cleanHtml(articles[0].content)}
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
										{cleanHtml(article.content)}
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
