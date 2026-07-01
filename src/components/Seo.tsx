import { Head } from "vite-react-ssg";
import {
	absoluteUrl,
	DEFAULT_DESCRIPTION,
	DEFAULT_OG_IMAGE,
	LOCALE,
	SITE_NAME,
	TWITTER_HANDLE,
} from "../lib/site";

interface SeoProps {
	/** Full <title> for the page (brand included). */
	title: string;
	description?: string;
	/** Site-relative path, e.g. "/about". Used for canonical + og:url. */
	path: string;
	/** Absolute or site-relative image URL for social cards. */
	image?: string;
	type?: "website" | "article" | "profile";
	/** Keep the page out of search indexes (e.g. redirect stubs). */
	noindex?: boolean;
}

/**
 * Per-page <head> tags: title, description, canonical, Open Graph and Twitter.
 * Rendered via vite-react-ssg's <Head> so the tags are baked into the
 * prerendered HTML (visible to search engines and AI crawlers without JS).
 */
export default function Seo({
	title,
	description = DEFAULT_DESCRIPTION,
	path,
	image = DEFAULT_OG_IMAGE,
	type = "website",
	noindex = false,
}: SeoProps) {
	const url = absoluteUrl(path);
	const ogImage = absoluteUrl(image);

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />
			{noindex && <meta name="robots" content="noindex, follow" />}

			{/* Open Graph */}
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:locale" content={LOCALE} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={TWITTER_HANDLE} />
			<meta name="twitter:creator" content={TWITTER_HANDLE} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />
		</Head>
	);
}
