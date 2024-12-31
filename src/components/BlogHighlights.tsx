import ArticleHero from "../assets/blog/blog-hero.png";
import ProfileAvatarr from "../assets/profileAvatar.svg";
import { sampleArticles } from "../constants";
import { cn } from "../util";
import { ChevronRight } from "./icons";

const BlogHighlights = ({ minimal }: { minimal?: boolean }) => {
	return (
		<section className="container mx-auto w-11/12 py-8">
			{!minimal && (
				<div className="text-start">
					<h2 className="text-4xl text-[#292929] dark:text-white">
						Insights and Updates
					</h2>
					<p className="mt-4 max-w-3xl text-xl text-[#9E9E9E] dark:text-[#9E9E9E]">
						Stay informed with the latest news, trends, and stories shaping Web
						3 innovation across Africa and the diaspora
					</p>
					<p className="mb-4 mt-4 flex items-center gap-2 text-[#141414] dark:text-white">
						<span>Enter Blog</span>
						<ChevronRight />
					</p>
				</div>
			)}
			<div className="grid gap-6 md:grid-cols-3">
				<div className="col-span-full flex flex-col-reverse bg-[#FAFAFA] p-6 dark:bg-black md:grid md:grid-cols-9 md:gap-8">
					<div className="col-span-4">
						<div className="flex h-full flex-col justify-center overflow-hidden rounded-lg">
							<div className="my-4 md:my-auto md:px-6">
								<span className="text-lg text-[#9E9E9E]">
									December 20, 2024
								</span>
							</div>

							<div className="max-w-md space-y-6 md:p-6">
								<h2 className="text-base text-[#5D5D5D] dark:text-white md:text-3xl">
									Getting started with Solidity, All you need to know
								</h2>

								<p className="line-clamp-3 text-xs text-[#9E9E9E] md:text-xl">
									Solidity is a high-level programming language that is
									specifically used to write smart contracts on the Ethereum
									blockchain.
								</p>

								<div>
									<img
										src={ProfileAvatarr}
										alt="Profile Avatar"
										className="mr-2 inline-block"
										width={18}
										height={18}
									/>
									<span className="text-sm text-[#5D5D5D] md:text-base">
										Vinyl Davyl
									</span>
								</div>

								<button className="inline-block rounded-full border border-[#0C6E5F] px-6 py-2 text-sm text-[#0C6E5F] shadow-lg shadow-[#469F9214] transition-colors duration-200 hover:bg-[#0C6E5F] hover:text-white">
									Read Article
								</button>
							</div>
						</div>
					</div>

					<div className="col-span-5 flex items-center justify-center rounded-lg bg-[#FCE4E5] p-8 md:rounded-s md:p-12">
						<img
							src={ArticleHero}
							alt="Featured"
							className="object-cover md:max-w-[60%]"
						/>
					</div>
				</div>
				{sampleArticles.map(article => (
					<div
						key={article.id}
						className="flex flex-col overflow-hidden bg-[#FAFAFA] p-6 dark:bg-[#0A0A0A] md:rounded-lg md:p-8"
					>
						<div
							className={cn(
								"relative w-full rounded-lg p-8 pl-10 md:rounded-s",
								article.bg,
							)}
						>
							<img
								src={article.imageUrl}
								alt={article.title}
								className="h-full w-full object-cover"
							/>
						</div>

						<div className="my-4">
							<span className="text-lg text-[#9E9E9E]">{article.date}</span>
						</div>

						<div className="flex h-full flex-col">
							<div className="flex-grow">
								<h2 className="mb-4 text-[#5D5D5D] dark:text-white md:text-2xl">
									{article.title}
								</h2>

								<p className="mb-4 text-xs text-[#9E9E9E] md:text-sm">
									{article.content}
								</p>

								<div className="mb-4">
									<img
										src={ProfileAvatarr}
										alt="Profile Avatar"
										className="mr-2 inline-block"
										width={18}
										height={18}
									/>
									<span className="text-sm text-[#5D5D5D] md:text-base">
										{article.author}
									</span>
								</div>
							</div>

							<a
								href={article.link}
								className="inline-block w-fit rounded-full border border-[#0C6E5F] px-6 py-2 text-sm text-[#0C6E5F] shadow-lg shadow-[#469F9214] transition-colors duration-200 hover:bg-[#0C6E5F] hover:text-white"
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
