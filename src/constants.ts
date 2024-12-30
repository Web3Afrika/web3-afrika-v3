import Ajoke from "./assets/team/ajoke.png";
import Eniola from "./assets/team/eniola.png";
import Idris from "./assets/team/idris.png";
import Isaac from "./assets/team/isaac.jpeg";
import Jennifer from "./assets/team/jennifer.png";
import Joshua from "./assets/team/joshua.png";
import Kanayo from "./assets/team/kanayo.jpeg";
import Oluwabamikemi from "./assets/team/oluwabamikemi.png";
import Tony from "./assets/team/tony.png";

import ArticleImage1 from "./assets/blog/blog-1.png";
import ArticleImage2 from "./assets/blog/blog-2.png";
import ArticleImage3 from "./assets/blog/blog-3.png";

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

export const sampleArticles = [
	{
		id: 1,
		title: "Demystifying Consensus Mechanism: A comprehensive Guide",
		content:
			"The consensus mechanism is a crucial concept in the world of blockchain technology, and it can vary widely depending on the specific use case or application.",
		author: "Franklin Ohaegbulam",
		date: "March 15, 2024",
		authorAvatar: "/api/placeholder/32/32",
		imageUrl: ArticleImage1,
		link: "/articles/future-web-development",
		bg: "bg-[#000000]",
	},
	{
		id: 2,
		title: "Why is the Hard Drive for Blockchain and Internet Known as IPFS",
		content:
			"Explore the hackathons, bounties, and events that have empowered African innovators, fostered connections, and driven Web 3 education and growth worldwide.",
		author: "Vinyl Davyl",
		date: "March 18, 2024",
		authorAvatar: "/api/placeholder/32/32",
		imageUrl: ArticleImage2,
		link: "/articles/mastering-tailwind",
		bg: "bg-[#EC9120]",
	},
	{
		id: 3,
		title: "A dive into the world of decentralized finance in Africa.",
		content:
			"Learn the essential best practices for building large-scale React applications that are maintainable, performant, and easy to test.",
		author: "Franklin Ohaegbulam",
		date: "March 20, 2024",
		authorAvatar: "/api/placeholder/32/32",
		imageUrl: ArticleImage3,
		link: "/articles/scalable-react-apps",
		bg: "bg-[#0C6E5F]",
	},
];
