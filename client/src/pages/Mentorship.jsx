import MainHero from '../components/MainHero';
import youtube2 from '../assets/Rectangle-13.svg';
import { Link } from 'react-router-dom';
import VisionMission from '../components/VisionMission';
import MentorWrapper from '../components/MentorWrapper'; // Updated component
import DeskCommunities from '../components/DeskCommunities';

const Mentorship = () => {
  return (
    <div>
      <MainHero>
        <div className="flex flex-col lg:flex-row justify-between dark:text-[#ffffff] text-gray-700 py-5 lg:py-20">
          <div className="py-12">
            <div className="flex gap-3 items-center">
              <p className="text-[#10CC6F] text-[1.2rem] lg:text-[1.5rem] font-bold">Your Expert from Youtube</p>
            </div>
            <h1 className="text-[2.5rem] lg:text-[3.75rem] font-extrabold">
              Inspiring People <br /> for the Future
            </h1>
            <p className="text-[1.375rem]">
              is the fastest growing digital learning platform, <br className="hidden lg:block" /> providing learning
              content for all.
            </p>
            <div className="py-16 flex gap-3">
              <Link
                to="/becomeamentor"
                className="bg-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent text-white"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="py-12">
            <div className="bg-black w-full lg:w-[28.9375rem] h-[20.75rem] rounded-[1.25rem] flex items-center justify-center">
              <img src={youtube2} />
            </div>
          </div>
        </div>
      </MainHero>

      <VisionMission />

      {/* Approved Mentors Section */}
      <MentorWrapper />

      <DeskCommunities />
    </div>
  );
};

export default Mentorship;
