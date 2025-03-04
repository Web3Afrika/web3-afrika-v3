import { useState } from "react";
import { cn } from "../util";
import { CloseSquare, Logo } from "./icons";

const DonateButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalOpenHandler = (state: boolean) => {
		console.log(state);
		setIsModalOpen(state);
	};

	return (
		<>
			<button
				className="w-max rounded-full border border-[#0C6E5F] bg-white px-8 py-3 text-[#0C6E5F] shadow-lg transition duration-300 dark:bg-black"
				onClick={() => modalOpenHandler(true)}
			>
				Donate
			</button>
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
	return (
		<div
			className={cn(
				"fixed inset-0 top-0 z-50 !m-0 bg-black bg-opacity-0 transition-opacity duration-200",
				className,
			)}
			onClick={modalOpenHandler}
		>
			<div className="relative top-24 z-50 mx-auto w-11/12 max-w-4xl space-y-16 overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-[#121212]">
				<div className="flex items-center justify-between">
					<Logo className="fill-black dark:fill-white" />
					<CloseSquare className="cursor-pointer" onClick={modalOpenHandler} />
				</div>
				<div>Waiting for addresses to be added...</div>
			</div>
		</div>
	);
};

export default DonateButton;
