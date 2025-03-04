import HeroBanner from "../assets/banner.svg";
import HeroImage from "../assets/hero.jpeg";
import { AnimatedText } from "./animated-text";
import { FadeIn } from "./FadeIn";

const HeroDetails = () => {
	return (
		<section className="mt-4 transition-all duration-300 md:mt-40">
			<div className="container mx-auto mb-12 w-11/12">
				<FadeIn className="space-y-4">
					{/* <WordsPullUp
						text="Empowering the next generation of African web3 innovators"
						className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-xl md:text-5xl"
					/> */}
					<AnimatedText
						text={[
							"Empowering the next",
							"generation of African web3",
							"innovators",
						]}
						once
						className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-xl md:text-5xl"
					/>
					<FadeIn className="flex items-center md:max-w-xl">
						<p className="text-lg text-[#757575]">
							<span className="hidden md:inline-block">
								Building communities, fostering diversity, and creating global
								opportunities in the decentralized future.
							</span>
							<span className="inline-block md:hidden">
								Web3 Afrika is dedicated to equipping African innovators,
								builders, and creators with access to education, opportunities,
								and resources in the Web3 space. Our platform champions
								diversity and inclusion, ensuring African voices lead the global
								conversation on blockchain, DeFi, NFTs, and beyond.
							</span>
						</p>
						<button className="hidden text-nowrap rounded-full bg-[#0C6E5F] px-6 py-2 text-white transition-colors md:inline-block">
							Join Us
						</button>
					</FadeIn>
				</FadeIn>
				<div className="col-span-1"></div>
			</div>
			<div className="flex w-full flex-col overflow-hidden">
				<img src={HeroBanner} alt="Banner" className="w-full" />
				<img
					src={HeroImage}
					alt="Web3 Africa Community"
					className="w-full object-cover"
				/>
			</div>
		</section>
	);
};

export default HeroDetails;
