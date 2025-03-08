import HeroBanner from "../assets/banner.svg";
// import HeroImage from "../assets/hero.jpeg";
import { cn } from "../util";
import { AnimatedText } from "./animated-text";
import { FadeIn } from "./FadeIn";

const HeroDetails = () => {
	return (
		<section className="relative mt-2 transition-all duration-300 md:mt-20">
			<div className="container mx-auto mb-40 w-11/12 pt-2 md:min-h-[500px] md:pt-20">
				<FadeIn className="relative z-20 space-y-4">
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
						<a
							target="_blank"
							rel="noreferrer"
							href={import.meta.env.VITE_DISCORD_URL}
							className="hidden text-nowrap rounded-full bg-[#0C6E5F] px-6 py-2 text-white transition-colors md:inline-block"
						>
							Join Us
						</a>
					</FadeIn>
				</FadeIn>
				<div
					className={cn(
						"absolute -top-8 left-[15%] right-0 z-10 col-span-1 h-full rounded-lg bg-cover bg-no-repeat",
						"bg-heroLight dark:bg-heroDark",
					)}
				></div>
			</div>
			<div className="relative z-20 flex w-full flex-col overflow-hidden">
				<img src={HeroBanner} alt="Banner" className="w-full" />
				{/* <img
					src={HeroImage}
					alt="Web3 Africa Community"
					className="w-full object-cover"
				/> */}
			</div>
		</section>
	);
};

export default HeroDetails;
