import { Link } from "react-router-dom";
import HeroFourr from "../assets/kidcode.png";
const HeroFour = () => {
    return (
      <div className="bg-[#E7F9E9] px-5 py-12 lg:px-20 lg:py-32 overflow-hidden">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
          <div className="w-[400px] h-[482px] ">
            <img src={HeroFourr} className="w-full " />
          </div>
          <div className="w-full lg:w-[50%]">
            <p className="text-[#10CC6F] text-[1.5rem] font-bold pt-10 lg:pt-0">
              {/* Your Expert from Youtube */}
            </p>
            <h1 className="text-[35px] lg:text-[50px] font-extrabold dark:text-[#0C273D]">Training and mentoring <br className="hidden lg:block" />for everyone</h1>
            <p className="text-[1rem] lg:text-[1.375rem] text-[#222] pt-5">
              we believe in making learning accessible to all. Our training programs are designed for individuals at every level, providing the skills and knowledge needed to grow, succeed, and thrive in any environment.
            </p>
            <div className="pt-10 flex gap-3 ">
              <Link to='/programs' className="bg-[#10CC6F] text-white rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC67] hover:bg-transparent hover:text-[#10CC6F]">All Programs</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroFour;
  