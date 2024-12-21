import Icon from "../assets/icon.png";
import Icon2 from "../assets/icon-2.png";
import HackathonImage from "../assets/hackathon.png";

const Hackathon = () => {
  return (
    <section className="container mx-auto px-6 py-16 font-archivo">
      <p className="text-sm text-[#9E9E9E] mb-4">Top events & Hackatons</p>
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[#09705F]">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h4 className="text-white mb-2">
                  Build with Celo <br /> Hackathon
                </h4>
              </div>
              <div className="flex-shrink-0">
                <img src={Icon} alt="Calendar" className="w-9 h-9" />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#EB9122]">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h4 className="text-white text-2xl mb-2">
                    Scroll <br /> Community <br /> Meetup
                  </h4>
                </div>
                <div className="flex-shrink-0">
                  <img src={Icon2} alt="Trophy" className="w-10 h-10" />
                </div>
              </div>
              <button className="mt-16 bg-white text-[#757575] px-2 py-2 rounded-lg text-sm w-fit">
                Event
              </button>
            </div>
          </div>
        </div>

        <div className="h-full rounded-lg overflow-hidden">
          <img
            src={HackathonImage}
            alt="Event"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between p-6 rounded-lg bg-gray-50 dark:bg-black h-full">
          <div>
            <p className="text-sm text-[#707070] dark:text-[#BDBDBD] mb-4">
              Scroll Community Meetup, here we collaborated with scroll and the
              web 3 community, View below.
            </p>
          </div>
          <button className="bg-[#E4212A] border border-black text-white px-4 py-2 rounded-full text-sm w-fit">
            View Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
