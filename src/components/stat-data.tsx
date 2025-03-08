import React from "react";
import { cn } from "../util";
import { FadeIn, FadeInStagger } from "./FadeIn";
import CountUp from "./count-up";

const descriptionWidths = {
	sm: "max-w-[200px]",
	md: "max-w-[250px]",
} as const;

const StatCard = ({
	value,
	prefix,
	suffix,
	description,
	descriptionWidth,
}: {
	value: React.ReactNode;
	prefix?: string;
	suffix?: string;
	description: string;
	descriptionWidth: keyof typeof descriptionWidths;
}) => (
	<div className="rounded-lg bg-[#FAFAFA] py-12 dark:bg-[#121212]">
		<h3 className="mb-4 flex h-12 items-center justify-center overflow-clip text-6xl font-medium text-[#7A7A7A] md:h-20 md:text-8xl">
			{prefix}
			{value}
			{suffix}
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
						// prefix="$"
						suffix="+"
						value={<CountUp limit={3000} format="(dd).d" />}
						description="Developer community members across Africa"
						descriptionWidth="sm"
					/>
				</FadeIn>
				<FadeIn>
					<StatCard
						// prefix="$"
						suffix="+"
						value={<CountUp limit={12500} format="(dd)" />}
						description="Community members across all platforms"
						descriptionWidth="sm"
					/>
				</FadeIn>
				<FadeIn>
					<StatCard
						suffix="K+"
						value={<CountUp limit={7} format="(dd)" />}
						description="Builders in attendance for hackathons and events"
						descriptionWidth="md"
					/>
				</FadeIn>
			</div>
		</FadeInStagger>
	);
};

export default StatData;
