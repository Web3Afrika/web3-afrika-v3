import Ajoke from "./assets/team/ajoke.png";
import Eniola from "./assets/team/eniola.png";
import Idris from "./assets/team/idris.png";
import Isaac from "./assets/team/isaac.jpeg";
import Jennifer from "./assets/team/jennifer.png";
import Joshua from "./assets/team/joshua.png";
import Kanayo from "./assets/team/kanayo.jpeg";
import Oluwabamikemi from "./assets/team/oluwabamikemi.png";
import Tony from "./assets/team/tony.png";

import HackathonImage1 from "./assets/hackathons/hackathon-1.jpeg";
import HackathonImage2 from "./assets/hackathons/hackathon-2.jpeg";
import HackathonImage3 from "./assets/hackathons/hackathon-3.jpeg";
import HackathonImage4 from "./assets/hackathons/hackathon-4.jpeg";

import ConferenceImage1 from "./assets/conferences/conference-1.jpeg";
import ConferenceImage2 from "./assets/conferences/conference-2.jpeg";
import ConferenceImage3 from "./assets/conferences/conference-3.jpeg";
import ConferenceImage4 from "./assets/conferences/conference-4.jpeg";

import Celo from "./assets/partners/celo.png";
import D_D from "./assets/partners/d_d.png";
import Web3Bridge from "./assets/partners/web3-bridge.png";
import Web3Gblobal from "./assets/partners/web3-global.png";

import ProfileAvatar from "./assets/profileAvatar.svg";

export const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/blog", label: "Blog" },
	{ href: "/events", label: "Events" },
];

export const QuickLinks = [
	{ label: "About Us", href: "/about" },
	{ label: "Blog", href: "/blog" },
	{ label: "Event", href: "/event" },
	{ label: "Contact Us", href: "/contact" },
	{ label: "Terms of Service", href: "/#" },
	{ label: "Cookies Settings", href: "/#" },
	{ label: "Affilate Policy", href: "/#" },
	{ label: "Privacy Policy", href: "/#" },
];

export const teamMembers = [
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

export const upcomingEvents = [
	{
		id: 1,
		name: "Contributing to Layer 1 Chains",
		platform: "Zoom Conference",
		link: "https://twitter.com/i/spaces/123456",
	},
	{
		id: 2,
		name: "Getting Started with Account Abstractions",
		platform: "Zoom Conference",
		link: "https://zoom.us/j/123456",
	},
	{
		id: 3,
		name: "Contributing to Layer 1 Chains",
		platform: "Zoom Conference",
		link: "https://meet.google.com/123-456-789",
	},
	{
		id: 4,
		name: "Building with ZK in your NextJS App ",
		platform: "Zoom Conference",
		link: "https://discord.gg/123456",
	},
	{
		id: 5,
		name: "Deep dive into Zero-Knowledge",
		platform: "Zoom Conference",
		link: "https://zoom.us/j/987654",
	},
	{
		id: 6,
		name: "Contributing to Layer 1 Chains",
		platform: "Zoom Conference",
		link: "https://twitter.com/i/spaces/987654",
	},
	{
		id: 7,
		name: "C-Exchange or D-Exchange",
		platform: "Twitter Space",
		link: "https://twitter.com/i/spaces/987654",
	},
];

export const hackathons = [
	{ id: 1, src: HackathonImage1 },
	{ id: 2, src: HackathonImage2 },
	{ id: 3, src: HackathonImage3 },
	{ id: 4, src: HackathonImage4 },
	{ id: 5, src: HackathonImage2 },
	{ id: 6, src: HackathonImage3 },
];

export const conferences = [
	{ id: 1, src: ConferenceImage1 },
	{ id: 2, src: ConferenceImage2 },
	{ id: 3, src: ConferenceImage3 },
	{ id: 4, src: ConferenceImage4 },
	{ id: 5, src: ConferenceImage1 },
	{ id: 6, src: ConferenceImage3 },
];

export const partners = [
	{ id: 1, name: "Partner 1", logo: Web3Gblobal },
	{ id: 2, name: "Partner 2", logo: Celo },
	{ id: 3, name: "Partner 3", logo: D_D },
	{ id: 4, name: "Partner 4", logo: Web3Bridge },
];

export const comments = [
	{
		id: 1,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Jennifer Lawrence",
		profile: ProfileAvatar,
		bgColor: "green",
	},
	{
		id: 2,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "David Okonkwo",
		profile: ProfileAvatar,
		bgColor: "yellow",
	},
	{
		id: 3,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Sarah Mensah",
		profile: ProfileAvatar,
		bgColor: "red",
	},
	{
		id: 4,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Michael Adebayo",
		profile: ProfileAvatar,
		bgColor: "gray",
	},
	{
		id: 5,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Jennifer Lawrence",
		profile: ProfileAvatar,
		bgColor: "green",
	},
	{
		id: 6,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "David Okonkwo",
		profile: ProfileAvatar,
		bgColor: "yellow",
	},
	{
		id: 7,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Sarah Mensah",
		profile: ProfileAvatar,
		bgColor: "red",
	},
	{
		id: 8,
		comment:
			"I really love the hackathons, I landed my dream role soon after I attended a technical workshop",
		name: "Michael Adebayo",
		profile: ProfileAvatar,
		bgColor: "gray",
	},
];
