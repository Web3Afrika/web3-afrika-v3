/* eslint-disable @typescript-eslint/no-explicit-any */
// server.ts
import http, { IncomingMessage, ServerResponse } from "http";
import { parse, UrlWithParsedQuery } from "url";

// Import your API route handler
// Adjust the path based on where your api/rss.ts file is
// If your api/rss.ts file exports the handler using 'export default',
// you can import it like this.
// Note: When running with ts-node or after compilation, the import path
// might still need to refer to the compiled '.js' file depending on setup.
// For standard ts-node, './api/rss' often works if it's an index.ts or rss.ts file.
import rssHandler from "./api/rss";

const PORT: number = 3000; // Specify the type as number

// Define a type for your handler function if you haven't already in api/rss.ts
// This matches the typical signature for Node.js http handlers or Vercel serverless functions
type ApiRouteHandler = (
	req: IncomingMessage,
	res: ServerResponse,
) => Promise<void> | void;

const server = http.createServer(
	async (req: IncomingMessage, res: ServerResponse) => {
		// Add type annotation and handle potential undefined req.url
		const parsedUrl: UrlWithParsedQuery = parse(req.url || "", true);
		const pathname: string | null = parsedUrl.pathname; // pathname can be null

		// Check if the request is for your RSS API route
		if (pathname === "/api/rss") {
			// Simulate the request/response objects expected by your handler
			// Add type annotations to the simulated objects to align with ApiRouteHandler
			const apiReq: IncomingMessage = req; // Often the original req object is sufficient

			// Simulate Vercel/Next.js like response object methods by extending ServerResponse
			// Note: This is a simplified simulation. For full type safety matching
			// frameworks like Next.js, you might need their specific types (e.g., NextApiResponse).
			const apiRes = res as ServerResponse & {
				status?: (code: number) => typeof apiRes; // Add status method simulation
				send?: (data: string | Buffer | any) => void; // Add send method simulation
				json?: (data: any) => void; // Add json method simulation
			};

			// Add implementations for the simulated methods if they don't exist on the native res object
			if (!apiRes.status) {
				apiRes.status = (code: number) => {
					apiRes.statusCode = code;
					return apiRes; // Allow chaining
				};
			}
			if (!apiRes.send) {
				apiRes.send = (data: string | Buffer | any) => {
					res.end(data);
				};
			}
			if (!apiRes.json) {
				apiRes.json = (data: any) => {
					res.setHeader("Content-Type", "application/json");
					res.end(JSON.stringify(data));
				};
			}

			try {
				// Cast the imported handler to the defined type
				await (rssHandler as ApiRouteHandler)(apiReq, apiRes);
			} catch (error: any) {
				// Use 'any' or a more specific error type if known
				console.error("Error in API handler:", error); // Keep this log for debugging handler errors
				if (!res.headersSent) {
					res.setHeader("Content-Type", "application/json");
					res.statusCode = 500;
					res.end(
						JSON.stringify({
							message: "Internal Server Error",
							error: error.message,
						}),
					); // Include error message
				} else {
					res.end(); // Ensure response is ended even if headers were sent
				}
			}
		} else {
			// If not an API route, return 404
			res.statusCode = 404;
			res.end("Not Found");
		}
	},
);

server.listen(PORT, () => {
	console.log(`API development server listening on port ${PORT}`); // Keep this log to confirm server start
});
