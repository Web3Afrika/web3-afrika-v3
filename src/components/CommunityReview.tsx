import ProfileAvatar from "../assets/profileAvatar.svg";
import { cn } from "../util";
import { FadeIn } from "./FadeIn";
import { Marquee } from "./ui/Marquee";

const reviews = [
	// {
	// 	name: "Jack",
	// 	id: "@jack",
	// 	body: "I've never seen anything like this before. It's amazing. I love it.",
	// 	img: "https://avatar.vercel.sh/jack",
	// },
	// {
	// 	name: "Jill",
	// 	id: "@jill",
	// 	body: "I don't know what to say. I'm speechless. This is amazing.",
	// 	img: "https://avatar.vercel.sh/jill",
	// },
	// {
	// 	name: "John",
	// 	id: "@john",
	// 	body: "I'm at a loss for words. This is amazing. I love it.",
	// 	img: "https://avatar.vercel.sh/john",
	// },
	// {
	// 	name: "Jane",
	// 	id: "@jane",
	// 	body: "I'm at a loss for words. This is amazing. I love it.",
	// 	img: "https://avatar.vercel.sh/jane",
	// },
	// {
	// 	name: "Jenny",
	// 	id: "@jenny",
	// 	body: "I'm at a loss for words. This is amazing. I love it.",
	// 	img: "https://avatar.vercel.sh/jenny",
	// },
	// {
	// 	name: "James",
	// 	id: "@james",
	// 	body: "I'm at a loss for words. This is amazing. I love it.",
	// 	img: "https://avatar.vercel.sh/james",
	// },

	{
		id: 1,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Jennifer Lawrence",
		img: ProfileAvatar,
		bgColor: "green",
	},
	{
		id: 2,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "David Okonkwo",
		img: ProfileAvatar,
		bgColor: "yellow",
	},
	{
		id: 3,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Sarah Mensah",
		img: ProfileAvatar,
		bgColor: "red",
	},
	{
		id: 4,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Michael Adebayo",
		img: ProfileAvatar,
		bgColor: "gray",
	},
	{
		id: 5,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Jennifer Lawrence",
		img: ProfileAvatar,
		bgColor: "green",
	},
	{
		id: 6,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "David Okonkwo",
		img: ProfileAvatar,
		bgColor: "yellow",
	},
	{
		id: 7,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Sarah Mensah",
		img: ProfileAvatar,
		bgColor: "red",
	},
	{
		id: 8,
		body: "I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Michael Adebayo",
		img: ProfileAvatar,
		bgColor: "gray",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const bgs = {
	yellow: "bg-[#EC9120]",
	red: "bg-[#E4212A]",
	green: "bg-[#0C6E5F]",
	gray: "bg-[#373535]",
};

const ReviewCard = ({
	img,
	name,
	body,
	bgColor,
}: {
	img: string;
	name: string;
	body: string;
	bgColor: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-72 cursor-pointer overflow-hidden rounded-xl p-6",
				"space-y-6 text-white",
				bgs[bgColor as keyof typeof bgs],
			)}
		>
			<blockquote className="text-base">{body}</blockquote>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
		</figure>
	);
};

export function CommunityReview() {
	return (
		<FadeIn className="bg-background container relative m-auto flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
			<Marquee className="[--duration:40s]">
				{firstRow.map(review => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<Marquee reverse className="[--duration:40s]">
				{secondRow.map(review => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-black"></div>
			<div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-black"></div>
		</FadeIn>
	);
}
