// @ts-expect-error eslint doesn't like the import of the font
import "@fontsource-variable/archivo";
import "swiper/swiper-bundle.css";
import { ViteReactSSG } from "vite-react-ssg";
import routes from "./App";
import "./index.css";

// vite-react-ssg drives the app: it calls this on the client (hydrate) and
// during the build (renderToString for each route) to emit static HTML.
export const createRoot = ViteReactSSG({ routes });
