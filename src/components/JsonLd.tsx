import { Head } from "vite-react-ssg";

// Escape characters that could break out of the <script> tag when schema
// values contain untrusted text (e.g. blog titles from the RSS feed). The
// unicode escapes remain valid JSON, so parsers read the original characters.
function safeJsonLd(block: object): string {
	return JSON.stringify(block)
		.replace(/</g, "\\u003c")
		.replace(/>/g, "\\u003e")
		.replace(/&/g, "\\u0026");
}

/**
 * Injects a schema.org JSON-LD block into <head> (prerendered, so search
 * engines and AI answer engines can parse the entity data without running JS).
 * Pass a single schema object or an array of them.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
	const blocks = Array.isArray(data) ? data : [data];
	return (
		<Head>
			{blocks.map((block, i) => (
				<script key={i} type="application/ld+json">
					{safeJsonLd(block)}
				</script>
			))}
		</Head>
	);
}
