import { Head } from "vite-react-ssg";

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
					{JSON.stringify(block)}
				</script>
			))}
		</Head>
	);
}
