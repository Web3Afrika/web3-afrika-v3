import { AnimatedText } from "./animated-text";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { Discord, X } from "./icons";

const CommunitySection = () => {
	return (
		<div className="container mx-auto mb-16 px-6 py-4">
			<div className="mb-8 text-left">
				<AnimatedText
					text={["Join Our Community"]}
					once
					className="mb-4 text-4xl text-[#292929] dark:text-white"
				/>
				{/* <h2 className="mb-4 text-4xl text-[#292929] dark:text-white">
					Join Our Community
				</h2> */}
				<FadeIn className="max-w-2xl text-[#757575]">
					Empowering African builders through hackathons, bounties, and
					opportunities to lead in the Web3 revolution
				</FadeIn>
			</div>

			<FadeInStagger className="grid gap-8 md:grid-cols-2">
				<FadeIn className="flex flex-col items-center space-y-2 rounded-xl p-8 text-center shadow-md dark:bg-[#0A0A0A]">
					<X className="my-6 size-8 md:size-16" />
					<h3 className="text-base font-medium text-[#292929] md:text-2xl">
						X (Formerly Twitter)
					</h3>
					<p className="p-2 text-[#9E9E9E]">
						Empowering African builders through hackathons, bounties, and
						opportunities to lead in the Web3 revolution
					</p>
					<a
						href="https://x.com/web3afrika"
						className="rounded-full border border-[#0C6E5F] px-6 py-2 text-[#0C6E5F] shadow-xl shadow-[#469F9214] transition duration-300 hover:bg-[#0A5A4E] hover:text-white"
					>
						Join Community
					</a>
				</FadeIn>

				<FadeIn className="flex flex-col items-center space-y-2 rounded-xl p-8 text-center shadow-md dark:bg-[#0A0A0A]">
					<Discord className="my-6 size-8 md:size-16" />
					<h3 className="text-base font-medium text-[#292929] md:text-2xl">
						Discord
					</h3>
					<p className="p-2 text-[#9E9E9E]">
						Empowering African builders through hackathons, bounties, and
						opportunities to lead in the Web3 revolution
					</p>
					<a
						href="https://t.co/CMKLNdoxYU"
						className="rounded-full border border-[#0C6E5F] px-6 py-2 text-[#0C6E5F] shadow-xl shadow-[#469F9214] transition duration-300 hover:bg-[#0A5A4E] hover:text-white"
					>
						Join Community
					</a>
				</FadeIn>
			</FadeInStagger>
		</div>
	);
};

export default CommunitySection;
