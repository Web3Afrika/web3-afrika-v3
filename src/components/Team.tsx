import { teamMembers } from "../constants";
import { LinkedIn, X } from "./icons";

const TeamMemberCard = ({
	image,
	name,
	role,
	twitterLink,
	linkedinLink,
}: {
	image: string;
	name: string;
	role: string;
	twitterLink: string;
	linkedinLink: string;
}) => {
	return (
		<div className="w-full items-start space-y-4 rounded-lg border border-gray-200 p-3 text-left dark:border-0 dark:bg-[#0A0A0A] md:p-6">
			{/* <img
				src={image}
				alt={name}
				className="size-24 rounded-lg object-cover grayscale"
			/> */}
			<div className="size-16 rounded-lg bg-gray-200 dark:bg-gray-800 md:size-24">
				<img
					src={image}
					alt={name}
					className="size-16 rounded-lg object-cover md:size-24"
				/>
			</div>
			<div className="space-y-1.5">
				<h3 className="text-sm font-medium text-[#292929] dark:text-[#FFFFFF] md:text-2xl">
					{name}
				</h3>
				<p className="text-xs text-[#757575] dark:text-[#9E9E9E] md:text-2xl">
					{role}
				</p>
			</div>
			<div className="flex space-x-4">
				<a
					href={twitterLink}
					target="_blank"
					rel="noopener noreferrer"
					className="flex size-8 items-center justify-center rounded-md border transition hover:opacity-75 dark:border-[#121212] dark:bg-[#121212] md:size-10"
				>
					<X />
				</a>
				<a
					href={linkedinLink}
					target="_blank"
					rel="noopener noreferrer"
					className="flex size-8 items-center justify-center rounded-md border transition hover:opacity-75 dark:border-[#121212] dark:bg-[#121212] md:size-10"
				>
					<LinkedIn />
				</a>
			</div>
		</div>
	);
};

const TeamSection = () => {
	return (
		<div className="container mx-auto space-y-6 px-6 py-16 md:space-y-12">
			<div className="space-y-2 text-start md:space-y-4">
				<p className="text-sm text-[#9E9E9E] md:text-base">Our Team</p>
				<h2 className="max-w-3xl text-xl text-[#292929] dark:text-[#E5E4E4] md:text-5xl">
					Meet the Visionaries Driving Web3 Afrika Forward
				</h2>
			</div>
			<div className="grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
				{teamMembers.map((member, index) => (
					<TeamMemberCard
						key={index}
						name={member.name}
						role={member.role}
						image={member.image}
						twitterLink={member.twitterLink}
						linkedinLink={member.linkedinLink}
					/>
				))}
			</div>
		</div>
	);
};

export default TeamSection;
