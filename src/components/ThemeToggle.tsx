import { createContext, useContext, useEffect, useState } from "react";
import { Switcher } from "./icons";

const ThemeContext = createContext({
	darkMode: false,
	toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	// Deterministic initial value: matches the server render AND the inline
	// theme script in index.html (which sets `<html class="dark">` before paint,
	// defaulting to dark). The visitor's saved preference is reconciled on mount,
	// so the first client render never diverges from the server (no hydration
	// mismatch, no flash).
	const [darkMode, setDarkMode] = useState(true);
	const [mounted, setMounted] = useState(false);

	// Reconcile with the saved preference after hydration (client only).
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) setDarkMode(savedTheme === "dark");
		setMounted(true);
	}, []);

	// Drive the theme via the `dark` class on <html> (Tailwind class strategy)
	// and persist it. Guarded by `mounted` so it never clobbers the saved value
	// before it has been read.
	useEffect(() => {
		if (!mounted) return;
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}, [darkMode, mounted]);

	// Follow the OS preference only when the visitor hasn't chosen explicitly.
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e: MediaQueryListEvent) => {
			if (!localStorage.getItem("theme")) setDarkMode(e.matches);
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(prevMode => !prevMode);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			<div className="min-h-screen bg-white transition-colors duration-200 dark:bg-black">
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const ThemeToggle = () => {
	const { toggleDarkMode } = useTheme();

	return (
		<button
			onClick={toggleDarkMode}
			className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
			aria-label="Toggle dark mode"
		>
			<Switcher className="size-5 transform transition-transform duration-200 dark:rotate-180" />
		</button>
	);
};
