// @ts-expect-error eslint doesn't like the import of the font
import "@fontsource-variable/archivo";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "swiper/swiper-bundle.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeToggle.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
