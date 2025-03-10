import DonateButton from "./DonateButton";
import { FadeIn } from "./FadeIn";

const DonateSection = () => {
	return (
		<FadeIn className="partner relative mx-auto w-11/12 max-w-[1536px] rounded-2xl bg-black bg-contain bg-right bg-no-repeat dark:bg-[#0A0A0A] md:top-52 md:w-[98%] md:py-12">
			<div className="container mx-auto p-6">
				<div className="col-span-full flex flex-col justify-center space-y-6 md:col-span-1">
					<h2 className="max-w-[250px] text-xl text-white md:max-w-lg md:text-4xl">
						Partner with Us to Shape the Future
					</h2>
					<p className="max-w-md text-base leading-relaxed text-[#E6E6E6]">
						Join us in empowering African innovators and communities. Your
						support drives education, opportunities, and diversity in the Web3
						revolution.
					</p>
					<DonateButton />
				</div>
			</div>
		</FadeIn>
	);
};

export default DonateSection;
