import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partners } from "../constants";
import { AnimatedText } from "./animated-text";
import { FadeIn, FadeInStagger } from "./FadeIn";

const Partners = () => {
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
						<span className="font-medium text-[#5D5D5D]">Our Partners</span>.
						Our partners are our backbone, Providing much needed support to
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
					modules={[Autoplay]}
					loop={true}
				>
					{partners.map(partner => (
						<SwiperSlide key={partner.id} className="w-fit">
							<div key={partner.id} className="w-1/3 flex-shrink-0">
								<div className="flex h-[386px] w-[386px] items-center justify-center rounded-sm bg-[#FAFAFA] p-12">
									<img
										src={partner.logo}
										alt={`${partner.name} logo`}
										className="h-48 max-w-full object-contain"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</FadeIn>
		</FadeInStagger>
	);
};

export default Partners;
