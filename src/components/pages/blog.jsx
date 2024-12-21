import Navbar from "../Navbar";
import BlogHighlights from "../BlogHighlights";
import DonateSection from "../Donate";
import Footer from "../Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-6 pt-16 font-archivo">
        <div className="text-start">
          <h2 className="text-4xl text-[#292929] dark:text-white">
            Learning the Decentralized Future One Step at A Time
          </h2>
        </div>
      </section>
      <BlogHighlights />
      <DonateSection />
      <Footer />
    </>
  );
}
