import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative">
			<div className="absolute inset-0 -z-[1px] bg-contain opacity-55 dark:bg-dots"></div>
			<div className="relative z-[1px]">
				<Navbar />
				{children}

				<Footer />
			</div>
		</div>
	);
};

export default Layout;
