import { useEffect, useState } from "react";
import HackathonImage1 from "../assets/hackathons/hackathon-1.jpeg";
import HackathonImage2 from "../assets/hackathons/hackathon-2.jpeg";
import HackathonImage3 from "../assets/hackathons/hackathon-3.jpeg";
import HackathonImage4 from "../assets/hackathons/hackathon-4.jpeg";

import ConferenceImage1 from "../assets/conferences/conference-1.jpeg";
import ConferenceImage2 from "../assets/conferences/conference-2.jpeg";
import ConferenceImage3 from "../assets/conferences/conference-3.jpeg";
import ConferenceImage4 from "../assets/conferences/conference-4.jpeg";

import DonateSection from "../components/Donate";
import { ArrowRight } from "../components/icons";
import Layout from "../layout";

export default function App() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [conferenceIndex, setConferenceIndex] = useState(0);

	const hackathons = [
		{ id: 1, src: HackathonImage1 },
		{ id: 2, src: HackathonImage2 },
		{ id: 3, src: HackathonImage3 },
		{ id: 4, src: HackathonImage4 },
		{ id: 5, src: HackathonImage2 },
		{ id: 6, src: HackathonImage3 },
	];

	const conferences = [
		{ id: 1, src: ConferenceImage1 },
		{ id: 2, src: ConferenceImage2 },
		{ id: 3, src: ConferenceImage3 },
		{ id: 4, src: ConferenceImage4 },
		{ id: 5, src: ConferenceImage1 },
		{ id: 6, src: ConferenceImage3 },
	];

	const upcomingEvents = [
		{
			id: 1,
			name: "Contributing to Layer 1 Chains",
			platform: "Zoom Conference",
			link: "https://twitter.com/i/spaces/123456",
		},
		{
			id: 2,
			name: "Getting Started with Account Abstractions",
			platform: "Zoom Conference",
			link: "https://zoom.us/j/123456",
		},
		{
			id: 3,
			name: "Contributing to Layer 1 Chains",
			platform: "Zoom Conference",
			link: "https://meet.google.com/123-456-789",
		},
		{
			id: 4,
			name: "Building with ZK in your NextJS App ",
			platform: "Zoom Conference",
			link: "https://discord.gg/123456",
		},
		{
			id: 5,
			name: "Deep dive into Zero-Knowledge",
			platform: "Zoom Conference",
			link: "https://zoom.us/j/987654",
		},
		{
			id: 6,
			name: "Contributing to Layer 1 Chains",
			platform: "Zoom Conference",
			link: "https://twitter.com/i/spaces/987654",
		},
		{
			id: 7,
			name: "C-Exchange or D-Exchange",
			platform: "Twitter Space",
			link: "https://twitter.com/i/spaces/987654",
		},
	];

	const totalSlides = Math.ceil(hackathons.length / 3);
	const totalConferenceSlides = Math.ceil(conferences.length / 3);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
		}, 3000);

		return () => clearInterval(timer);
	}, [totalSlides]);

	useEffect(() => {
		const timer = setInterval(() => {
			setConferenceIndex(prev =>
				prev === totalConferenceSlides - 1 ? 0 : prev + 1,
			);
		}, 3000);

		return () => clearInterval(timer);
	}, [totalConferenceSlides]);

	return (
		<Layout>
			<section className="mt-4 transition-all duration-300 md:mt-40">
				<div className="container mx-auto mb-12">
					<div className="mb-12 text-start">
						<h2 className="mb-12 max-w-3xl text-5xl text-[#292929] dark:text-white">
							Building a Decentralized Future Together
						</h2>
						<h3 className="mb-4 text-3xl font-medium text-[#292929] dark:text-[#B0B0B0]">
							Hackathon
						</h3>
					</div>

					<div className="mb-24 bg-[#FAFAFA] p-4 dark:bg-black">
						<h2 className="mb-2 text-3xl text-[#292929] dark:text-white">
							Web3 Afrika Builders Event + Arbitron
						</h2>
						<p className="w-[698px] text-lg text-[#5D5D5D]">
							This event was designed to empower builders with the skills,
							knowledge, and connections needed to make a meaningful impact on
							the Arbitrum ecosystem.
						</p>
						<div className="relative mb-16">
							<div className="overflow-hidden">
								<div
									className="flex transition-transform duration-500 ease-in-out"
									style={{
										transform: `translateX(-${currentIndex * 100}%)`,
									}}
								>
									{Array.from({ length: totalSlides }).map((_, slideIndex) => (
										<div key={slideIndex} className="w-full flex-shrink-0">
											<div className="grid grid-cols-3">
												{hackathons
													.slice(slideIndex * 3, slideIndex * 3 + 3)
													.map(event => (
														<div
															key={event.id}
															className="size-96 rounded-sm p-4"
														>
															<img
																src={event.src}
																alt={`Event ${event.id}`}
																className="h-full w-full rounded-lg object-cover"
															/>
														</div>
													))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<h3 className="mb-4 text-3xl font-medium text-[#292929] dark:text-[#B0B0B0]">
						Conference
					</h3>
					<div className="mb-24 bg-[#FAFAFA] p-2 dark:bg-black">
						<h2 className="mb-2 text-3xl text-[#292929] dark:text-white">
							Web3 Afrika + Scroll (Scroll Community)
						</h2>
						<p className="w-[698px] text-lg text-[#5D5D5D]">
							This event was designed to empower builders with the skills,
							knowledge, and connections needed to make a meaningful impact on
							the Arbitrum ecosystem.
						</p>
						<div className="relative mb-16">
							<div className="overflow-hidden">
								<div
									className="flex transition-transform duration-500 ease-in-out"
									style={{
										transform: `translateX(-${conferenceIndex * 100}%)`,
									}}
								>
									{Array.from({ length: totalSlides }).map((_, slideIndex) => (
										<div key={slideIndex} className="w-full flex-shrink-0">
											<div className="grid grid-cols-3">
												{conferences
													.slice(slideIndex * 3, slideIndex * 3 + 3)
													.map(event => (
														<div
															key={event.id}
															className="size-96 rounded-sm p-4"
														>
															<img
																src={event.src}
																alt={`Event ${event.id}`}
																className="size-80 h-full w-full rounded-lg object-cover object-center"
															/>
														</div>
													))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<h3 className="mb-12 text-3xl text-[#292929] dark:text-white">
						Other Events
					</h3>
					<div className="mb-12 divide-y divide-[#F2F2F2] border-b border-t border-[#F2F2F2] md:divide-[#000000] md:border-[#000000]">
						{upcomingEvents.map(item => (
							<div
								key={item.id}
								className="grid grid-cols-3 items-center py-4 transition-colors hover:bg-gray-50"
							>
								<div className="text-[#292929] dark:text-[#C1C1C1]">
									{item.name}
								</div>
								<div className="text-[#5D5D5D] dark:text-[#C1C1C1]">
									{item.platform}
								</div>
								<div className="flex justify-end">
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-black dark:text-[#C1C1C1]"
									>
										<ArrowRight />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<DonateSection />
		</Layout>
	);
}
