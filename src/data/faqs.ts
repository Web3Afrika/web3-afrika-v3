// Answer-shaped Q&A used by both the visible FAQ section and the FAQPage
// JSON-LD. Written so AI answer engines can quote them directly.
// NOTE: community numbers mirror the on-site stat cards — update in one place
// (src/components/stat-data.tsx) if these change.

export interface Faq {
	question: string;
	answer: string;
}

export const faqs: Faq[] = [
	{
		question: "What is Web3 Afrika?",
		answer:
			"Web3 Afrika is a pan-African community and education platform that helps Africans learn, build, and lead in Web3. Through workshops, hackathons, mentorship, and events, it equips developers and creators with the skills, opportunities, and network to thrive in blockchain, DeFi, and the decentralized economy.",
	},
	{
		question: "Who founded Web3 Afrika?",
		answer:
			"Web3 Afrika was founded by Idris Olubisi (also known as Olanetsoft), a software engineer and developer relations expert widely recognized as one of the leading Web3 voices in Nigeria and Africa. It is built alongside co-founder Tony Olendo and a distributed team across the continent.",
	},
	{
		question: "What does Web3 Afrika do?",
		answer:
			"Web3 Afrika runs technical workshops, hackathons, bounties, X (Twitter) Spaces, and community events; produces educational content and a blog; and connects African builders with global Web3 ecosystems, partners, and career opportunities.",
	},
	{
		question: "How big is the Web3 Afrika community?",
		answer:
			"Web3 Afrika has grown to more than 12,500 community members across its platforms, including over 2,100 developers across Africa, and has hosted thousands of builders at hackathons and events.",
	},
	{
		question: "Where is Web3 Afrika based?",
		answer:
			"Web3 Afrika is a pan-African community serving builders across the continent and its diaspora, with in-person events held in hubs such as Lagos, Nigeria.",
	},
	{
		question: "Which ecosystems and partners does Web3 Afrika work with?",
		answer:
			"Web3 Afrika has collaborated with leading Web3 ecosystems and organizations including Arbitrum, Polygon, Scroll, Celo, Ethereum, Developer DAO, Web3Bridge, and many others to deliver events, hackathons, and educational programs across Africa.",
	},
	{
		question: "How can I join Web3 Afrika?",
		answer:
			"You can join the Web3 Afrika community on Discord and follow @web3afrika on X (Twitter) to access workshops, hackathons, Spaces, and events. Community participation and most educational content are free and open to everyone.",
	},
];
