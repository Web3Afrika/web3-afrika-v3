import { IncomingMessage, ServerResponse } from "http";
import { parseStringPromise } from "xml2js";

interface ServerlessResponse extends ServerResponse {
	status: (statusCode: number) => ServerlessResponse;
	json: (body: Record<string, unknown>) => void;
}

type ApiHandler = (
	req: IncomingMessage,
	res: ServerlessResponse,
) => Promise<void> | void;

const handler: ApiHandler = async (req, res) => {
	const targetUrl = "https://blog.web3afrika.com/rss.xml";

	try {
		const response = await fetch(targetUrl, {
			method: "GET",
			headers: {
				Accept: "application/xml, application/rss+xml, text/xml",
				"User-Agent": "Web3Afrika-Website-RSS-Fetcher/1.0",
			},
			signal: AbortSignal.timeout(15000),
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch RSS feed: Status ${response.status}`);
		}

		const xmlText = await response.text();

		if (
			!xmlText.trim().startsWith("<") ||
			(!xmlText.includes("<rss") &&
				!xmlText.includes("<channel") &&
				!xmlText.includes("<feed"))
		) {
			throw new Error("Received invalid content from RSS source");
		}

		// Handle OPTIONS preflight requests
		if (req.method === "OPTIONS") {
			res.status(200).end();
			return;
		}

		// Add caching
		res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=1800");

		const jsonData = await parseStringPromise(xmlText);

		const filteredItems = jsonData.rss.channel[0].item.map(item => ({
			id: item.guid[0]._,
			title: item.title[0] || "Untitled Article",
			link: item.link[0] || "#",
			date: item.pubDate[0],
			content: item.description ? item.description[0] : "",
			author: item["dc:creator"] ? item["dc:creator"][0] : "Unknown Author",
			imageUrl: item["hashnode:coverImage"]
				? item["hashnode:coverImage"][0]
				: "",
		}));

		res.status(200).json(filteredItems);
	} catch (error: unknown) {
		if (!res.headersSent) {
			res.status(500).json({
				message: "Failed to fetch RSS feed",
				error: error instanceof Error ? error.message : String(error),
			});
		} else if (!res.finished) {
			res.end();
		}
	}
};

export default handler;
