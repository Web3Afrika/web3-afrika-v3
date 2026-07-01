import { faqs } from "../data/faqs";
import { AnimatedText } from "./animated-text";
import { FadeIn, FadeInStagger } from "./FadeIn";

/**
 * Frequently asked questions. Uses native <details>/<summary> so every answer
 * is present in the prerendered HTML (readable by crawlers and AI without JS)
 * and works with no client-side state. Pairs with the FAQPage JSON-LD.
 */
const Faq = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<div className="mb-8 text-start md:mb-12">
				<p className="text-sm text-[#9E9E9E] md:mb-4 md:text-base">
					Frequently Asked Questions
				</p>
				<AnimatedText
					text={["What People Ask About", "Web3 Afrika"]}
					once
					className="mb-4 text-xl text-[#292929] dark:text-[#E5E4E4] md:text-5xl"
				/>
			</div>

			<FadeInStagger className="mx-auto max-w-4xl space-y-4">
				{faqs.map(faq => (
					<FadeIn key={faq.question}>
						<details className="group rounded-lg border-[1.5px] border-[#F2F2F2] p-6 dark:border-[#272727] dark:bg-[#090909]">
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#292929] dark:text-white md:text-2xl">
								<h3 className="text-base font-medium md:text-2xl">
									{faq.question}
								</h3>
								<span className="shrink-0 text-2xl text-[#757575] transition-transform duration-200 group-open:rotate-45">
									+
								</span>
							</summary>
							<p className="mt-4 text-sm text-[#757575] dark:text-[#CFCFCF] md:text-lg">
								{faq.answer}
							</p>
						</details>
					</FadeIn>
				))}
			</FadeInStagger>
		</section>
	);
};

export default Faq;
