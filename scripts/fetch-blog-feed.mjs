// Build-time RSS snapshot.
// Fetches the Hashnode feed and writes a static JSON file so the /blog page
// renders real posts in the prerendered HTML (visible to crawlers & AI bots),
// instead of an empty section that only fills in after client-side JS runs.
//
// Safe by design: on any fetch/parse failure it keeps the existing snapshot
// rather than wiping it, so a transient outage never ships an empty blog page.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FEED_URL = "https://blog.web3afrika.com/rss.xml";
// Keep this >= the number of posts the site's RSS API returns, so every
// displayed post has a snapshot cover image to fall back on (see BlogHighlights).
const LIMIT = 20;
const OUT = join(
	dirname(fileURLToPath(import.meta.url)),
	"..",
	"src",
	"data",
	"blog-feed.json",
);

function decode(value = "") {
	return value
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;/g, "'")
		.replace(/&apos;/g, "'")
		.replace(/&amp;/g, "&")
		.trim();
}

function tag(block, name) {
	const match = block.match(
		new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"),
	);
	return match ? decode(match[1]) : "";
}

function stripHtml(value = "") {
	return value
		.replace(/<[^>]+>/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

function parse(xml) {
	const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
	return blocks
		.slice(0, LIMIT)
		.map(block => {
			const rawDescription = tag(block, "description");
			let image = "";
			const media =
				block.match(/<media:(?:content|thumbnail)[^>]*url="([^"]+)"/i) ||
				block.match(/<enclosure[^>]*url="([^"]+)"/i);
			if (media) {
				image = media[1];
			} else {
				const img = rawDescription.match(/<img[^>]*src="([^"]+)"/i);
				if (img) image = img[1];
			}
			return {
				title: tag(block, "title"),
				link: tag(block, "link"),
				pubDate: tag(block, "pubDate"),
				author: tag(block, "dc:creator") || "Web3 Afrika",
				description: stripHtml(rawDescription).slice(0, 220),
				image,
			};
		})
		.filter(item => item.title && item.link);
}

async function main() {
	let items = [];
	try {
		const res = await fetch(FEED_URL, {
			headers: {
				Accept: "application/rss+xml, application/xml, text/xml",
				"User-Agent": "Web3Afrika-Build-RSS/1.0",
			},
			signal: AbortSignal.timeout(15000),
		});
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		items = parse(await res.text());
	} catch (err) {
		console.warn(`[fetch-blog-feed] fetch failed: ${err.message}`);
	}

	if (items.length === 0) {
		try {
			const existing = JSON.parse(await readFile(OUT, "utf8"));
			if (existing.items?.length) {
				console.log(
					`[fetch-blog-feed] keeping existing snapshot (${existing.items.length} posts)`,
				);
				return;
			}
		} catch {
			// no usable existing snapshot
		}
		// No fresh posts AND no committed snapshot to fall back on: fail the build
		// loudly rather than silently shipping a blog with zero posts.
		console.error(
			"[fetch-blog-feed] no posts fetched and no existing snapshot — failing build.",
		);
		process.exit(1);
	}

	await mkdir(dirname(OUT), { recursive: true });
	await writeFile(
		OUT,
		`${JSON.stringify({ fetchedAt: new Date().toISOString(), items }, null, 2)}\n`,
	);
	console.log(`[fetch-blog-feed] wrote ${items.length} posts to ${OUT}`);
}

main();
