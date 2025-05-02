import { useEffect } from "react";

export const RedirectToDiscord = () => {
	useEffect(() => {
		window.location.href = import.meta.env.VITE_DISCORD_URL;
	}, []);

	return null;
};
