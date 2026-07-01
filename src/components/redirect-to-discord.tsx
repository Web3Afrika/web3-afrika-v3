import { useEffect } from "react";
import Seo from "./Seo";

export const RedirectToDiscord = () => {
	// import.meta.env.* is inlined at build time. If VITE_DISCORD_URL is unset,
	// don't navigate to `undefined` — show a fallback link instead.
	const discordUrl = import.meta.env.VITE_DISCORD_URL as string | undefined;

	useEffect(() => {
		// replace() so /discord isn't kept in history (avoids a Back-button loop).
		if (discordUrl) window.location.replace(discordUrl);
	}, [discordUrl]);

	return (
		<>
			<Seo
				title="Redirecting to Discord — Web3 Afrika"
				description="Join the Web3 Afrika community on Discord."
				path="/discord"
				noindex
			/>
			<main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center dark:bg-black">
				<p className="text-lg text-[#292929] dark:text-white">
					Taking you to the Web3 Afrika Discord…
				</p>
				{discordUrl ? (
					<a
						href={discordUrl}
						className="text-[#0C6E5F] underline-offset-4 hover:underline dark:text-[#4FD1B5]"
					>
						Click here if you are not redirected automatically.
					</a>
				) : (
					<a
						href="/"
						className="text-[#0C6E5F] underline-offset-4 hover:underline dark:text-[#4FD1B5]"
					>
						Return to web3afrika.com
					</a>
				)}
			</main>
		</>
	);
};
