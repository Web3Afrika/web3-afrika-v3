import React from "react";
import XCommunity from "../assets/x.png";
import XCommunityDark from "../assets/x-dark.png";
import DiscordCommunityDark from "../assets/discord-dark.png";
import DiscordCommunity from "../assets/discord.png";
import { useTheme } from "./ThemeToggle";

const CommunitySection = () => {

  const { darkMode } = useTheme();

  return (
    <div className="container mx-auto px-6 py-4 mb-16 font-archivo">
      <div className="text-left mb-8">
        <h2 className="text-4xl text-[#292929] dark:text-white mb-4">Join Our Community</h2>
        <p className="text-[#757575] max-w-2xl">
          Empowering African builders through hackathons, bounties, and
          opportunities to lead in the Web 3 revolution
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center space-y-2 rounded-xl shadow-md pb-8">
          <img src={darkMode ? XCommunityDark : XCommunity} alt="Community Gathering" />
          <h3 className="text-2xl text-[#292929]">X (Formerly Twitter)</h3>
          <p className="text-[#757575] p-2">
            Join our vibrant Discord server to engage in real-time discussions,
            network with experts, and stay updated on the latest Web3 trends.
          </p>
          <button className="text-[#0C6E5F] border border-[#0C6E5F] px-6 py-2 rounded-full hover:bg-[#0A5A4E] transition duration-300 shadow-sm">
            Join Community
          </button>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 rounded-xl shadow-md pb-8">
          <img src={darkMode ? DiscordCommunityDark : DiscordCommunity} alt="Online Meetup" />
          <h3 className="text-2xl text-[#292929]">Discord</h3>
          <p className="text-[#757575] p-2">
            Connect with our Telegram community for instant messaging, quick
            updates, and collaborative opportunities in the Web3 space.
          </p>
          <button className="text-[#0C6E5F] border border-[#0C6E5F] px-6 py-2 rounded-full hover:bg-[#0A5A4E] transition duration-300 shadow-sm">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
