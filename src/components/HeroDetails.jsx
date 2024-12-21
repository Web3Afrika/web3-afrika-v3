import React from "react";
import HeroImage from "../assets/HeroImage.png";

const HeroDetails = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-16 font-archivo">
        <div className="grid grid-cols-2 gap-8 items-center mb-12">
          <div className="col-span-1">
            <h2 className="text-3xl text-[#292929] dark:text-white mb-4">
              Empowering the next generation of African web 3 Innovators
            </h2>
            <div className="flex items-center">
              <div className="w-2/3 pr-6">
                <p className="text-[#757575]">
                  Building communities, fostering diversity, and creating global
                  opportunities in the decentralized future.
                </p>
              </div>
              <div className="w-1/3">
                <button className="bg-[#0C6E5F] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Join Us
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Web3 Africa Community"
            className="w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroDetails;
