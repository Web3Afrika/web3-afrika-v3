import React from "react";

const HomeStats = () => {
  return (
    <section className="container mx-auto px-6 py-16 font-archivo">
      <div className="text-start mb-12">
        <h2 className="text-4xl text-[#292929] dark:text-white mb-4">
          Web 3 Afrika empowers Africans to lead in Web 3 through education,
          opportunities, and community
        </h2>
        <p className="text-[#666666] dark:text-[#C0C0C0] max-w-4xl">
          Empowering African builders through hackathons, bounties, and
          opportunities
        </p>
        <p className="text-[#141414] dark:text-[#666666] mt-4">
          Mission and Vision Statement &gt;
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
        <div className="bg-[#FAFAFA] dark:bg-black p-8 rounded-lg">
          <h3 className="text-6xl text-[#7A7A7A] mb-4">$1M+</h3>
          <p className="text-[#666666]">
            Fundraising achieved through strategic partnerships
          </p>
        </div>

        <div className="bg-[#FAFAFA] dark:bg-black p-8 rounded-lg">
          <h3 className="text-6xl text-[#7A7A7A] mb-4">$1M+</h3>
          <p className="text-[#666666]">
            achieved through strategic partnerships
          </p>
        </div>

        <div className="bg-[#FAFAFA] dark:bg-black p-8 rounded-lg">
          <h3 className="text-6xl text-[#7A7A7A] mb-4">5000</h3>
          <p className="text-[#666666]">
            Builers in attendance for hackathons and events
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
