import MainHero from '../components/MainHero';
import { Link } from 'react-router-dom';
import MentorWrapper from '../components/MentorWrapper'; // Updated component
import DeskCommunities from '../components/DeskCommunities';

const Mentorship = () => {
  return (
    <div>
      <MainHero>
        <div className="flex flex-col lg:flex-row justify-between dark:text-[#ffffff] text-gray-700 py-5 lg:py-20">
          <div className="py-12 lg:w-[771px]  ">
            <div className="flex gap-3 items-center">
              <p className="text-[#10CC6F] text-[1.2rem] lg:text-[1.5rem] font-bold">Become a Mentor</p>
            </div>
            <h1 className="text-[2.5rem] lg:text-[3.75rem] font-extrabold mb-5">
            Become a Deskstones  <br /> Mentor
            </h1>
            <p className="text-[1.375rem]">
            Join us in our mission to empower individuals through knowledge and opportunity. As a Deskstones mentor, you can share your expertise, inspire others, and help shape the next generation of leaders. Together, we can create a positive impact and foster a community of growth and learning.
            </p>
            <div className="py-16 flex gap-3">
              <Link
                to="/becomeamentor"
                className="bg-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent text-white"
              >
                Become a mentor
              </Link>
            </div>
          </div>

          <div className="py-6">
            <div className=" w-[400px] h-[482px] lg:w-[28.9375rem] overflow-hidden  rounded-[1.25rem] flex items-center justify-center">
              <img src='https://i.imgur.com/frm2s1G.png' className='w-full'/>
            </div>
          </div>
        </div>
      </MainHero>

      

      {/* Approved Mentors Section */}
      <MentorWrapper />

      <DeskCommunities />
    </div>
  );
};

export default Mentorship;
