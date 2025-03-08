import { cn } from "../util";
import { Cursor } from "./icons";

export const Clicker = ({
	title,
	fill,
	className,
	bottomCursor,
}: {
	title: string;
	fill: string;
	className?: string;
	bottomCursor?: boolean;
}) => (
	<div className={cn(className)}>
		<div className="relative">
			<Cursor
				className={cn(
					"absolute -left-4",
					bottomCursor
						? "bottom-0 top-7 -rotate-[55deg] transform"
						: "-top-2.5",
				)}
				fill={fill}
			/>
			<div
				className={cn(
					"w-fit rounded p-2 py-1.5 text-sm text-white",
					bottomCursor ? "rounded-bl-[1px]" : "rounded-tl-[1px]",
				)}
				style={{ backgroundColor: fill }}
			>
				{title}
			</div>
		</div>
	</div>
);
