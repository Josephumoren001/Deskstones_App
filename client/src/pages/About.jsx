import MainHero from '../components/MainHero';
import youtube2 from '../assets/deskAbout.png'
import Deckhouse from '../assets/storyimg.png';
import { Link } from 'react-router-dom';
import VisionMission from '../components/VisionMission';

import DeskCommunities from '../components/DeskCommunities';
import Founders from '../components/Founders';



const About = () => {

    return (
      <div>
        <MainHero>
        <div className="flex flex-col lg:flex-row justify-between text-gray-700 dark:text-white py-5 lg:py-20">
        <div className=" py-12 flex-1 ">
          <div className="flex gap-3 items-center">
              <p className="text-[#10CC6F] text-[1.2rem] lg:text-[1.5rem] font-bold">Who we are</p>

          </div>
          <h1 className="text-[2.5rem] lg:text-[3.75rem] font-extrabold ">Deskstones</h1>
          <p className="text-[1.375rem]">
          Deskstones is driven by a passion for selflessness and the belief that knowledge should be accessible to all. <br className="hidden lg:block" /> Inspired by opportunities provided by generous mentors, we empower others through consulting, education, and professional development, while seeking partnerships to expand our impact.
          </p>
          <div className="py-16 flex gap-3">
            <Link to='/programs' className='bg-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent text-white'>
              View Programs
            </Link>
            
          </div>
        </div>
       
        <div className="py-12">
           <div className=" w-full lg:w-[28.9375rem] h-[20.75rem] flex items-center justify-center">
            <img src={youtube2} />
           </div>

        </div>
      </div>
        </MainHero>

   <div className="relative bg-green-500 min-h-screen flex flex-col py-20 px-5 lg:px-20 ">
     
     <div className="flex-grow flex flex-col w-full  text-[#0C273D] dark:text-white">
     <div className="flex flex-col lg:flex-row justify-between text-[#ffffff] py-5 lg:py-20">
        <div className=" py-12">
          <div className="flex gap-3 items-center">
              <p className="text-[#10CC6F] text-[1.2rem] lg:text-[1.5rem] font-bold">About us</p>

          </div>
          <h1 className="text-[2.5rem] lg:text-[3.75rem] font-extrabold dark:text-white  ">Our story</h1>
          <p className="text-[1.375rem]">
          Deskstones was born out of the spirit of selflessness and willingness to create an ecosystem with evenly distributed knowledge.
In Deskstones we believe everyone can be great if given the opportunity we get our inspiration from our co-founders started with nothing but were given an opportunity to learn by selfless individuals in the society.
          </p>
         
        </div>
       
        <div className="py-12">
           <div className=" w-full lg:w-[28.9375rem] h-[20.75rem] rounded-[1.25rem] flex items-center justify-center">
            <img src={Deckhouse} />
           </div>

        </div>
      </div>
     </div>
   </div>


        <VisionMission />
        <Founders />
        <DeskCommunities />
       
      </div>
    );
  };
  
  export default About; 

  