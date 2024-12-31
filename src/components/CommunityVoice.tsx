import { motion } from "framer-motion";
import React from "react";
import ProfileAvatarr from "../assets/profileAvatar.svg";
import CommentCard from "./CommentCard";

interface Comment {
	id: number;
	comment: string;
	name: string;
	profile: string;
	bgColor: "yellow" | "red" | "green" | "gray";
}

const CommunityVoice: React.FC = () => {
	const comments: Comment[] = [
		{
			id: 1,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "Jennifer Lawrence",
			profile: ProfileAvatarr,
			bgColor: "green",
		},
		{
			id: 2,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "David Okonkwo",
			profile: ProfileAvatarr,
			bgColor: "yellow",
		},
		{
			id: 3,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "Sarah Mensah",
			profile: ProfileAvatarr,
			bgColor: "red",
		},
		{
			id: 4,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "Michael Adebayo",
			profile: ProfileAvatarr,
			bgColor: "gray",
		},
		{
			id: 5,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "Jennifer Lawrence",
			profile: ProfileAvatarr,
			bgColor: "green",
		},
		{
			id: 6,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "David Okonkwo",
			profile: ProfileAvatarr,
			bgColor: "yellow",
		},
		{
			id: 7,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "Sarah Mensah",
			profile: ProfileAvatarr,
			bgColor: "red",
		},
		{
			id: 8,
			comment:
				"I really love the hackathons I landed my dream role soon after I attended a technical workshop",
			name: "Michael Adebayo",
			profile: ProfileAvatarr,
			bgColor: "gray",
		},
	];

	const getFinalPosition = (index: number) => {
		switch (index) {
			case 0:
				return { x: "-15vw", y: "40vh" };
			case 1:
				return { x: "15vw", y: "0vh" };
			case 2:
				return { x: "20vw", y: "42vh" };
			case 3:
				return { x: "30vw", y: "41vh" };
			case 4:
				return { x: "0vw", y: "42vh" };
			case 5:
				return { x: "-30vw", y: "41vh" };
			case 6:
				return { x: "-40vw", y: "41vh" };
			default:
				return { x: 0, y: 0 };
		}
	};

	return (
		<section className="relative w-full">
			<div className="container mx-auto w-11/12 pb-48 pt-8">
				<h2 className="mb-2 text-3xl dark:text-white">
					Voices of Innovation: What Our Community Says
				</h2>
				<p className="text-xl text-gray-500">
					Hear from the builders, creators, and pioneers across Africa and the
					diaspora who are driving change, <br />
					breaking barriers, and shaping the future of Web 3 with Web 3 Afrika
				</p>
			</div>

			<div className="relative h-[60vh]">
				{comments.map((comment, index) => {
					const finalPos = getFinalPosition(index);

					return (
						<motion.div
							key={comment.id}
							className="absolute left-1/2 -translate-x-1/2"
							initial={{
								y: -100,
								x: "-50%",
								opacity: 0,
								rotate: Math.random() * 20 - 10,
							}}
							whileInView={{
								x: finalPos.x,
								y: finalPos.y,
								opacity: 1,
								rotate: Math.random() * 10 - 5,
								transition: {
									type: "spring",
									bounce: 0.2,
									duration: 2,
									delay: index * 0.3,
								},
							}}
							viewport={{
								once: false, // Animation will repeat
								amount: 0.3, // Triggers when 30% of element is in view
								margin: "-100px 0px", // Offset trigger point
							}}
						>
							<CommentCard
								comment={comment.comment}
								name={comment.name}
								profile={comment.profile}
								bgColor={comment.bgColor}
							/>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default CommunityVoice;
