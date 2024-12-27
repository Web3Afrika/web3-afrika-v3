import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { cn } from "../util";
import { ThemeToggle } from "./ThemeToggle";
import { Logo, ModalTrigger } from "./icons";

const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="container mx-auto flex items-center justify-between bg-white py-6 transition-colors duration-200 dark:bg-black">
			<div className="flex items-center">
				<Logo className="fill-black dark:fill-white" />
			</div>

			<div className="hidden space-x-6 rounded-md bg-[#FAFAFA] px-4 py-2 dark:bg-[#111111] md:flex">
				{navLinks.map(link => (
					<Link
						key={link.href}
						to={link.href}
						className={cn(
							"text-sm transition duration-300",
							location.pathname === link.href
								? "text-[#222222] dark:text-white"
								: "text-[#B8B8B8] hover:text-black dark:hover:text-white",
						)}
					>
						{link.label}
					</Link>
				))}
			</div>

			<div className="hidden items-center md:flex">
				<div className="flex items-center gap-4">
					<ThemeToggle />
					<Link
						to="/#"
						className="text-[#B8B8B8] transition duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						Donate
					</Link>
				</div>
				<div className="mx-2 h-10 border-l border-[#F2F2F2] dark:border-gray-700"></div>
				<button className="rounded-3xl border border-[#EE3C22] px-6 py-2 text-[#EE3C22] shadow-primary transition duration-200 hover:bg-[#EE3C22] hover:text-white dark:border-[#FF4D33] dark:text-[#FF4D33] dark:hover:bg-[#FF4D33]">
					Collab with us
				</button>
			</div>
			<ModalTrigger className="cursor-pointer md:hidden" />
		</nav>
	);
};

export default Navbar;
