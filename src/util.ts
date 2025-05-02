import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
	const dateObj = new Date(date);

	if (isNaN(dateObj.getTime())) {
		// Consider returning a default string or null here in a production app
		// instead of throwing, to prevent crashing if one date is bad.
		// For now, we'll keep throwing as per the original error handling.
		throw new Error("Invalid date format: " + date); // Include date for context if throwing
	}

	const options: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "long",
		year: "numeric",
	};
	return dateObj.toLocaleDateString("en-GB", options);
}
