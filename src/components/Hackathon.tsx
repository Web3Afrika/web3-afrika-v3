import HackathonImage from "../assets/hackathons/model.jpeg";
import { Build, Meetup } from "./icons";

const Hackathon = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<p className="mb-4 text-sm text-[#5D5D5D]">Top events & Hackatons</p>
			<div className="grid grid-cols-3 gap-4">
				<div className="w-[370px] space-y-4">
					<div className="rounded-lg bg-[#09705F] p-6">
						<div className="flex items-center gap-4">
							<div className="flex-1">
								<h4 className="mb-2 h-[52px] w-[234px] text-3xl font-medium text-white">
									Build with Celo Hackathon
								</h4>
							</div>
							<div className="flex-shrink-0">
								<Build />
							</div>
						</div>
					</div>

					<div className="rounded-lg bg-[#EB9122] p-6">
						<div className="flex flex-col">
							<div className="flex items-center gap-4">
								<div className="flex-1">
									<h4 className="mb-2 h-[132px] w-[234px] text-5xl font-medium text-white">
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
				</div>

				<div className="h-[531px] w-[370px] overflow-hidden rounded-lg">
					<img
						src={HackathonImage}
						alt="Event"
						className="h-full w-full rounded-lg object-cover"
					/>
				</div>

				<div className="flex w-[370px] items-center">
					<div className="flex h-[300px] w-full flex-col justify-between rounded-lg bg-gray-50 p-6 dark:bg-black">
						<div className="h-[66px] w-[322px]">
							<p className="mb-4 text-2xl text-[#707070] dark:text-[#BDBDBD]">
								Scroll Community Meetup, here we collaborated with scroll and
								the web 3 community, View below.
							</p>
						</div>
						<button className="w-fit rounded-full border border-[#0C6E5F] bg-[#E4212A] px-4 py-2 text-sm text-white">
							View Event
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hackathon;
