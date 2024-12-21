import React from "react";
import TwitterIcon from "../assets/icons/x-logo.png";
import LinkedinIcon from "../assets/icons/linkedin-logo.png";
import Idris from "../assets/team/idris.png";
import Isaac from "../assets/team/isaac.png";
import Jennifer from "../assets/team/jennifer.png";
import Joshua from "../assets/team/joshua.png";
import Eniola from "../assets/team/eniola.png";
import Tony from "../assets/team/tony.png";
import Oluwabamikemi from "../assets/team/oluwabamikemi.png";
import Ajoke from "../assets/team/ajoke.png";
import Kanayo from "../assets/team/kanayo.png";

const TeamMemberCard = ({ image, name, role, twitterLink, linkedinLink }) => {
  return (
    <div className="flex flex-col items-start text-left space-y-8 border border-gray-200 dark:bg-[#0A0A0A] dark:border-0 p-4 mb-16 rounded-lg font-archivo">
      <img
        src={image}
        alt={name}
        className="w-13 h-13 object-cover rounded-lg"
      />
      <div className="space-y-2">
        <h3 className="text-xl text-[#292929]">{name}</h3>
        <p className="text-[#757575]">{role}</p>
        <div className="flex justify-start space-x-4 pt-4">
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
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
      <div className="text-start mb-12">
        <p className="text-sm text-[#9E9E9E] mb-4">Our Team</p>
        <h2 className="text-4xl text-[#292929] mb-4">
          Meet the Visionaries Driving Web3 Afrika Forward
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
