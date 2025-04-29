/* eslint-disable @typescript-eslint/no-explicit-any */
// File: api/rss.ts
import { IncomingMessage, ServerResponse } from "http";

// Note: Assuming 'fetch' and 'AbortSignal' are available in your serverless environment (Node.js 18+).
// If not, you would need to install and import 'node-fetch'.

// Interface extending ServerResponse with common serverless helper methods
// The setHeader method is inherited from ServerResponse and returns void, so we don't list it here.
interface ServerlessResponse extends ServerResponse {
	status: (statusCode: number) => ServerlessResponse; // Method for setting status code and allowing chaining
	send: (body: string | Buffer | any) => void; // Method for sending response body
	json: (body: any) => void; // Method for sending JSON response
	// setHeader inherited from ServerResponse<IncomingMessage> returns void
	// end() is inherited from ServerResponse and handles closing the connection
}

// Define the type for your API handler function
// It should return void or a Promise resolving to void
type ApiHandler = (
	req: IncomingMessage,
	res: ServerlessResponse,
) => Promise<void> | void;

const handler: ApiHandler = async (req, res) => {
	const targetUrl: string = "https://blog.web3afrika.com/rss.xml";

	try {
		const response: Response = await fetch(targetUrl, {
			method: "GET",
			headers: {
				Accept: "application/xml, application/rss+xml, text/xml",
				"User-Agent": "Web3Afrika-Website-RSS-Fetcher/1.0", // Good practice to identify your bot/fetcher
			},
			signal: AbortSignal.timeout(15000), // 15 seconds timeout
		});

		if (!response.ok) {
			console.error(
				`API Route: Failed to fetch RSS. Status: ${response.status}`,
			);
			throw new Error(`Failed to fetch RSS feed: Status ${response.status}`);
		}

		const xmlText: string = await response.text();

		if (
			!xmlText.trim().startsWith("<") ||
			(!xmlText.includes("<rss") &&
				!xmlText.includes("<channel") &&
				!xmlText.includes("<feed"))
		) {
			console.error("API Route: Fetched content doesn't look like XML/RSS.");
			throw new Error("Received invalid content from RSS source");
		}

		// Set CORS headers
		// IMPORTANT: Be more specific than '*' for Access-Control-Allow-Origin in production if possible
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type");

		// Handle potential OPTIONS preflight requests
		if (req.method === "OPTIONS") {
			res.status(200).end(); // Call the methods
			return; // Explicitly return void after sending the response
		}

		// Set the Content-Type header
		res.setHeader("Content-Type", "application/xml; charset=utf-8");

		// Add caching - Vercel respects Cache-Control headers
		res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=1800"); // Cache for 10 min, allow stale for 30 min

		// Send the fetched XML content
		res.status(200).send(xmlText);
		return; // Explicitly return void after sending the response
	} catch (error: any) {
		// Use 'any' or a more specific error type if known (e.g., Error)
		console.error("API Route: Error fetching RSS feed:", error); // Keep this general error log

		if (!res.headersSent) {
			// Ensure CORS headers are set even on error responses if not already sent
			// IMPORTANT: Be more specific than '*' for Access-Control-Allow-Origin in production
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
			res.setHeader("Access-Control-Allow-Headers", "Content-Type");

			res.status(500).json({
				message: "Failed to fetch RSS feed",
				error: error instanceof Error ? error.message : String(error),
			});
		} else {
			// If headers were already sent, just ensure the response is closed.
			if (!res.finished) {
				res.end();
			}
		}
		return; // Explicitly return void after handling the error
	}
};

export default handler;
