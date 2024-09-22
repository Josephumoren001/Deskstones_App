import { Link } from 'react-router-dom';
import HeroImg from '../assets/deskAbout.png';


const HeroThree = () => {
  
  return (
    <div className=" px-5 py-12 lg:px-20 lg:py-32">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="">
          <img src={HeroImg}/>
        </div>
        <div className="w-full lg:w-[50%]">
          {/* <p className="text-[#10CC6F] text-[1.5rem] font-bold pt-10">
            Your Expert from Youtube
          </p> */}
          <h1 className="text-[35px] lg:text-[50px] font-extrabold mt-10">Tech <br className="lg:block" />for everyone</h1>
          <p className="text-[1rem] lg:text-[1.375rem] pt-5">
          We are dedicated to making technology accessible to all. Our programs cover a wide range of fields, including business analysis, data science, RPA, automation, web development, coding and general software literacy. We empower individuals to thrive in a tech-driven world.
          </p>
          <div className="py-10 flex gap-3 ">
            <Link to='about' className="bg-[#10CC6F] text-white rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:text-[#00CC6F] hover:border border-[#10CC6F] hover:bg-transparent ">Learn More</Link>
            {/* <Link className="border text-[#00CC6F] border-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:bg-[#10CC6F] hover:text-white">See More</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
