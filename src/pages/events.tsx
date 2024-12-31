import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "../components/icons";
import { conferences, hackathons, upcomingEvents } from "../constants";
import Layout from "../layout";

export default function App() {
	return (
		<Layout>
			<section className="container mx-auto mt-4 w-11/12 md:mt-40">
				<div className="mb-3 space-y-8 text-start md:mb-8 md:px-5">
					<h2 className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-2xl md:text-5xl">
						Building a Decentralized Future Together
					</h2>
					<h3 className="mb-4 text-base text-[#292929] dark:text-[#B0B0B0] md:text-3xl">
						Hackathon
					</h3>
				</div>

				<div className="mb-14 bg-[#FAFAFA] p-4 dark:bg-black md:mb-24 md:p-8">
					<h2 className="mb-2 text-base text-[#292929] dark:text-white md:text-3xl">
						Web3 Afrika Builders Event + Arbitron
					</h2>
					<p className="max-w-4xl text-sm text-[#5D5D5D] md:text-lg">
						This event was designed to empower builders with the skills,
						knowledge, and connections needed to make a meaningful impact on the
						Arbitrum ecosystem.
					</p>
					<div className="mt-4 md:mt-6">
						<Swiper slidesPerView={"auto"} spaceBetween={20}>
							{hackathons.map(event => (
								<SwiperSlide key={event.id} className="w-fit">
									<div className="size-48 rounded-sm md:size-72 lg:size-[375px]">
										<img
											src={event.src}
											alt={`Event ${event.id}`}
											className="h-full w-full rounded-lg object-cover"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				<h3 className="mb-3 text-base font-medium text-[#292929] dark:text-[#B0B0B0] md:mb-8 md:text-3xl">
					Conference
				</h3>
				<div className="mb-14 bg-[#FAFAFA] p-4 dark:bg-black md:mb-24 md:p-8">
					<h2 className="mb-2 text-base font-medium text-[#292929] dark:text-white md:text-3xl">
						Web3 Afrika + Scroll (Scroll Community)
					</h2>
					<p className="max-w-4xl text-sm text-[#9E9E9E] md:text-lg">
						This event was designed to empower builders with the skills,
						knowledge, and connections needed to make a meaningful impact on the
						Arbitrum ecosystem.
					</p>
					<div className="mt-4 md:mt-6">
						<Swiper slidesPerView={"auto"} spaceBetween={20}>
							{conferences.map(event => (
								<SwiperSlide key={event.id} className="w-fit">
									<div className="size-48 rounded-sm md:size-72 lg:size-[375px]">
										<img
											src={event.src}
											alt={`Event ${event.id}`}
											className="h-full w-full rounded-lg object-cover"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				<div>
					<h3 className="mb-6 text-base text-[#292929] dark:text-white md:mb-12 md:text-3xl">
						Other Events
					</h3>
					<div className="mb-12 divide-y divide-[#F2F2F2] border-b border-t border-[#F2F2F2] md:divide-[#000000] md:border-[#000000]">
						{upcomingEvents.map(item => (
							<div
								key={item.id}
								className="flex items-center py-4 transition-colors hover:bg-gray-50 md:grid md:grid-cols-3"
							>
								<div className="flex-1 text-[#292929] dark:text-[#C1C1C1]">
									<span>{item.name}</span>
									<span className="block text-sm text-[#5D5D5D] md:hidden">
										{item.platform}
									</span>
								</div>
								<div className="hidden text-[#5D5D5D] dark:text-[#C1C1C1] md:block">
									{item.platform}
								</div>
								<div className="flex justify-end">
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-black dark:text-[#C1C1C1]"
									>
										<ArrowRight />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}
