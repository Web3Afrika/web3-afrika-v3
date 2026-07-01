import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import JsonLd from "./components/JsonLd";
import { RedirectToDiscord } from "./components/redirect-to-discord";
import ScrollToTop from "./components/scroll-to-top";
import { ThemeProvider } from "./components/ThemeToggle";
import { founderSchema, organizationSchema, websiteSchema } from "./lib/schema";
import About from "./pages/about";
import Blog from "./pages/blog";
import Events from "./pages/events";
import Home from "./pages/home";

// Root layout route: providers + scroll behaviour wrap every page.
// Each page renders its own <Layout> (Navbar/Footer) inside the <Outlet />.
export const routes: RouteRecord[] = [
	{
		path: "/",
		element: (
			<ThemeProvider>
				{/* Site-wide entity graph, baked into every prerendered page. The
				    founder Person is emitted here (not per-page) so the
				    Organization.founder @id reference always resolves. */}
				<JsonLd
					data={[organizationSchema(), websiteSchema(), founderSchema()]}
				/>
				<ScrollToTop />
				<Outlet />
			</ThemeProvider>
		),
		children: [
			{ index: true, Component: Home },
			{ path: "about", Component: About },
			{ path: "blog", Component: Blog },
			{ path: "events", Component: Events },
			{ path: "discord", Component: RedirectToDiscord },
		],
	},
];

export default routes;
