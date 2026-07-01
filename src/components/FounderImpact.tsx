import Idris from "../assets/team/idris.jpeg";
import { AnimatedText } from "./animated-text";
import { FadeIn } from "./FadeIn";

const founderLinks = [
	{ label: "X (Twitter)", href: "https://x.com/olanetsoft" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/idrisolubisi" },
	{ label: "GitHub", href: "https://github.com/olanetsoft" },
	{ label: "Blog", href: "https://blog.idrisolubisi.com" },
];

// Founder-specific highlights. Community/developer counts are shown once, by
// the <Stats> section above, so these tiles cover different dimensions.
const impact = [
	{ value: "20+", label: "Ecosystem partners" },
	{ value: "Pan-African", label: "Reach across the continent" },
	{ value: "Free", label: "Open, practical Web3 education" },
	{ value: "Hackathons", label: "Workshops, bounties & Spaces" },
];

/**
 * Founder bio + impact highlights. All facts rendered as real, crawlable text
 * (not just animated counters) so search engines and AI answer engines can
 * attribute Web3 Afrika to Idris Olubisi and cite the community's impact.
 */
const FounderImpact = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<div className="mb-8 text-start md:mb-12">
				<p className="text-sm text-[#9E9E9E] md:mb-4 md:text-base">
					The Founder
				</p>
				<AnimatedText
					text={["Meet the Founder of", "Web3 Afrika"]}
					once
					className="mb-4 text-xl text-[#292929] dark:text-[#E5E4E4] md:text-5xl"
				/>
			</div>

			<FadeIn className="grid items-start gap-8 md:grid-cols-3">
				<div className="space-y-4">
					<img
						src={Idris}
						alt="Idris Olubisi, Founder of Web3 Afrika"
						className="aspect-square w-full max-w-xs rounded-lg object-cover"
						loading="lazy"
					/>
					<div>
						<h3 className="text-xl font-medium text-[#292929] dark:text-white md:text-2xl">
							Idris Olubisi
						</h3>
						<p className="text-sm text-[#757575] md:text-base">
							Founder, Web3 Afrika
						</p>
					</div>
					<ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
						{founderLinks.map(link => (
							<li key={link.label}>
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#0C6E5F] underline-offset-4 hover:underline dark:text-[#4FD1B5]"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className="space-y-6 md:col-span-2">
					<p className="text-sm text-[#757575] dark:text-[#CFCFCF] md:text-2xl">
						Idris Olubisi (also known as Olanetsoft) is the founder of Web3
						Afrika. A software engineer and developer relations expert, he is
						widely recognized as one of the leading Web3 voices in Nigeria and
						across Africa.
					</p>
					<p className="text-sm text-[#757575] dark:text-[#CFCFCF] md:text-2xl">
						He started Web3 Afrika with a simple conviction: that Web3 knowledge
						should be open, practical, and inclusive — so that no African is
						left behind in the decentralized economy. Under his leadership, and
						with co-founder Tony Olendo and a distributed team, the community
						has grown into one of Africa&apos;s most active Web3 ecosystems.
					</p>

					<div className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-4">
						{impact.map(item => (
							<div
								key={item.label}
								className="rounded-lg bg-[#FAFAFA] p-4 dark:bg-[#121212]"
							>
								<p className="text-lg font-medium text-[#292929] dark:text-white md:text-2xl">
									{item.value}
								</p>
								<p className="mt-1 text-xs text-[#666666] md:text-sm">
									{item.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</FadeIn>
		</section>
	);
};

export default FounderImpact;
