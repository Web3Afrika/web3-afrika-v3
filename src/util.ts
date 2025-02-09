// utils/index.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
	const dateObj = new Date(date);

	// Validate if the date is valid
	if (isNaN(dateObj.getTime())) {
		throw new Error("Invalid date format");
	}

	const options: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "long",
		year: "numeric",
	};
	return dateObj.toLocaleDateString("en-GB", options);
}
