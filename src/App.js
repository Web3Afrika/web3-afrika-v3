import { ThemeProvider } from "./components/ThemeToggle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/pages/about";
import Blog from "./components/pages/blog";
import Events from "./components/pages/events";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}