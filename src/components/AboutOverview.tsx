import AboutImage from "../assets/about-image.jpeg";
import { AnimatedText } from "./animated-text";
import { FadeIn } from "./FadeIn";

const AboutOverview = () => {
	return (
		<section className="mt-4 transition-all duration-300 md:mt-40">
			<FadeIn className="container mx-auto mb-12 w-11/12 space-y-6 text-start">
				<AnimatedText
					text={["Building Africa’s Web3", "Future Together"]}
					once
					className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-xl md:text-5xl"
				/>
				{/* <h2 className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-xl md:text-5xl">
					Building a Decentralized Future Together
				</h2> */}
				<div className="border-b border-[#F2F2F2]"></div>
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
		</section>
	);
};

export default AboutOverview;
