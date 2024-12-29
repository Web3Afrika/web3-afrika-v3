import { cn } from "../util";

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
	<div className="rounded-lg bg-[#FAFAFA] py-10 dark:bg-black">
		<h3 className="mb-4 text-8xl font-medium text-[#7A7A7A]">{value}</h3>
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
		<div className="mb-16 grid w-full grid-cols-1 gap-8 text-center md:grid-cols-3">
			<StatCard
				value="$1M+"
				description="Fundraising achieved through strategic partnerships"
				descriptionWidth="sm"
			/>
			<StatCard
				value="$1M+"
				description="achieved through strategic partnerships"
				descriptionWidth="sm"
			/>
			<StatCard
				value="5000"
				description="Builers in attendance for hackathons and events"
				descriptionWidth="md"
			/>
		</div>
	);
};

export default StatData;
