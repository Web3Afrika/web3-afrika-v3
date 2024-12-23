import { useEffect, useState } from "react";
import LogoDark from "../assets/logo-dark.svg";
import Logo from "../assets/logo.svg";
import { ThemeToggle, useTheme } from "./ThemeToggle";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("/");
	const { darkMode } = useTheme();

	// Automatically detect current path
	useEffect(() => {
		setActiveLink(window.location.pathname);
	}, []);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/blog", label: "Blog" },
		{ href: "/events", label: "Events" },
	];

	return (
		<nav className="flex items-center justify-between bg-white p-6 transition-colors duration-200 dark:bg-black">
			<div className="flex items-center">
				<img
					src={darkMode ? LogoDark : Logo}
					alt="Web3 Africa Logo"
					className="transition-opacity duration-200"
				/>
			</div>

			<div className="flex space-x-6 rounded-lg bg-[#FAFAFA] px-2 py-2 dark:bg-[#111111]">
				{navLinks.map(link => (
					<a
						key={link.href}
						href={link.href}
						className={`transition duration-300 ${
							activeLink === link.href
								? "font-semibold text-[#222222] dark:text-white"
								: "text-[#B8B8B8] hover:text-black dark:hover:text-white"
						} `}
					>
						{link.label}
					</a>
				))}
			</div>

			<div className="flex items-center space-x-4">
				<ThemeToggle />

				<a
					href="/donate"
					className="pr-4 text-[#B8B8B8] transition duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
				>
					Donate
				</a>
				<div className="h-6 border-l border-[#F2F2F2] dark:border-gray-700"></div>
				<button className="rounded-3xl border border-[#EE3C22] px-6 py-2 text-[#EE3C22] transition duration-200 hover:bg-[#EE3C22] hover:text-white dark:border-[#FF4D33] dark:text-[#FF4D33] dark:hover:bg-[#FF4D33]">
					Collab with us
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
