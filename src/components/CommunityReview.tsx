import { reviews } from "../constants";
import { cn } from "../util";
import { FadeIn } from "./FadeIn";
import { Marquee } from "./ui/Marquee";

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice((reviews.length / 3) * 2, reviews.length);
const thirdRow = reviews.slice(reviews.length / 3, (reviews.length / 3) * 2);

const bgs = {
	yellow: "bg-[#EC9120]",
	red: "bg-[#E4212A]",
	green: "bg-[#0C6E5F]",
	gray: "bg-[#373535]",
};

const ReviewCard = ({
	name,
	body,
	bgColor,
	image,
}: {
	name: string;
	body: string;
	bgColor: string;
	image?: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-fit w-full max-w-96 cursor-pointer overflow-hidden rounded-xl p-6",
				"space-y-3 self-center text-white",
				bgs[bgColor as keyof typeof bgs],
			)}
		>
			<q className="text-base">{body}</q>
			<div className="flex flex-row items-center gap-2">
				{/* <div className="size-8 rounded-full bg-white"></div> */}
				<div className="flex flex-row items-center gap-2">
					{image && (
						<img
							src={image}
							alt={`${name}'s profile`}
							className="h-8 w-8 rounded-full object-cover"
						/>
					)}
					<figcaption className="text-base font-medium dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
		</figure>
	);
};

export function CommunityReview() {
	return (
		<FadeIn className="bg-background container relative m-auto flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
			<Marquee className="[--duration:120s]">
				{firstRow.map(review => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<Marquee reverse className="[--duration:120s]">
				{secondRow.map(review => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<Marquee className="[--duration:100s]">
				{thirdRow.map(review => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-black"></div>
			<div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-black"></div>
		</FadeIn>
	);
}
