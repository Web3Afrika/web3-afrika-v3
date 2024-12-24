const CommunityVoice = () => {
	return (
		<>
			<section className="container mx-auto px-6 py-16">
				<div className="mb-8">
					<h2 className="mb-2 text-2xl dark:text-[#5D5D5D]">
						Voices of Innovation: What Our Community Says
					</h2>
					<p className="dark-[#9E9E9E] text-lg text-gray-600">
						Hear from the builders, creators, and pioneers across Africa and the
						diaspora who are driving change, <br />
						breaking barriers, and shaping the future of Web 3 with Web 3 Afrika
					</p>
					<div className="mt-4">
						{/* <img
							src={darkMode ? CommunityVoicesDark : CommunityVoices}
							alt="Community"
							className="mx-auto h-full w-full"
						/> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default CommunityVoice;
