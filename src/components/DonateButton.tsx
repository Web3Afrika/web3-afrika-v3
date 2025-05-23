import { useEffect, useRef, useState } from "react";
import { cn } from "../util";
import { CloseSquare, Copy, Logo } from "./icons";

import Arbitrum from "../assets/brands/arbitrum.svg";
import EthLogo from "../assets/brands/ethereum.png";
import Optimism from "../assets/brands/optimism.svg";
import Scroll from "../assets/brands/scroll.svg";

const DonateButton = ({ isText }: { isText?: boolean }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalOpenHandler = (state: boolean) => {
		setIsModalOpen(state);
	};

	return (
		<>
			{isText ? (
				<span
					className="cursor-pointer text-[#B8B8B8] transition duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					onClick={() => modalOpenHandler(true)}
				>
					Donate
				</span>
			) : (
				<button
					className="w-max rounded-full border border-[#0C6E5F] bg-white px-8 py-3 text-[#0C6E5F] shadow-lg transition duration-300 dark:bg-black"
					onClick={() => modalOpenHandler(true)}
				>
					Donate
				</button>
			)}
			<Modal
				className={isModalOpen ? "bg-opacity-50" : "hidden bg-opacity-0"}
				modalOpenHandler={() => modalOpenHandler(false)}
			/>
		</>
	);
};

const Modal = ({
	className,
	modalOpenHandler,
}: {
	className?: string;
	modalOpenHandler?: () => void;
}) => {
	const [isAddressCopied, setIsAddressCopied] = useState(false);
	// Add at the top of the Modal component:
	const firstFocusableRef = useRef<HTMLButtonElement>(null);
	const lastFocusableRef = useRef<HTMLButtonElement>(null);

	// Add to the useEffect hook (you'll need to add this):
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				modalOpenHandler?.();
			}
			if (e.key === "Tab") {
				if (e.shiftKey) {
					if (document.activeElement === firstFocusableRef.current) {
						e.preventDefault();
						lastFocusableRef.current?.focus();
					}
				} else {
					if (document.activeElement === lastFocusableRef.current) {
						e.preventDefault();
						firstFocusableRef.current?.focus();
					}
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		firstFocusableRef.current?.focus();

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [modalOpenHandler]);

	const copyAddress = () => {
		try {
			navigator.clipboard.writeText(
				"0x4BaF3334dF86FB791A6DF6Cf4210C685ab6A1766",
			);
			setIsAddressCopied(true);
			setTimeout(() => {
				setIsAddressCopied(false);
			}, 3000);
		} catch (error) {
			console.log("Failed to copy address to clipboard", error);
		}
	};

	return (
		<div className={cn("fixed inset-0 top-0 z-30", className)}>
			<div
				className={cn(
					"fixed inset-0 top-0 z-20 !m-0 bg-black bg-opacity-0 transition-opacity duration-200",
					className,
				)}
				onClick={modalOpenHandler}
				aria-hidden="true"
			></div>
			<div className="relative top-24 z-50 mx-auto w-11/12 max-w-4xl space-y-6 overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-[#121212]">
				<div className="flex items-center justify-between">
					<Logo className="fill-black dark:fill-white" />
					<button ref={firstFocusableRef}>
						<CloseSquare
							className="cursor-pointer"
							onClick={modalOpenHandler}
							aria-label="Close donation modal"
						/>
					</button>
				</div>
				<div className="rounded-lg border border-gray-200 px-4 py-6">
					<div>
						<h2 className="dark:text-white">Donation</h2>
						<p className="text-gray-400">
							Donations are to be made to our Ethereum address.
						</p>
					</div>

					<h2 className="mt-6 dark:text-white">Supported Networks</h2>
					<div className="my-4 mb-2 flex space-x-4">
						<div className="rounded-full border p-2">
							<img
								src={EthLogo}
								alt="Ethereum"
								className="size-8 rounded-full"
							/>
						</div>
						<div className="rounded-full border p-2">
							<img src={Scroll} alt="Scroll" className="size-8 rounded-full" />
						</div>
						<div className="rounded-full border p-2">
							<img
								src={Optimism}
								alt="Optimism"
								className="size-8 rounded-full"
							/>
						</div>
						<div className="rounded-full border p-2">
							<img
								src={Arbitrum}
								alt="Arbitrum"
								className="size-8 rounded-full"
							/>
						</div>
					</div>
					<span
						className={cn(
							"text-sm transition duration-300 dark:text-gray-400",
							isAddressCopied ? "opacity-100" : "opacity-0",
						)}
					>
						Address copied to clipboard.
					</span>
					<div className="flex flex-col gap-2 sm:flex-row">
						<input
							type="text"
							placeholder="0x4BaF3334dF86FB791A6DF6Cf4210C685ab6A1766"
							value="0x4BaF3334dF86FB791A6DF6Cf4210C685ab6A1766"
							className="flex-1 rounded-lg border border-gray-200 bg-transparent p-2 text-gray-400"
						/>
						<button
							className="flex w-full items-center justify-center gap-4 rounded-lg border border-gray-200 bg-transparent px-8 py-2 text-gray-400 transition duration-300 md:w-fit"
							onClick={copyAddress}
							ref={lastFocusableRef}
						>
							<Copy />
							<span>Copy</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonateButton;
