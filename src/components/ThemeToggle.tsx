import { createContext, useContext, useEffect, useState } from "react";
import { Switcher } from "./icons";

const ThemeContext = createContext({
	darkMode: false,
	toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("theme");
			if (savedTheme) {
				return savedTheme === "dark";
			}
			return true;
		}
		return true;
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (darkMode) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
		}
	}, [darkMode]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const handleChange = (e: MediaQueryListEvent) => {
				if (!localStorage.getItem("theme")) {
					setDarkMode(e.matches);
				}
			};

			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(prevMode => !prevMode);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			<div className={darkMode ? "dark" : ""}>
				<div className="min-h-screen bg-white transition-colors duration-200 dark:bg-black">
					{children}
				</div>
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
