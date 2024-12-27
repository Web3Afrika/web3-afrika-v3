import HackathonImage from "../assets/hackathons/model.jpeg";
import { Build, Meetup } from "./icons";

const Hackathon = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<p className="mb-4 text-sm text-[#5D5D5D]">Top events & Hackatons</p>
			<div className="grid grid-cols-3 gap-8">
				<div className="space-y-4">
					<div className="rounded-lg bg-[#09705F] p-4">
						<div className="flex items-center gap-4">
							<div className="flex-1">
								<h4 className="mb-2 text-2xl text-white">
									Build with Celo Hackathon
								</h4>
							</div>
							<div className="flex-shrink-0">
								<Build />
							</div>
						</div>
					</div>

					<div className="rounded-lg bg-[#EB9122] p-4">
						<div className="flex flex-col">
							<div className="flex items-center gap-4">
								<div className="flex-1">
									<h4 className="mb-2 text-4xl text-white">
										Scroll Community Meetup
									</h4>
								</div>
								<div className="flex-shrink-0">
									<Meetup />
								</div>
							</div>
							<button className="mt-16 w-fit rounded-lg bg-white px-2 py-2 text-sm text-[#757575]">
								Event
							</button>
						</div>
					</div>
				</div>

				<div className="h-full overflow-hidden rounded-lg">
					<img
						src={HackathonImage}
						alt="Event"
						className="h-full w-full rounded-lg"
					/>
				</div>
				<div className="flex h-full flex-col justify-between rounded-lg bg-gray-50 p-6 dark:bg-black">
					<div>
						<p className="mb-4 text-sm text-[#707070] dark:text-[#BDBDBD]">
							Scroll Community Meetup, here we collaborated with scroll and the
							web 3 community, View below.
						</p>
					</div>
					<button className="w-fit rounded-full border border-[#0C6E5F] bg-[#E4212A] px-4 py-2 text-sm text-white">
						View Event
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hackathon;
