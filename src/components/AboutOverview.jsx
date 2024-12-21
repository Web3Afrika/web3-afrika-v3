import React from "react";
import AboutImage from "../assets/about-image.png";

const AboutOverview = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-16 font-archivo">
        <div className="text-start mb-12">
          <h2 className="text-3xl text-[#292929] dark:text-[#FFFAFA] mb-4">
            Building a Decentralized Future Together
          </h2>
          <p className="text-[#757575] dark:text-[#CFCFCF] max-w-4xl">
            Web 3 Afrika is dedicated to equipping African innovators, builders,
            and creators with access to education, opportunities, and resources
            in the Web 3 space. Our platform champions diversity and inclusion,
            ensuring African voices lead the global conversation on blockchain,
            DeFi, NFTs, and beyond.
          </p>
        </div>

        <div>
          <img
            src={AboutImage}
            alt="Web3 Africa Community"
            className="w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutOverview;
