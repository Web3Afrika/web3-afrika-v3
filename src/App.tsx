import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog";
import Events from "./pages/events";
import Home from "./pages/home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/events" element={<Events />} />
		</Routes>
	);
}

export default App;
