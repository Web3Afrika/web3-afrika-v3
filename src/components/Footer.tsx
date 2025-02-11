import { useState } from "react";
import { Link } from "react-router-dom";
import { QuickLinks } from "../constants";
import DonateSection from "./Donate";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { Logo } from "./icons";

const SocialLinks = [
	{
		label: (
			<span>
				X <span className="hidden md:inline-block">(formerly twitter)</span>
			</span>
		),
		href: "https://x.com/web3afrika",
		external: true,
	},
	{ label: "Linkedin", href: "https://www.linkedin.com/company/web3afrika/", external: true },
	{ label: "Youtube", href: "https://www.youtube.com/@web3afrika", external: true },
	{ label: "Instagram", href: "https://www.instagram.com/web3afrika?igsh=MXBkMm9hMnpwM3ZwYQ==", external: true },
];

const Footer = () => {
	const [email, setEmail] = useState("");
	const [currentYear] = useState(new Date().getFullYear());

	const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Subscribed with email:", email);
		setEmail("");
	};

	const renderLinkUrl = (link: {
		label: string | JSX.Element;
		href: string;
		external?: boolean;
	}) => (
		<li key={link.label.toString()}>
			{link.external ? (
				<a
					href={link.href}
					className="text-[#9E9E9E] hover:text-[#EE3C22] dark:text-[#9E9E9E]"
					target="_blank"
					rel="noopener noreferrer"
				>
					{link.label}
				</a>
			) : (
				<Link
					to={link.href}
					className="text-[#9E9E9E] hover:text-[#EE3C22] dark:text-[#9E9E9E]"
				>
					{link.label}
				</Link>
			)}
		</li>
	);

	return (
		<div className="relative">
			<DonateSection />
			<div className="bg-[#FBFBFB] dark:bg-black md:pt-60">
				<FadeInStagger>
					<footer className="container mx-auto px-6 py-16">
						<div className="grid grid-cols-2 gap-12">
							<FadeIn className="col-span-full space-y-6 md:col-span-1">
								<Logo className="fill-black dark:fill-white" />
								<p className="max-w-md text-[#9E9E9E] dark:text-[#9E9E9E]">
									Empowering mobility entrepreneurs worldwide with accessible,
									flexible financing to unlock vehicle ownership and accelerate
									growth.
								</p>

								<form
									onSubmit={handleSubscribe}
									className="relative w-full max-w-md"
								>
									<div className="relative">
										<input
											type="email"
											value={email}
											onChange={e => setEmail(e.target.value)}
											placeholder="Enter your email"
											className="w-full rounded-lg px-4 py-4 pr-[100px] text-[#9E9E9E] focus:outline-none focus:ring-1 focus:ring-[#0C6E5F] dark:bg-[#0A0A0A]"
											required
										/>
										<button
											type="submit"
											className="absolute right-2 top-1/2 -translate-y-1/2 rounded-3xl border border-[#0C6E5F] px-4 py-2 text-sm text-[#0C6E5F] shadow-secondary transition duration-300 hover:bg-[#0C6E5F] hover:text-white"
										>
											Subscribe
										</button>
									</div>
								</form>
							</FadeIn>

							<div className="hidden justify-between gap-8 md:flex">
								<FadeIn className="space-y-4">
									<h4 className="font-medium text-[#5D5D5D] dark:text-[#CFCFCF]">
										Quick Links
									</h4>
									<ul className="space-y-4">
										{QuickLinks.slice(0, 4).map(renderLinkUrl)}
									</ul>
								</FadeIn>
								<FadeIn className="space-y-4">
									<h4 className="font-medium text-[#5D5D5D] dark:text-[#CFCFCF]">
										Quick Links
									</h4>
									<ul className="space-y-4">
										{QuickLinks.slice(4, 8).map(renderLinkUrl)}
									</ul>
								</FadeIn>
								<FadeIn className="space-y-4">
									<h4 className="font-medium text-[#5D5D5D] dark:text-[#CFCFCF]">
										Social Media
									</h4>
									<ul className="space-y-4">
										{SocialLinks.map(renderLinkUrl)}
									</ul>
								</FadeIn>
							</div>
						</div>

						<FadeIn className="mt-4 flex flex-col items-center justify-between gap-6 pt-6 text-[#9E9E9E] md:mt-12 md:flex-row">
							<span>
								Copyright @{currentYear} Web3 Afrika. All right reserved
							</span>
							<ul className="flex w-full max-w-xs justify-between md:hidden">
								{SocialLinks.map(renderLinkUrl)}
							</ul>
							<span className="mt-12 md:mt-0">
								Designed by <u>On Visual Matters</u>
							</span>
						</FadeIn>
					</footer>
				</FadeInStagger>
			</div>
		</div>
	);
};

export default Footer;
