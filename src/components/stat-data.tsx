import { cn } from "../util";
import { FadeIn, FadeInStagger } from "./FadeIn";

const descriptionWidths = {
	sm: "max-w-[200px]",
	md: "max-w-[250px]",
} as const;

const StatCard = ({
	value,
	description,
	descriptionWidth,
}: {
	value: string;
	description: string;
	descriptionWidth: keyof typeof descriptionWidths;
}) => (
	<div className="rounded-lg bg-[#FAFAFA] py-10 dark:bg-[#121212]">
		<h3 className="mb-4 text-6xl font-medium text-[#7A7A7A] md:text-8xl">
			{value}
		</h3>
		<p
			className={cn(
				"mx-auto w-fit max-w-[200px] text-sm text-[#666666]",
				descriptionWidths[descriptionWidth],
			)}
		>
			{description}
		</p>
	</div>
);

const StatData = () => {
	return (
		<FadeInStagger>
			<div className="grid w-full grid-cols-1 gap-8 text-center md:mb-16 md:grid-cols-3">
				<FadeIn>
					<StatCard
						value="$21.5K"
						description="Fundraising achieved through strategic partnerships"
						descriptionWidth="sm"
					/>
				</FadeIn>
				<FadeIn>
					<StatCard
						value="$1M+"
						description="achieved through strategic partnerships"
						descriptionWidth="sm"
					/>
				</FadeIn>
				<FadeIn>
					<StatCard
						value="7000+"
						description="Builers in attendance for hackathons and events"
						descriptionWidth="md"
					/>
				</FadeIn>
			</div>
		</FadeInStagger>
	);
};

export default StatData;
