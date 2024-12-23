import DiscordCommunityDark from "../assets/discord-dark.png";
import DiscordCommunity from "../assets/discord.png";
import XCommunityDark from "../assets/x-dark.png";
import XCommunity from "../assets/x.png";
import { useTheme } from "./ThemeToggle";

const CommunitySection = () => {
	const { darkMode } = useTheme();

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
				<div className="flex flex-col items-center space-y-2 rounded-xl pb-8 text-center shadow-md">
					<img
						src={darkMode ? XCommunityDark : XCommunity}
						alt="Community Gathering"
					/>
					<h3 className="text-2xl text-[#292929]">X (Formerly Twitter)</h3>
					<p className="p-2 text-[#757575]">
						Join our vibrant Discord server to engage in real-time discussions,
						network with experts, and stay updated on the latest Web3 trends.
					</p>
					<button className="rounded-full border border-[#0C6E5F] px-6 py-2 text-[#0C6E5F] shadow-sm transition duration-300 hover:bg-[#0A5A4E]">
						Join Community
					</button>
				</div>

				<div className="flex flex-col items-center space-y-2 rounded-xl pb-8 text-center shadow-md">
					<img
						src={darkMode ? DiscordCommunityDark : DiscordCommunity}
						alt="Online Meetup"
					/>
					<h3 className="text-2xl text-[#292929]">Discord</h3>
					<p className="p-2 text-[#757575]">
						Connect with our Telegram community for instant messaging, quick
						updates, and collaborative opportunities in the Web3 space.
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
