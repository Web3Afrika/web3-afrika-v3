import { useEffect, useState } from "react";
import Celo from "../assets/partners/celo.png";
import D_D from "../assets/partners/d_d.png";
import Web3Bridge from "../assets/partners/web3-bridge.png";
import Web3Gblobal from "../assets/partners/web3-global.png";

const Partners = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const partners = [
		{ id: 1, name: "Partner 1", logo: Web3Gblobal },
		{ id: 2, name: "Partner 2", logo: Celo },
		{ id: 3, name: "Partner 3", logo: D_D },
		{ id: 4, name: "Partner 4", logo: Web3Bridge },
		{ id: 5, name: "Partner 3", logo: D_D },
		{ id: 6, name: "Partner 4", logo: Web3Bridge },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex =>
				prevIndex === partners.length - 3 ? 0 : prevIndex + 1,
			);
		}, 3000);
		return () => clearInterval(interval);
	}, [partners.length]);

	return (
		<section className="container mx-auto py-16">
			<div className="mb-8">
				<h2 className="mb-2 text-3xl text-[#5D5D5D] dark:text-white">
					Our Partners
				</h2>
				<div className="h-[44px] w-[853px]">
					<p className="text-xl text-[#9E9E9E] dark:text-[#5D5D5D]">
						We wouldn't have gotten this far without{" "}
						<span className="font-medium text-[#5D5D5D]">Our Partners</span>.
						Our partners are our backbone, Providing much needed support to
						continue to support Africa.
					</p>
				</div>
			</div>

			<div className="relative">
				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
					>
						{partners.map(partner => (
							<div key={partner.id} className="w-1/3 flex-shrink-0">
								<div className="flex h-[386px] w-[386px] items-center justify-center rounded-sm bg-[#FAFAFA]">
									<img
										src={partner.logo}
										alt={`${partner.name} logo`}
										className="h-48 max-w-full object-contain"
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-6 flex justify-center space-x-2">
					{[...Array(partners.length - 2)].map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 w-2 rounded-full transition-colors ${
								index === currentIndex ? "bg-blue-600" : "bg-gray-300"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
