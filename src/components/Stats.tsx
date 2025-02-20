import StatData from "./stat-data";

const Stats = () => {
	return (
		<section className="container mx-auto px-6 py-6 md:py-16">
			<div className="mb-8 text-start md:mb-12">
				<p className="max-w-3xl text-lg text-[#757575]">
					We champion diversity and inclusion, ensuring African voices lead the
					global conversation on blockchain, DeFi, NFTs, cryptocurrency, and
					beyond.
				</p>
			</div>

			<StatData />
		</section>
	);
};

export default Stats;
