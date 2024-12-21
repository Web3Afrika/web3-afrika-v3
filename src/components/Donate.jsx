import React from "react";
import DonateImage from "../assets/Donate.png";

const DonateSection = () => {
  return (
    <div className="p-6">
      <div className="bg-black rounded-2xl grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center space-y-6 font-archivo pl-16">
          <h2 className="text-white text-4xl">
            Partner with Us to Shape the Future
          </h2>
          <p className="text-[#E6E6E6] text-base leading-relaxed lg:w-1/2">
            Join us in empowering African innovators and communities. Your
            support drives education, opportunities, and diversity in the Web 3
            revolution.
          </p>
          <button className="bg-white dark:bg-black border border-[#0C6E5F] text-[#0C6E5F] px-8 py-3 rounded-full w-max hover:bg-[#D03321] transition duration-300">
            Donate
          </button>
        </div>

        <div className="flex items-end justify-end">
          <img
            src={DonateImage}
            alt="Donation Impact"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
