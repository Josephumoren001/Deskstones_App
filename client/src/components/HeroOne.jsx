import youtube from "../assets/mdi_youtube.svg";
import youtube2 from "../assets/Rectangle-45.svg";
import ReactPlayer from 'react-player';

const HeroOne = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between text-[#ffffff] py-5 lg:py-20">
        <div className="py-12">
          <div className="flex gap-3 items-center">
            <div>
              <img src={youtube} alt="YouTube Icon" />
            </div>
            <div>
              <p className="text-[#10CC6F] text-[1.2rem] lg:text-[1.5rem] font-bold">Your Expert from Youtube</p>
            </div>
          </div>
          <h1 className="text-[2.5rem] lg:text-[3.75rem] font-extrabold">Inspiring People <br />for the Future</h1>
          <p className="text-[1.375rem]">
            Tomorrow thrives on the choices we make today
          </p>
          <div className="py-16 flex gap-3">
            <button className="bg-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent text-white">All Programs</button>
            <button className="border border-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:bg-[#10CC6F]">See More</button>
          </div>
        </div>

        {/* Right Side (YouTube Video) */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <div className="relative pb-[56.25%]">
            <ReactPlayer
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              url="https://youtu.be/6hY2R17pWHU?si=eWSOfA0dOLSl8sKn"
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
