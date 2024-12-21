import ArticleImage1 from "../assets/blog-1.png";
import ArticleImage2 from "../assets/blog-2.png";
import ArticleImage3 from "../assets/blog-3.png";
import ArticleImage4 from "../assets/blog-4.png";

const sampleArticles = [
  {
    id: 1,
    title: "Demystifying Consensus Mechanism: A comprehensive Guide",
    content:
      "The consensus mechanism is a crucial concept in the world of blockchain technology, and it can vary widely depending on the specific use case or application.",
    author: "Franklin Ohaegbulam",
    date: "March 15, 2024",
    authorAvatar: "/api/placeholder/32/32",
    imageUrl: ArticleImage1,
    link: "/articles/future-web-development",
  },
  {
    id: 2,
    title: "Why is the Hard Drive for Blockchain and Internet Known as IPFS",
    content:
      "Explore the hackathons, bounties, and events that have empowered African innovators, fostered connections, and driven Web 3 education and growth worldwide.",
    author: "Vinyl Davyl",
    date: "March 18, 2024",
    authorAvatar: "/api/placeholder/32/32",
    imageUrl: ArticleImage2,
    link: "/articles/mastering-tailwind",
  },
  {
    id: 3,
    title: "A dive into the world of decentralized finance in Africa.",
    content:
      "Learn the essential best practices for building large-scale React applications that are maintainable, performant, and easy to test.",
    author: "Franklin Ohaegbulam",
    date: "March 20, 2024",
    authorAvatar: "/api/placeholder/32/32",
    imageUrl: ArticleImage3,
    link: "/articles/scalable-react-apps",
  },
];

const BlogHighlights = () => {
  return (
    <section className="container mx-auto px-6 py-8 font-archivo">
      <div className="bg-[#FAFAFA] dark:bg-black flex flex-col md:flex-row gap-8 p-6 mb-12">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden h-full flex flex-col justify-center">
            <div className="px-6 pt-8">
              <span className="text-gray-500 text-sm">December 20, 2024</span>
            </div>

            <div className="p-6 space-y-6">
              <h2 className="text-3xl text-gray-800 dark:text-white line-clamp-2">
                Getting started with Solidity, All you need to know
              </h2>

              <p className="text-[#9E9E9E] text-lg line-clamp-3">
                Solidity is a high-level programming language that is
                specifically used to write smart contracts on the Ethereum
                blockchain.
              </p>

              <div>
                <span className="text-sm text-[#9E9E9E]">Vinyl Davyl</span>
              </div>

              <button className="inline-block text-[#0C6E5F] border border-[#0C6E5F] px-8 py-3 rounded-full hover:bg-[#0C6E5F] hover:text-white transition-colors duration-200">
                Read Article
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#FCE4E5]">
          <div className="p-6 flex justify-center items-center">
            <img
              src={ArticleImage4}
              alt="Featured"
              className="w-58 h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {sampleArticles.map((article) => (
          <div
            key={article.id}
            className="bg-[#FAFAFA] dark:bg-black rounded-lg overflow-hidden"
          >
            <div className="relative h-58 p-4 w-full">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-6 pt-4">
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2">
                {article.title}
              </h2>

              <p className="text-[#9E9E9E] mb-4 line-clamp-3">
                {article.content}
              </p>

              <div className="mb-4">
                <span className="text-sm text-[#5D5D5D]">{article.author}</span>
              </div>

              <a
                href={article.link}
                className="inline-block text-[#0C6E5F] border border-[#0C6E5F] px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                Read Article
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogHighlights;
