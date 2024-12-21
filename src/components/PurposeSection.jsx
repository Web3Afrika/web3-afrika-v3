const PurposeSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 font-archivo">
      <div className="text-start mb-12">
        <p className="text-sm text-[#9E9E9E] mb-4">
          Mission and Vision Statement
        </p>
        <h2 className="text-4xl text-[#292929] dark:text-[#E5E4E4] mb-4">
          Our Purpose and Vision
        </h2>
        <p className="text-[#757575] dark:text-[#CFCFCF] max-w-2xl">
          Our mission at Web 3 Afrika is to empower African innovators and
          communities through education, opportunities, and inclusivity in the
          Web 3 space. Guided by our vision, we strive to position Africa and
          its diaspora at the forefront of global Web 3 innovation, shaping a
          decentralized future that is diverse, equitable, and transformative.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#FAFAFA] dark:bg-black p-6">
          <h3 className="text-2xl text-[#292929] dark:text-white mb-4">
            Empowerment{" "}
            <span className="bg-[#F7F7F7] text-sm text-[#6C6C6C] p-2 align-super">
              mission
            </span>
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Access to Education
              </h4>
              <p className="text-[#757575]">
                Provides resources and training to help individuals understand
                and excel in Web 3 technologies like blockchain, NFTs, DeFi, and
                DAOs.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Skill Development
              </h4>
              <p className="text-[#757575]">
                Equips participants with technical and entrepreneurial skills
                needed to succeed in the decentralized digital economy
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Career Opportunities
              </h4>
              <p className="text-[#757575]">
                Opens doors to exclusive jobs, internships, and collaborations
                in the Web 3 space, tailored to African talent
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Global Networking
              </h4>
              <p className="text-[#757575]">
                Connects innovators, creators, and entrepreneurs with a
                worldwide network of Web 3 leaders, partners, and investors
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Empowering Communities
              </h4>
              <p className="text-[#757575]">
                Builds inclusive and diverse communities that amplify African
                voices in global Web 3 conversations
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] dark:bg-black p-6">
          <h3 className="text-2xl text-[#292929] dark:text-white mb-4">
            Innovation{" "}
            <span className="bg-[#F7F7F7] text-sm text-[#6C6C6C] p-2 align-super">
              vision
            </span>
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Global Leadership
              </h4>
              <p className="text-[#757575]">
                Envisions Africa and its diaspora leading innovations in Web 3
                technologies on the global stage
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Diversity and Inclusion
              </h4>
              <p className="text-[#757575]">
                Aims to create a decentralized ecosystem where African voices
                and perspectives are central to the conversation
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Technological Advancement
              </h4>
              <p className="text-[#757575]">
                Aspires to drive groundbreaking advancements in blockchain,
                DeFi, NFTs, and other Web 3 sectors
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Community Growth
              </h4>
              <p className="text-[#757575]">
                Seeks to build a thriving network of innovators, creators, and
                leaders who collaborate to shape the future
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#505050] dark:text-[#E5E4E4] mb-2">
                Economic Transformation
              </h4>
              <p className="text-[#757575]">
                Strives to unlock new economic opportunities for African
                communities through participation in the decentralized economy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
