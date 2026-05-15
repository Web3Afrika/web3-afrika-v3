import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatedText } from "../components/animated-text";
import { FadeIn } from "../components/FadeIn";
import { ArrowRight } from "../components/icons";
import { majorEventsList, upcomingEvents } from "../constants";
import Layout from "../layout";

export default function App() {
	return (
		<Layout>
			<section className="container mx-auto mt-4 w-11/12 md:mt-40">
				<div className="mb-3 space-y-8 text-start md:mb-8 md:px-5">
					<AnimatedText
						text={["Building a Decentralized", "Future Together"]}
						once
						className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-3xl md:text-5xl"
					/>
					{/* <h2 className="max-w-xs text-2xl text-[#292929] dark:text-white md:max-w-2xl md:text-5xl">
						Building a Decentralized Future Together
					</h2> */}

					<AnimatedText
						text={["Past Events"]}
						once
						className="mb-4 text-base text-[#292929] dark:text-[#B0B0B0] md:text-3xl"
					/>
				</div>

				{majorEventsList.map(eventItem => (
					<FadeIn
						key={eventItem.id}
						className="mb-14 bg-[#FAFAFA] p-4 dark:bg-black md:mb-24 md:p-8"
					>
						<h2 className="mb-2 text-base font-medium text-[#292929] dark:text-white md:text-3xl">
							{eventItem.title}
						</h2>
						<p className="max-w-4xl text-sm text-[#5D5D5D] md:text-lg">
							{eventItem.description}
						</p>
						<div className="mt-4 md:mt-6">
							<Swiper
								slidesPerView={"auto"}
								spaceBetween={20}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								modules={[Autoplay]}
								loop={true}
							>
								{eventItem.images.map(img => (
									<SwiperSlide key={img.id} className="w-fit">
										<div className="size-48 rounded-sm md:size-72 lg:size-[375px]">
											<img
												src={img.src}
												alt={`Event image ${img.id}`}
												className="h-full w-full rounded-lg object-cover"
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</FadeIn>
				))}
				<div>
					<AnimatedText
						text={["Other Events"]}
						once
						className="mb-6 text-base text-[#292929] dark:text-white md:mb-12 md:text-3xl"
					/>
					{/* <h3 className="mb-6 text-base text-[#292929] dark:text-white md:mb-12 md:text-3xl">
						Other Events
					</h3> */}
					<FadeIn className="mb-12 cursor-pointer divide-y divide-[#F2F2F2] border-b border-t border-[#F2F2F2] dark:divide-[#C1C1C1] dark:border-[#C1C1C1] md:divide-[#000000] md:border-[#000000]">
						{upcomingEvents.map(item => (
							<div
								key={item.id}
								className="flex items-center py-4 transition-colors hover:bg-gray-50 md:grid md:grid-cols-4"
							>
								<div className="col-span-2 flex-1 text-[#292929] dark:text-[#C1C1C1]">
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
										<ArrowRight className="dark:text-[#C1C1C1]" />
									</a>
								</div>
							</div>
						))}
					</FadeIn>
				</div>
			</section>
		</Layout>
	);
}
