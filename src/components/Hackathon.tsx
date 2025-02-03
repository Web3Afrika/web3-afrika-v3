import HackathonImage from "../assets/hackathons/model.jpeg";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { Build, Meetup } from "./icons";

const Hackathon = () => {
	return (
		<FadeInStagger className="container mx-auto px-6 py-16">
			<p className="mb-4 text-sm text-[#5D5D5D]">Top events & Hackatons</p>
			<div className="grid grid-cols-3 gap-10 gap-x-4 md:gap-x-10">
				<FadeIn className="col-span-full space-y-4 md:col-span-1">
					<div className="rounded-lg bg-[#09705F] p-6">
						<div className="flex items-center gap-4">
							<div className="flex-1">
								<h4 className="max-w-44 text-base font-medium text-white md:max-w-96 md:text-3xl">
									Build with Celo Hackathon
								</h4>
							</div>
							<div className="">
								<Build />
							</div>
						</div>
					</div>

					<div className="rounded-lg bg-[#EB9122] p-6">
						<div className="flex flex-col">
							<div className="flex items-center gap-4">
								<div className="flex-1">
									<h4 className="max-w-32 text-2xl font-medium text-white md:text-4xl">
										Scroll Community Meetup
									</h4>
								</div>
								<div className="flex-shrink-0">
									<Meetup />
								</div>
							</div>
							<button className="mt-24 w-fit rounded-lg bg-white px-2 py-2 text-sm text-[#757575]">
								Event
							</button>
						</div>
					</div>
				</FadeIn>

				<FadeIn className="col-span-1 h-40 overflow-hidden rounded-lg md:h-[531px]">
					<img
						src={HackathonImage}
						alt="Event"
						className="h-full w-full rounded-lg object-cover"
					/>
				</FadeIn>

				<FadeIn className="col-span-2 flex items-center md:col-span-1">
					<div className="flex h-56 w-full flex-col justify-between rounded-lg bg-gray-50 p-6 dark:bg-[#121212] md:h-3/4">
						<p className="mb-4 text-sm text-[#707070] dark:text-[#BDBDBD] md:text-2xl">
							Scroll Community Meetup, here we collaborated with scroll and the
							web 3 community, View below.
						</p>
						<button className="w-fit rounded-full border border-[#0C6E5F] bg-[#E4212A] px-4 py-2 text-sm text-white">
							View Event
						</button>
					</div>
				</FadeIn>
			</div>
		</FadeInStagger>
	);
};

export default Hackathon;
