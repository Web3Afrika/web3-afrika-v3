// Single source of truth for site-wide SEO / entity facts.
// Used by the <Seo> component and the JSON-LD schema builders.

export const SITE_URL = "https://www.web3afrika.com";
export const SITE_NAME = "Web3 Afrika";
export const TWITTER_HANDLE = "@web3afrika";
export const LOCALE = "en_US";

export const DEFAULT_DESCRIPTION =
	"Web3 Afrika is a pan-African community empowering the next wave of Web3 builders through education, hackathons, mentorship, and events. Founded by Idris Olubisi.";

// 1200x630 social share image (see public/og-image.png).
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Canonical outbound profiles — reused as schema.org `sameAs` links.
export const ORG_SAME_AS = [
	"https://x.com/web3afrika",
	"https://twitter.com/web3afrika",
	"https://www.linkedin.com/company/web3afrika",
	"https://blog.web3afrika.com",
	"https://www.youtube.com/@web3afrika",
];

export const FOUNDER = {
	name: "Idris Olubisi",
	jobTitle: "Founder",
	sameAs: [
		"https://x.com/olanetsoft",
		"https://www.linkedin.com/in/idrisolubisi",
		"https://github.com/olanetsoft",
		"https://blog.idrisolubisi.com",
		"https://www.showwcase.com/olanetsoft",
	],
	knowsAbout: [
		"Web3",
		"Blockchain",
		"Smart Contracts",
		"Developer Relations",
		"Solidity",
		"Ethereum",
		"Decentralization",
	],
};

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
	if (/^https?:\/\//.test(path)) return path;
	return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
