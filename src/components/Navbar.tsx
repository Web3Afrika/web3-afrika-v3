import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { cn } from "../util";
import DonateButton from "./DonateButton";
import { ThemeToggle, useTheme } from "./ThemeToggle";
import { ChevronRight2, CloseSquare, Logo, ModalTrigger } from "./icons";

const Navbar = () => {
	const { darkMode } = useTheme();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const location = useLocation();

	const modalOpenHandler = (state: boolean) => {
		console.log(state);
		setIsModalOpen(state);
	};

	return (
		<nav className="container mx-auto flex w-11/12 items-center justify-between bg-white py-6 transition-colors duration-200 dark:bg-black">
			<Link to="/" className="flex items-center">
				<Logo className="fill-black dark:fill-white" />
			</Link>

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
					<DonateButton isText />
				</div>
				<div className="mx-2 h-10 border-l border-[#F2F2F2] dark:border-gray-700"></div>
				<a href="mailto:web3afrika@gmail.com">
					<button className="rounded-3xl border border-[#EE3C22] px-6 py-2 text-[#EE3C22] shadow-primary transition duration-200 hover:bg-[#EE3C22] hover:text-white dark:border-[#FF4D33] dark:text-[#FF4D33] dark:hover:bg-[#FF4D33] dark:hover:text-white">
						Collab with us
					</button>
				</a>
			</div>
			<ModalTrigger
				className="cursor-pointer md:hidden"
				onClick={() => modalOpenHandler(true)}
				stroke={darkMode ? "#FFFFFF" : "#000000"}
			/>
			<Modal
				className={isModalOpen ? "bg-opacity-50" : "hidden bg-opacity-0"}
				modalOpenHandler={() => modalOpenHandler(false)}
			/>
		</nav>
	);
};

const Modal = ({
	className,
	modalOpenHandler,
}: {
	className?: string;
	modalOpenHandler?: () => void;
}) => {
	const location = useLocation();

	return (
		<div
			className={cn(
				"fixed inset-0 z-50 bg-black bg-opacity-0 transition-opacity duration-200",
				className,
			)}
			onClick={modalOpenHandler}
		>
			<div className="container relative top-24 z-50 mx-auto w-11/12 overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-[#121212]">
				<div className="flex items-center justify-between">
					<Logo className="fill-black dark:fill-white" />
					<CloseSquare className="cursor-pointer" onClick={modalOpenHandler} />
				</div>
				<button className="my-6 w-full rounded-full bg-[#0C6E5F] py-2.5 text-white">
					Join Us
				</button>
				<div className="flex flex-col items-center">
					{navLinks.map((link, index) => (
						<Link
							key={link.href}
							to={link.href}
							className={cn(
								"flex w-full items-center justify-between border-b border-[#F2F2F2] py-4 text-center text-base dark:border-gray-700",
								index === 0 && "border-t",
							)}
						>
							<span
								className={cn(
									location.pathname === link.href
										? "text-[#222222] dark:text-white"
										: "text-[#B8B8B8]",
								)}
							>
								{link.label}
							</span>
							<ChevronRight2
								className={cn(
									location.pathname === link.href
										? "stroke-[#222222] dark:stroke-white"
										: "stroke-[#B8B8B8]",
								)}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
