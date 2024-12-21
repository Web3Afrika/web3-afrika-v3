import CommunityVoices from "../assets/community.png";
import CommunityVoicesDark from "../assets/community-dark.png";
import { useTheme } from "./ThemeToggle";

const CommunityVoice = () => {
  const { darkMode } = useTheme();

  return (
    <>
      <section className="container mx-auto px-6 py-16 font-archivo">
        <div className="mb-8">
          <h2 className="text-2xl dark:text-[#5D5D5D] mb-2">
            Voices of Innovation: What Our Community Says
          </h2>
          <p className="text-gray-600 dark-[#9E9E9E] text-lg">
            Hear from the builders, creators, and pioneers across Africa and the
            diaspora who are driving change, <br />
            breaking barriers, and shaping the future of Web 3 with Web 3 Afrika
          </p>
          <div className="mt-4">
            <img
              src={darkMode ? CommunityVoicesDark : CommunityVoices}
              alt="Community"
              className="w-full h-full mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityVoice;
