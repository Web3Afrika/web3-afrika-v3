"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { cn } from "../util";

export function WordsPullUp({
	text,
	className = "",
}: {
	text: string;
	className?: string;
}) {
	const splittedText = [text];

	const pullupVariant = {
		initial: { y: 20, opacity: 0 },
		animate: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: i * 0.1,
			},
		}),
	};
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="flex">
			{splittedText.map((current, i) => (
				<motion.div
					key={i}
					ref={ref}
					variants={pullupVariant}
					initial="initial"
					animate={isInView ? "animate" : ""}
					custom={i}
					className={cn(
						// "text-center text-xl font-bold tracking-tighter sm:text-4xl md:text-6xl md:leading-[4rem]",
						"pr-2", // class to sperate words
						className,
					)}
				>
					{current == "" ? <span>&nbsp;</span> : current}
				</motion.div>
			))}
		</div>
	);
}
