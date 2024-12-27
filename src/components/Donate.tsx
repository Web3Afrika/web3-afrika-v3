import DonateImage from "../assets/donate.png";
import { cn } from "../util";

const DonateSection = () => {
	return (
		<div className="p-6">
			<div
				className={cn(
					"mx-auto max-w-[1536px] rounded-2xl bg-black bg-contain bg-right bg-no-repeat py-12 dark:bg-[#0A0A0A]",
				)}
				style={{ backgroundImage: `url(${DonateImage})` }}
			>
				<div className="container mx-auto">
					<div className="col-span-full flex flex-col justify-center space-y-6 md:col-span-1">
						<h2 className="text-4xl text-white">
							Partner with Us to Shape the Future
						</h2>
						<p className="text-base leading-relaxed text-[#E6E6E6] lg:w-1/2">
							Join us in empowering African innovators and communities. Your
							support drives education, opportunities, and diversity in the Web
							3 revolution.
						</p>
						<button className="w-max rounded-full border border-[#0C6E5F] px-8 py-3 text-[#0C6E5F] transition duration-300 hover:bg-[#D03321] dark:bg-black">
							Donate
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonateSection;
