const HomeStats = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<div className="mb-12 text-start">
				<h2 className="mb-4 text-4xl text-[#292929] dark:text-white">
					Web 3 Afrika empowers Africans to lead in Web 3 through education,
					opportunities, and community
				</h2>
				<p className="max-w-4xl text-[#666666] dark:text-[#C0C0C0]">
					Empowering African builders through hackathons, bounties, and
					opportunities
				</p>
				<p className="mt-4 text-[#141414] dark:text-[#666666]">
					Mission and Vision Statement &gt;
				</p>
			</div>

			<div className="grid w-full grid-cols-1 gap-8 text-center md:grid-cols-3">
				<div className="rounded-lg bg-[#FAFAFA] p-8 dark:bg-black">
					<h3 className="mb-4 text-6xl text-[#7A7A7A]">$1M+</h3>
					<p className="text-[#666666]">
						Fundraising achieved through strategic partnerships
					</p>
				</div>

				<div className="rounded-lg bg-[#FAFAFA] p-8 dark:bg-black">
					<h3 className="mb-4 text-6xl text-[#7A7A7A]">$1M+</h3>
					<p className="text-[#666666]">
						achieved through strategic partnerships
					</p>
				</div>

				<div className="rounded-lg bg-[#FAFAFA] p-8 dark:bg-black">
					<h3 className="mb-4 text-6xl text-[#7A7A7A]">5000</h3>
					<p className="text-[#666666]">
						Builers in attendance for hackathons and events
					</p>
				</div>
			</div>
		</section>
	);
};

export default HomeStats;
