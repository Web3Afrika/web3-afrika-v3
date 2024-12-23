import AboutImage from "../assets/about-image.png";

const AboutOverview = () => {
	return (
		<div>
			<section className="container mx-auto px-6 py-16">
				<div className="mb-12 text-start">
					<h2 className="mb-4 text-3xl text-[#292929] dark:text-[#FFFAFA]">
						Building a Decentralized Future Together
					</h2>
					<p className="max-w-4xl text-[#757575] dark:text-[#CFCFCF]">
						Web 3 Afrika is dedicated to equipping African innovators, builders,
						and creators with access to education, opportunities, and resources
						in the Web 3 space. Our platform champions diversity and inclusion,
						ensuring African voices lead the global conversation on blockchain,
						DeFi, NFTs, and beyond.
					</p>
				</div>

				<div>
					<img
						src={AboutImage}
						alt="Web3 Africa Community"
						className="w-full object-cover"
					/>
				</div>
			</section>
		</div>
	);
};

export default AboutOverview;
