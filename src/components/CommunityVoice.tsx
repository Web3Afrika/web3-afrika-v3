import React from "react";
import { CommunityReview } from "./CommunityReview";
import { FadeIn, FadeInStagger } from "./FadeIn";

const CommunityVoice: React.FC = () => {
	return (
		<FadeInStagger className="container mx-auto w-11/12 py-16">
			<FadeIn className="mb-8">
				<h2 className="mb-2 text-3xl dark:text-white">
					Voices of Innovation: What Our Community Says
				</h2>
				<p className="max-w-4xl text-xl text-[#9E9E9E]">
					Hear from the builders, creators, and pioneers across Africa and the
					diaspora who are driving change, breaking barriers, and shaping the
					future of Web 3 with Web 3 Afrika
				</p>

				<CommunityReview />
			</FadeIn>
		</FadeInStagger>
	);
};

export default CommunityVoice;
