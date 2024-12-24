import Ajoke from "../assets/team/ajoke.png";
import Eniola from "../assets/team/eniola.png";
import Idris from "../assets/team/idris.png";
import Isaac from "../assets/team/isaac.jpeg";
import Jennifer from "../assets/team/jennifer.png";
import Joshua from "../assets/team/joshua.png";
import Kanayo from "../assets/team/kanayo.jpeg";
import Oluwabamikemi from "../assets/team/oluwabamikemi.png";
import Tony from "../assets/team/tony.png";
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
		<div className="flex size-72 flex-col items-start space-y-8 rounded-lg border border-gray-200 p-4 text-left dark:border-0 dark:bg-[#0A0A0A]">
			<img
				src={image}
				alt={name}
				className="size-24 rounded-lg object-cover grayscale"
			/>
			<div className="space-y-2">
				<h3 className="text-xl text-[#292929]">{name}</h3>
				<p className="text-[#757575]">{role}</p>
				<div className="flex justify-start space-x-4 pt-4">
					<a
						href={twitterLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex size-10 items-center justify-center rounded-md border transition hover:opacity-75"
					>
						<X />
					</a>
					<a
						href={linkedinLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex size-10 items-center justify-center rounded-md border transition hover:opacity-75"
					>
						<LinkedIn />
					</a>
				</div>
			</div>
		</div>
	);
};

const TeamSection = () => {
	const teamMembers = [
		{
			name: "Idris Olubisi",
			role: "Founder",
			image: Idris,
			twitterLink: "https://x.com/olanetsoft",
			linkedinLink: "https://www.linkedin.com/in/idrisolubisi",
		},
		{
			name: "Isaac Zara",
			role: "Design Lead",
			image: Isaac,
			twitterLink: "https://x.com/isaaczara_",
			linkedinLink: "https://www.linkedin.com/in/isaac-zara",
		},
		{
			name: "Jennifer Echenim",
			role: "Tech Lead",
			image: Jennifer,
			twitterLink: "https://x.com/jenniferechenim",
			linkedinLink: "https://www.linkedin.com/in/jennifer-echenim",
		},
		{
			name: "Joshua Omobola",
			role: "Developer Relations",
			image: Joshua,
			twitterLink: "https://twitter.com/joshua_omobola",
			linkedinLink: "https://www.linkedin.com/in/joshua-omobola",
		},
		{
			name: "Eniola Mercy",
			role: "Community Manager",
			image: Eniola,
			twitterLink: "https://x.com/Eniolamercy10",
			linkedinLink: "https://www.linkedin.com/in/eniola-mercy",
		},
		{
			name: "Tony Olendo",
			role: "Partnerships",
			image: Tony,
			twitterLink: "https://twitter.com/tony_olendo",
			linkedinLink: "https://www.linkedin.com/in/tony-olendo",
		},
		{
			name: "Oluwabamikemi",
			role: "Community Manager",
			image: Oluwabamikemi,
			twitterLink: "https://x.com/oluwabamikemi",
			linkedinLink: "https://www.linkedin.com/in/oluwabamikemi",
		},
		{
			name: "Ajoke Asunmonu",
			role: "Partnerships",
			image: Ajoke,
			twitterLink: "https://x.com/ajokeasunmonu",
			linkedinLink: "https://www.linkedin.com/in/ajoke-asunmonu",
		},
		{
			name: "Kanayo Uzo",
			role: "Experience Designer",
			image: Kanayo,
			twitterLink: "https://x.com/kanayouzo",
			linkedinLink: "https://www.linkedin.com/in/kanayo-uzo",
		},
	];

	return (
		<div className="container mx-auto px-6 py-16">
			<div className="mb-12 text-start">
				<p className="mb-4 text-sm text-[#9E9E9E]">Our Team</p>
				<h2 className="mb-4 text-4xl text-[#292929]">
					Meet the Visionaries Driving Web3 Afrika Forward
				</h2>
			</div>
			<div className="grid w-fit grid-cols-2 gap-8 md:grid-cols-3">
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
