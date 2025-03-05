import StatData from "./stat-data";

const Stats = () => {
	return (
		<section className="container mx-auto px-6 py-6 md:py-16">
			<div className="mb-8 text-start md:mb-12">
				<p className="max-w-5xl text-sm text-[#757575] md:text-2xl">
					We believe Africa and its diaspora hold the key to shaping the future
					of Web3. Through hackathons, bounties, and collaborative spaces,
					we&apos;re building a vibrant community where individuals of African
					descent can connect, learn, and lead in the decentralized era.
				</p>
			</div>

			<StatData />
		</section>
	);
};

export default Stats;
