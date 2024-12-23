import DonateImage from "../assets/Donate.png";

const DonateSection = () => {
	return (
		<div className="p-6">
			<div className="grid grid-cols-2 gap-8 rounded-2xl bg-black">
				<div className="flex flex-col justify-center space-y-6 pl-16">
					<h2 className="text-4xl text-white">
						Partner with Us to Shape the Future
					</h2>
					<p className="text-base leading-relaxed text-[#E6E6E6] lg:w-1/2">
						Join us in empowering African innovators and communities. Your
						support drives education, opportunities, and diversity in the Web 3
						revolution.
					</p>
					<button className="w-max rounded-full border border-[#0C6E5F] bg-white px-8 py-3 text-[#0C6E5F] transition duration-300 hover:bg-[#D03321] dark:bg-black">
						Donate
					</button>
				</div>

				<div className="flex items-end justify-end">
					<img
						src={DonateImage}
						alt="Donation Impact"
						className="h-auto max-w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default DonateSection;
