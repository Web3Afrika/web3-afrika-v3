// schema.org JSON-LD builders. Kept data-driven from src/constants.ts so the
// structured data stays in sync with what's rendered on the page.
import { teamMembers, upcomingEvents } from "../constants";
import {
	absoluteUrl,
	DEFAULT_DESCRIPTION,
	FOUNDER,
	ORG_SAME_AS,
	SITE_NAME,
	SITE_URL,
} from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#idris-olubisi`;

/** The organization entity — emitted site-wide. */
export function organizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": ["Organization", "EducationalOrganization"],
		"@id": ORG_ID,
		name: SITE_NAME,
		alternateName: "Web3Afrika",
		url: SITE_URL,
		logo: absoluteUrl("/web3afrika-logo.png"),
		image: absoluteUrl("/og-image.png"),
		description: DEFAULT_DESCRIPTION,
		slogan: "Empowering African Web3 Builders",
		areaServed: "Africa",
		knowsAbout: [
			"Web3",
			"Blockchain",
			"Smart Contracts",
			"Developer education",
			"Hackathons",
		],
		sameAs: ORG_SAME_AS,
		founder: { "@id": FOUNDER_ID },
		member: teamMembers.map(m =>
			// Reference the founder's canonical Person node (defined by
			// founderSchema) instead of duplicating it as an anonymous member.
			m.name === FOUNDER.name
				? { "@id": FOUNDER_ID }
				: {
						"@type": "Person",
						name: m.name,
						jobTitle: m.role,
						sameAs: [m.twitterLink, m.linkedinLink].filter(Boolean),
					},
		),
	};
}

/** The website entity — emitted site-wide. */
export function websiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": WEBSITE_ID,
		name: SITE_NAME,
		url: SITE_URL,
		inLanguage: "en",
		publisher: { "@id": ORG_ID },
	};
}

/** Founder (Idris Olubisi) — drives person/knowledge-panel results. */
export function founderSchema() {
	const idris = teamMembers.find(m => m.name === FOUNDER.name);
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": FOUNDER_ID,
		name: FOUNDER.name,
		jobTitle: FOUNDER.jobTitle,
		description:
			"Founder of Web3 Afrika, software engineer, and developer relations expert championing Web3 education and inclusion across Africa.",
		...(idris ? { image: absoluteUrl(idris.image) } : {}),
		url: "https://blog.idrisolubisi.com",
		worksFor: { "@id": ORG_ID },
		knowsAbout: FOUNDER.knowsAbout,
		sameAs: FOUNDER.sameAs,
	};
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map(f => ({
			"@type": "Question",
			name: f.question,
			acceptedAnswer: { "@type": "Answer", text: f.answer },
		})),
	};
}

/** Events page: a valid ItemList of workshops/spaces (no invented dates). */
export function eventsListSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Web3 Afrika Events, Workshops & Spaces",
		itemListElement: upcomingEvents.map((e, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: e.name,
			url: e.link,
		})),
	};
}

/** Blog page: an ItemList of the latest posts, linking to Hashnode. */
export function blogListSchema(posts: { title: string; link: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Web3 Afrika Blog",
		itemListElement: posts.map((p, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: p.title,
			url: p.link,
		})),
	};
}
