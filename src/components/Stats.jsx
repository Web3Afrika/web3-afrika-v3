import React from "react";

const Stats = () => {
  return (
    <section className="container mx-auto px-6 py-16 font-archivo">
      <div className="text-start mb-12">
        <p className="text-[#666666] max-w-4xl">
          We believe Africa and its diaspora hold the key to shaping the future
          of Web 3. Through hackathons, bounties, and collaborative spaces,
          we're building a vibrant community where individuals of African
          descent can connect, learn, and lead in the decentralized era.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
        <div className="bg-[#FAFAFA] dark:bg-[#121212] p-8 rounded-lg">
          <h3 className="text-6xl text-[#7A7A7A] dark:text-[#CFCFCF] mb-4">
            $1M+
          </h3>
          <p className="text-[#666666] font-medium">
            Fundraising achieved through strategic partnerships
          </p>
        </div>

        <div className="bg-[#FAFAFA] dark:bg-[#121212] p-8 rounded-lg">
          <h3 className="text-6xl text-[#7A7A7A] dark:text-[#CFCFCF] mb-4">
            $1M+
          </h3>
          <p className="text-[#666666] font-medium">
            achieved through strategic partnerships
          </p>
        </div>

        <div className="bg-[#FAFAFA] dark:bg-[#121212] p-8 rounded-lg">
          <h3 className="text-6xl text-[#7A7A7A] dark:text-[#CFCFCF] mb-4">
            5000
          </h3>
          <p className="text-[#666666] font-medium">
            Builers in attendance for hackathons and events
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
