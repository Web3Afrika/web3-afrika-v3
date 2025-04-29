// vite.config.js (or .ts)
import react from "@vitejs/plugin-react"; // Assuming you're using React
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()], // Include other plugins you use
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000", // Matches the port in your api-dev-server.ts
				changeOrigin: true, // Correctly handles CORS issues by changing the origin header
				rewrite: path => path.replace(/^\/api/, "/api"), // Ensures the /api path is included in the forwarded request URL
			},
		},
	},
});
