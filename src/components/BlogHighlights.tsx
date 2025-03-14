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

const BlogHighlights = ({
	noDescription,
	partial,
}: {
	noDescription?: boolean;
	partial?: boolean;
}) => {
	const [articles, setArticles] = useState<RSSItem[]>([]);

	useEffect(() => {
		console.log("Sent a fetch request to the RSS feed");
		async function fetchRSS() {
			try {
				const response = await fetch(
					`https://api.allorigins.win/get?url=${encodeURIComponent("https://replit-bounties-fdfa530ed703.herokuapp.com/web3afrika-articles")}`,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				const result = JSON.parse(data.contents);

				setArticles(result);
			} catch (error) {
				console.error("Error fetching RSS feed:", error);
			}
		}

		fetchRSS();
	}, []);

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

			{!!articles.length && (
				<div className="grid gap-6 md:grid-cols-3">
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
								src={articles[0].imageUrl}
								alt="Featured"
								className="max-w-full object-cover"
							/>
						</div>
					</FadeIn>
					<FadeInStagger className="col-span-full grid gap-6 md:grid-cols-3">
						{(partial ? articles.slice(1, 4) : articles.slice(1)).map(
							article => (
								<FadeIn
									key={article.id}
									className="flex flex-col overflow-hidden bg-[#FAFAFA] p-6 dark:bg-[#121212] md:rounded-lg md:p-8"
								>
									<div
										className={
											cn("box-border block", "relative w-full")
											// article.bg,
										}
										style={{
											width: "initial",
											height: "initial",
											padding: "52.5% 0 0",
										}}
									>
										<img
											src={article.imageUrl}
											alt={article.title}
											className="absolute left-0 top-0 h-full w-full rounded-lg object-cover md:rounded"
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
							),
						)}
					</FadeInStagger>
				</div>
			)}
		</section>
	);
};

export default BlogHighlights;
