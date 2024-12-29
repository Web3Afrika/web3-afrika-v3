import DonateImage from "../assets/donate.png";
import { cn } from "../util";

const DonateSection = () => {
	return (
		<div className="relative">
			<div className="absolute bottom-0 h-1/2 w-full bg-[#FAFAFA] dark:bg-black" />
			<div className="relative p-6">
				<div
					className={cn(
						"mx-auto max-w-[1536px] rounded-2xl bg-black bg-contain bg-right bg-no-repeat py-12",
					)}
					style={{ backgroundImage: `url(${DonateImage})` }}
				>
					<div className="container mx-auto">
						<div className="col-span-full flex flex-col justify-center space-y-6 p-12">
							<h2 className="max-w-xl text-5xl text-white">
								Partner with Us to Shape the Future
							</h2>
							<p className="max-w-lg text-lg text-[#E6E6E6]">
								Join us in empowering African innovators and communities. Your
								support drives education, opportunities, and diversity in the
								Web 3 revolution.
							</p>
							<button className="inline-block w-fit rounded-full bg-white px-6 py-2 text-sm text-[#0C6E5F] shadow-lg shadow-[#469F9214] transition-colors duration-200 hover:bg-[#0C6E5F] hover:text-white">
								Donate
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonateSection;
