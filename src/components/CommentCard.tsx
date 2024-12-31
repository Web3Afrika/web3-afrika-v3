import React from "react";

interface CommentCardProps {
	comment: string;
	name: string;
	profile: string;
	bgColor: "yellow" | "red" | "green" | "gray";
}

const CommentCard: React.FC<CommentCardProps> = ({
	comment,
	name,
	profile,
	bgColor,
}) => {
	const getBgColor = () => {
		switch (bgColor) {
			case "yellow":
				return { backgroundColor: "#EC9120" };
			case "red":
				return { backgroundColor: "#E4212A" };
			case "green":
				return { backgroundColor: "#0C6E5F" };
			case "gray":
				return { backgroundColor: "#373535" };
			default:
				return { backgroundColor: "#EC9120" };
		}
	};

	return (
		<div className="h-42 w-72 overflow-hidden rounded-lg" style={getBgColor()}>
			<div className="h-24 px-4 pt-4">
				<p className="text-center text-base text-white">
					{" "}
					&ldquo;{comment}&rdquo;
				</p>
			</div>
			<div className="flex items-center justify-center px-4 py-6">
				<div className="flex items-center gap-3">
					<div className="relative h-8 w-8 overflow-hidden rounded-full">
						<img
							src={profile}
							alt={name}
							className="h-full w-full object-cover"
						/>
					</div>
					<span className="text-lg">{name}</span>
				</div>
			</div>
		</div>
	);
};

export default CommentCard;
