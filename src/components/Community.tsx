import { Discord, X } from "./icons";

const CommunitySection = () => {
	return (
		<div className="container mx-auto mb-16 px-6 py-4">
			<div className="mb-8 text-left">
				<h2 className="mb-4 text-4xl text-[#292929] dark:text-white">
					Join Our Community
				</h2>
				<p className="max-w-2xl text-[#757575]">
					Empowering African builders through hackathons, bounties, and
					opportunities to lead in the Web 3 revolution
				</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2">
				<div className="flex flex-col items-center space-y-2 rounded-xl p-8 text-center shadow-md">
					<X className="my-6 size-8 md:size-16" />
					<h3 className="text-base font-medium text-[#292929] md:text-2xl">
						X (Formerly Twitter)
					</h3>
					<p className="p-2 text-[#9E9E9E]">
						Empowering African builders through hackathons, bounties, and
						opportunities to lead in the Web 3 revolution
					</p>
					<button className="rounded-full border border-[#0C6E5F] px-6 py-2 text-[#0C6E5F] shadow-sm transition duration-300 hover:bg-[#0A5A4E]">
						Join Community
					</button>
				</div>

				<div className="flex flex-col items-center space-y-2 rounded-xl p-8 text-center shadow-md">
					<Discord className="my-6 size-8 md:size-16" />
					<h3 className="text-base font-medium text-[#292929] md:text-2xl">
						Discord
					</h3>
					<p className="p-2 text-[#9E9E9E]">
						Empowering African builders through hackathons, bounties, and
						opportunities to lead in the Web 3 revolution
					</p>
					<button className="rounded-full border border-[#0C6E5F] px-6 py-2 text-[#0C6E5F] shadow-sm transition duration-300 hover:bg-[#0A5A4E]">
						Join Community
					</button>
				</div>
			</div>
		</div>
	);
};

export default CommunitySection;
