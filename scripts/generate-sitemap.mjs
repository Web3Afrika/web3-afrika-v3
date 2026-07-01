// Generates public/sitemap.xml at build time so <lastmod> stays current.
// Routes are static; /discord is a redirect and is intentionally excluded.
import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://www.web3afrika.com";
const OUT = join(
	dirname(fileURLToPath(import.meta.url)),
	"..",
	"public",
	"sitemap.xml",
);

const routes = [
	{ path: "/", changefreq: "weekly", priority: "1.0" },
	{ path: "/about", changefreq: "monthly", priority: "0.9" },
	{ path: "/events", changefreq: "weekly", priority: "0.8" },
	{ path: "/blog", changefreq: "daily", priority: "0.8" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const urls = routes
	.map(
		r =>
			`  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
	)
	.join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

await writeFile(OUT, xml);
console.log(
	`[generate-sitemap] wrote ${routes.length} URLs (lastmod ${lastmod})`,
);
