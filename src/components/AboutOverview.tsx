import AboutImage from "../assets/about-image.png";

const AboutOverview = () => {
	return (
		<section className="mt-4 transition-all duration-300 md:mt-40">
			<div className="container mx-auto mb-12 space-y-4 px-2 text-start">
				<h2 className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-xl md:text-5xl">
					Building a Decentralized Future Together
				</h2>
				<p className="max-w-2xl text-lg text-[#757575]">
					Web 3 Afrika is dedicated to equipping African innovators, builders,
					and creators with access to education, opportunities, and resources in
					the Web 3 space. Our platform champions diversity and inclusion,
					ensuring African voices lead the global conversation on blockchain,
					DeFi, NFTs, and beyond.
				</p>
			</div>

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
