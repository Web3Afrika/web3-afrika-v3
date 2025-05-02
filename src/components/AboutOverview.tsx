import AboutImage from "../assets/about-image.jpeg";
import { AnimatedText } from "./animated-text";
import { Clicker } from "./clicker";
import { FadeIn } from "./FadeIn";

const AboutOverview = () => {
	return (
		<section className="relative mt-4 transition-all duration-300 md:mt-40">
			<FadeIn className="container mx-auto mb-12 w-11/12 space-y-6 text-start">
				<AnimatedText
					text={["Building Africa’s Web3", "Future Together"]}
					once
					className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-xl md:text-5xl"
				/>
				{/* <h2 className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-xl md:text-5xl">
					Building a Decentralized Future Together
					</h2> */}
				<div className="border-b border-[#F2F2F2] dark:border-[#272727]"></div>
				<FadeIn className="max-w-4xl text-sm text-[#757575] md:text-2xl">
					Web3 Afrika is dedicated to equipping African innovators, builders,
					and creators with access to education, opportunities, and resources in
					the Web3 space. Our platform champions diversity and inclusion,
					ensuring African voices lead the global conversation on blockchain,
					DeFi, NFTs, and beyond.
				</FadeIn>
			</FadeIn>

			<div className="mx-auto w-full max-w-[1536px]">
				<img
					src={AboutImage}
					alt="Web3 Africa Community"
					className="object-cover"
				/>
			</div>
			<div className="hidden md:block">
				<Clicker
					title="Developers"
					fill="#0C6E5F"
					className="absolute -top-2 left-[70%] lg:left-2/4"
					bottomCursor
				/>
				<Clicker
					title="Community Moderator"
					fill="#E4212A"
					className="absolute left-[75%] top-16 lg:left-[53%]"
				/>
			</div>
		</section>
	);
};

export default AboutOverview;
