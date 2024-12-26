import { ChevronRight } from "./icons";
import StatData from "./stat-data";

const HomeStats = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<div className="mb-12 max-w-4xl text-start">
				<h2 className="mb-4 text-3xl text-[#5D5D5D] dark:text-white">
					Web 3 Afrika empowers Africans to lead in Web 3 through education,
					opportunities, and community
				</h2>
				<p className="text-lg text-[#5D5D5D] dark:text-[#C0C0C0]">
					Empowering African builders through hackathons, bounties, and
					opportunities
				</p>
				<p className="mt-4 flex items-center gap-2 text-[#141414] dark:text-[#666666]">
					<span>Mission and Vision Statement </span>
					<ChevronRight />
				</p>
			</div>
			<StatData />
		</section>
	);
};

export default HomeStats;
