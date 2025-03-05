import { AnimatedText } from "./animated-text";
import { FadeIn, FadeInStagger } from "./FadeIn";

const PurposeSection = () => {
	return (
		<div className="container mx-auto px-6 py-16">
			<div className="mb-12 text-start">
				<p className="text-sm text-[#9E9E9E] md:mb-4 md:text-base">
					Mission and Vision Statement
				</p>
				<AnimatedText
					text={["Our Purpose and Vision"]}
					once
					className="mb-4 text-xl text-[#292929] dark:text-[#E5E4E4] md:text-5xl"
				/>
				{/* <h2 className="mb-4 text-xl text-[#292929] dark:text-[#E5E4E4] md:text-5xl">
					Our Purpose and Vision
				</h2> */}
				<p className="max-w-3xl text-sm text-[#757575] dark:text-[#CFCFCF] md:text-2xl">
					Our mission at Web3 Afrika is to empower African innovators and
					communities through education, opportunities, and inclusivity in the
					Web3 space.
				</p>
				<p className="max-w-3xl text-sm text-[#757575] dark:text-[#CFCFCF] md:text-2xl">
					Guided by our vision, we strive to position Africa and its diaspora at
					the forefront of global Web3 innovation, shaping a decentralized
					future that is diverse, equitable, and transformative. Join us as we
					shape the future of Web3!
				</p>
			</div>

			<FadeInStagger className="grid gap-8 md:grid-cols-2">
				<FadeIn className="space-y-6 rounded-lg border-[1.5px] p-6 dark:bg-[#090909] md:rounded-none md:border-transparent md:bg-[#FAFAFA]">
					<DetailTitle title="Empowerment" supText="Mission" />
					<div className="space-y-4">
						<Detail
							title="Access to Education"
							description="Provides resources and training to help individuals understand and excel in Web3 technologies like blockchain, NFTs, DeFi, and"
						/>
						<Detail
							title="Skill Development"
							description="Equips participants with technical and entrepreneurial skills needed to succeed in the decentralized digital economy"
						/>
						<Detail
							title="Career Opportunities"
							description="Opens doors to exclusive jobs, internships, and collaborations in the Web3 space, tailored to African talent"
						/>
						<Detail
							title="Global Networking"
							description="Connects innovators, creators, and entrepreneurs with a worldwide network of Web3 leaders, partners, and investors"
						/>
						<Detail
							title="Empowering Communities"
							description="Builds inclusive and diverse communities that amplify African voices in global Web3 conversations"
						/>
					</div>
				</FadeIn>

				<FadeIn className="space-y-6 rounded-lg border-[1.5px] p-6 dark:bg-[#090909] md:rounded-none md:border-transparent md:bg-[#FAFAFA]">
					<DetailTitle title="Innovation" supText="Vision" />
					<div className="space-y-4">
						<Detail
							title="Global Leadership"
							description="Envisions Africa and its diaspora leading innovations in Web3 technologies on the global stage"
						/>
						<Detail
							title="Diversity and Inclusion"
							description="Aims to create a decentralized ecosystem where African voices and perspectives are central to the conversation"
						/>
						<Detail
							title="Technological Advancement"
							description="Aspires to drive groundbreaking advancements in blockchain, DeFi, NFTs, and other Web3 sectors"
						/>
						<Detail
							title="Community Growth"
							description="Seeks to build a thriving network of innovators, creators, and leaders who collaborate to shape the future"
						/>
						<Detail
							title="Economic Transformation"
							description="Strives to unlock new economic opportunities for African communities through participation in the decentralized economy"
						/>
					</div>
				</FadeIn>
			</FadeInStagger>
		</div>
	);
};

const DetailTitle = ({
	title,
	supText,
}: {
	title: string;
	supText: string;
}) => (
	<h3 className="flex items-center space-x-2 text-xl font-medium text-[#292929] dark:text-white md:text-3xl">
		<span>{title}</span>
		<span className="rounded border-[1.25px] border-[#F2F2F2] bg-[#F7F7F7] p-1 text-xs font-normal text-[#6C6C6C] md:text-sm">
			{supText}
		</span>
	</h3>
);

const Detail = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className="space-y-4">
			<h3 className="text-base text-[#505050] dark:text-[#E5E4E4] md:text-2xl">
				{title}
			</h3>
			<p className="text-sm text-[#757575] md:text-2xl">{description}</p>
		</div>
	);
};

export default PurposeSection;
