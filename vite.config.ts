import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/discord": {
					target: env.VITE_DISCORD_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/discord/, ""),
				},
			},
		},
	};
});
