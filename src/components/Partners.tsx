import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { partners } from "../constants";
import { AnimatedText } from "./animated-text";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { ChevronRight } from "./icons";

const Partners = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<FadeInStagger className="container mx-auto w-11/12 py-16">
			<FadeIn className="mb-8">
				<AnimatedText
					text={["Our Partners"]}
					once
					className="mb-2 text-3xl text-[#5D5D5D] dark:text-white"
				/>
				<div className="max-w-4xl">
					<p className="text-xl text-[#9E9E9E] dark:text-[#5D5D5D]">
						We wouldn't have gotten this far without{" "}
						<span className="font-medium text-[#5D5D5D]">our Partners</span>.
						Our partners are our backbone, providing much-needed support to
						continue to support Africa.
					</p>
				</div>
			</FadeIn>

			<FadeIn className="mt-4 md:mt-6">
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={20}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Navigation]}
					loop={true}
					onInit={swiper => {
						(swiper.params.navigation as NavigationOptions).prevEl =
							prevRef.current;
						(swiper.params.navigation as NavigationOptions).nextEl =
							nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					className="relative"
				>
					{partners.map(partner => (
						<SwiperSlide key={partner.id} className="w-fit">
							<a
								target="_blank"
								rel="noreferrer"
								href={partner.url}
								key={partner.id}
								className="w-1/3 flex-shrink-0"
							>
								<div className="flex h-[194px] max-h-[46vw] w-[194px] max-w-[46vw] items-center justify-center rounded-sm bg-[#FAFAFA] p-[22px]">
									<img
										src={partner.logo}
										alt={`${partner.name} logo`}
										className="max-h-[86px] w-3/5 max-w-full object-contain"
									/>
								</div>
							</a>
						</SwiperSlide>
					))}
					<div
						className="user-select-none absolute top-1/2 z-10 flex size-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-white shadow-lg"
						ref={prevRef}
					>
						<ChevronRight className="rotate-180 transform" />
					</div>
					<div
						className="user-select-none absolute right-0 top-1/2 z-10 flex size-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-white shadow-lg"
						ref={nextRef}
					>
						<ChevronRight />
					</div>
				</Swiper>
			</FadeIn>
		</FadeInStagger>
	);
};

export default Partners;
