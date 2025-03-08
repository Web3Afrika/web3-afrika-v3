import { Route, Routes } from "react-router-dom";
import { RedirectToDiscord } from "./components/redirect-to-discord";
import ScrollToTop from "./components/scroll-to-top";
import About from "./pages/about";
import Blog from "./pages/blog";
import Events from "./pages/events";
import Home from "./pages/home";

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/events" element={<Events />} />
				<Route path="/discord" element={<RedirectToDiscord />} />
			</Routes>
		</>
	);
}

export default App;
